/* ===========================================================================
   pk · Shared Expense Tracker — shared.js
   ----------------------------------------------------------------------------
   Mode: PUBLIC read + PIN-gated write
   - Anyone can VIEW data (public read)
   - PIN required to ADD/EDIT/DELETE (4-digit PIN, stored per-device)
   - Direct Supabase connection (no auth.js dependency)
   =========================================================================== */
(function () {
  'use strict';

  // ===========================================================================
  // 🔧 ตั้งค่า PIN ที่นี่ — Alex แก้ตามต้องการ
  // ============================================================================
  const APP_PIN = '2024';   // ⬅️  เปลี่ยน PIN ตรงนี้! บอก Jojo PIN นี้ครั้งเดียว
  // ============================================================================

  // Supabase config
  const SUPABASE_URL      = 'https://bxlyctricjayindvcfjo.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4bHljdHJpY2pheWluZHZjZmpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NDE2NTAsImV4cCI6MjA5MzAxNzY1MH0.8b-UqK-SW1dOyZ0WhAC5NBns8lAe1kTgn2xJMiHvaRA';

  const PIN_STORAGE_KEY = 'pk_shared_pin_verified_v1';

  // ---------- Categories ---------------------------------------------------
  const CATEGORIES = [
    { id: 'food',          label: 'อาหาร',     emoji: '🍔' },
    { id: 'groceries',     label: 'ของใช้',    emoji: '🛒' },
    { id: 'travel',        label: 'ท่องเที่ยว', emoji: '✈️' },
    { id: 'transport',     label: 'เดินทาง',    emoji: '🚗' },
    { id: 'entertainment', label: 'บันเทิง',    emoji: '🎬' },
    { id: 'health',        label: 'สุขภาพ',    emoji: '💊' },
    { id: 'gifts',         label: 'ของขวัญ',   emoji: '🎁' },
    { id: 'other',         label: 'อื่นๆ',     emoji: '💡' },
  ];
  const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

  // ---------- State --------------------------------------------------------
  const state = {
    transactions: [],
    filter: 'all',
    chartView: 'monthly',
    chartInstance: null,
    sb: null,
    pendingType: null,
  };

  // ---------- DOM helpers --------------------------------------------------
  const $ = (id) => document.getElementById(id);

  // ---------- Format helpers -----------------------------------------------
  function fmtMoney(n, decimals = 2) {
    if (n == null || isNaN(n)) return '฿ 0.00';
    return '฿ ' + Number(n).toLocaleString('th-TH', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }
  function fmtMoneyShort(n) {
    if (n == null || isNaN(n)) return '฿ 0';
    return '฿ ' + Math.round(Number(n)).toLocaleString('th-TH');
  }
  function fmtDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T00:00:00');
    const days = ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'];
    const months = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
    return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
  }
  function getMonthKey(dateStr) {
    return dateStr ? dateStr.substring(0, 7) : '';
  }
  function getCurrentMonthKey() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
  }
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  // ---------- Toast --------------------------------------------------------
  let toastTimer = null;
  function showToast(msg, type = 'info') {
    const t = $('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = 'toast show ' + type;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.className = 'toast'; }, 3000);
  }

  // ---------- Clock --------------------------------------------------------
  function startClock() {
    const el = $('clock');
    if (!el) return;
    const tick = () => {
      const d = new Date();
      el.textContent = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
    };
    tick();
    setInterval(tick, 30000);
  }

  // ===========================================================================
  // PIN GATE
  // ===========================================================================
  function isPinVerified() {
    try { return localStorage.getItem(PIN_STORAGE_KEY) === 'true'; }
    catch (e) { return false; }
  }
  function setPinVerified() {
    try { localStorage.setItem(PIN_STORAGE_KEY, 'true'); }
    catch (e) { /* ignore */ }
  }

  function requirePin() {
    return new Promise((resolve, reject) => {
      if (isPinVerified()) {
        resolve();
        return;
      }
      const backdrop = $('pinBackdrop');
      const input    = $('pinInput');
      const error    = $('pinError');
      const submit   = $('pinSubmit');
      const cancel   = $('pinCancel');
      const close    = $('pinClose');

      backdrop.classList.add('show');
      input.value = '';
      error.textContent = '';
      setTimeout(() => input.focus(), 150);

      function done(success) {
        cleanup();
        backdrop.classList.remove('show');
        if (success) resolve();
        else reject(new Error('cancelled'));
      }

      function trySubmit() {
        const v = (input.value || '').trim();
        if (!v) {
          error.textContent = 'ใส่ PIN ก่อนนะ';
          return;
        }
        if (v === APP_PIN) {
          setPinVerified();
          showToast('ปลดล็อคแล้ว ✓', 'success');
          done(true);
        } else {
          error.textContent = 'PIN ไม่ถูกต้อง ลองใหม่';
          input.value = '';
          input.focus();
          // Subtle shake
          const m = document.querySelector('.pin-modal');
          if (m) {
            m.classList.add('shake');
            setTimeout(() => m.classList.remove('shake'), 400);
          }
        }
      }

      function onKey(e) {
        if (e.key === 'Enter') { e.preventDefault(); trySubmit(); }
        if (e.key === 'Escape') { e.preventDefault(); done(false); }
      }
      function onBackdropClick(e) {
        if (e.target === backdrop) done(false);
      }

      submit.addEventListener('click', trySubmit);
      cancel.addEventListener('click', () => done(false));
      close.addEventListener('click', () => done(false));
      input.addEventListener('keydown', onKey);
      backdrop.addEventListener('click', onBackdropClick);

      function cleanup() {
        submit.removeEventListener('click', trySubmit);
        cancel.removeEventListener('click', () => done(false));
        close.removeEventListener('click', () => done(false));
        input.removeEventListener('keydown', onKey);
        backdrop.removeEventListener('click', onBackdropClick);
      }
    });
  }

  // ===========================================================================
  // SUPABASE SETUP
  // ===========================================================================
  function initSupabase() {
    if (!window.supabase || !window.supabase.createClient) {
      throw new Error('Supabase library not loaded — เช็ค WiFi');
    }
    state.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: false },
    });
  }

  // ===========================================================================
  // DATA CRUD
  // ===========================================================================
  async function loadTransactions() {
    try {
      const { data, error } = await state.sb
        .from('shared_transactions')
        .select('*')
        .order('date', { ascending: false })
        .order('created_at', { ascending: false });
      if (error) throw error;
      state.transactions = data || [];
    } catch (e) {
      console.error('Load failed:', e);
      showToast('โหลดข้อมูลไม่สำเร็จ: ' + (e.message || 'unknown'), 'error');
      state.transactions = [];
      throw e;
    }
  }

  async function saveTransaction(payload) {
    const isEdit = !!payload.id;
    const row = {
      type: payload.type,
      amount: Number(payload.amount),
      category: payload.type === 'expense' ? payload.category : null,
      payer: payload.payer || null,
      description: payload.description || null,
      date: payload.date,
    };
    if (!isEdit) row.created_by = 'public';

    if (isEdit) {
      const { data, error } = await state.sb
        .from('shared_transactions')
        .update(row)
        .eq('id', payload.id)
        .select();
      if (error) throw error;
      return data && data[0];
    } else {
      const { data, error } = await state.sb
        .from('shared_transactions')
        .insert([row])
        .select();
      if (error) throw error;
      return data && data[0];
    }
  }

  async function deleteTransaction(id) {
    const { error } = await state.sb
      .from('shared_transactions')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }

  // ===========================================================================
  // CALCULATIONS
  // ===========================================================================
  function calcStats() {
    const stats = {
      balance: 0,
      alexDeposit: 0,
      jojoDeposit: 0,
      totalSpent: 0,
      monthSpent: 0,
      monthDeposit: 0,
      monthCount: 0,
      monthByCategory: {},
    };
    const currentMonth = getCurrentMonthKey();

    state.transactions.forEach(t => {
      const amount = Number(t.amount);
      if (t.type === 'deposit') {
        stats.balance += amount;
        if (t.payer === 'alex') stats.alexDeposit += amount;
        else if (t.payer === 'jojo') stats.jojoDeposit += amount;
      } else if (t.type === 'expense') {
        stats.balance -= amount;
        stats.totalSpent += amount;
      }
      if (getMonthKey(t.date) === currentMonth) {
        if (t.type === 'expense') {
          stats.monthSpent += amount;
          stats.monthCount++;
          const cat = t.category || 'other';
          stats.monthByCategory[cat] = (stats.monthByCategory[cat] || 0) + amount;
        } else if (t.type === 'deposit') {
          stats.monthDeposit += amount;
        }
      }
    });

    return stats;
  }

  // ===========================================================================
  // RENDER
  // ===========================================================================
  function renderBalance(stats) {
    const card = $('balanceCard');
    $('balanceAmount').textContent = fmtMoney(stats.balance);
    $('alexDeposit').textContent = fmtMoneyShort(stats.alexDeposit);
    $('jojoDeposit').textContent = fmtMoneyShort(stats.jojoDeposit);
    $('totalSpent').textContent = fmtMoneyShort(stats.totalSpent);
    card.classList.toggle('low-balance', stats.balance < 1000 && stats.balance >= 0);
    card.classList.toggle('negative-balance', stats.balance < 0);
  }

  function renderMonthSummary(stats) {
    const months = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
    const d = new Date();
    $('msMonthLabel').textContent = `${months[d.getMonth()]} ${d.getFullYear() + 543}`;
    $('msSpent').textContent = fmtMoneyShort(stats.monthSpent);
    $('msDeposit').textContent = fmtMoneyShort(stats.monthDeposit);
    $('msCount').textContent = stats.monthCount;

    const catEl = $('msCategories');
    catEl.innerHTML = '';
    const sorted = Object.entries(stats.monthByCategory).sort((a, b) => b[1] - a[1]);
    if (sorted.length === 0) {
      catEl.innerHTML = '<div class="ms-empty">ยังไม่มีรายจ่ายเดือนนี้</div>';
      return;
    }
    sorted.forEach(([catId, amount]) => {
      const cat = CATEGORY_MAP[catId] || { label: catId, emoji: '💡' };
      const pct = stats.monthSpent > 0 ? Math.round((amount / stats.monthSpent) * 100) : 0;
      const row = document.createElement('div');
      row.className = 'ms-cat-row';
      row.innerHTML = `
        <span class="ms-cat-emoji">${cat.emoji}</span>
        <span class="ms-cat-label">${escapeHtml(cat.label)}</span>
        <span class="ms-cat-bar"><span class="ms-cat-fill" style="width:${pct}%"></span></span>
        <span class="ms-cat-amount">${fmtMoneyShort(amount)}</span>
        <span class="ms-cat-pct">${pct}%</span>
      `;
      catEl.appendChild(row);
    });
  }

  function renderChart() {
    const canvas = $('mainChart');
    if (!canvas || !window.Chart) return;
    if (state.chartInstance) {
      state.chartInstance.destroy();
      state.chartInstance = null;
    }
    if (state.chartView === 'monthly') renderMonthlyChart(canvas);
    else renderCategoryChart(canvas);
  }

  function renderMonthlyChart(canvas) {
    const monthData = {};
    const now = new Date();
    const monthLabels = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
      monthData[key] = { spent: 0, deposit: 0, label: monthLabels[d.getMonth()] };
    }
    state.transactions.forEach(t => {
      const k = getMonthKey(t.date);
      if (monthData[k]) {
        if (t.type === 'expense') monthData[k].spent += Number(t.amount);
        else if (t.type === 'deposit') monthData[k].deposit += Number(t.amount);
      }
    });
    const keys = Object.keys(monthData);
    const labels = keys.map(k => monthData[k].label);
    const spentData = keys.map(k => monthData[k].spent);
    const depositData = keys.map(k => monthData[k].deposit);

    state.chartInstance = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          { label: 'รายจ่าย', data: spentData, backgroundColor: '#E76F51', borderRadius: 6 },
          { label: 'เติมเงิน', data: depositData, backgroundColor: '#2A9D8F', borderRadius: 6 },
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { font: { family: 'IBM Plex Sans, sans-serif' } } },
          tooltip: { callbacks: { label: (ctx) => ctx.dataset.label + ': ' + fmtMoneyShort(ctx.parsed.y) } }
        },
        scales: {
          y: { beginAtZero: true, ticks: { callback: (v) => fmtMoneyShort(v), font: { family: 'IBM Plex Sans, sans-serif', size: 11 } } },
          x: { ticks: { font: { family: 'IBM Plex Sans, sans-serif', size: 11 } } }
        }
      }
    });
  }

  function renderCategoryChart(canvas) {
    const catData = {};
    state.transactions.forEach(t => {
      if (t.type === 'expense') {
        const c = t.category || 'other';
        catData[c] = (catData[c] || 0) + Number(t.amount);
      }
    });
    const sorted = Object.entries(catData).sort((a, b) => b[1] - a[1]);
    const labels = sorted.map(([c]) => {
      const cat = CATEGORY_MAP[c] || { label: c, emoji: '💡' };
      return cat.emoji + ' ' + cat.label;
    });
    const data = sorted.map(([, v]) => v);
    const palette = ['#E63946','#F4A261','#E9C46A','#2A9D8F','#264653','#A663CC','#E76F51','#9B5DE5'];

    if (data.length === 0) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '14px "Noto Serif Thai", serif';
      ctx.fillStyle = '#999';
      ctx.textAlign = 'center';
      ctx.fillText('ยังไม่มีข้อมูลรายจ่าย', canvas.width / 2, canvas.height / 2);
      return;
    }

    state.chartInstance = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: palette.slice(0, labels.length),
          borderWidth: 2,
          borderColor: '#FAFAF7',
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { font: { family: 'IBM Plex Sans, sans-serif', size: 11 }, padding: 12 } },
          tooltip: { callbacks: { label: (ctx) => ctx.label + ': ' + fmtMoneyShort(ctx.parsed) } }
        }
      }
    });
  }

  function getFilteredTransactions() {
    const f = state.filter;
    if (f === 'all') return state.transactions;
    if (f === 'expense') return state.transactions.filter(t => t.type === 'expense');
    if (f === 'deposit') return state.transactions.filter(t => t.type === 'deposit');
    if (f === 'month') {
      const m = getCurrentMonthKey();
      return state.transactions.filter(t => getMonthKey(t.date) === m);
    }
    return state.transactions;
  }

  function renderTransList() {
    const list = $('transList');
    const filtered = getFilteredTransactions();
    $('transCount').textContent = `(${filtered.length})`;

    if (filtered.length === 0) {
      list.innerHTML = '<div class="empty-msg">ยังไม่มีรายการ — กดปุ่มด้านบนเพื่อเริ่ม</div>';
      return;
    }

    const groups = {};
    filtered.forEach(t => {
      if (!groups[t.date]) groups[t.date] = [];
      groups[t.date].push(t);
    });
    const sortedDates = Object.keys(groups).sort((a, b) => b.localeCompare(a));

    let html = '';
    const today = new Date().toISOString().substring(0, 10);
    const yest = new Date(Date.now() - 86400000).toISOString().substring(0, 10);

    sortedDates.forEach(date => {
      let dateLabel = fmtDate(date);
      if (date === today) dateLabel = 'วันนี้ · ' + dateLabel;
      else if (date === yest) dateLabel = 'เมื่อวาน · ' + dateLabel;

      html += `<div class="trans-date-group">`;
      html += `<div class="trans-date-label">${dateLabel}</div>`;
      groups[date].forEach(t => { html += renderTransItem(t); });
      html += `</div>`;
    });
    list.innerHTML = html;

    list.querySelectorAll('.trans-item').forEach(el => {
      el.addEventListener('click', async () => {
        try {
          await requirePin();
          const id = el.dataset.id;
          const t = state.transactions.find(x => x.id === id);
          if (t) openModal(t);
        } catch (e) { /* cancelled */ }
      });
    });
  }

  function renderTransItem(t) {
    const isExpense = t.type === 'expense';
    const cat = isExpense ? (CATEGORY_MAP[t.category] || { label: 'อื่นๆ', emoji: '💡' }) : null;
    const sign = isExpense ? '-' : '+';
    const cls = isExpense ? 'expense' : 'deposit';
    const icon = isExpense ? cat.emoji : '💰';
    const title = isExpense ? cat.label : 'เติมเงินกองกลาง';
    const sub = t.description || '';
    const payer = t.payer ? (t.payer === 'alex' ? 'Alex' : 'Jojo') : '';
    const subParts = [sub, payer ? (isExpense ? `${payer} จ่าย` : `${payer} เติม`) : ''].filter(Boolean);

    return `
      <div class="trans-item ${cls}" data-id="${t.id}">
        <span class="ti-icon">${icon}</span>
        <span class="ti-body">
          <span class="ti-title">${escapeHtml(title)}</span>
          ${subParts.length ? `<span class="ti-sub">${escapeHtml(subParts.join(' · '))}</span>` : ''}
        </span>
        <span class="ti-amount ${cls}">${sign}${fmtMoneyShort(t.amount)}</span>
      </div>
    `;
  }

  // ===========================================================================
  // MODAL — Add/Edit
  // ===========================================================================
  function openModal(transaction) {
    const isEdit = !!transaction;
    const isDeposit = isEdit && transaction.type === 'deposit';
    const type = isDeposit ? 'deposit' : (isEdit ? 'expense' : (state.pendingType || 'expense'));

    $('modalTitle').textContent = isEdit
      ? (isDeposit ? 'แก้ไขเติมเงิน' : 'แก้ไขรายจ่าย')
      : (type === 'deposit' ? 'เติมเงินกองกลาง' : 'บันทึกรายจ่าย');
    $('formId').value = isEdit ? transaction.id : '';
    $('formType').value = type;
    $('formDate').value = isEdit ? transaction.date : new Date().toISOString().substring(0, 10);
    $('formAmount').value = isEdit ? transaction.amount : '';
    $('formDesc').value = isEdit && transaction.description ? transaction.description : '';

    if (type === 'expense') {
      $('rowCategory').style.display = '';
      $('rowPayer').style.display = '';
      $('rowDepositor').style.display = 'none';
      const selectedCat = isEdit ? transaction.category : '';
      renderCategoryGrid(selectedCat);
      $('formCategory').value = selectedCat || '';
      const selectedPayer = isEdit ? transaction.payer : '';
      $('formPayer').value = selectedPayer || '';
      document.querySelectorAll('.payer-btn').forEach(b => {
        b.classList.toggle('selected', b.dataset.payer === selectedPayer);
      });
    } else {
      $('rowCategory').style.display = 'none';
      $('rowPayer').style.display = 'none';
      $('rowDepositor').style.display = '';
      const sel = isEdit ? transaction.payer : '';
      $('formPayer').value = sel || '';
      document.querySelectorAll('.depositor-btn').forEach(b => {
        b.classList.toggle('selected', b.dataset.depositor === sel);
      });
    }

    $('btnDelete').style.display = isEdit ? '' : 'none';
    $('modalBackdrop').classList.add('show');
  }

  function closeModal() {
    $('modalBackdrop').classList.remove('show');
    $('transForm').reset();
    state.pendingType = null;
  }

  function renderCategoryGrid(selected) {
    const grid = $('catGrid');
    grid.innerHTML = '';
    CATEGORIES.forEach(c => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cat-btn' + (c.id === selected ? ' selected' : '');
      btn.dataset.cat = c.id;
      btn.innerHTML = `<span class="cat-emoji">${c.emoji}</span><span class="cat-label">${c.label}</span>`;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        $('formCategory').value = c.id;
      });
      grid.appendChild(btn);
    });
  }

  // ===========================================================================
  // FORM SUBMIT
  // ===========================================================================
  async function handleFormSubmit(e) {
    e.preventDefault();
    const id = $('formId').value;
    const type = $('formType').value;
    const amount = parseFloat($('formAmount').value);
    const date = $('formDate').value;
    const description = $('formDesc').value.trim();

    if (!amount || isNaN(amount) || amount <= 0) {
      showToast('กรอกจำนวนเงินให้ถูกต้อง', 'error');
      $('formAmount').focus();
      return;
    }
    if (!date) {
      showToast('เลือกวันที่', 'error');
      return;
    }

    let payload = { type, amount, date, description };
    if (id) payload.id = id;

    if (type === 'expense') {
      const category = $('formCategory').value;
      const payer = $('formPayer').value;
      if (!category) { showToast('เลือกหมวดหมู่', 'error'); return; }
      if (!payer) { showToast('เลือกผู้จ่าย', 'error'); return; }
      payload.category = category;
      payload.payer = payer;
    } else {
      const depositor = $('formPayer').value;
      if (!depositor) { showToast('เลือกผู้เติมเงิน', 'error'); return; }
      payload.payer = depositor;
    }

    const saveBtn = $('btnSave');
    saveBtn.disabled = true;
    saveBtn.textContent = 'กำลังบันทึก...';

    try {
      await saveTransaction(payload);
      showToast(id ? 'แก้ไขแล้ว ✓' : 'บันทึกแล้ว ✓', 'success');
      closeModal();
      await loadTransactions();
      renderAll();
    } catch (err) {
      console.error(err);
      showToast('บันทึกไม่สำเร็จ: ' + (err.message || ''), 'error');
    } finally {
      saveBtn.disabled = false;
      saveBtn.textContent = 'บันทึก';
    }
  }

  async function handleDelete() {
    const id = $('formId').value;
    if (!id) return;
    if (!confirm('แน่ใจที่จะลบรายการนี้?')) return;

    const btn = $('btnDelete');
    btn.disabled = true;
    btn.textContent = 'กำลังลบ...';
    try {
      await deleteTransaction(id);
      showToast('ลบแล้ว ✓', 'success');
      closeModal();
      await loadTransactions();
      renderAll();
    } catch (err) {
      showToast('ลบไม่สำเร็จ: ' + (err.message || ''), 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = 'ลบรายการ';
    }
  }

  // ===========================================================================
  // EXPORT CSV
  // ===========================================================================
  function exportCSV() {
    if (state.transactions.length === 0) {
      showToast('ไม่มีรายการให้ export', 'info');
      return;
    }
    const headers = ['วันที่', 'ประเภท', 'จำนวน', 'หมวดหมู่', 'ผู้จ่าย/เติม', 'หมายเหตุ'];
    const rows = state.transactions.map(t => {
      const cat = t.category ? (CATEGORY_MAP[t.category]?.label || t.category) : '';
      const payerLbl = t.payer === 'alex' ? 'Alex' : (t.payer === 'jojo' ? 'Jojo' : '');
      const typeLbl = t.type === 'expense' ? 'รายจ่าย' : 'เติมเงิน';
      return [t.date, typeLbl, t.amount, cat, payerLbl, t.description || ''];
    });
    let csv = '\ufeff';
    csv += headers.join(',') + '\n';
    rows.forEach(r => {
      csv += r.map(v => {
        const s = String(v).replace(/"/g, '""');
        return /[",\n]/.test(s) ? `"${s}"` : s;
      }).join(',') + '\n';
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pk-shared-${new Date().toISOString().substring(0,10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Export แล้ว ✓', 'success');
  }

  // ===========================================================================
  // RENDER ALL
  // ===========================================================================
  function renderAll() {
    const stats = calcStats();
    renderBalance(stats);
    renderMonthSummary(stats);
    renderTransList();
    renderChart();
  }

  // ===========================================================================
  // EVENTS
  // ===========================================================================
  function wireEvents() {
    // Quick action buttons — gated by PIN
    $('btnAddExpense').addEventListener('click', async () => {
      try {
        await requirePin();
        state.pendingType = 'expense';
        openModal(null);
      } catch (e) { /* cancelled */ }
    });
    $('btnAddDeposit').addEventListener('click', async () => {
      try {
        await requirePin();
        state.pendingType = 'deposit';
        openModal(null);
      } catch (e) { /* cancelled */ }
    });

    // Modal close
    $('modalClose').addEventListener('click', closeModal);
    $('btnCancel').addEventListener('click', closeModal);
    $('modalBackdrop').addEventListener('click', (e) => {
      if (e.target === $('modalBackdrop')) closeModal();
    });
    $('transForm').addEventListener('submit', handleFormSubmit);
    $('btnDelete').addEventListener('click', handleDelete);
    $('btnExport').addEventListener('click', exportCSV);

    // Payer / Depositor button selection
    document.querySelectorAll('.payer-btn').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.payer-btn').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
        $('formPayer').value = b.dataset.payer;
      });
    });
    document.querySelectorAll('.depositor-btn').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.depositor-btn').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
        $('formPayer').value = b.dataset.depositor;
      });
    });

    // Filter buttons
    document.querySelectorAll('.tf-btn').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.tf-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        state.filter = b.dataset.filter;
        renderTransList();
      });
    });

    // Chart tabs
    document.querySelectorAll('.chart-tab').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.chart-tab').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        state.chartView = b.dataset.chart;
        renderChart();
      });
    });

    // Amount input — sanitize
    $('formAmount').addEventListener('input', (e) => {
      let v = e.target.value.replace(/[^0-9.]/g, '');
      const parts = v.split('.');
      if (parts.length > 2) v = parts[0] + '.' + parts.slice(1).join('');
      e.target.value = v;
    });

    // PIN input — only digits
    $('pinInput').addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
  }

  // ===========================================================================
  // INIT
  // ===========================================================================
  async function init() {
    try {
      startClock();
      initSupabase();
      wireEvents();
      await loadTransactions();
      renderAll();
    } catch (e) {
      console.error('Init failed:', e);
      const list = $('transList');
      if (list) {
        list.innerHTML = `
          <div class="error-msg">
            <strong>เริ่มต้นไม่สำเร็จ:</strong> ${escapeHtml(e.message || 'unknown error')}<br><br>
            ตรวจสอบ:<br>
            • Database table สร้างแล้วหรือยัง (รัน supabase-setup.sql)<br>
            • Internet connection<br>
            • Supabase ยัง online ไหม
          </div>
        `;
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
