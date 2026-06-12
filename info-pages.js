/* ════════════════════════════════════════════════════════════════
   PÁGINAS INSTITUCIONAIS — Floricultura Margarida
   Conteúdo institucional e políticas (LGPD / CDC), abertas em modal
   pelo rodapé. Dados cadastrais reais da empresa.
   ════════════════════════════════════════════════════════════════ */

// Dados cadastrais (centralizados para manter tudo consistente)
const EMPRESA = {
  fantasia: 'Floricultura Margarida',
  razao: 'Regiane Nogs Consultoria e Investimentos LTDA',
  cnpj: '65.562.893/0001-04',
  endereco: 'Rua Sebastião Rodrigues de Souza, 350 — Loteamento Residencial Três Reis, Apucarana/PR — CEP 86806-670',
  telefone: '(43) 3015-4154',
  email: 'contato@jasminflores.site',
  site: 'jasminflores.site',
  horario: 'Segunda a sexta, das 08h às 20h · Sábados, domingos e feriados, das 08h às 18h'
};

const INFO_PAGES = {
  quemsomos: {
    title: 'Quem Somos',
    html: `
      <p>A <b>Floricultura Margarida</b> é uma plataforma que <b>conecta você às melhores floriculturas e fornecedores parceiros de cada região do Brasil</b>. Funcionamos como uma ponte entre o cliente e uma rede selecionada de parceiros locais, garantindo agilidade na entrega e qualidade nos produtos em diversas cidades.</p>
      <h4>Como funciona</h4>
      <p>Quando você faz um pedido, ele é direcionado a um <b>parceiro local da sua região</b>, que prepara e realiza a entrega. Esse modelo permite flores mais frescas, entregas mais rápidas e atendimento próximo de você.</p>
      <h4>Nossos valores</h4>
      <p>
        🌷 <b>Qualidade:</b> parceiros selecionados e produtos frescos.<br>
        💝 <b>Cuidado:</b> cada pedido tratado com atenção, do carrinho à entrega.<br>
        🚚 <b>Agilidade:</b> rede regional para entregas rápidas.<br>
        🤝 <b>Transparência:</b> políticas claras e atendimento humano.
      </p>
      <h4>Dados da empresa</h4>
      <p>
        <b>${EMPRESA.fantasia}</b> (nome fantasia)<br>
        Responsável: ${EMPRESA.razao}<br>
        CNPJ: ${EMPRESA.cnpj}<br>
        Endereço administrativo: ${EMPRESA.endereco}<br>
        Contato: ${EMPRESA.telefone} · ${EMPRESA.email}
      </p>`
  },

  contato: {
    title: 'Fale Conosco',
    html: `
      <p>Estamos à disposição para ajudar você antes, durante e depois do seu pedido. Fale com a nossa equipe pelos canais abaixo:</p>
      <h4>Canais de atendimento</h4>
      <p>
        📞 <b>Telefone:</b> ${EMPRESA.telefone}<br>
        📧 <b>E-mail:</b> ${EMPRESA.email}<br>
        🌐 <b>Site:</b> ${EMPRESA.site}
      </p>
      <h4>Horário de atendimento</h4>
      <p>${EMPRESA.horario}</p>
      <h4>Dados da empresa</h4>
      <p>
        <b>${EMPRESA.fantasia}</b><br>
        Responsável: ${EMPRESA.razao}<br>
        CNPJ: ${EMPRESA.cnpj}<br>
        Endereço: ${EMPRESA.endereco}
      </p>
      <p style="color:#777;margin-top:12px">Para dúvidas, pedidos, trocas ou reclamações, informe o número do seu pedido para um atendimento mais rápido.</p>`
  },

  termos: {
    title: 'Termos de Uso',
    html: `
      <p>Bem-vindo(a) à <b>Floricultura Margarida</b> (${EMPRESA.site}), plataforma operada por <b>${EMPRESA.razao}</b>, CNPJ ${EMPRESA.cnpj}. Ao acessar e utilizar nosso site, você concorda com os termos abaixo. Recomendamos a leitura atenta antes de finalizar qualquer pedido.</p>
      <h4>1. Sobre o serviço</h4>
      <p>A Floricultura Margarida atua conectando clientes a uma rede de <b>floriculturas e fornecedores parceiros</b> em diversas regiões. O preparo e a entrega dos pedidos são realizados por parceiros locais, sob coordenação da plataforma.</p>
      <h4>2. Pedidos e informações</h4>
      <p>As informações fornecidas no momento da compra (nome, contato, endereço e dados do destinatário) devem ser verdadeiras e completas. Não nos responsabilizamos por entregas frustradas em razão de dados incorretos ou ausência do destinatário.</p>
      <h4>3. Produtos e disponibilidade</h4>
      <p>Trabalhamos com flores naturais. Pequenas variações de tonalidade, folhagem ou recipiente podem ocorrer conforme a disponibilidade sazonal e o parceiro responsável, preservando sempre o padrão, o valor e a beleza do arranjo.</p>
      <h4>4. Preços e pagamento</h4>
      <p>Os preços exibidos são válidos para o momento da compra. Adicionais selecionados (cartão, embalagem, chocolates, etc.) são somados ao valor final antes da confirmação. Os pagamentos são processados por gateways seguros; não armazenamos dados de cartão em nosso site.</p>
      <h4>5. Entregas</h4>
      <p>Os prazos são estimados conforme a região, o horário do pedido e o parceiro responsável. Em datas comemorativas, os prazos podem variar e serão comunicados ao cliente.</p>
      <h4>6. Foro</h4>
      <p>Estes termos são regidos pela legislação brasileira, em especial o Código de Defesa do Consumidor (Lei nº 8.078/1990).</p>
      <p style="color:#777;margin-top:12px">Última atualização: junho de 2026.</p>`
  },

  privacidade: {
    title: 'Política de Privacidade',
    html: `
      <p>A <b>Floricultura Margarida</b> respeita a sua privacidade e protege os seus dados pessoais, em conformidade com a <b>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</b>.</p>
      <h4>1. Controlador dos dados</h4>
      <p>${EMPRESA.razao} — CNPJ ${EMPRESA.cnpj}, com endereço em ${EMPRESA.endereco}. Contato para assuntos de privacidade: ${EMPRESA.email}.</p>
      <h4>2. Dados coletados</h4>
      <p>Coletamos apenas os dados necessários para processar e entregar o seu pedido: nome, e-mail, telefone, endereço e dados do destinatário. Dados de pagamento são tratados diretamente pelo provedor de pagamento, não ficando armazenados em nosso site.</p>
      <h4>3. Uso das informações</h4>
      <p>Utilizamos seus dados exclusivamente para: processar pedidos, viabilizar a entrega por meio dos parceiros, prestar atendimento e enviar comunicações que você autorizar.</p>
      <h4>4. Compartilhamento</h4>
      <p>Não vendemos seus dados. Compartilhamos informações apenas com os <b>parceiros responsáveis pela entrega</b> e com provedores de pagamento e logística, na medida estritamente necessária para concluir o seu pedido.</p>
      <h4>5. Seus direitos</h4>
      <p>Você pode solicitar, a qualquer momento, o acesso, a correção ou a exclusão dos seus dados, bem como a revogação de consentimento, pelo e-mail ${EMPRESA.email}.</p>
      <h4>6. Segurança</h4>
      <p>Adotamos medidas técnicas e organizacionais para proteger seus dados. A navegação ocorre em ambiente seguro (HTTPS).</p>
      <p style="color:#777;margin-top:12px">Última atualização: junho de 2026.</p>`
  },

  cookies: {
    title: 'Política de Cookies',
    html: `
      <p>Utilizamos cookies para oferecer a melhor experiência possível durante a sua navegação.</p>
      <h4>O que são cookies?</h4>
      <p>São pequenos arquivos armazenados no seu dispositivo que ajudam o site a funcionar corretamente e a lembrar suas preferências.</p>
      <h4>Como utilizamos</h4>
      <p>
        🔧 <b>Essenciais:</b> mantêm o carrinho e o funcionamento do site.<br>
        📊 <b>Desempenho:</b> ajudam a entender, de forma anônima, como o site é usado.<br>
        🎯 <b>Personalização:</b> lembram preferências e melhoram recomendações.
      </p>
      <h4>Gerenciamento</h4>
      <p>Você pode aceitar ou recusar os cookies não essenciais a qualquer momento pelas configurações do seu navegador. Ao continuar navegando, você concorda com o uso conforme esta política.</p>
      <p style="color:#777;margin-top:12px">Última atualização: junho de 2026.</p>`
  },

  devolucoes: {
    title: 'Trocas, Devoluções e Reembolsos',
    html: `
      <p>Sua satisfação é a nossa prioridade. Por se tratar de produtos perecíveis (flores naturais e alimentos), seguimos uma política específica, em conformidade com o <b>Código de Defesa do Consumidor</b>.</p>
      <h4>1. Problemas na entrega</h4>
      <p>Caso o produto chegue danificado ou em desacordo com o pedido, entre em contato com nosso atendimento em até <b>24 horas</b> após o recebimento, com fotos do item. Faremos a <b>troca ou o reenvio sem custo</b>.</p>
      <h4>2. Direito de arrependimento</h4>
      <p>Para compras não personalizadas, o cancelamento pode ser solicitado antes do início da preparação do pedido. Após a produção/saída para entrega, por se tratar de item perecível, o cancelamento pode não ser possível.</p>
      <h4>3. Reembolsos</h4>
      <p>Aprovado o reembolso, o estorno é processado em até <b>7 dias úteis</b>, pelo mesmo meio de pagamento utilizado na compra. Pagamentos via PIX são estornados na conta de origem.</p>
      <h4>4. Como solicitar</h4>
      <p>Fale com nosso atendimento pelo telefone ${EMPRESA.telefone} ou e-mail ${EMPRESA.email}, informando o número do pedido.</p>`
  },

  entrega: {
    title: 'Política de Entrega',
    html: `
      <p>As entregas da <b>Floricultura Margarida</b> são realizadas por <b>parceiros locais</b> da região de destino, o que permite mais agilidade e frescor.</p>
      <h4>Prazos</h4>
      <p>Os prazos variam conforme a região, o horário do pedido e a disponibilidade do parceiro. As opções e estimativas são exibidas no momento do checkout (ex.: entrega no mesmo dia, entrega rápida ou agendamento).</p>
      <h4>Endereço e destinatário</h4>
      <p>É essencial informar o endereço completo e um contato do destinatário. Em caso de ausência, o parceiro poderá tentar novo contato; entregas frustradas por dados incorretos podem gerar custo de reenvio.</p>
      <h4>Datas comemorativas</h4>
      <p>Em datas de alta demanda (Dia dos Namorados, Dia das Mães, etc.), recomendamos antecipar o pedido. Os prazos podem variar e serão informados.</p>
      <h4>Acompanhamento</h4>
      <p>Para acompanhar seu pedido, fale com a gente pelo telefone ${EMPRESA.telefone} informando o número do pedido.</p>`
  },

  sac: {
    title: 'Central de Atendimento (SAC)',
    html: `
      <p>Precisa de ajuda? Nossa equipe está pronta para atender você em todas as etapas do pedido.</p>
      <h4>Canais</h4>
      <p>
        📞 <b>Telefone:</b> ${EMPRESA.telefone}<br>
        📧 <b>E-mail:</b> ${EMPRESA.email}
      </p>
      <h4>Horário de atendimento</h4>
      <p>${EMPRESA.horario}</p>
      <h4>Acompanhamento de pedido</h4>
      <p>Informe o número do seu pedido em qualquer um dos canais acima e daremos todo o suporte, incluindo confirmação de entrega.</p>
      <p style="color:#777;margin-top:12px">${EMPRESA.fantasia} · CNPJ ${EMPRESA.cnpj}</p>`
  },

  corporativo: {
    title: 'Floricultura Margarida Corporativo',
    html: `
      <p>Leve a beleza e o cuidado da Floricultura Margarida para a sua empresa. Conectamos sua empresa a parceiros para soluções corporativas.</p>
      <h4>Soluções para empresas</h4>
      <p>
        🏢 <b>Recepções e ambientes:</b> arranjos e manutenção periódica.<br>
        🎉 <b>Eventos:</b> decoração floral para confraternizações e lançamentos.<br>
        🎁 <b>Presentear clientes e colaboradores:</b> datas comemorativas e conquistas.<br>
        📦 <b>Pedidos em volume:</b> condições especiais.
      </p>
      <h4>Fale com o comercial</h4>
      <p>
        📧 ${EMPRESA.email}<br>
        📞 ${EMPRESA.telefone}
      </p>`
  }
};

