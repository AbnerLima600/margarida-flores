// ═══════════════════════════════════════════════════════
//  CATEGORIAS — ícone fixo com imagem real
// ═══════════════════════════════════════════════════════
const CATEGORIES = [
  { id: 31, name: 'Dia dos Namorados',  icon: 'https://acdn-us.mitiendanube.com/stores/004/276/178/products/5d3c44fbfb1c9c5ac8c55fcd7f888531-9426f2d14078d9901417158172919746-640-0.webp' },
  { id: 27, name: 'Flores + Chocolate', icon: 'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-49-2.jpg' },
  { id: 25, name: 'Buquês de Rosas',    icon: 'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-8-2.jpg' },
  { id: 23, name: 'Kits Especiais',     icon: 'https://static.giulianaflores.com.br/images/product/29155gg.jpg?ims=300x300' },
  { id: 22, name: 'Cestas Românticas',  icon: 'https://static.giulianaflores.com.br/images/product/23290gg.jpg?ims=300x300' },
  { id: 32, name: 'Ursinho',            icon: 'https://www.canecacuritiba.com.br/image/cache/catalog/Kit%20presente/kit-presente-personalizado-caneca-chocolate-300x300.webp' },
  { id: 19, name: 'Café da Manhã',      icon: 'https://static.giulianaflores.com.br/images/product/25145gg.jpg?ims=300x300' },
  { id: 21, name: 'Buquê + Presente',   icon: 'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-99-2.jpg' },
  { id: 26, name: 'Arranjos em Vaso',   icon: 'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-58-3.jpg' },
  { id: 24, name: 'Para Homens',        icon: 'https://static.giulianaflores.com.br/images/product/60791gg.jpg?ims=300x300' },
  { id: 28, name: 'Rosas Encantadas',   icon: 'https://static.giulianaflores.com.br/images/product/30600gg.jpg?ims=300x300' },
  { id: 29, name: 'Flores Plantadas',   icon: 'https://static.giulianaflores.com.br/images/product/32648gg.jpg?ims=300x300' },
  { id: 20, name: 'Café Saudável',      icon: 'https://static.giulianaflores.com.br/images/product/25148gg.jpg?ims=300x300' },
  { id: 30, name: 'Flores Silvestres',  icon: 'https://static.giulianaflores.com.br/images/product/25702gg.jpg?ims=300x300' },
];

// ═══════════════════════════════════════════════════════
//  POOL DE IMAGENS — substitui cestasfeitacomamor.top
//  (esse servidor retorna a mesma foto pra todos os produtos)
// ═══════════════════════════════════════════════════════
const IMG_POOL = {
  19: [
    'https://static.giulianaflores.com.br/images/product/25145gg.jpg?ims=300x300',
    'https://static.giulianaflores.com.br/images/product/25148gg.jpg?ims=300x300',
    'https://static.giulianaflores.com.br/images/product/25156gg.jpg?ims=300x300',
    'https://static.giulianaflores.com.br/images/product/22400gg.jpg?ims=300x300',
  ],
  22: [
    'https://static.giulianaflores.com.br/images/product/23290gg.jpg?ims=300x300',
    'https://static.giulianaflores.com.br/images/product/23291gg.jpg?ims=300x300',
    'https://static.giulianaflores.com.br/images/product/32670gg.jpg?ims=300x300',
    'https://static.giulianaflores.com.br/images/product/33491gg.jpg?ims=300x300',
    'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-99-2.jpg',
    'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-100-2.jpg',
  ],
  21: [
    'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-101-0.jpg',
    'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-42-1.jpg',
    'https://static.giulianaflores.com.br/images/product/29155gg.jpg?ims=300x300',
    'https://static.giulianaflores.com.br/images/product/29924gg.jpg?ims=300x300',
  ],
  // cat 25 novos produtos 179-182 usam cestasfeitacomamor → usar isabelaflores existentes
  25: [
    'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-8-2.jpg',
    'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-42-1.jpg',
    'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-62-1.jpg',
    'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-99-2.jpg',
    'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-100-2.jpg',
    'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-102-2.jpg',
  ],
  // cat 27 novos produtos 183-186
  27: [
    'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-49-2.jpg',
    'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-96-0.jpg',
    'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-97-1.jpg',
    'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-103-0.jpg',
  ],
  23: [
    'https://static.giulianaflores.com.br/images/product/31784gg.jpg?ims=300x300',
    'https://static.giulianaflores.com.br/images/product/30042gg.jpg?ims=300x300',
    'https://static.giulianaflores.com.br/images/product/29924gg.jpg?ims=300x300',
    'https://static.giulianaflores.com.br/images/product/29155gg.jpg?ims=300x300',
  ],
  24: [
    'https://static.giulianaflores.com.br/images/product/60791gg.jpg?ims=300x300',
    'https://static.giulianaflores.com.br/images/product/60794gg.jpg?ims=300x300',
  ],
  // cat 20 novos produtos 187-188
  20: [
    'https://static.giulianaflores.com.br/images/product/25145gg.jpg?ims=300x300',
    'https://static.giulianaflores.com.br/images/product/25148gg.jpg?ims=300x300',
    'https://static.giulianaflores.com.br/images/product/25156gg.jpg?ims=300x300',
    'https://static.giulianaflores.com.br/images/product/22400gg.jpg?ims=300x300',
  ],
};

