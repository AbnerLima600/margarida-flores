/**
 * Floricultura Margarida — Backend seguro de pagamento PIX (MasterPag)
 * ----------------------------------------------------------------
 * Node.js puro (sem dependências). Guarda a CHAVE SECRETA (fora do site)
 * e repassa as cobranças para a MasterPag, como manda a documentação
 * (Frontend -> Backend -> MasterPag).
 *
 * COMO RODAR:
 *   1) Configure a chave secreta no .env (use configurar-chave.bat).
 *   2) node server.js   (sobe em http://localhost:3000)
 *
 * As chaves são lidas do .env A CADA REQUISIÇÃO — então ao trocar a chave
 * com o servidor ligado, a próxima cobrança já usa a chave nova.
 *
 * ROTAS:
 *   POST /pix                       -> cria a cobrança (QR Code + copia-e-cola)
 *   GET  /pix?transaction_id=XXXX   -> consulta status (pending/paid/...)
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const onlyDigits = (s) => String(s || "").replace(/\D+/g, "");
const PLACEHOLDER = "COLE_SUA_CHAVE_SECRETA_AQUI";

function loadEnv() {
  const env = {};
  try {
    const envPath = path.join(__dirname, ".env");
    if (fs.existsSync(envPath)) {
      for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
        const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
        if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
      }
    }
  } catch (_) {}
  return {
    PUBLIC_KEY: process.env.MASTERPAG_PUBLIC_KEY || env.MASTERPAG_PUBLIC_KEY || "",
    SECRET_KEY: process.env.MASTERPAG_SECRET_KEY || env.MASTERPAG_SECRET_KEY || "",
    API_URL: process.env.MASTERPAG_API_URL || env.MASTERPAG_API_URL || "https://api.masterpag.com/functions/v1",
    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || env.ALLOWED_ORIGIN || "*",
    POSTBACK_URL: process.env.POSTBACK_URL || env.POSTBACK_URL || "",
  };
}

function setCors(res, origin) {
  res.setHeader("Access-Control-Allow-Origin", origin || "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}
function sendJson(res, status, data, origin) {
  setCors(res, origin);
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  const cfg = loadEnv();

  if (req.method === "OPTIONS") {
    setCors(res, cfg.ALLOWED_ORIGIN);
    res.writeHead(204);
    return res.end();
  }

  if (!cfg.PUBLIC_KEY || !cfg.SECRET_KEY || cfg.SECRET_KEY === PLACEHOLDER) {
    return sendJson(res, 500, {
      error: { message: "Chave secreta ainda não configurada. Rode backend/configurar-chave.bat." },
    }, cfg.ALLOWED_ORIGIN);
  }

  const authHeaders = {
    "x-public-key": cfg.PUBLIC_KEY,
    "x-secret-key": cfg.SECRET_KEY,
    "Content-Type": "application/json",
  };

  const u = new URL(req.url, `http://localhost:${PORT}`);

  // ----- CONSULTAR STATUS (polling) -----
  if (req.method === "GET" && u.pathname === "/pix") {
    const txId = u.searchParams.get("transaction_id");
    if (!txId) return sendJson(res, 400, { error: { message: "transaction_id ausente." } }, cfg.ALLOWED_ORIGIN);
    try {
      const r = await fetch(`${cfg.API_URL}/pix-receive?transaction_id=${encodeURIComponent(txId)}`, {
        method: "GET",
        headers: authHeaders,
      });
      const data = await r.json().catch(() => ({}));
      return sendJson(res, r.status, data, cfg.ALLOWED_ORIGIN);
    } catch (e) {
      return sendJson(res, 502, { error: { message: "Falha ao consultar status.", detail: String(e) } }, cfg.ALLOWED_ORIGIN);
    }
  }

  // ----- CRIAR COBRANÇA PIX -----
  if (req.method === "POST" && u.pathname === "/pix") {
    let raw = "";
    req.on("data", (c) => (raw += c));
    req.on("end", async () => {
      let body;
      try {
        body = JSON.parse(raw || "{}");
      } catch {
        return sendJson(res, 400, { error: { message: "JSON inválido." } }, cfg.ALLOWED_ORIGIN);
      }
      const customer = body.customer || {};
      const items =
        Array.isArray(body.items) && body.items.length
          ? body.items
          : [{ title: "Pedido Floricultura Margarida", unitPrice: Number(body.amount) || 0, quantity: 1 }];

      // Valor em REAIS (doc pág.2): 100.00 = R$ 100,00
      const amount = items.reduce(
        (s, it) => s + (Number(it.unitPrice) || 0) * (Number(it.quantity) || 1),
        0
      );

      const payload = {
        amount: Number(amount.toFixed(2)),
        paymentMethod: "pix",
        customer: {
          name: customer.name || "Cliente Floricultura Margarida",
          email: customer.email || "contato@margaridaflores.com",
          phone: onlyDigits(customer.phone),
          document: { number: onlyDigits(customer.cpf || (customer.document && customer.document.number)), type: "cpf" },
        },
        items: items.map((it) => ({
          title: String(it.title || "Produto"),
          unitPrice: Number(it.unitPrice) || 0,
          quantity: Number(it.quantity) || 1,
          tangible: true,
        })),
      };
      if (cfg.POSTBACK_URL) payload.postbackUrl = cfg.POSTBACK_URL;

      try {
        const r = await fetch(`${cfg.API_URL}/pix-receive`, {
          method: "POST",
          headers: authHeaders,
          body: JSON.stringify(payload),
        });
        const data = await r.json().catch(() => ({}));
        return sendJson(res, r.status, data, cfg.ALLOWED_ORIGIN);
      } catch (e) {
        return sendJson(res, 502, { error: { message: "Falha ao criar cobrança PIX.", detail: String(e) } }, cfg.ALLOWED_ORIGIN);
      }
    });
    return;
  }

  sendJson(res, 404, { error: { message: "Rota não encontrada. Use POST /pix ou GET /pix?transaction_id=" } }, cfg.ALLOWED_ORIGIN);
});

server.listen(PORT, () => {
  console.log(`Backend PIX Margarida rodando em http://localhost:${PORT}`);
});