window.openInfoModal = function(key) {
  const data = INFO_PAGES[key];
  if (!data) return;
  const old = document.getElementById('infoModal');
  if (old) old.remove();
  const ov = document.createElement('div');
  ov.id = 'infoModal';
  ov.className = 'info-modal-overlay';
  ov.innerHTML = `
    <div class="info-modal">
      <div class="info-modal-head">
        <h2>${data.title}</h2>
        <button class="info-modal-close" onclick="closeInfoModal()" aria-label="Fechar">&times;</button>
      </div>
      <div class="info-modal-body">${data.html}</div>
    </div>`;
  ov.addEventListener('click', (e) => { if (e.target === ov) closeInfoModal(); });
  document.body.appendChild(ov);
  document.body.style.overflow = 'hidden';
};
window.closeInfoModal = function() {
  const m = document.getElementById('infoModal');
  if (m) m.remove();
  document.body.style.overflow = '';
};

// Estilo do modal (injetado para manter o arquivo autossuficiente)
(function injectInfoStyles() {
  const s = document.createElement('style');
  s.textContent = `
.info-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000;display:flex;align-items:flex-end;justify-content:center;animation:infoFade .2s ease}
@keyframes infoFade{from{opacity:0}to{opacity:1}}
.info-modal{background:#fff;width:100%;max-width:560px;max-height:88vh;border-radius:20px 20px 0 0;display:flex;flex-direction:column;animation:infoUp .28s cubic-bezier(.22,1,.36,1);font-family:'DM Sans',sans-serif}
@keyframes infoUp{from{transform:translateY(40px);opacity:.6}to{transform:translateY(0);opacity:1}}
.info-modal-head{display:flex;align-items:center;justify-content:space-between;padding:18px 20px 14px;border-bottom:1px solid #f0f0f0;position:sticky;top:0;background:#fff;border-radius:20px 20px 0 0}
.info-modal-head h2{margin:0;font-size:18px;font-weight:800;color:#ffc400;font-family:'Plus Jakarta Sans','DM Sans',sans-serif}
.info-modal-close{background:#f4f4f6;border:none;width:34px;height:34px;border-radius:50%;font-size:22px;line-height:1;color:#555;cursor:pointer;flex-shrink:0}
.info-modal-close:hover{background:#e9e9ee}
.info-modal-body{padding:18px 20px 28px;overflow-y:auto;color:#333;font-size:14px;line-height:1.65}
.info-modal-body h4{margin:18px 0 6px;font-size:14.5px;color:#1a1a2e;font-weight:800}
.info-modal-body p{margin:0 0 10px}
.info-modal-body b{color:#1a1a2e}`;
  document.head.appendChild(s);
})();