// Índice global por categoria para garantir imagens únicas sequencialmente
const _poolIdx = {};

function resolveImage(p) {
  if (p.image && !p.image.includes('cestasfeitacomamor.top')) {
    return p.image; // imagem própria e funcional
  }
  const pool = IMG_POOL[p.category_id];
  if (!pool || !pool.length) return p.image;
  if (_poolIdx[p.id] === undefined) {
    // Atribui índice fixo baseado no id do produto dentro da categoria
    _poolIdx[p.id] = p.id % pool.length;
  }
  return pool[_poolIdx[p.id]];
}

// ═══════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════
function formatPrice(v) {
  let c = Math.round((Number(v) || 0) * 100);
  if (c >= 100 && c % 10 === 0) c += 3; // nunca termina em 0 (mantém aleatório)
  return 'R$ ' + (c / 100).toFixed(2).replace('.', ',');
}
function fakeReviews(id) {
  return ((id * 37 + 11) % 4800 + 50);
}
function makeCard(p, extraClass) {
  const img  = resolveImage(p);
  const cat  = CATEGORIES.find(c => c.id === p.category_id);
  const hasDisc = p.old_price && Number(p.old_price) > Number(p.price);
  // Categoria Dia dos Namorados (31): tarja "X% OFF" calculada do preço riscado vs atual.
  // Demais categorias: tarja "Promoção".
  let labelTxt = 'Promoção';
  if (p.category_id === 31 && hasDisc) {
    const off = Math.round((1 - Number(p.price) / Number(p.old_price)) * 100);
    if (off > 0) labelTxt = off + '% OFF';
  }
  const label = `<span class="plabel" style="background:#fff7d6;color:#8a6d00">${labelTxt}</span>`;
  const oldP = hasDisc ? `<span class="pold">De ${formatPrice(p.old_price)}</span>` : '';
  return `
    <div class="pcard${extraClass ? ' '+extraClass : ''}" onclick="openDetail(${p.id})">
      <div class="pimg">
        <img src="${img}" alt="${p.name}" loading="lazy"
          onerror="this.onerror=null;this.src='${cat ? cat.icon : ''}'">
        ${label}
      </div>
      <div class="pinfo">
        <div class="pname">${p.name}</div>
        ${oldP}
        <button class="pbuy" type="button" aria-label="Comprar agora — ${formatPrice(p.price)}" title="Comprar agora" onclick="event.stopPropagation(); openDetail(${p.id})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><span class="pbuy-price">${formatPrice(p.price)}</span></button>
      </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════
//  PÁGINAS (navegação SPA)
// ═══════════════════════════════════════════════════════
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
  // Bolinha "Loja aberta" só na página principal
  const fl = document.getElementById('openFloat');
  if (fl) fl.style.display = (id === 'homePage') ? 'flex' : 'none';
}

// Indicador flutuante "Loja aberta" — interação ao clicar
function setupOpenFloat() {
  const fl = document.getElementById('openFloat');
  if (!fl) return;
  fl.addEventListener('click', () => {
    fl.classList.remove('bump'); void fl.offsetWidth; fl.classList.add('bump');
    let t = document.getElementById('openToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'openToast';
      t.className = 'open-toast';
      document.body.appendChild(t);
    }
    t.innerHTML = '<span class="open-float-dot"></span> Estamos abertos e prontos para o seu pedido!';
    t.classList.add('show');
    clearTimeout(fl._toastTimer);
    fl._toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  });
}

// ═══════════════════════════════════════════════════════
//  PÁGINA DE CATEGORIA — "Ver mais" abre aqui
// ═══════════════════════════════════════════════════════
function openCategory(catId) {
  const cat   = CATEGORIES.find(c => c.id === catId);
  const items = allProducts.filter(p => p.category_id === catId && p.active !== 0);
  if (!cat || !items.length) return;

  document.getElementById('catPageTitle').textContent = cat.name;
  document.getElementById('catPageCount').textContent = `${items.length} produtos encontrados`;
  document.getElementById('catPageGrid').innerHTML = items.map(p => makeCard(p)).join('');

  showPage('categoryPage');
}

document.getElementById('catBackBtn').addEventListener('click', () => {
  showPage('homePage');
});

// ═══════════════════════════════════════════════════════
//  CATEGORIAS (chips de navegação)
// ═══════════════════════════════════════════════════════
function renderCatChips() {
  const wrap = document.getElementById('catScroll');
  if (!wrap) return;
  wrap.innerHTML = CATEGORIES.map(c => `
    <div class="cat" onclick="openCategory(${c.id})">
      <div class="cat-circle">
        <img src="${c.icon}" alt="${c.name}" loading="lazy">
      </div>
      <span class="cat-lbl">${c.name}</span>
    </div>`).join('');
}

function scrollToSection(id) {
  const el = document.getElementById('sec-' + id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ═══════════════════════════════════════════════════════
//  SEÇÕES DA HOME — carrossel simples (sem loop infinito)
//  Mostra os 5 primeiros; "Ver mais" abre página de categoria
// ═══════════════════════════════════════════════════════
const HOME_PREVIEW = 5;

function renderSections(products) {
  const container = document.getElementById('dynamicSections');
  if (!container) return;

  let html = '';
  CATEGORIES.forEach(cat => {
    const items = products.filter(p => p.category_id === cat.id && p.active !== 0);
    if (!items.length) return;

    const cards = items.map(p => makeCard(p)).join('');

    html += `
      <section class="sec" id="sec-${cat.id}">
        <div class="sec-hdr">
          <span class="sec-title">${cat.name}</span>
          <span class="sec-more" onclick="openCategory(${cat.id})">Ver mais (${items.length})</span>
        </div>
        <div class="prods">${cards}</div>
      </section>`;
  });

  container.innerHTML = html;
}

// ═══════════════════════════════════════════════════════
//  DETALHE DO PRODUTO
// ═══════════════════════════════════════════════════════
let allProducts = [];

function openDetail(id) {
  const p   = allProducts.find(x => x.id === id);
  if (!p) return;
  const cat = CATEGORIES.find(c => c.id === p.category_id);
  const img = resolveImage(p);

  const detImg = document.getElementById('detImg');
  detImg.src = img;
  detImg.onerror = function () { this.onerror = null; this.src = cat ? cat.icon : ''; };

  document.getElementById('detName').textContent  = p.name;
  document.getElementById('detPrice').textContent = formatPrice(p.price);
  document.getElementById('detStars').textContent = '★★★★★';
  document.getElementById('detCount').textContent = ' (' + fakeReviews(p.id).toLocaleString('pt-BR') + ' avaliações)';
  document.getElementById('detDesc').textContent  = p.description || '';
  document.getElementById('detShip').innerHTML    = '<strong>Entrega grátis</strong> na sua região';

  const oldEl = document.getElementById('detOldPrice');
  if (p.old_price && Number(p.old_price) > Number(p.price)) {
    oldEl.textContent = 'De ' + formatPrice(p.old_price);
    oldEl.style.display = 'block';
  } else {
    oldEl.style.display = 'none';
  }

  // Guarda de onde viemos para o back funcionar corretamente
  const fromCat = document.getElementById('categoryPage').classList.contains('active');
  document.getElementById('backBtn').dataset.from = fromCat ? 'categoryPage' : 'homePage';

  // Expõe o id atual para o cart.js
  window._currentDetailId = id;

  showPage('detailPage');
}

document.getElementById('backBtn').addEventListener('click', () => {
  const from = document.getElementById('backBtn').dataset.from || 'homePage';
  showPage(from);
});

// ═══════════════════════════════════════════════════════
//  MENU LATERAL
// ═══════════════════════════════════════════════════════
const menuBtn  = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const overlay  = document.getElementById('overlay');

function closeSideMenu() {
  sideMenu.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function renderSideMenu() {
  const wrap = document.getElementById('smCats');
  if (!wrap) return;
  wrap.innerHTML = CATEGORIES.map(c => `
    <a class="sm-cat-link" href="#" onclick="openCategory(${c.id}); closeSideMenu(); return false;">
      <img src="${c.icon}" alt="${c.name}" class="sm-cat-icon" loading="lazy" onerror="this.style.display='none'">
      <span class="sm-cat-name">${c.name}</span>
      <svg class="sm-cat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
    </a>
  `).join('');
}

menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
});
overlay.addEventListener('click', closeSideMenu);

// ═══════════════════════════════════════════════════════
//  BUSCA — tempo real com debounce
// ═══════════════════════════════════════════════════════
const searchBarEl  = document.getElementById('searchBar');
const searchInput  = searchBarEl.querySelector('input');
const searchCloseX = searchBarEl.querySelector('.search-close');

// Lista de categorias (nome + imagem) exibida ao abrir a busca
function renderSearchCategories() {
  const titleEl = document.getElementById('catPageTitle');
  const countEl = document.getElementById('catPageCount');
  const gridEl  = document.getElementById('catPageGrid');
  titleEl.textContent = 'Confira nossas categorias';
  countEl.textContent = `${CATEGORIES.length} categorias`;
  gridEl.innerHTML = '<div class="search-cats-list">' + CATEGORIES.map(c => `
      <a href="#" class="search-cat-row" onclick="openCategory(${c.id});return false;">
        <img class="search-cat-img" src="${c.icon}" alt="${c.name}" loading="lazy">
        <span class="search-cat-name">${c.name}</span>
        <svg class="search-cat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </a>`).join('') + '</div>';
  showPage('categoryPage');
}

