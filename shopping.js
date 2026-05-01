/* ===========================================================================
   pk · Clinic Shopping List — shopping.js
   ----------------------------------------------------------------------------
   Mode: Authenticated (Google login via auth.js — Alex only)
   - Uses window.PK.supabase from auth.js
   - CRUD for clinic_shopping table
   - Features: add/edit/delete, check-off, filter (status + category),
               quantity, unit, price, notes, budget summary
   =========================================================================== */
(function () {
  'use strict';

  // ---------- Categories ---------------------------------------------------
  const CATEGORIES = {
    medicine:   { label: 'ยา',         emoji: '💊', color: '#E63946' },
    consumable: { label: 'สิ้นเปลือง', emoji: '📦', color: '#F77F00' },
    equipment:  { label: 'อุปกรณ์',     emoji: '🔧', color: '#277DA1' },
    other:      { label: 'อื่นๆ',       emoji: '📌', color: '#7B2CBF' },
  };

  // ---------- State --------------------------------------------------------
  const state = {
    items: [],
    statusFilter: 'pending',   // pending | done | all
    catFilter: 'all',           // all | medicine | consumable | equipment | other
    sb: null,
    user: null,
  };

  // ---------- DOM helpers --------------------------------------------------
  const $ = (id) => document.getElementById(id);

  // ---------- Format helpers -----------------------------------------------
  function fmtMoney(n) {
    if (n == null || isNaN(n)) return '฿ 0';
    return '฿ ' + Math.round(Number(n)).toLocaleString('th-TH');
  }
  function fmtQty(n, unit) {
    if (n == null || isNaN(n) || Number(n) === 0) return unit || '';
    const num = Number(n);
    const pretty = Number.isInteger(num) ? num : num.toFixed(2).replace(/\.?0+$/, '');
    return pretty + (unit ? ' ' + unit : '');
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

  // ---------- Wait for Supabase from auth.js -------------------------------
  function waitForAuth() {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const check = () => {
        attempts++;
        if (window.PK && window.PK.supabase) {
          state.sb = window.PK.supabase;
          state.sb.auth.getSession().then(({ data, error }) => {
            if (data && data.session) {
              state.user = data.session.user;
              resolve();
            } else {
              state.sb.auth.onAuthStateChange((event, session) => {
                if (session && session.user) {
                  state.user = session.user;
                  resolve();
                }
              });
            }
          }).catch(reject);
        } else if (attempts < 50) {
          setTimeout(check, 100);
        } else {
          reject(new Error('Supabase not loaded'));
        }
      };
      check();
    });
  }

  // ===========================================================================
  // DATA CRUD
  // ===========================================================================
  async function loadItems() {
    try {
      const { data, error } = await state.sb
        .from('clinic_shopping')
        .select('*')
        .order('is_completed', { ascending: true })
        .order('created_at', { ascending: false });
      if (error) throw error;
      state.items = data || [];
    } catch (e) {
      console.error('Load failed:', e);
      showToast('โหลดข้อมูลไม่สำเร็จ: ' + (e.message || 'unknown'), 'error');
      state.items = [];
      throw e;
    }
  }

  async function saveItem(payload) {
    const isEdit = !!payload.id;
    const row = {
      name: payload.name,
      quantity: payload.quantity != null ? Number(payload.quantity) : null,
      unit: payload.unit || null,
      category: payload.category || 'other',
      price: payload.price != null ? Number(payload.price) : null,
      notes: payload.notes || null,
    };

    if (isEdit) {
      const { data, error } = await state.sb
        .from('clinic_shopping')
        .update(row)
        .eq('id', payload.id)
        .select();
      if (error) throw error;
      return data && data[0];
    } else {
      const { data, error } = await state.sb
        .from('clinic_shopping')
        .insert([row])
        .select();
      if (error) throw error;
      return data && data[0];
    }
  }

  async function toggleItemDone(id, isCompleted) {
    const { error } = await state.sb
      .from('clinic_shopping')
      .update({
        is_completed: isCompleted,
        completed_at: isCompleted ? new Date().toISOString() : null
      })
      .eq('id', id);
    if (error) throw error;
  }

  async function deleteItem(id) {
    const { error } = await state.sb
      .from('clinic_shopping')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }

  async function clearAllDone() {
    const { error } = await state.sb
      .from('clinic_shopping')
      .delete()
      .eq('is_completed', true);
    if (error) throw error;
  }

  // ===========================================================================
  // CALCULATIONS
  // ===========================================================================
  function calcStats() {
    let pending = 0, done = 0, budget = 0;
    state.items.forEach(item => {
      if (item.is_completed) {
        done++;
      } else {
        pending++;
        if (item.price && item.quantity) {
          budget += Number(item.price) * Number(item.quantity);
        } else if (item.price) {
          budget += Number(item.price);
        }
      }
    });
    return { pending, done, budget };
  }

  // ===========================================================================
  // RENDER
  // ===========================================================================
  function renderStats() {
    const stats = calcStats();
    $('ssPending').textContent = stats.pending;
    $('ssDone').textContent = stats.done;
    $('ssBudget').textContent = fmtMoney(stats.budget);
  }

  function getFilteredItems() {
    let items = state.items;

    // Status filter
    if (state.statusFilter === 'pending') {
      items = items.filter(x => !x.is_completed);
    } else if (state.statusFilter === 'done') {
      items = items.filter(x => x.is_completed);
    }

    // Category filter
    if (state.catFilter !== 'all') {
      items = items.filter(x => x.category === state.catFilter);
    }

    return items;
  }

  function renderList() {
    const list = $('shopList');
    const filtered = getFilteredItems();

    if (filtered.length === 0) {
      const msg = state.statusFilter === 'done'
        ? 'ยังไม่มีรายการที่ซื้อแล้ว'
        : (state.catFilter !== 'all'
          ? 'ไม่มีรายการในหมวดนี้'
          : 'ยังไม่มีรายการ — กดปุ่มด้านบนเพื่อเริ่ม 🛒');
      list.innerHTML = `<div class="empty-msg">${msg}</div>`;
      return;
    }

    // Group by category (only when showing all categories + pending)
    if (state.catFilter === 'all' && state.statusFilter !== 'done') {
      const groups = {};
      filtered.forEach(item => {
        const cat = item.category || 'other';
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(item);
      });
      const order = ['medicine', 'consumable', 'equipment', 'other'];
      let html = '';
      order.forEach(catKey => {
        if (!groups[catKey] || groups[catKey].length === 0) return;
        const cat = CATEGORIES[catKey];
        html += `<div class="shop-group">`;
        html += `<div class="shop-group-header">
          <span class="sg-emoji">${cat.emoji}</span>
          <span class="sg-label">${cat.label}</span>
          <span class="sg-count">${groups[catKey].length}</span>
        </div>`;
        groups[catKey].forEach(item => { html += renderItem(item); });
        html += `</div>`;
      });
      list.innerHTML = html;
    } else {
      let html = '';
      filtered.forEach(item => { html += renderItem(item); });
      list.innerHTML = html;
    }

    // Wire checkbox + click events
    list.querySelectorAll('.shop-item').forEach(el => {
      // Click anywhere on item (except checkbox) → edit
      el.addEventListener('click', (e) => {
        if (e.target.closest('.shop-check')) return;
        const id = el.dataset.id;
        const item = state.items.find(x => x.id === id);
        if (item) openModal(item);
      });
    });
    list.querySelectorAll('.shop-check').forEach(el => {
      el.addEventListener('click', async (e) => {
        e.stopPropagation();
        const id = el.dataset.id;
        const item = state.items.find(x => x.id === id);
        if (!item) return;
        try {
          await toggleItemDone(id, !item.is_completed);
          await loadItems();
          renderAll();
        } catch (err) {
          showToast('ไม่สำเร็จ: ' + (err.message || ''), 'error');
        }
      });
    });
  }

  function renderItem(item) {
    const cat = CATEGORIES[item.category] || CATEGORIES.other;
    const isDone = !!item.is_completed;
    const qtyText = fmtQty(item.quantity, item.unit);
    const subParts = [];
    if (qtyText) subParts.push(qtyText);
    if (item.price) {
      const total = item.quantity ? Number(item.price) * Number(item.quantity) : Number(item.price);
      subParts.push(fmtMoney(total));
    }
    const sub = subParts.join(' · ');
    const notes = item.notes ? `<div class="si-notes">📝 ${escapeHtml(item.notes)}</div>` : '';

    return `
      <div class="shop-item ${isDone ? 'done' : ''}" data-id="${item.id}">
        <button class="shop-check" data-id="${item.id}" type="button" aria-label="${isDone ? 'ยกเลิก' : 'เช็ค'}">
          ${isDone
            ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
            : ``}
        </button>
        <span class="si-body">
          <span class="si-name">${escapeHtml(item.name)}</span>
          ${sub ? `<span class="si-meta">${escapeHtml(sub)}</span>` : ''}
          ${notes}
        </span>
        ${state.catFilter !== 'all' || state.statusFilter === 'done'
          ? `<span class="si-cat-tag" style="--tag-color: ${cat.color}">${cat.emoji}</span>`
          : ''}
      </div>
    `;
  }

  // ===========================================================================
  // MODAL
  // ===========================================================================
  function openModal(item) {
    const isEdit = !!item;
    $('modalTitle').textContent = isEdit ? 'แก้ไขรายการ' : 'เพิ่มรายการใหม่';
    $('formId').value = isEdit ? item.id : '';
    $('formName').value = isEdit ? item.name : '';
    $('formQty').value = isEdit && item.quantity != null ? item.quantity : '';
    $('formUnit').value = isEdit && item.unit ? item.unit : '';
    $('formPrice').value = isEdit && item.price != null ? item.price : '';
    $('formNotes').value = isEdit && item.notes ? item.notes : '';
    const cat = isEdit ? (item.category || 'other') : 'other';
    $('formCategory').value = cat;
    document.querySelectorAll('#catGrid .cat-btn').forEach(b => {
      b.classList.toggle('selected', b.dataset.cat === cat);
    });
    $('btnDelete').style.display = isEdit ? '' : 'none';
    $('modalBackdrop').classList.add('show');
    setTimeout(() => $('formName').focus(), 200);
  }

  function closeModal() {
    $('modalBackdrop').classList.remove('show');
    $('itemForm').reset();
  }

  // ===========================================================================
  // FORM SUBMIT
  // ===========================================================================
  async function handleFormSubmit(e) {
    e.preventDefault();
    const id = $('formId').value;
    const name = $('formName').value.trim();
    const qty = $('formQty').value.trim();
    const unit = $('formUnit').value.trim();
    const category = $('formCategory').value || 'other';
    const price = $('formPrice').value.trim();
    const notes = $('formNotes').value.trim();

    if (!name) {
      showToast('ใส่ชื่อรายการก่อน', 'error');
      $('formName').focus();
      return;
    }

    let payload = { name, unit, category, notes };
    if (id) payload.id = id;
    if (qty) {
      const q = parseFloat(qty);
      if (isNaN(q) || q < 0) { showToast('จำนวนไม่ถูกต้อง', 'error'); return; }
      payload.quantity = q;
    } else {
      payload.quantity = null;
    }
    if (price) {
      const p = parseFloat(price);
      if (isNaN(p) || p < 0) { showToast('ราคาไม่ถูกต้อง', 'error'); return; }
      payload.price = p;
    } else {
      payload.price = null;
    }

    const saveBtn = $('btnSave');
    saveBtn.disabled = true;
    saveBtn.textContent = 'กำลังบันทึก...';

    try {
      await saveItem(payload);
      showToast(id ? 'แก้ไขแล้ว ✓' : 'เพิ่มแล้ว ✓', 'success');
      closeModal();
      await loadItems();
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
      await deleteItem(id);
      showToast('ลบแล้ว ✓', 'success');
      closeModal();
      await loadItems();
      renderAll();
    } catch (err) {
      showToast('ลบไม่สำเร็จ: ' + (err.message || ''), 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = 'ลบรายการ';
    }
  }

  async function handleClearDone() {
    const stats = calcStats();
    if (stats.done === 0) {
      showToast('ไม่มีรายการที่ซื้อแล้ว', 'info');
      return;
    }
    if (!confirm(`ลบรายการที่ซื้อแล้วทั้งหมด ${stats.done} รายการ?`)) return;
    try {
      await clearAllDone();
      showToast('ลบแล้ว ✓', 'success');
      await loadItems();
      renderAll();
    } catch (err) {
      showToast('ลบไม่สำเร็จ: ' + (err.message || ''), 'error');
    }
  }

  // ===========================================================================
  // RENDER ALL
  // ===========================================================================
  function renderAll() {
    renderStats();
    renderList();
  }

  // ===========================================================================
  // EVENTS
  // ===========================================================================
  function wireEvents() {
    $('btnAdd').addEventListener('click', () => openModal(null));
    $('modalClose').addEventListener('click', closeModal);
    $('btnCancel').addEventListener('click', closeModal);
    $('modalBackdrop').addEventListener('click', (e) => {
      if (e.target === $('modalBackdrop')) closeModal();
    });
    $('itemForm').addEventListener('submit', handleFormSubmit);
    $('btnDelete').addEventListener('click', handleDelete);
    $('btnClearDone').addEventListener('click', handleClearDone);

    // Category buttons in modal
    document.querySelectorAll('#catGrid .cat-btn').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('#catGrid .cat-btn').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
        $('formCategory').value = b.dataset.cat;
      });
    });

    // Status filter buttons
    document.querySelectorAll('.sf-btn').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.sf-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        state.statusFilter = b.dataset.filter;
        renderList();
      });
    });

    // Category filter buttons
    document.querySelectorAll('.sf-cat-btn').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.sf-cat-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        state.catFilter = b.dataset.cat;
        renderList();
      });
    });
    // Set default active for category filter
    const allBtn = document.querySelector('.sf-cat-btn[data-cat="all"]');
    if (allBtn) allBtn.classList.add('active');

    // Number input sanitization
    ['formQty', 'formPrice'].forEach(id => {
      const el = $(id);
      if (el) {
        el.addEventListener('input', (e) => {
          let v = e.target.value.replace(/[^0-9.]/g, '');
          const parts = v.split('.');
          if (parts.length > 2) v = parts[0] + '.' + parts.slice(1).join('');
          e.target.value = v;
        });
      }
    });
  }

  // ===========================================================================
  // INIT
  // ===========================================================================
  async function init() {
    try {
      await waitForAuth();
      wireEvents();
      await loadItems();
      renderAll();
    } catch (e) {
      console.error('Init failed:', e);
      const list = $('shopList');
      if (list) {
        list.innerHTML = `
          <div class="error-msg">
            <strong>เริ่มต้นไม่สำเร็จ:</strong> ${escapeHtml(e.message || 'unknown')}<br><br>
            ตรวจสอบ:<br>
            • ได้ login Google แล้วหรือยัง<br>
            • Database table สร้างแล้วหรือยัง (รัน supabase-setup.sql)<br>
            • Internet connection
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
