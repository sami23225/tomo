/* tomo-sync.js — cloud progress sync for the Tomo study app.
   Drop-in, self-contained. Load once, right before </body> in index.html:
       <script src="tomo-sync.js" defer></script>

   How it works:
   - Your whole progress is one localStorage blob ("hanasu").
   - This module saves that blob to Supabase whenever the app saves, keyed by a
     PRIVATE sync code (no login). Enter the same code on another device to pull
     your progress there.
   - Backend: two code-gated RPCs (tomo_load / tomo_save). The table has RLS on
     and no direct access, so the code is the only key to your data. Keep it private.
*/
(function () {
  'use strict';

  // ---- config (publishable key — safe to ship in a static site) ----
  var SUPABASE_URL = 'https://hhzggarfpslftqwvjuiq.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_hFR9bHl_kWaP9i0WlQogYA_KtawEs0U';

  var STORE_KEY = 'hanasu';         // Tomo's progress blob
  var CODE_KEY  = 'tomo_sync_code'; // this device's sync code
  var TS_KEY    = 'tomo_sync_ts';   // server timestamp at last successful sync

  function toast(msg) {
    try { if (typeof window.toast === 'function') { window.toast(msg); return; } } catch (e) {}
    console.log('[tomo-sync] ' + msg);
  }

  function rpc(fn, body) {
    return fetch(SUPABASE_URL + '/rest/v1/rpc/' + fn, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body || {})
    }).then(function (r) {
      return r.text().then(function (t) {
        var j = null; try { j = t ? JSON.parse(t) : null; } catch (e) {}
        if (!r.ok) throw new Error((j && j.message) || ('HTTP ' + r.status));
        return j;
      });
    });
  }

  function getCode()  { return (localStorage.getItem(CODE_KEY) || '').trim(); }
  function setCode(c) { if (c) localStorage.setItem(CODE_KEY, c.trim()); }
  function clearCode(){ localStorage.removeItem(CODE_KEY); localStorage.removeItem(TS_KEY); }

  function genCode() {
    var abc = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // drop ambiguous 0/O/1/I/L
    var buf = new Uint8Array(20);
    (window.crypto || window.msCrypto).getRandomValues(buf);
    var s = '';
    for (var i = 0; i < buf.length; i++) {
      s += abc[buf[i] % abc.length];
      if (i % 5 === 4 && i < buf.length - 1) s += '-';
    }
    return 'tomo-' + s; // e.g. tomo-AB3CD-EF7GH-JKMNP-QRS7T
  }

  function localData() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); }
    catch (e) { return {}; }
  }

  // ---- push (save to cloud), debounced ----
  var pushTimer = null, pushing = false, again = false;
  function schedulePush() {
    if (!getCode()) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(pushNow, 1500);
  }
  function pushNow() {
    var code = getCode();
    if (!code) return Promise.resolve();
    if (pushing) { again = true; return Promise.resolve(); }
    pushing = true; setStatus('syncing');
    return rpc('tomo_save', { p_code: code, p_data: localData() })
      .then(function (ts) { if (typeof ts === 'string') localStorage.setItem(TS_KEY, ts); setStatus('ok'); })
      .catch(function () { setStatus('error'); toast('Sync failed — will retry'); })
      .then(function () {
        pushing = false;
        if (again) { again = false; schedulePush(); }
      });
  }

  // ---- pull (load from cloud) ----
  function pull(opts) {
    opts = opts || {};
    var code = getCode();
    if (!code) return Promise.resolve(null);
    return rpc('tomo_load', { p_code: code }).then(function (rows) {
      var row = Array.isArray(rows) ? rows[0] : rows;
      if (!row || !row.data) {
        if (opts.seedIfEmpty) return pushNow().then(function () { return { seeded: true }; });
        return { empty: true };
      }
      var serverTs = row.updated_at || '';
      var localTs = localStorage.getItem(TS_KEY) || '';
      var newer = serverTs && serverTs !== localTs && (!localTs || serverTs > localTs);
      if (opts.force || newer) {
        if (opts.confirmReplace &&
            !confirm('Load your saved progress from the cloud? This replaces what’s on this device.')) {
          return { cancelled: true };
        }
        localStorage.setItem(STORE_KEY, JSON.stringify(row.data));
        localStorage.setItem(TS_KEY, serverTs);
        return { applied: true };
      }
      return { upToDate: true };
    });
  }

  // ---- hook the app's global save() so every save also pushes ----
  function hookSave() {
    if (typeof window.save === 'function' && !window.save.__tomoWrapped) {
      var orig = window.save;
      window.save = function () {
        var r = orig.apply(this, arguments);
        try { schedulePush(); } catch (e) {}
        return r;
      };
      window.save.__tomoWrapped = true;
      return true;
    }
    return false;
  }

  // ---- minimal UI: a floating pill + a small panel ----
  var elBtn, elPanel, statusDot;

  function setStatus(s) {
    window.__tomoSync = s;
    if (!statusDot) return;
    var map = { ok: '#5b8d72', syncing: '#c2974e', error: '#cf5a5a', off: '#bcbcc1' };
    statusDot.style.background = map[s] || map.off;
  }
  function css(el, o) { for (var k in o) el.style[k] = o[k]; }

  function buildUI() {
    elBtn = document.createElement('button');
    elBtn.setAttribute('aria-label', 'Cloud sync');
    elBtn.innerHTML = '<span id="tsyncdot"></span><span>Sync</span>';
    css(elBtn, {
      position: 'fixed', right: '16px', bottom: '96px', zIndex: '9999',
      display: 'inline-flex', alignItems: 'center', gap: '7px',
      padding: '9px 14px', borderRadius: '999px',
      background: '#ffffff', color: '#202024',
      border: '1px solid #eaeae5', boxShadow: '0 8px 30px rgba(20,20,28,.14)',
      font: '600 13px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'
    });
    elBtn.onclick = togglePanel;
    document.body.appendChild(elBtn);
    statusDot = elBtn.querySelector('#tsyncdot');
    css(statusDot, { width: '8px', height: '8px', borderRadius: '50%', background: '#bcbcc1', display: 'inline-block' });
    setStatus(getCode() ? 'ok' : 'off');
  }

  function togglePanel() {
    if (elPanel) { elPanel.remove(); elPanel = null; return; }
    elPanel = document.createElement('div');
    css(elPanel, {
      position: 'fixed', right: '16px', bottom: '142px', zIndex: '9999', width: '290px',
      background: '#ffffff', color: '#202024', border: '1px solid #eaeae5',
      borderRadius: '16px', boxShadow: '0 8px 30px rgba(20,20,28,.18)', padding: '16px',
      font: '400 13px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'
    });
    var code = getCode();
    if (code) {
      elPanel.innerHTML =
        '<div style="font-weight:700;font-size:14px;margin-bottom:8px;">Cloud sync is on</div>' +
        '<div style="color:#8a8a90;margin-bottom:6px;">Your sync code (keep it private):</div>' +
        '<div style="display:flex;gap:6px;margin-bottom:12px;">' +
          '<input id="tsync-code" readonly value="' + code + '" style="flex:1;min-width:0;padding:8px;border:1px solid #eaeae5;border-radius:9px;font:600 12px monospace;background:#fafaf8;">' +
          '<button id="tsync-copy" style="padding:8px 10px;border-radius:9px;border:1px solid #eaeae5;background:#f5f5f3;font-weight:600;">Copy</button>' +
        '</div>' +
        '<button id="tsync-backup" style="width:100%;padding:10px;border-radius:10px;background:#4f5670;color:#fff;font-weight:700;margin-bottom:8px;">Back up now</button>' +
        '<button id="tsync-off" style="width:100%;padding:9px;border-radius:10px;background:#f5f5f3;color:#cf5a5a;font-weight:600;border:1px solid #eaeae5;">Turn off sync on this device</button>';
    } else {
      elPanel.innerHTML =
        '<div style="font-weight:700;font-size:14px;margin-bottom:8px;">Save your progress to the cloud</div>' +
        '<div style="color:#8a8a90;margin-bottom:12px;">Turn on sync to back up this device, or enter a code from another device to bring your progress here.</div>' +
        '<button id="tsync-enable" style="width:100%;padding:10px;border-radius:10px;background:#4f5670;color:#fff;font-weight:700;margin-bottom:12px;">Turn on sync (new code)</button>' +
        '<div style="color:#8a8a90;margin-bottom:6px;">Have a code already?</div>' +
        '<div style="display:flex;gap:6px;">' +
          '<input id="tsync-in" placeholder="tomo-XXXXX-..." style="flex:1;min-width:0;padding:8px;border:1px solid #eaeae5;border-radius:9px;font:600 12px monospace;">' +
          '<button id="tsync-restore" style="padding:8px 10px;border-radius:9px;background:#4f5670;color:#fff;font-weight:700;">Restore</button>' +
        '</div>';
    }
    document.body.appendChild(elPanel);
    wirePanel();
  }

  function wirePanel() {
    var byId = function (id) { return elPanel.querySelector('#' + id); };
    if (byId('tsync-copy')) byId('tsync-copy').onclick = function () {
      var i = byId('tsync-code'); i.select();
      (navigator.clipboard ? navigator.clipboard.writeText(i.value) : Promise.reject())
        .then(function () { toast('Code copied'); })
        .catch(function () { try { document.execCommand('copy'); toast('Code copied'); } catch (e) {} });
    };
    if (byId('tsync-backup')) byId('tsync-backup').onclick = function () {
      pushNow().then(function () { toast('Backed up'); });
    };
    if (byId('tsync-off')) byId('tsync-off').onclick = function () {
      if (confirm('Turn off sync on this device? Your cloud copy stays; this device just stops syncing.')) {
        clearCode(); setStatus('off'); elPanel.remove(); elPanel = null; togglePanel();
      }
    };
    if (byId('tsync-enable')) byId('tsync-enable').onclick = function () {
      var c = genCode(); setCode(c);
      pushNow().then(function () {
        toast('Sync on — save your code!'); setStatus('ok');
        elPanel.remove(); elPanel = null; togglePanel();
      });
    };
    if (byId('tsync-restore')) byId('tsync-restore').onclick = function () {
      var v = (byId('tsync-in').value || '').trim();
      if (v.length < 8) { toast('Enter your full sync code'); return; }
      setCode(v);
      pull({ force: true, confirmReplace: true }).then(function (res) {
        if (res && res.applied) { toast('Progress restored'); location.reload(); }
        else if (res && res.empty) { toast('No progress found for that code'); }
        setStatus('ok');
      }).catch(function () { toast('Could not reach the cloud'); });
    };
  }

  // ---- init ----
  function init() {
    var tries = 0;
    (function tryHook() {
      if (hookSave()) return;
      if (tries++ < 25) setTimeout(tryHook, 150);
    })();

    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') pushNow();
    });

    buildUI();

    if (getCode()) {
      pull({}).then(function (res) {
        if (res && res.applied && !sessionStorage.getItem('tomo_pulled')) {
          sessionStorage.setItem('tomo_pulled', '1');
          toast('Loaded newer progress from cloud');
          location.reload();
        }
        setStatus('ok');
      }).catch(function () { setStatus('error'); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