// Abre/fecha a barra
document.getElementById('searchBtn').addEventListener('click', () => {
  searchBarEl.classList.toggle('hidden');
  if (!searchBarEl.classList.contains('hidden')) {
    searchInput.focus();
    searchInput.select();
    if (searchInput.value.trim().length < 2) renderSearchCategories();
  }
});

// Botão X na barra
if (searchCloseX) {
  searchCloseX.addEventListener('click', () => {
    searchInput.value = '';
    searchBarEl.classList.add('hidden');
    showPage('homePage');
  });
}

// Busca em tempo real (debounce 250ms)
let _searchTimer = null;
function doSearch(q) {
  q = q.trim().toLowerCase();

  if (q.length < 2) {
    // Pouco texto → mostra todas as categorias (lista)
    renderSearchCategories();
    return;
  }

  const results = allProducts.filter(p =>
    p.active !== 0 && (
      p.name.toLowerCase().includes(q) ||
      (p.description || '').toLowerCase().includes(q) ||
      (p.category || '').toLowerCase().includes(q)
    )
  );

  // Monta grid de resultados
  const titleEl = document.getElementById('catPageTitle');
  const countEl = document.getElementById('catPageCount');
  const gridEl  = document.getElementById('catPageGrid');

  titleEl.textContent = `Busca: "${searchInput.value.trim()}"`;

  if (results.length) {
    countEl.textContent = `${results.length} produto(s) encontrado(s)`;
    gridEl.innerHTML    = results.map(p => makeCard(p)).join('');
  } else {
    countEl.textContent = '';
    gridEl.innerHTML = `
      <div style="grid-column:1/-1;padding:40px 20px;text-align:center;color:#888">
        <div style="font-size:36px;margin-bottom:12px">🔍</div>
        <div style="font-size:15px;font-weight:600;color:#1a1a2e;margin-bottom:6px">Nenhum produto encontrado</div>
        <div style="font-size:13px">Tente outro termo ou navegue pelas categorias</div>
      </div>`;
  }

  showPage('categoryPage');
}

