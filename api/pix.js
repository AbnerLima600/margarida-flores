/**
 * Floricultura Margarida — Função serverless de PIX (MasterPag) — roda na VERCEL
 * junto com o site. Rota pública: https://SEU-DOMINIO/api/pix
 *
 *   POST /api/pix                       -> cria a cobrança (QR + copia-e-cola)
 *   GET  /api/pix?transaction_id=XXXX   -> consulta status (polling)
 *
 * A CHAVE SECRETA fica nas Environment Variables da Vercel (Settings ->
 * Environment Variables), NUNCA neste arquivo nem no site.
 *
 * Variáveis na Vercel (Project Settings -> Environment Variables):
 *   MASTERPAG_PUBLIC_KEY   = pk_live_...
 *   MASTERPAG_SECRET_KEY   = sk_live_...
 *   MASTERPAG_API_URL      = https://api.masterpag.com/functions/v1   (opcional)
 *   ALLOWED_ORIGIN         = *  (ou o domínio do site)
 *   POSTBACK_URL           = (opcional) URL de webhook
 */

const onlyDigits = (s) => String(s || "").replace(/\D+/g, "");

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN || "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(204).end();

  const API_URL = process.env.MASTERPAG_API_URL || "https://api.masterpag.com/functions/v1";
  const PUBLIC_KEY = process.env.MASTERPAG_PUBLIC_KEY;
  const SECRET_KEY = process.env.MASTERPAG_SECRET_KEY;

  if (!PUBLIC_KEY || !SECRET_KEY) {
    return res.status(500).json({
      error: { message: "Chaves não configuradas nas Environment Variables da Vercel (MASTERPAG_PUBLIC_KEY / MASTERPAG_SECRET_KEY)." },
    });
  }

  const auth = {
    "x-public-key": PUBLIC_KEY,
    "x-secret-key": SECRET_KEY,
    "Content-Type": "application/json",
  };

  try {
    if (req.method === "GET") {
      const id = req.query.transaction_id;
      if (!id) return res.status(400).json({ error: { message: "transaction_id ausente." } });
      const r = await fetch(`${API_URL}/pix-receive?transaction_id=${encodeURIComponent(id)}`, { headers: auth });
      const data = await r.json().catch(() => ({}));
      return res.status(r.status).json(data);
    }

    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
      const c = body.customer || {};
      const items = Array.isArray(body.items) && body.items.length
        ? body.items
        : [{ title: "Pedido Floricultura Margarida", unitPrice: Number(body.amount) || 0, quantity: 1 }];

      const amount = items.reduce((s, it) => s + (Number(it.unitPrice) || 0) * (Number(it.quantity) || 1), 0);

      const payload = {
        amount: Number(amount.toFixed(2)),
        paymentMethod: "pix",
        customer: {
          name: c.name || "Cliente Floricultura Margarida",
          email: c.email || "contato@margaridaflores.com",
          phone: onlyDigits(c.phone),
          document: { number: onlyDigits(c.cpf || (c.document && c.document.number)), type: "cpf" },
        },
        items: items.map((it) => ({
          title: String(it.title || "Produto"),
          unitPrice: Number(it.unitPrice) || 0,
          quantity: Number(it.quantity) || 1,
          tangible: true,
        })),
      };
      if (process.env.POSTBACK_URL) payload.postbackUrl = process.env.POSTBACK_URL;

      const r = await fetch(`${API_URL}/pix-receive`, {
        method: "POST",
        headers: auth,
        body: JSON.stringify(payload),
      });
      const data = await r.json().catch(() => ({}));
      return res.status(r.status).json(data);
    }

    return res.status(405).json({ error: { message: "Método não suportado." } });
  } catch (e) {
    return res.status(502).json({ error: { message: "Falha ao falar com a MasterPag.", detail: String(e) } });
  }
};
