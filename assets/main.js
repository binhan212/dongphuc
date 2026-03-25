/* ============================================
   TÍNH CHI PHÍ ĐỒNG PHỤC - Main JavaScript
   ============================================ */

// ──────────── HEROICONS (v2 outline) ────────────
const ICONS = {
  briefcase:     `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>`,
  sparkles:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>`,
  sun:           `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>`,
  squares_plus:  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" /></svg>`,
  tag:           `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" /></svg>`,
  banknotes:     `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>`,
  link:          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>`,
  check_circle:  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
  x_circle:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
  check_badge:   `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>`,
  arrow_path:    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`,
  document_down: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>`,
  info:          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>`,
  building:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>`,
};

// Helper: renders a named Heroicon as an inline SVG span
function icon(name, size = 'icon-md') {
  return `<span class="icon-wrap ${size}">${ICONS[name] || ''}</span>`;
}

// ──────────── DATA ────────────
const UNIFORM_DATA = {
  nam: {
    id: 'nam',
    iconKey: 'briefcase',
    textLabel: 'Nam văn phòng',
    shortLabel: 'Nam VP',
    maxBudget: 1700000,
    items: [
      { id: 'nam_ao_dai', name: 'Áo sơ mi dài tay', price: 540000 },
      { id: 'nam_ao_ngan', name: 'Áo sơ mi ngắn tay', price: 525000 },
      { id: 'nam_quan_au', name: 'Quần âu', price: 555000 },
      { id: 'nam_ao_vest', name: 'Áo vest 2 lớp', price: 2080000 },
    ]
  },
  nu: {
    id: 'nu',
    iconKey: 'sparkles',
    textLabel: 'Nữ văn phòng',
    shortLabel: 'Nữ VP',
    maxBudget: 1500000,
    items: [
      { id: 'nu_ao_dai', name: 'Áo sơ mi dài tay', price: 470000 },
      { id: 'nu_ao_ngan', name: 'Áo sơ mi ngắn tay', price: 455000 },
      { id: 'nu_quan_au', name: 'Quần âu', price: 540000 },
      { id: 'nu_vay', name: 'Váy', price: 485000 },
      { id: 'nu_ao_vest', name: 'Áo vest 2 lớp', price: 1500000 },
    ]
  },
  outdoor: {
    id: 'outdoor',
    iconKey: 'sun',
    textLabel: 'Nhân viên ngoài trời',
    shortLabel: 'Ngoài trời',
    maxBudget: 1900000,
    items: [
      { id: 'out_ao_budong', name: 'Áo budong dài tay', price: 315000 },
      { id: 'out_quan_bh', name: 'Quần bảo hộ', price: 285000 },
      { id: 'out_ao_khoac', name: 'Áo khoác lót bông', price: 650000 },
    ]
  },
  khac: {
    id: 'khac',
    iconKey: 'squares_plus',
    textLabel: 'Khác',
    shortLabel: 'Khác',
    maxBudget: null,
    items: []
  }
};

const SHARED_ITEMS = [
  { id: 'shared_ao_gio', name: 'Áo khoác gió', price: 650000 },
  { id: 'shared_ao_ghile', name: 'Áo ghi lê len', price: 450000 },
];

// ──────────── STATE ────────────
// State stores { [itemId]: { qty: Number } } per tab
const state = {};
const TAB_KEYS = ['nam', 'nu', 'outdoor', 'khac'];
let activeTab = 'nam';

// Initialize state
function initState() {
  TAB_KEYS.forEach(tabKey => {
    state[tabKey] = {};
    const group = UNIFORM_DATA[tabKey];
    group.items.forEach(item => {
      state[tabKey][item.id] = { qty: 0 };
    });
    SHARED_ITEMS.forEach(item => {
      state[tabKey][item.id] = { qty: 0 };
    });
  });
}

// ──────────── FORMATTING ────────────
function formatVND(amount) {
  if (amount === 0) return '0 ₫';
  return amount.toLocaleString('vi-VN') + ' ₫';
}

// ──────────── CALCULATION ────────────
function calcTabTotal(tabKey) {
  let total = 0;
  const tabState = state[tabKey];
  const group = UNIFORM_DATA[tabKey];

  // Group-specific items
  group.items.forEach(item => {
    const s = tabState[item.id];
    if (s && s.qty > 0) {
      total += item.price * s.qty;
    }
  });

  // Shared items
  SHARED_ITEMS.forEach(item => {
    const s = tabState[item.id];
    if (s && s.qty > 0) {
      total += item.price * s.qty;
    }
  });

  return total;
}

function calcGrandTotal() {
  // The "grand total" depends on the active tab
  return calcTabTotal(activeTab);
}

// ──────────── RENDER ────────────

function renderTabs() {
  const container = document.getElementById('tab-nav');
  container.innerHTML = '';
  TAB_KEYS.forEach(key => {
    const group = UNIFORM_DATA[key];
    const btn = document.createElement('button');
    btn.className = `tab-btn ${key === activeTab ? 'active' : ''}`;
    btn.innerHTML = `${icon(group.iconKey, 'icon-sm')} <span>${group.textLabel}</span>`;
    btn.setAttribute('data-tab', key);
    btn.addEventListener('click', () => switchTab(key));
    container.appendChild(btn);
  });
}

function resetTabState(tabKey) {
  const group = UNIFORM_DATA[tabKey];
  state[tabKey] = {};
  group.items.forEach(item => { state[tabKey][item.id] = { qty: 0 }; });
  SHARED_ITEMS.forEach(item => { state[tabKey][item.id] = { qty: 0 }; });
}

function switchTab(tabKey) {
  resetTabState(activeTab); // clear current tab before leaving
  activeTab = tabKey;
  renderTabs();
  renderContent();
  updateResult();
}

function renderContent() {
  const container = document.getElementById('tab-content');
  container.innerHTML = '';

  const group = UNIFORM_DATA[activeTab];
  const panel = document.createElement('div');
  panel.className = 'tab-panel active fade-in';

  // — Header with group name + budget badge
  let headerHTML = `<div class="mb-6">`;
  headerHTML += `<div class="flex flex-wrap items-center justify-between gap-4 mb-3">`;
  headerHTML += `<h2 class="text-xl md:text-2xl font-bold tracking-wide flex items-center gap-2">${icon(group.iconKey)} ${group.textLabel}</h2>`;

  if (group.maxBudget !== null) {
    headerHTML += `<div class="budget-badge">${icon('banknotes', 'icon-md')} Định mức: ${formatVND(group.maxBudget)}</div>`;
  }
  headerHTML += `</div>`;

  if (group.maxBudget !== null) {
    headerHTML += `<p class="text-sm" style="color:var(--slate)">Bạn có thể chọn đồng phục riêng của nhóm + đồng phục chung (Khác).</p>`;

    // Progress bar
    const total = calcTabTotal(activeTab);
    const pct = group.maxBudget > 0 ? Math.min((total / group.maxBudget) * 100, 100) : 0;
    let barColor = 'background: linear-gradient(90deg, #34D399, #10B981)';
    if (pct > 85) barColor = 'background: linear-gradient(90deg, #FBBF24, #F59E0B)';
    if (pct > 100) barColor = 'background: linear-gradient(90deg, #F87171, #EF4444)';

    headerHTML += `
      <div class="mt-3 flex items-center gap-3">
        <span class="text-xs font-medium" style="color:var(--slate)">Đã dùng: ${formatVND(total)}</span>
        <div class="progress-bar-track flex-1">
          <div class="progress-bar-fill" style="width:${pct}%; ${barColor}"></div>
        </div>
        <span class="text-xs font-semibold" style="color:${pct > 100 ? 'var(--red)' : 'var(--gold)'}">${pct.toFixed(0)}%</span>
      </div>
    `;
  } else {
    headerHTML += `<div class="info-note mt-2">${icon('info', 'icon-sm')} Đồng phục chung áp dụng cho tất cả các nhóm. Không có giới hạn định mức riêng.</div>`;
  }

  headerHTML += `</div>`;
  panel.innerHTML = headerHTML;

  // — Card container
  const card = document.createElement('div');
  card.className = 'card-main overflow-hidden';

  // Section A: Group-specific items
  if (group.items.length > 0) {
    card.innerHTML += `<div class="section-header">${icon('tag', 'icon-sm')} Đồng phục dành riêng – ${group.shortLabel}</div>`;
    group.items.forEach(item => {
      card.innerHTML += renderItemRow(item, activeTab);
    });
  }

  // Section B: Shared items
  if (activeTab === 'khac') {
    card.innerHTML += `<div class="section-header">${icon('squares_plus', 'icon-sm')} Đồng phục chung – Áp dụng tất cả nhóm</div>`;
  } else {
    card.innerHTML += `<div class="section-header mt-2">${icon('link', 'icon-sm')} Đồng phục chung (Khác) – Áp dụng tất cả nhóm</div>`;
  }
  SHARED_ITEMS.forEach(item => {
    card.innerHTML += renderItemRow(item, activeTab);
  });

  panel.appendChild(card);
  container.appendChild(panel);

  // Attach event listeners
  attachItemEvents();
}

function renderItemRow(item, tabKey) {
  const s = state[tabKey][item.id] || { qty: 0 };
  const subtotal = s.qty > 0 ? item.price * s.qty : 0;

  return `
    <div class="uniform-row" data-item-id="${item.id}">
      <span class="item-name font-medium text-sm md:text-base">${item.name}</span>
      <div class="row-controls">
        <span class="price-gold text-sm">${formatVND(item.price)}</span>
        <div class="qty-wrapper">
          <button class="qty-btn qty-minus" data-id="${item.id}">−</button>
          <input type="number" class="qty-input" data-id="${item.id}"
                 value="${s.qty}" min="0" max="99">
          <button class="qty-btn qty-plus" data-id="${item.id}">+</button>
        </div>
        <span class="price-subtotal text-sm subtotal-display" data-id="${item.id}">${subtotal > 0 ? formatVND(subtotal) : '—'}</span>
      </div>
    </div>
  `;
}

function attachItemEvents() {
  // Quantity inputs
  document.querySelectorAll('.qty-input').forEach(input => {
    input.addEventListener('input', function () {
      const id = this.dataset.id;
      let val = parseInt(this.value) || 0;
      if (val < 0) val = 0;
      if (val > 99) val = 99;
      state[activeTab][id].qty = val;
      updateSubtotal(id);
      updateResult();
    });
  });

  // Plus buttons
  document.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', function () {
      const id = this.dataset.id;
      let qty = state[activeTab][id].qty;
      if (qty < 99) {
        state[activeTab][id].qty = qty + 1;
        const input = document.querySelector(`.qty-input[data-id="${id}"]`);
        if (input) input.value = state[activeTab][id].qty;
        updateSubtotal(id);
        updateResult();
      }
    });
  });

  // Minus buttons
  document.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', function () {
      const id = this.dataset.id;
      let qty = state[activeTab][id].qty;
      if (qty > 0) {
        state[activeTab][id].qty = qty - 1;
        const input = document.querySelector(`.qty-input[data-id="${id}"]`);
        if (input) input.value = state[activeTab][id].qty;
        updateSubtotal(id);
        updateResult();
      }
    });
  });
}

function updateSubtotal(itemId) {
  const s = state[activeTab][itemId];
  // Find the item price
  let price = 0;
  const group = UNIFORM_DATA[activeTab];
  const found = group.items.find(i => i.id === itemId);
  if (found) {
    price = found.price;
  } else {
    const sharedFound = SHARED_ITEMS.find(i => i.id === itemId);
    if (sharedFound) price = sharedFound.price;
  }

  const subtotal = s.qty > 0 ? price * s.qty : 0;
  const el = document.querySelector(`.subtotal-display[data-id="${itemId}"]`);
  if (el) {
    el.textContent = subtotal > 0 ? formatVND(subtotal) : '—';
  }

  // Also update progress if exists
  updateProgressBar();
}

function updateProgressBar() {
  const group = UNIFORM_DATA[activeTab];
  if (!group.maxBudget) return;

  const total = calcTabTotal(activeTab);
  const pct = Math.min((total / group.maxBudget) * 100, 150); // cap visual at 150%
  const displayPct = Math.min(pct, 100);

  const fill = document.querySelector('.progress-bar-fill');
  const pctLabel = fill?.parentElement?.nextElementSibling;
  const usedLabel = fill?.parentElement?.previousElementSibling;

  if (fill) {
    fill.style.width = displayPct + '%';
    if (pct > 100) {
      fill.style.background = 'linear-gradient(90deg, #F87171, #EF4444)';
    } else if (pct > 85) {
      fill.style.background = 'linear-gradient(90deg, #FBBF24, #F59E0B)';
    } else {
      fill.style.background = 'linear-gradient(90deg, #34D399, #10B981)';
    }
  }
  if (pctLabel) {
    pctLabel.textContent = Math.min(pct, 999).toFixed(0) + '%';
    pctLabel.style.color = pct > 100 ? 'var(--red)' : 'var(--gold)';
  }
  if (usedLabel) {
    usedLabel.textContent = 'Đã dùng: ' + formatVND(total);
  }
}

// ──────────── RESULT BAR ────────────

function updateResult() {
  const total = calcGrandTotal();
  const group = UNIFORM_DATA[activeTab];
  const maxBudget = group.maxBudget;

  // Total display
  const totalEl = document.getElementById('total-amount');
  if (totalEl) {
    totalEl.textContent = formatVND(total);
    // Animate
    totalEl.classList.remove('fade-in');
    void totalEl.offsetWidth; // reflow trick
    totalEl.classList.add('fade-in');
  }

  // Comparison
  const compEl = document.getElementById('budget-comparison');
  if (compEl) {
    if (maxBudget === null) {
      compEl.innerHTML = `<span style="color:var(--slate)">${icon('info', 'icon-sm')} Tab này không có giới hạn định mức</span>`;
    } else {
      const diff = maxBudget - total;
      if (diff > 0) {
        compEl.innerHTML = `<span style="color:var(--emerald)">${icon('check_circle', 'icon-sm')} Tiết kiệm ${formatVND(diff)} so với định mức</span>`;
      } else if (diff < 0) {
        compEl.innerHTML = `<span style="color:var(--red)">${icon('x_circle', 'icon-sm')} Vượt ${formatVND(Math.abs(diff))} so với định mức</span>`;
      } else {
        compEl.innerHTML = `<span style="color:var(--gold)">${icon('check_badge', 'icon-sm')} Đúng định mức</span>`;
      }
    }
  }

  // Tab summary badges
  updateTabSummary();
}

function updateTabSummary() {
  const container = document.getElementById('tab-summary');
  if (!container) return;
  let html = '';
  TAB_KEYS.forEach(key => {
    if (key === 'khac') return; // Skip showing khac in summary since it's shared
    const total = calcTabTotal(key);
    const group = UNIFORM_DATA[key];
    if (total > 0) {
      const overBudget = group.maxBudget && total > group.maxBudget;
      html += `<span class="text-xs px-3 py-1 rounded-full font-semibold inline-block mr-2 mb-1"
                style="background:${overBudget ? 'rgba(248,113,113,0.15)' : 'rgba(52,211,153,0.15)'}; 
                       color:${overBudget ? 'var(--red)' : 'var(--emerald)'}; 
                       border:1px solid ${overBudget ? 'rgba(248,113,113,0.3)' : 'rgba(52,211,153,0.3)'}">
                ${group.shortLabel}: ${formatVND(total)}
              </span>`;
    }
  });
  container.innerHTML = html;
}

// ──────────── ACTIONS ────────────

function resetAll() {
  if (!confirm('Bạn có chắc muốn xóa tất cả dữ liệu đã nhập?')) return;
  initState();
  renderContent();
  updateResult();
}

function recalculate() {
  initState();
  renderContent();
  updateResult();
}

function exportPDF() {
  // Gather summary
  let summary = '=== BÁO CÁO CHI PHÍ ĐỒNG PHỤC ===\n\n';
  TAB_KEYS.forEach(key => {
    const group = UNIFORM_DATA[key];
    const total = calcTabTotal(key);
    if (total > 0) {
      summary += `${group.textLabel}: ${formatVND(total)}`;
      if (group.maxBudget) {
        const diff = group.maxBudget - total;
        summary += diff >= 0 ? ` (Tiết kiệm ${formatVND(diff)})` : ` (Vượt ${formatVND(Math.abs(diff))})`;
      }
      summary += '\n';

      // Item details
      const tabState = state[key];
      group.items.forEach(item => {
        const s = tabState[item.id];
        if (s && s.qty > 0) {
          summary += `  - ${item.name}: ${s.qty} x ${formatVND(item.price)} = ${formatVND(item.price * s.qty)}\n`;
        }
      });
      SHARED_ITEMS.forEach(item => {
        const s = tabState[item.id];
        if (s && s.qty > 0) {
          summary += `  - ${item.name} (chung): ${s.qty} x ${formatVND(item.price)} = ${formatVND(item.price * s.qty)}\n`;
        }
      });
      summary += '\n';
    }
  });

  alert('Đã xuất file PDF!\n\n' + summary);
}

// ──────────── KEYBOARD SHORTCUT ────────────
document.addEventListener('keydown', function (e) {
  // Ctrl+R or F5 - prevent only if we want custom behavior (disabled, let browser refresh)
  // Tab switching with Alt+1-4
  if (e.altKey && e.key >= '1' && e.key <= '4') {
    e.preventDefault();
    const idx = parseInt(e.key) - 1;
    if (TAB_KEYS[idx]) switchTab(TAB_KEYS[idx]);
  }
});

// ──────────── FOOTER PADDING ────────────
function updateBodyPadding() {
  const footer = document.querySelector('.result-bar');
  if (footer) document.body.style.paddingBottom = (footer.offsetHeight + 20) + 'px';
}

// ──────────── INIT ────────────
document.addEventListener('DOMContentLoaded', function () {
  initState();
  renderTabs();
  renderContent();
  updateResult();

  // Wire up header buttons
  document.getElementById('btn-reset')?.addEventListener('click', resetAll);
  document.getElementById('btn-recalc')?.addEventListener('click', recalculate);
  document.getElementById('btn-export')?.addEventListener('click', exportPDF);

  // Dynamically pad body so fixed footer never overlaps content
  updateBodyPadding();
  new ResizeObserver(updateBodyPadding).observe(document.querySelector('.result-bar'));
});
