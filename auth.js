/* ============================================================
   PK · shared auth + UI module
   Used by every page in the site:
   - Initializes Supabase client
   - Injects lock screen (only shown when not authed)
   - Injects settings modal (opened by any [data-action="open-settings"])
   - Wires Google Sign-in + email whitelist
   - Universal clock + eye-toggle helpers
   ============================================================ */
(function () {
  'use strict';

  // ---------- Visible Debug Overlay (mobile-friendly) ----------
  // Shows runtime errors directly on screen so iPad/iPhone users can
  // see what went wrong without opening Web Inspector.
  // Toggle: tap the lock screen logo 5 times to show.
  const DEBUG = {
    logs: [],
    add: function(msg, type) {
      const ts = new Date().toLocaleTimeString();
      this.logs.push({ ts, msg, type: type || 'info' });
      if (this.logs.length > 50) this.logs.shift();
      this.render();
    },
    render: function() {
      let panel = document.getElementById('pkDebugPanel');
      if (!panel) return;
      panel.innerHTML = this.logs.map(l =>
        '<div class="pk-dbg-line pk-dbg-' + l.type + '">' +
        '<span class="pk-dbg-ts">' + l.ts + '</span> ' +
        l.msg.replace(/&/g,'&amp;').replace(/</g,'&amp;lt;').replace(/>/g,'&amp;gt;') +
        '</div>'
      ).join('');
    },
    show: function() {
      let panel = document.getElementById('pkDebugPanel');
      if (panel) { panel.style.display = 'block'; this.render(); }
    },
    hide: function() {
      let panel = document.getElementById('pkDebugPanel');
      if (panel) panel.style.display = 'none';
    },
  };
  window.PK_DEBUG = DEBUG;

  // Catch ALL uncaught errors and show them
  window.addEventListener('error', function(e) {
    DEBUG.add('JS Error: ' + (e.message || 'unknown') + ' @ ' +
              (e.filename || '?') + ':' + (e.lineno || '?'), 'error');
    DEBUG.show();
  });
  window.addEventListener('unhandledrejection', function(e) {
    DEBUG.add('Promise rejected: ' + (e.reason && e.reason.message || e.reason || 'unknown'), 'error');
    DEBUG.show();
  });

  DEBUG.add('Script start', 'info');
  DEBUG.add('UA: ' + navigator.userAgent.substring(0, 80), 'info');
  DEBUG.add('URL: ' + window.location.href.substring(0, 80), 'info');

  // ---------- Touch Diagnostic Tool ------------------------------
  // When activated, taps anywhere will report the topmost element
  // that received the touch. Helps identify invisible blockers.
  window.PK_TouchDiag = {
    enabled: false,
    enable: function() {
      this.enabled = true;
      DEBUG.add('🔍 Touch diag ENABLED — tap anywhere', 'ok');
      DEBUG.show();
    },
    disable: function() {
      this.enabled = false;
      DEBUG.add('Touch diag disabled', 'info');
    },
  };
  document.addEventListener('touchstart', function(e) {
    if (!window.PK_TouchDiag.enabled) return;
    const t = e.touches[0];
    const el = document.elementFromPoint(t.clientX, t.clientY);
    if (el) {
      const desc = el.tagName +
        (el.id ? '#' + el.id : '') +
        (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ').slice(0,2).join('.') : '');
      DEBUG.add('TAP @ ' + Math.round(t.clientX) + ',' + Math.round(t.clientY) + ' → ' + desc.substring(0, 60), 'info');
    } else {
      DEBUG.add('TAP @ ' + Math.round(t.clientX) + ',' + Math.round(t.clientY) + ' → null', 'error');
    }
  }, { passive: true });

  // ---------- Configuration --------------------------------------
  const SUPABASE_URL      = 'https://bxlyctricjayindvcfjo.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4bHljdHJpY2pheWluZHZjZmpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NDE2NTAsImV4cCI6MjA5MzAxNzY1MH0.8b-UqK-SW1dOyZ0WhAC5NBns8lAe1kTgn2xJMiHvaRA';
  const ALLOWED_EMAILS    = ['carnitab@gmail.com'];

  // Verify Supabase library is loaded
  if (!window.supabase || !window.supabase.createClient) {
    DEBUG.add('FATAL: Supabase library not loaded! CDN may be blocked.', 'error');
    DEBUG.show();
    document.documentElement.classList.remove('checking');
    document.documentElement.classList.add('locked');
    // Try to show user-facing error after DOM ready
    document.addEventListener('DOMContentLoaded', function() {
      const msg = document.createElement('div');
      msg.style.cssText = 'position:fixed;top:50%;left:10%;right:10%;background:#fff;border:2px solid #c00;padding:20px;border-radius:12px;z-index:99999;text-align:center;font-family:sans-serif;';
      msg.innerHTML = '<h3 style="color:#c00;margin:0 0 10px">เชื่อมต่อ Supabase ไม่ได้</h3><p>CDN อาจถูก block หรือ network ช้า — ลองรีเฟรชหรือเช็ค WiFi</p>';
      document.body.appendChild(msg);
    });
    return;
  }
  DEBUG.add('✓ Supabase library loaded', 'ok');

  // ---------- HTML templates -------------------------------------
  const lockScreenHTML = `
    <div class="lock-screen" aria-modal="true" role="dialog" aria-label="ล็อกอินเข้าสู่ระบบ">
      <div class="lock-card" id="lockCard">
        <div class="pride-bar-mini" aria-hidden="true"></div>
        <div class="lock-title">สวัสดี</div>
        <p class="lock-sub">เว็บส่วนตัวของ Alex</p>
        <p class="msg error" id="loginMsg" aria-live="polite"></p>
        <button class="btn btn-google" type="button" id="googleSignInBtn"
                onclick="if(window.PK_TriggerSignIn) window.PK_TriggerSignIn(); else alert('Sign-in not ready, please refresh');">

          <svg class="g-logo" viewBox="0 0 18 18" aria-hidden="true">
            <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.583-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
            <path fill="#FBBC05" d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"/>
            <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.166 6.656 3.58 9 3.58z"/>
          </svg>
          <span>เข้าสู่ระบบด้วย Google</span>
        </button>
        <p class="lock-sub-note">เฉพาะอีเมลที่ได้รับอนุญาตเท่านั้น</p>
        <p class="lock-hint">PRIVATE · WITH PRIDE</p>
      </div>
    </div>
  `;

  const settingsModalHTML = `
    <div class="modal-backdrop" id="modalBackdrop" aria-hidden="true"></div>
    <div class="modal" id="settingsModal" role="dialog" aria-modal="true" aria-label="ตั้งค่า">
      <div class="modal-head">
        <h3>ตั้งค่า</h3>
        <button class="modal-close" id="modalClose" aria-label="ปิด">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 6l12 12M18 6L6 18"/>
          </svg>
        </button>
      </div>
      <section class="modal-section">
        <h4>บัญชี Google</h4>
        <p class="desc">Alex ล็อกอินด้วยบัญชีนี้</p>
        <div class="account-card" id="accountCard">
          <img class="account-avatar" id="accountAvatar" alt="" />
          <div class="account-info">
            <div class="account-name" id="accountName">—</div>
            <div class="account-email" id="accountEmail">—</div>
          </div>
          <span class="status-pill on" style="margin-bottom:0">
            <span class="dotpill"></span> ผ่านการยืนยัน
          </span>
        </div>
      </section>
      <section class="modal-section" id="logoutSection">
        <h4>ออกจากระบบ</h4>
        <p class="desc">ครั้งหน้าที่เปิดเว็บนี้ Alex จะต้องล็อกอินใหม่</p>
        <button class="btn btn-secondary" id="logoutBtn" type="button">ออกจากระบบ</button>
      </section>
      <section class="modal-section">
        <p class="desc" style="margin-bottom:0; font-size:13px;">
          🔐 ระบบยืนยันตัวตนผ่าน Google + Supabase — ปลอดภัย เข้ารหัสตามมาตรฐาน เฉพาะอีเมลที่ Alex อนุญาตเท่านั้นที่เข้าได้
        </p>
      </section>
    </div>
  `;

  // ---------- Inject UI -----------------------------------------
  // Debug UI (independent of lock screen — always visible after login too)
  const debugHTML = `
    <div id="pkDebugPanel" style="display:none;position:fixed;top:48px;right:8px;width:min(360px,calc(100vw - 16px));max-height:40vh;overflow-y:auto;background:rgba(0,0,0,0.92);color:#0f0;font-family:monospace;font-size:10px;line-height:1.3;padding:6px;z-index:99999;border:1px solid #0f0;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,0.4);">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;margin-bottom:4px;border-bottom:1px solid #444;padding-bottom:3px;position:sticky;top:0;background:rgba(0,0,0,0.92);">
        <strong style="color:#0ff;font-size:11px;">PK Debug</strong>
        <button onclick="window.PK_TouchDiag.enable()" style="background:#06A77D;color:#fff;border:0;padding:6px 10px;border-radius:4px;cursor:pointer;font-size:11px;touch-action:manipulation;">🔍 Touch Diag</button>
        <button onclick="window.PK_DEBUG.hide()" style="background:#c00;color:#fff;border:0;padding:6px 14px;border-radius:4px;cursor:pointer;font-size:13px;touch-action:manipulation;">ปิด ✕</button>
      </div>
    </div>
    <button id="pkDebugTrigger" onclick="window.PK_DEBUG && window.PK_DEBUG.show()"
            style="position:fixed;top:8px;right:8px;width:34px;height:34px;border-radius:50%;border:0;background:rgba(0,0,0,0.35);color:#fff;font-size:14px;cursor:pointer;z-index:1001;touch-action:manipulation;-webkit-tap-highlight-color:rgba(255,255,255,0.3);"
            aria-label="Debug">🔧</button>
  `;

  document.body.insertAdjacentHTML('afterbegin', lockScreenHTML);
  document.body.insertAdjacentHTML('beforeend',  settingsModalHTML);
  document.body.insertAdjacentHTML('beforeend',  debugHTML);
  DEBUG.add('✓ UI injected', 'ok');

  // Secret debug toggle: tap "PRIVATE · WITH PRIDE" 5 times to show debug panel
  let tapCount = 0, tapTimer = null;
  document.addEventListener('click', function(e) {
    if (e.target && e.target.classList && e.target.classList.contains('lock-hint')) {
      tapCount++;
      clearTimeout(tapTimer);
      tapTimer = setTimeout(function() { tapCount = 0; }, 2000);
      if (tapCount >= 5) {
        DEBUG.show();
        tapCount = 0;
      }
    }
  });

  // ---------- Supabase client -----------------------------------
  // Implicit flow (default) — token comes in URL hash directly
  // We previously tried PKCE, but Safari iPad has issues with code_verifier
  // persistence in localStorage across the OAuth redirect (ITP, etc.)
  // Implicit flow works reliably for client-only SPAs.
  let sb;
  try {
    sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        flowType: 'implicit',
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        storage: window.localStorage,
      },
    });
    DEBUG.add('✓ Supabase client created (implicit)', 'ok');
  } catch (err) {
    DEBUG.add('FATAL createClient: ' + (err.message || err), 'error');
    DEBUG.show();
    document.documentElement.classList.remove('checking');
    document.documentElement.classList.add('locked');
    return;
  }

  // ---------- DOM references ------------------------------------
  const root          = document.documentElement;
  const lockCard      = document.getElementById('lockCard');
  const loginMsg      = document.getElementById('loginMsg');
  const googleBtn     = document.getElementById('googleSignInBtn');
  const backdrop      = document.getElementById('modalBackdrop');
  const settingsModal = document.getElementById('settingsModal');
  const modalClose    = document.getElementById('modalClose');
  const logoutBtn     = document.getElementById('logoutBtn');
  const accountAvatar = document.getElementById('accountAvatar');
  const accountName   = document.getElementById('accountName');
  const accountEmail  = document.getElementById('accountEmail');

  // ---------- Helpers -------------------------------------------
  function showLock()      { root.classList.remove('checking'); root.classList.add('locked'); }
  function showDashboard() { root.classList.remove('checking'); root.classList.remove('locked'); }
  function isAllowed(email){ return email && ALLOWED_EMAILS.includes(email.toLowerCase()); }

  function flashError(msg) {
    loginMsg.textContent = msg;
    lockCard.classList.remove('shake');
    void lockCard.offsetWidth;
    lockCard.classList.add('shake');
    if (navigator.vibrate) navigator.vibrate([40, 40, 40]);
  }

  function fillAccount(user) {
    const meta = user.user_metadata || {};
    accountName.textContent  = meta.full_name || meta.name || user.email || '—';
    accountEmail.textContent = user.email || '—';
    const avatar = meta.avatar_url || meta.picture;
    if (avatar) {
      accountAvatar.src = avatar;
      accountAvatar.style.display = 'block';
    } else {
      accountAvatar.style.display = 'none';
    }
  }

  // ---------- Initial session check ------------------------------
  (async function initAuth() {
    // Implicit flow: token comes in URL hash (#access_token=...)
    // detectSessionInUrl in createClient auto-handles the parsing.
    // We just need to wait briefly then check session.

    const url = new URL(window.location.href);
    const errorParam = url.searchParams.get('error') || (function() {
      // Hash also can carry error
      if (url.hash.includes('error=')) {
        const hashParams = new URLSearchParams(url.hash.substring(1));
        return hashParams.get('error');
      }
      return null;
    })();
    const errorDesc = url.searchParams.get('error_description');

    if (errorParam) {
      DEBUG.add('OAuth error from Google: ' + errorParam + ' - ' + (errorDesc || ''), 'error');
      DEBUG.show();
      try { window.history.replaceState({}, document.title, window.location.origin + window.location.pathname); } catch(e){}
      showLock();
      flashError('Google ปฏิเสธ: ' + (errorDesc || errorParam));
      return;
    }

    const hasToken = window.location.hash.includes('access_token=');
    if (hasToken) {
      DEBUG.add('Token detected in URL hash, waiting for parse...', 'info');
      // Give detectSessionInUrl time to consume the hash
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    // Check session
    const { data: { session } } = await sb.auth.getSession();
    DEBUG.add('Session check: ' + (session ? 'HAS session, user=' + session.user.email : 'NO session'), session ? 'ok' : 'info');

    // Clean URL hash if still present
    if (window.location.hash || window.location.search.includes('error=')) {
      try {
        window.history.replaceState({}, document.title, window.location.origin + window.location.pathname);
      } catch (e) { /* ignore */ }
    }

    if (session && isAllowed(session.user.email)) {
      fillAccount(session.user);
      showDashboard();
    } else if (session) {
      DEBUG.add('Email not allowed: ' + session.user.email, 'error');
      DEBUG.show();
      await sb.auth.signOut();
      showLock();
      flashError('อีเมลนี้ไม่ได้รับอนุญาตให้เข้าใช้งานเว็บนี้');
    } else {
      showLock();
    }
  })();

  // ---------- Auth state listener (handles OAuth callback) -------
  sb.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session) {
      if (isAllowed(session.user.email)) {
        fillAccount(session.user);
        showDashboard();
        loginMsg.textContent = '';
        if (navigator.vibrate) navigator.vibrate([10, 30, 10]);
      } else {
        await sb.auth.signOut();
        showLock();
        flashError('อีเมลนี้ไม่ได้รับอนุญาตให้เข้าใช้งานเว็บนี้');
      }
    } else if (event === 'SIGNED_OUT') {
      showLock();
    }
  });

  // ---------- Google Sign-in -------------------------------------
  // Define the sign-in function globally so inline onclick can call it
  // even if event listener attachment failed
  async function performGoogleSignIn() {
    DEBUG.add('▶ performGoogleSignIn() called', 'ok');
    if (!googleBtn) {
      DEBUG.add('No button reference — aborting', 'error');
      return;
    }
    googleBtn.disabled = true;
    if (loginMsg) loginMsg.textContent = '';

    const redirectTo = window.location.origin + window.location.pathname;
    DEBUG.add('Redirect to: ' + redirectTo, 'info');

    try {
      DEBUG.add('Calling signInWithOAuth...', 'info');
      const { data, error } = await sb.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectTo,
          queryParams: {
            access_type: 'offline',
            prompt: 'select_account',
          },
        },
      });
      if (error) {
        googleBtn.disabled = false;
        DEBUG.add('OAuth error: ' + error.message, 'error');
        DEBUG.show();
        flashError('เกิดข้อผิดพลาด: ' + error.message);
      } else {
        DEBUG.add('OAuth call OK. URL: ' + (data && data.url ? data.url.substring(0,80) : '(none)'), 'ok');
        // browser will redirect to Google now
      }
    } catch (err) {
      googleBtn.disabled = false;
      DEBUG.add('Exception: ' + (err.message || err), 'error');
      DEBUG.show();
      flashError('เชื่อมต่อ Google ไม่ได้: ' + (err.message || err));
    }
  }

  // Expose globally — used by inline onclick fallback
  window.PK_TriggerSignIn = performGoogleSignIn;
  DEBUG.add('✓ window.PK_TriggerSignIn registered', 'ok');

  if (googleBtn) {
    DEBUG.add('✓ Google button found, attaching handler', 'ok');
    // Modern click handler (works for mouse + most touch)
    googleBtn.addEventListener('click', function(ev) {
      DEBUG.add('▶ button click event', 'ok');
      ev.preventDefault();
      performGoogleSignIn();
    });
    // Touch fallback for older iPad Safari
    googleBtn.addEventListener('touchend', function(ev) {
      DEBUG.add('▶ button touchend event', 'ok');
      ev.preventDefault();
      performGoogleSignIn();
    }, { passive: false });
  } else {
    DEBUG.add('FATAL: Google button NOT FOUND in DOM', 'error');
    DEBUG.show();
  }

  // ---------- Settings modal -------------------------------------
  function openSettings() {
    backdrop.classList.add('show');
    settingsModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeSettings() {
    backdrop.classList.remove('show');
    settingsModal.classList.remove('show');
    document.body.style.overflow = '';
  }

  modalClose && modalClose.addEventListener('click', closeSettings);
  backdrop   && backdrop.addEventListener('click', closeSettings);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && settingsModal.classList.contains('show')) closeSettings();
  });
  document.querySelectorAll('[data-action="open-settings"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openSettings();
    });
  });

  // ---------- Logout ---------------------------------------------
  logoutBtn && logoutBtn.addEventListener('click', async () => {
    logoutBtn.disabled = true;
    await sb.auth.signOut();
    closeSettings();
    logoutBtn.disabled = false;
  });

  // ---------- Universal clock (any page with id="clock") ---------
  function tickClock() {
    const el = document.getElementById('clock');
    if (!el) return;
    const d = new Date();
    el.textContent = String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
  }
  tickClock();
  setInterval(tickClock, 30000);

  // ---------- Card haptic feedback (any element with .card) ------
  document.querySelectorAll('.card').forEach(c => {
    c.addEventListener('click', () => {
      if (navigator.vibrate) navigator.vibrate(8);
    });
  });

  // ---------- Expose for other pages -----------------------------
  window.PK = { supabase: sb, ALLOWED_EMAILS };

})();
