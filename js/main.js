/* =========================================================
   SIENNA — Interacciones
   1. Menú responsive
   2. Render de productos (desde js/products.js)
   3. Filtros de productos
   4. Modal de detalle
   5. Animaciones de aparición al hacer scroll
   ========================================================= */
(function () {
  'use strict';

  const products = window.SIENNA_PRODUCTS || [];

  /* ---------- 1. Menú responsive ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const menuLabel = document.getElementById('menuLabel');

  function setMenu(open) {
    mainNav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuLabel.textContent = open ? 'Cerrar' : 'Menú';
  }

  menuToggle.addEventListener('click', () => setMenu(!mainNav.classList.contains('open')));
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));

  /* ---------- 2. Render de productos ---------- */
  const productGrid = document.getElementById('productGrid');

  function createProductCard(product, index) {
    const card = document.createElement('article');
    card.className = 'product-card reveal' + (index > 0 ? ' reveal-delay' : '');
    card.dataset.category = product.category;

    const imageWrap = document.createElement('div');
    imageWrap.className = 'product-image-wrap';

    const tag = document.createElement('span');
    tag.className = 'product-tag';
    tag.textContent = product.tag;

    const img = document.createElement('img');
    img.className = 'product-image';
    img.src = product.image;
    img.alt = product.title;
    img.loading = 'lazy';

    imageWrap.append(tag, img);

    const info = document.createElement('div');
    info.className = 'product-info';

    const text = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.textContent = product.title;
    const p = document.createElement('p');
    p.textContent = product.subtitle;
    text.append(h3, p);

    const button = document.createElement('button');
    button.className = 'product-detail';
    button.type = 'button';
    button.textContent = '↗';
    button.setAttribute('aria-label', 'Más información sobre ' + product.title);
    button.addEventListener('click', () => openModal(product, button));

    info.append(text, button);
    card.append(imageWrap, info);
    return card;
  }

  products.forEach((product, i) => productGrid.appendChild(createProductCard(product, i)));

  /* ---------- 3. Filtros ---------- */
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn === button);
        btn.setAttribute('aria-pressed', String(btn === button));
      });
      const filter = button.dataset.filter;
      productGrid.querySelectorAll('.product-card').forEach(card => {
        card.hidden = !(filter === 'all' || card.dataset.category === filter);
      });
    });
  });

  /* ---------- 4. Modal ---------- */
  const modal = document.getElementById('productModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalImage = document.getElementById('modalImage');
  const modalClose = document.getElementById('modalClose');
  let lastTrigger = null;

  function openModal(product, trigger) {
    lastTrigger = trigger;
    modalTitle.textContent = product.title;
    modalDescription.textContent = product.description;
    modalImage.src = product.image;
    modalImage.alt = product.title;
    modal.classList.add('open');
    document.body.classList.add('modal-open');
    modalClose.focus();
  }

  function closeModal() {
    if (!modal.classList.contains('open')) return;
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
    if (lastTrigger) lastTrigger.focus();
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    closeModal();
    if (mainNav.classList.contains('open')) setMenu(false);
  });

  /* ---------- 5. Reveal on scroll ---------- */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }
})();
