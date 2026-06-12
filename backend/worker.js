/**
 * Floricultura Margarida — Backend PIX (MasterPag) — Cloudflare Worker
 * Versão para PRODUÇÃO (grátis, arquivo único). Para publicar:
 *   1) Cole este código num Worker em workers.cloudflare.com
 *   2) Em Settings -> Variables, defina:
 *        MASTERPAG_PUBLIC_KEY (Text), MASTERPAG_SECRET_KEY (Secret),
 *        MASTERPAG_API_URL, ALLOWED_ORIGIN, POSTBACK_URL (opcional)
 *   3) Em payment-config.js do site, aponte endpoint para a URL do Worker + "/pix".
 *
 * A chave secreta fica nas Variables do Worker — NUNCA no site.
 */
const DEFAULT_API_URL = "https://api.masterpag.com/functions/v1";
const onlyDigits = (s) => String(s || "").replace(/\D+/g, "");

function cors(o) {
  return {
    "Access-Control-Allow-Origin": o || "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}
function json(d, s, o) {
  return new Response(JSON.stringify(d), { status: s || 200, headers: { "Content-Type": "application/json", ...cors(o) } });
}

export default {
  async fetch(request, env) {
    const origin = env.ALLOWED_ORIGIN || "*";
    const apiUrl = env.MASTERPAG_API_URL || DEFAULT_API_URL;
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origin) });
    if (!env.MASTERPAG_PUBLIC_KEY || !env.MASTERPAG_SECRET_KEY)
      return json({ error: { message: "Chaves não configuradas no Worker." } }, 500, origin);

    const auth = {
      "x-public-key": env.MASTERPAG_PUBLIC_KEY,
      "x-secret-key": env.MASTERPAG_SECRET_KEY,
      "Content-Type": "application/json",
    };
    const url = new URL(request.url);

    if (request.method === "GET") {
      const id = url.searchParams.get("transaction_id");
      if (!id) return json({ error: { message: "transaction_id ausente." } }, 400, origin);
      const r = await fetch(`${apiUrl}/pix-receive?transaction_id=${encodeURIComponent(id)}`, { headers: auth });
      return json(await r.json().catch(() => ({})), r.status, origin);
    }

    if (request.method === "POST") {
      let body;
      try { body = await request.json(); } catch { return json({ error: { message: "JSON inválido." } }, 400, origin); }
      const c = body.customer || {};
      const items = Array.isArray(body.items) && body.items.length ? body.items
        : [{ title: "Pedido Floricultura Margarida", unitPrice: Number(body.amount) || 0, quantity: 1 }];
      const amount = items.reduce((s, it) => s + (Number(it.unitPrice) || 0) * (Number(it.quantity) || 1), 0);
      const payload = {
        amount: Number(amount.toFixed(2)),
        paymentMethod: "pix",
        customer: {
          name: c.name || "Cliente Floricultura Margarida",
          email: c.email || "contato@jasminflores.site",
          phone: onlyDigits(c.phone),
          document: { number: onlyDigits(c.cpf || (c.document && c.document.number)), type: "cpf" },
        },
        items: items.map((it) => ({ title: String(it.title || "Produto"), unitPrice: Number(it.unitPrice) || 0, quantity: Number(it.quantity) || 1, tangible: true })),
      };
      if (env.POSTBACK_URL) payload.postbackUrl = env.POSTBACK_URL;
      const r = await fetch(`${apiUrl}/pix-receive`, { method: "POST", headers: auth, body: JSON.stringify(payload) });
      return json(await r.json().catch(() => ({})), r.status, origin);
    }
    return json({ error: { message: "Método não suportado." } }, 405, origin);
  },
};