searchInput.addEventListener('input', e => {
  clearTimeout(_searchTimer);
  _searchTimer = setTimeout(() => doSearch(e.target.value), 250);
});

// Enter fecha o teclado mobile (não fecha a barra)
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    searchInput.value = '';
    searchBarEl.classList.add('hidden');
    showPage('homePage');
  }
});


// ═══════════════════════════════════════════════════════
//  COOKIE BANNER
// ═══════════════════════════════════════════════════════
const cookieBanner = document.getElementById('cookieBanner');
if (cookieBanner) {
  document.getElementById('cookieBtn').addEventListener('click', () => {
    cookieBanner.classList.add('hidden');
    localStorage.setItem('cookie_ok', '1');
  });
  if (localStorage.getItem('cookie_ok')) {
    cookieBanner.classList.add('hidden');
  }
}

// ═══════════════════════════════════════════════════════
//  HERO CAROUSEL LOGIC
// ═══════════════════════════════════════════════════════
let currentHeroSlide = 0;
let heroInterval = null;

window.setHeroSlide = function(idx) {
  currentHeroSlide = idx;
  const track = document.getElementById('heroTrack');
  if (track) {
    const n = document.querySelectorAll('.hero-carousel-slide').length || 1;
    track.style.transform = `translateX(-${(idx * 100) / n}%)`;
  }
  
  // Update dots active state
  const dots = document.querySelectorAll('.hero-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
};

function nextHeroSlide() {
  const n = document.querySelectorAll('.hero-carousel-slide').length || 1;
  let next = (currentHeroSlide + 1) % n;
  window.setHeroSlide(next);
}

function startHeroAutoPlay() {
  stopHeroAutoPlay();
  const n = document.querySelectorAll('.hero-carousel-slide').length || 1;
  if (n <= 1) return; // sem rotação automática com uma única imagem
  heroInterval = setInterval(nextHeroSlide, 4500); // changes slide every 4.5 seconds
}

function stopHeroAutoPlay() {
  if (heroInterval) {
    clearInterval(heroInterval);
    heroInterval = null;
  }
}

// Touch swipe support for mobile
function initHeroCarouselTouch() {
  const carousel = document.getElementById('heroCarousel');
  if (!carousel) return;
  if ((document.querySelectorAll('.hero-carousel-slide').length || 1) <= 1) return; // sem swipe com 1 imagem

  let startX = 0;
  let moveX = 0;
  let isDragging = false;

  carousel.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDragging = true;
    stopHeroAutoPlay();
  }, { passive: true });

  carousel.addEventListener('touchmove', e => {
    if (!isDragging) return;
    moveX = e.touches[0].clientX;
  }, { passive: true });

  carousel.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    
    let diff = startX - moveX;
    if (Math.abs(diff) > 50 && moveX > 0) {
      if (diff > 0) {
        let next = (currentHeroSlide + 1) % 3;
        window.setHeroSlide(next);
      } else {
        let prev = (currentHeroSlide - 3 + 1) % 3; // wait: correct prev modulo is (currentHeroSlide - 1 + 3) % 3
        let prevCorrected = (currentHeroSlide - 1 + 3) % 3;
        window.setHeroSlide(prevCorrected);
      }
    }
    moveX = 0;
    startHeroAutoPlay();
  });
}

