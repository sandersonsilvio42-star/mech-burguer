// ============================================================
//  MECH BURGUER — App v3
// ============================================================

// ── Estado ───────────────────────────────────────────────────
let cart = [];
let currentItem = null;
let currentQty  = 1;
let selectedAdicionais = [];

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('hamburguer');
  renderAdicionaisModal();
  renderAdicionaisView();
  initParticles();
  initScrollHeader();
});

// ── Header scroll ─────────────────────────────────────────────
function initScrollHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── Menu hamburguer mobile ────────────────────────────────────
function toggleMenu() {
  const nav = document.getElementById('headerNav');
  const btn = document.getElementById('hamburger');
  nav.classList.toggle('open');
  btn.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('headerNav').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// ── Partículas hero ───────────────────────────────────────────
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      bottom: ${Math.random() * 20}%;
      width: ${2 + Math.random() * 3}px;
      height: ${2 + Math.random() * 3}px;
      animation-duration: ${6 + Math.random() * 10}s;
      animation-delay: ${Math.random() * 8}s;
      opacity: ${0.3 + Math.random() * 0.4};
    `;
    container.appendChild(p);
  }
}

// ── Renderizar Cardápio ───────────────────────────────────────
function renderMenu(category) {
  const grid = document.getElementById('menuGrid');

  // Categoria especial: adicionais — cards individuais só visualização
  if (category === 'adicionais') {
    const grupos = [
      { label: '🥩 Proteínas',        items: ADICIONAIS.proteinas },
      { label: '🧀 Queijos Especiais', items: ADICIONAIS.queijos },
      { label: '🥗 Complementos',      items: ADICIONAIS.complementos },
      { label: '🍶 Molhos Extras',     items: ADICIONAIS.molhos }
    ];

    grid.innerHTML = grupos.map(grupo => `
      <div class="adicionais-grupo-wrap">
        <div class="adicionais-grupo-label">${grupo.label}</div>
        <div class="adicionais-grupo-grid">
          ${grupo.items.map(item => `
            <div class="adicional-view-card-full">
              <div class="adicional-view-img">
                <img
                  src="${item.img}"
                  alt="${item.name}"
                  loading="lazy"
                  style="--origin: ${item.pos}; transform-origin: ${item.pos};"
                />
              </div>
              <div class="adicional-view-info">
                <div class="adicional-view-name">${item.name}</div>
                <div class="adicional-view-desc">${item.desc}</div>
                <div class="adicional-view-price">+R$ ${item.price.toFixed(2).replace('.', ',')}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
    return;
  }

  const items = MENU_ITEMS.filter(i => i.category === category);
  grid.innerHTML = items.map(item => {
    const imgHtml = item.img
      ? `<img src="${item.img}" alt="${item.name}" loading="lazy" />`
      : `<div class="card-img-placeholder">${item.icon}</div>`;

    return `
      <div class="menu-card" onclick="openModal(${item.id})">
        <div class="card-img-wrap">
          ${item.tag ? `<div class="card-tag">${item.tag}</div>` : ''}
          ${imgHtml}
        </div>
        <div class="card-body">
          <h3 class="card-name">${item.name}</h3>
          <p class="card-desc">${item.desc}</p>
        </div>
        <div class="card-footer">
          <span class="card-price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
          <button class="card-add-btn" aria-label="Adicionar ${item.name}">+</button>
        </div>
      </div>
    `;
  }).join('');
}

function filterCategory(btn, category) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(category);
}

// ── Adicionais no Modal de item ───────────────────────────────
function renderAdicionaisModal() {
  renderAdicionalGroup('adicionaisProteinas',    ADICIONAIS.proteinas);
  renderAdicionalGroup('adicionaisQueijos',       ADICIONAIS.queijos);
  renderAdicionalGroup('adicionaisComplementos',  ADICIONAIS.complementos);
  renderAdicionalGroup('adicionaisMolhos',        ADICIONAIS.molhos);
}

function renderAdicionalGroup(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map(item => `
    <label class="adicional-item">
      <input type="checkbox"
        data-name="${item.name}"
        data-price="${item.price}"
        onchange="toggleAdicional(this)"
      />
      <div class="adicional-item-info">
        <div class="adicional-item-name">${item.name}</div>
        <div class="adicional-item-desc">${item.desc}</div>
      </div>
      <span class="adicional-item-price">+R$ ${item.price.toFixed(2).replace('.', ',')}</span>
    </label>
  `).join('');
}

// ── Modal de Adicionais (visualização) ────────────────────────
function renderAdicionaisView() {
  renderViewGroup('viewProteinas',    ADICIONAIS.proteinas);
  renderViewGroup('viewQueijos',      ADICIONAIS.queijos);
  renderViewGroup('viewComplementos', ADICIONAIS.complementos);
  renderViewGroup('viewMolhos',       ADICIONAIS.molhos);
}

function renderViewGroup(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map(item => `
    <div class="adicional-view-card">
      <div class="adicional-view-name">${item.name}</div>
      <div class="adicional-view-desc">${item.desc}</div>
      <div class="adicional-view-price">+R$ ${item.price.toFixed(2).replace('.', ',')}</div>
    </div>
  `).join('');
}

function openAdicionaisModal() {
  document.getElementById('adicionaisOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeAdicionaisModal() {
  document.getElementById('adicionaisOverlay').classList.remove('active');
  document.body.style.overflow = '';
}
function closeAdicionaisOutside(e) {
  if (e.target === document.getElementById('adicionaisOverlay')) closeAdicionaisModal();
}

// ── Modal de Item ─────────────────────────────────────────────
function openModal(itemId) {
  currentItem = MENU_ITEMS.find(i => i.id === itemId);
  currentQty  = 1;
  selectedAdicionais = [];

  // Reset checkboxes
  document.querySelectorAll('.adicional-item input[type=checkbox]').forEach(cb => {
    cb.checked = false;
    cb.closest('.adicional-item').classList.remove('selected');
  });

  // Imagem
  const imgArea = document.getElementById('modalImgArea');
  imgArea.innerHTML = currentItem.img
    ? `<img class="modal-img" src="${currentItem.img}" alt="${currentItem.name}" />`
    : `<div class="modal-img-placeholder">${currentItem.icon}</div>`;

  document.getElementById('modalTitle').textContent     = currentItem.name;
  document.getElementById('modalDesc').textContent      = currentItem.desc;
  document.getElementById('modalBasePrice').textContent = 'R$ ' + currentItem.price.toFixed(2).replace('.', ',');
  document.getElementById('modalQty').textContent       = 1;

  // Adicionais só para hambúrgueres
  document.getElementById('modalAdicionais').style.display =
    currentItem.category === 'hamburguer' ? 'block' : 'none';

  updateModalTotal();
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}
function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

function toggleAdicional(cb) {
  const name  = cb.dataset.name;
  const price = parseFloat(cb.dataset.price);
  const card  = cb.closest('.adicional-item');
  if (cb.checked) {
    selectedAdicionais.push({ name, price });
    card.classList.add('selected');
  } else {
    selectedAdicionais = selectedAdicionais.filter(a => a.name !== name);
    card.classList.remove('selected');
  }
  updateModalTotal();
}

function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById('modalQty').textContent = currentQty;
  updateModalTotal();
}

function updateModalTotal() {
  if (!currentItem) return;
  const extras = selectedAdicionais.reduce((s, a) => s + a.price, 0);
  const total  = (currentItem.price + extras) * currentQty;
  document.getElementById('modalTotal').textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
}

function addToCart() {
  if (!currentItem) return;
  const extras    = selectedAdicionais.reduce((s, a) => s + a.price, 0);
  const unitPrice = currentItem.price + extras;

  cart.push({
    id: Date.now(),
    name: currentItem.name,
    qty: currentQty,
    unitPrice,
    adicionais: [...selectedAdicionais]
  });

  updateCartUI();
  closeModal();
  showToast(`✅ ${currentItem.name} adicionado!`);
}

// ── Carrinho ──────────────────────────────────────────────────
function toggleCart() {
  const overlay = document.getElementById('cartOverlay');
  const isOpen  = overlay.classList.toggle('active');
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
function closeCartOutside(e) {
  if (e.target === document.getElementById('cartOverlay')) toggleCart();
}

function updateCartUI() {
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);

  const badge = document.getElementById('fabBadge');
  badge.textContent = totalQty;
  badge.style.display = totalQty > 0 ? 'flex' : 'none';

  const itemsEl  = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🍔</div>
        <p>Seu carrinho está vazio</p>
        <span>Adicione itens do cardápio</span>
      </div>`;
    footerEl.style.display = 'none';
    return;
  }

  footerEl.style.display = 'flex';

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div>
        <div class="cart-item-name">${item.name}</div>
        ${item.adicionais.length
          ? `<div class="cart-item-adicionais">+ ${item.adicionais.map(a => a.name).join(', ')}</div>`
          : ''}
        <div class="cart-item-price">R$ ${(item.unitPrice * item.qty).toFixed(2).replace('.', ',')}</div>
      </div>
      <div class="cart-item-controls">
        <button onclick="changeCartQty(${item.id},-1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeCartQty(${item.id},1)">+</button>
        <button class="remove-btn" onclick="removeCartItem(${item.id})">🗑</button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((s, i) => s + i.unitPrice * i.qty, 0);
  document.getElementById('cartTotal').textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
}

function changeCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) { item.qty = Math.max(1, item.qty + delta); updateCartUI(); }
}
function removeCartItem(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

// ── Entrega / Pagamento ───────────────────────────────────────
function toggleEntrega() {
  const val = document.querySelector('input[name="entrega"]:checked')?.value;
  document.getElementById('enderecoField').style.display = val === 'entrega' ? 'block' : 'none';
}
function togglePagamento() {
  const val = document.querySelector('input[name="pagamento"]:checked')?.value;
  document.getElementById('trocoField').style.display = val === 'dinheiro' ? 'block' : 'none';
}

// ── Finalizar WhatsApp ────────────────────────────────────────
function finalizarPedido() {
  const nome      = document.getElementById('nomeInput').value.trim();
  const entrega   = document.querySelector('input[name="entrega"]:checked')?.value;
  const pagamento = document.querySelector('input[name="pagamento"]:checked')?.value;
  const endereco  = document.getElementById('enderecoInput').value.trim();
  const troco     = document.getElementById('trocoInput').value;

  if (!nome)                              return showAlert('Informe seu nome.');
  if (!entrega)                           return showAlert('Escolha entrega ou retirada.');
  if (entrega === 'entrega' && !endereco) return showAlert('Informe o endereço de entrega.');
  if (!pagamento)                         return showAlert('Escolha a forma de pagamento.');
  if (cart.length === 0)                  return showAlert('Seu carrinho está vazio!');

  let msg = `🍔 *MECH BURGUER — Novo Pedido*\n\n`;
  msg += `👤 *Cliente:* ${nome}\n`;
  msg += entrega === 'entrega'
    ? `🛵 *Entrega em:* ${endereco}\n`
    : `🏪 *Retirar no local*\n`;

  msg += `\n📋 *Itens:*\n`;
  cart.forEach(item => {
    msg += `• ${item.qty}x ${item.name} — R$ ${(item.unitPrice * item.qty).toFixed(2).replace('.', ',')}\n`;
    if (item.adicionais.length)
      msg += `  ↳ ${item.adicionais.map(a => a.name).join(', ')}\n`;
  });

  const total = cart.reduce((s, i) => s + i.unitPrice * i.qty, 0);
  msg += `\n💰 *Total: R$ ${total.toFixed(2).replace('.', ',')}*\n`;

  const labels = { pix:'📱 Pix', debito:'💳 Débito', credito:'💳 Crédito', dinheiro:'💵 Dinheiro' };
  msg += `💳 *Pagamento:* ${labels[pagamento]}`;
  if (pagamento === 'dinheiro' && troco)
    msg += ` (troco para R$ ${parseFloat(troco).toFixed(2).replace('.', ',')})`;

  window.open(`https://wa.me/5512997779855?text=${encodeURIComponent(msg)}`, '_blank');
}

// ── Toast / Alert ─────────────────────────────────────────────
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2800);
}

function showAlert(msg) {
  const old = document.querySelector('.alert-box');
  if (old) old.remove();
  const box = document.createElement('div');
  box.className = 'alert-box';
  box.innerHTML = `<span>⚠️ ${msg}</span><button onclick="this.parentElement.remove()">✕</button>`;
  document.body.appendChild(box);
  requestAnimationFrame(() => box.classList.add('show'));
  setTimeout(() => { box.classList.remove('show'); setTimeout(() => box.remove(), 300); }, 4000);
}
