/* ════════════════════════════════════════════════════════════════
   Botão "Voltar" do celular (e do navegador):
   Em vez de sair do site, ele FECHA a camada aberta (modal, carrinho,
   checkout, menu, busca ou página interna) — voltando UMA ação por vez.
   Só sai do site quando não há mais nada aberto.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (window.__mfBackInit) return;
  window.__mfBackInit = true;

  function restoreScrollIfClean() {
    var aberto =
      document.getElementById('infoModal') ||
      document.getElementById('cardUnavailModal') ||
      document.querySelector('.modal-overlay') ||
      document.getElementById('checkoutScreen') ||
      (document.getElementById('cidadesModal') &&
        !document.getElementById('cidadesModal').classList.contains('hidden'));
    if (!aberto) document.body.style.overflow = '';
  }

  // Fecha a camada mais "no topo". Retorna true se fechou algo.
  function mfGoBack() {
    // 1) Modal institucional (Termos, Privacidade, Fale Conosco, etc.)
    if (document.getElementById('infoModal')) {
      if (window.closeInfoModal) window.closeInfoModal();
      return true;
    }
    // 2) Modal "Cartão indisponível"
    var cu = document.getElementById('cardUnavailModal');
    if (cu) { cu.remove(); restoreScrollIfClean(); return true; }
    // 3) Bottom-sheets / modais (produto, carrinho, cartinha, premium, upsell...)
    var overlays = document.querySelectorAll('.modal-overlay');
    if (overlays.length) {
      var top = overlays[overlays.length - 1];
      if (top.id && window.closeOverlay) window.closeOverlay(top.id);
      else { top.remove(); restoreScrollIfClean(); }
      return true;
    }
    // 4) Checkout (volta a etapa, ou fecha)
    if (document.getElementById('checkoutScreen')) {
      if (window.checkoutBack) window.checkoutBack();
      return true;
    }
    // 5) Modal "Cidades atendidas"
    var cid = document.getElementById('cidadesModal');
    if (cid && !cid.classList.contains('hidden')) {
      cid.classList.add('hidden');
      restoreScrollIfClean();
      return true;
    }
    // 6) Menu lateral
    var menu = document.getElementById('sideMenu');
    if (menu && menu.classList.contains('open')) {
      menu.classList.remove('open');
      var ov = document.getElementById('overlay');
      if (ov) ov.classList.remove('open');
      restoreScrollIfClean();
      return true;
    }
    // 7) Barra de busca
    var sb = document.getElementById('searchBar');
    if (sb && !sb.classList.contains('hidden')) {
      sb.classList.add('hidden');
      return true;
    }
    // 8) Páginas internas (detalhe / categoria) -> volta para a Home
    var detail = document.getElementById('detailPage');
    var cat = document.getElementById('categoryPage');
    if ((detail && detail.classList.contains('active')) ||
        (cat && cat.classList.contains('active'))) {
      if (window.showPage) window.showPage('homePage');
      window.scrollTo(0, 0);
      return true;
    }
    return false;
  }

  function arm() {
    try { history.pushState({ mfBack: 1 }, ''); } catch (e) {}
  }

  // Coloca um "amortecedor" no histórico para interceptar o 1º Voltar
  arm();

  window.addEventListener('popstate', function () {
    var tratou = mfGoBack();
    if (tratou) {
      // Re-arma: enquanto houver camadas abertas, cada Voltar fecha uma.
      arm();
    }
    // Se não tratou nada, deixa o Voltar seguir normalmente (usuário sai do site).
  });

  // Expõe para uso manual, se necessário.
  window.mfGoBack = mfGoBack;
})();