// ═══════════════════════════════════════════════════════
//  TERMOS POPULARES & CIDADES ATENDIDAS
// ═══════════════════════════════════════════════════════
function initPopularTags() {
  const btnMore = document.getElementById('btnTagsMore');
  if (btnMore) {
    btnMore.addEventListener('click', () => {
      const extraTags = document.querySelectorAll('.tag-extra');
      if (!extraTags.length) return;
      const isHidden = extraTags[0].classList.contains('hidden');
      
      extraTags.forEach(tag => {
        if (isHidden) {
          tag.classList.remove('hidden');
        } else {
          tag.classList.add('hidden');
        }
      });
      
      btnMore.textContent = isHidden ? 'Ver menos' : 'Ver mais';
    });
  }

  // Cliques em tags para realizar buscas automáticas
  document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const text = tag.textContent.trim();
      const searchBar = document.getElementById('searchBar');
      if (searchBar) {
        searchBar.classList.remove('hidden');
        const input = searchBar.querySelector('input');
        if (input) {
          input.value = text;
          doSearch(text);
        }
      }
    });
  });
}

function initCitiesDirectory() {
  const btnOpen = document.getElementById('btnCidadesAtendidas');
  const btnClose = document.getElementById('btnCidadesClose');
  const modal = document.getElementById('cidadesModal');
  const searchInput = document.getElementById('cidadesSearchInput');

  if (!modal) return;

  if (btnOpen) {
    btnOpen.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
    });
  }

  if (btnClose) {
    btnClose.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // Filtro de cidades em tempo real
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      const stateGroups = document.querySelectorAll('.cidades-state-group');

      stateGroups.forEach(group => {
        let hasVisibleCity = false;
        const cities = group.querySelectorAll('.cidade-item');

        cities.forEach(city => {
          const cityName = city.textContent.trim().toLowerCase();
          if (cityName.includes(query)) {
            city.classList.remove('hidden');
            hasVisibleCity = true;
          } else {
            city.classList.add('hidden');
          }
        });

        if (hasVisibleCity) {
          group.classList.remove('hidden');
        } else {
          group.classList.add('hidden');
        }
      });
    });
  }

  // Clicar em qualquer cidade faz uma busca automática
  document.querySelectorAll('.cidade-item').forEach(item => {
    item.addEventListener('click', () => {
      const city = item.textContent.trim();
      modal.classList.add('hidden');
      
      const searchQuery = `Floricultura ${city}`;
      const searchBar = document.getElementById('searchBar');
      if (searchBar) {
        searchBar.classList.remove('hidden');
        const input = searchBar.querySelector('input');
        if (input) {
          input.value = searchQuery;
          doSearch(searchQuery);
        }
      }
    });
  });
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
(function init() {
  const data = window.PRODUCTS_DATA || [];
  // Valores "quebrados" e ALEATÓRIOS (terminações variadas, nunca em 0).
  // Determinístico pelo id → o mesmo produto mantém o mesmo valor.
  const ENDINGS = [49, 79, 87, 89, 91, 93, 95, 97, 99];
  const endFor = id => ENDINGS[Math.abs((id || 0) * 7 + 13) % ENDINGS.length];
  const quebrar = (v, seed) => {
    const n = parseFloat(v);
    if (!n || isNaN(n)) return v;
    return (Math.floor(n) + endFor(seed) / 100).toFixed(2);
  };
  data.forEach(p => {
    if (p.price) p.price = quebrar(p.price, p.id);
    if (p.old_price && parseFloat(p.old_price) > 0) p.old_price = quebrar(p.old_price, p.id + 1000);
    // Camisetas (Dia dos Namorados) com o MESMO valor
    if (p.is_tshirt) { p.price = '79.87'; }
    // Dia dos Namorados (31): TODOS com 50% OFF → riscado = 2x o preço atual
    if (p.category_id === 31 && p.price) {
      p.old_price = (parseFloat(p.price) * 2).toFixed(2);
    }
    if (p.description) {
      p.description = p.description
        .replace(/entrega rápida e segura em todo o Brasil/gi, 'entrega rápida')
        .replace(/[,.]?\s*(em|para)\s+todo\s+o?\s*Brasil/gi, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
    }
  });
  allProducts = data;
  window.allProducts = data;   // Expõe globalmente para cart.js
  renderCatChips();
  renderSections(data);
  renderSideMenu();
  setupOpenFloat();

  // Reposiciona: categorias para baixo do 1º bloco (Dia dos Namorados);
  // faixa "Loja aberta" ocupa o lugar das categorias (logo após o banner).
  (function repositionLayout() {
    const hero    = document.getElementById('heroCarousel');
    const openBar = document.querySelector('.region-bar.open-bar');
    const catsEl  = document.querySelector('.cats');
    const dyn     = document.getElementById('dynamicSections');
    if (catsEl && dyn && dyn.children.length > 1) {
      // título "Confira nossas categorias" com espaço, antes das categorias
      if (!document.getElementById('catsHeading')) {
        const heading = document.createElement('div');
        heading.id = 'catsHeading';
        heading.className = 'cats-heading';
        heading.textContent = 'Confira nossas categorias';
        dyn.insertBefore(heading, dyn.children[1]);
        dyn.insertBefore(catsEl, dyn.children[2]); // categorias logo abaixo do título
      } else {
        dyn.insertBefore(catsEl, dyn.children[1]);
      }
    }
    if (hero && openBar) {
      hero.insertAdjacentElement('afterend', openBar); // "Loja aberta" após o banner
    }
  })();

  // Banners de imagem — inseridos acima de categorias específicas
  (function insertBanners() {
    function buildBanner(id, imgUrl, fallbackHtml, catId) {
      const nb = document.createElement('div');
      nb.id = id;
      nb.className = 'namorados-banner nb-noimg';
      nb.innerHTML =
        '<img src="' + imgUrl + '" alt="" class="nb-img" ' +
        'onload="this.closest(\'.namorados-banner\').classList.remove(\'nb-noimg\')" onerror="this.remove()">' +
        '<div class="nb-fallback">' + fallbackHtml + '</div>';
      if (catId != null && typeof openCategory === 'function') {
        nb.style.cursor = 'pointer';
        nb.setAttribute('role', 'link');
        nb.addEventListener('click', () => openCategory(catId));
      }
      return nb;
    }
    // Banner 1 — acima da categoria Ursinho (sec-32)
    const ursinho = document.getElementById('sec-32');
    if (ursinho && !document.getElementById('namoradosBanner')) {
      ursinho.insertAdjacentElement('beforebegin', buildBanner(
        'namoradosBanner',
        'banner-foto1-new.png',
        '<div class="nb-hearts">🍫 🌹 🍫</div><h2>Flores + Chocolate</h2><p>Toque para ver a categoria!</p>',
        27
      ));
    }
    // Banner 2 — acima da categoria Rosas Encantadas (sec-28). Imagem a ser enviada.
    const rosas = document.getElementById('sec-28');
    if (rosas && !document.getElementById('namoradosBanner2')) {
      rosas.insertAdjacentElement('beforebegin', buildBanner(
        'namoradosBanner2',
        'banner-foto2-new.png',
        '<div class="nb-hearts">🌹 💐 🌹</div><h2>Buquês de Rosas</h2><p>Toque para ver a categoria!</p>',
        25
      ));
    }
  })();

  // Initialize Carousel
  startHeroAutoPlay();
  initHeroCarouselTouch();
  
  // Initialize Popular Tags & Cities
  initPopularTags();
  initCitiesDirectory();

  // Sitelinks (Google Ads): âncoras na URL abrem a categoria correspondente
  (function handleHashRoute() {
    const MAP = {
      'dia-dos-namorados': 31,
      'buques-de-rosas': 25,
      'flores-e-chocolate': 27,
      'cestas-romanticas': 22,
      'rosas-encantadas': 28,
      'ursinhos': 32
    };
    function go() {
      const h = (location.hash || '').replace('#', '').toLowerCase();
      if (MAP[h] && typeof openCategory === 'function') {
        setTimeout(() => openCategory(MAP[h]), 250);
      }
    }
    go();
    window.addEventListener('hashchange', go);
  })();

  console.log(`✅ ${data.length} produtos carregados em ${CATEGORIES.length} categorias`);
})();
