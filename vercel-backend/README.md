# 🔐 Backend PIX na Vercel — Floricultura Jamin

A chave secreta fica **só nas Environment Variables da Vercel** (cofre do painel),
nunca no site. Fluxo: `Navegador → /api/pix (Vercel) → MasterPag`.

---

## Passo a passo (≈5 min)

### 1. Instale a Vercel CLI
No terminal (precisa do Node instalado):
```
npm i -g vercel
```

### 2. Faça o deploy
Entre nesta pasta e rode:
```
cd vercel-backend
vercel
```
- Faça login (abre o navegador).
- Aceite as perguntas com Enter (nome do projeto, etc.).
- No fim ele te dá uma URL tipo `https://jasmin-pix.vercel.app`.

### 3. Configure as chaves (Environment Variables)
No painel da Vercel: **seu projeto → Settings → Environment Variables** e adicione:

| Name | Value |
|---|---|
| `MASTERPAG_PUBLIC_KEY` | **(cole a chave PÚBLICA `pk_live_...` da SUA conta MasterPag — CNPJ 65.562.893/0001-04)** |
| `MASTERPAG_SECRET_KEY` | **(cole aqui sua chave secreta `sk_live_...`)** |
| `MASTERPAG_API_URL` | `https://api.masterpag.com/functions/v1` |
| `ALLOWED_ORIGIN` | `*` (ou o domínio do seu site) |

> A chave **secreta** você digita direto no painel da Vercel — é o cofre seguro dela.

### 4. Publique de novo (pra aplicar as variáveis)
```
vercel --prod
```
Anote a URL final de produção (ex.: `https://jasmin-pix.vercel.app`).

### 5. Ligue o site ao backend
No arquivo **`payment-config.js`** do site, troque o `endpoint`:
```js
window.JASMIN_PIX = {
  endpoint: "https://jasmin-pix.vercel.app/api/pix",
  whatsappNumber: "5511999999999"
};
```

Pronto! Finalize um pedido no site (com **CPF válido**) que o **PIX real** aparece.

---

## Testar direto (sem o site)
```
curl -X POST https://SEU-PROJETO.vercel.app/api/pix \
  -H "Content-Type: application/json" \
  -d "{\"amount\":25.50,\"customer\":{\"name\":\"Teste\",\"email\":\"teste@email.com\",\"phone\":\"11999999999\",\"cpf\":\"SEU_CPF_VALIDO\"},\"items\":[{\"title\":\"Teste\",\"unitPrice\":25.50,\"quantity\":1}]}"
```
Deve voltar `pix.qrCode` e `pix.qrCodeUrl`.

## Rotas
| Método | Caminho | Função |
|---|---|---|
| POST | `/api/pix` | Cria a cobrança (QR + copia-e-cola) |
| GET | `/api/pix?transaction_id=ID` | Consulta status (pending/paid/...) |

> Regras da doc MasterPag: valores em **REAIS**, **CPF válido**, limite **R$ 15.000**, PIX expira em **30 min**.
