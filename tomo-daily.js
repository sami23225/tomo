/* tomo-daily.js — turns Tomo's repeating weekly session into a real 7-day-per-unit
   study plan. Every day of a unit gets a DISTINCT standalone grammar lesson, a
   different particle, a rotated reading with a changing task, and its own writing
   prompt — so no two days feel the same (only the SRS cards recur, by design).

   Layered on top of the app (no index.html rewrite): it reads the app's globals
   (currentWeek, state, renderHome, openReading, openPLesson, PLESSONS, save) and
   augments the home + adds a full-screen grammar reader. Content lives in UNITS,
   keyed by week then day (1..7). Load AFTER the app + tomo-enhance.js:
     <script src="tomo-daily.js" defer></script>

   Public test hooks: window.TomoDaily.setDay(n), .nextDay(), .open(day)          */
(function () {
  'use strict';
  if (window.__tomoDaily) return; window.__tomoDaily = true;

  /* ========================================================================
     CONTENT  —  UNITS[week].days[0..6]
     Each day: { focus, sub, particle, read:{k,task}, produce, lesson:{min,secs} }
     lesson.secs use section types rendered below:
       p   {lab,h,body:[html...]}
       tf  {lab,h,intro?,rows:[{g,r,n}],note?}
       pat {lab,h,formula:[..],mean,twojobs?,ex:[{jp,rom,en,bd:[[k,gloss]..]}],extra?}
       why {lab,h,body:[html...]}
       warn{lab,h,items:[{x,o,n}]}
       mem {lab,h,items:[html...]}
       try {lab,h,items:[..],note?}
     (Weeks are authored in tomo-units-*.js which set window.TOMO_UNITS; this file
      also carries Week 2 inline so it works standalone.)
     ===================================================================== */
  var UNITS = (window.TOMO_UNITS = window.TOMO_UNITS || {});

  /* ========================================================================
     STYLES
     ===================================================================== */
  var CSS = [
    /* full-screen reader */
    '#tomo-gram{position:fixed;inset:0;z-index:100000;background:var(--bg,#F0EDEE);color:var(--ink,#3E2317);display:flex;flex-direction:column;font-family:var(--ui);overflow:hidden}',
    '#tomo-gram .tg-head{display:flex;align-items:center;gap:11px;padding:calc(env(safe-area-inset-top,0px) + 14px) 16px 10px}',
    '#tomo-gram .tg-back{display:inline-flex;align-items:center;gap:6px;background:var(--surface);border:1.5px solid rgba(62,35,23,.3);border-radius:999px;padding:8px 14px;font:600 13.5px var(--ui);color:var(--ink);box-shadow:0 2px 0 rgba(62,35,23,.5);cursor:pointer}',
    '#tomo-gram .tg-ttl{font-family:var(--serif);font-weight:500;font-size:19px;letter-spacing:-.01em}',
    '#tomo-gram .tg-ttl small{display:block;font-family:var(--ui);font-weight:600;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--sky)}',
    '#tomo-gram .tg-days{display:flex;gap:6px;overflow-x:auto;padding:2px 16px 10px;-webkit-overflow-scrolling:touch}',
    '#tomo-gram .tg-day{flex:0 0 auto;width:34px;height:34px;border-radius:11px;border:1.5px solid rgba(62,35,23,.28);background:var(--surface);font:700 13px var(--ui);color:var(--muted);display:flex;align-items:center;justify-content:center;cursor:pointer}',
    '#tomo-gram .tg-day.on{background:var(--ink);color:#fff;border-color:var(--ink)}',
    '#tomo-gram .tg-day.done{border-color:var(--green);color:var(--green)}',
    '#tomo-gram .tg-day.on.done{background:var(--green);color:#fff;border-color:var(--green)}',
    '#tomo-gram .tg-body{flex:1;overflow-y:auto;padding:4px 16px calc(env(safe-area-inset-bottom,0px) + 96px);max-width:560px;width:100%;margin:0 auto}',
    '#tomo-gram .tg-foot{position:absolute;left:0;right:0;bottom:0;padding:12px 16px calc(env(safe-area-inset-bottom,0px) + 14px);background:linear-gradient(180deg,transparent,var(--bg) 40%);display:flex;gap:10px;max-width:560px;margin:0 auto}',
    '#tomo-gram .tg-done{flex:1;background:var(--lime);color:var(--ink);border:1.6px solid var(--ink);border-radius:13px;padding:14px;font:700 15px var(--ui);letter-spacing:.03em;text-transform:uppercase;box-shadow:0 3px 0 rgba(62,35,23,.9);cursor:pointer}',
    '#tomo-gram .tg-done:active{transform:translateY(3px);box-shadow:0 0 0 rgba(62,35,23,.9)}',
    /* lesson content (tl-) */
    '.tl-hero{background:linear-gradient(120deg,#EFEBE5 0%,#E7ECBE 54%,#DCF25E 130%);border:1.6px solid rgba(62,35,23,.16);border-radius:20px;padding:16px 16px 15px;margin:8px 0 4px}',
    '.tl-hero .fx{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.55);border:1.5px solid rgba(62,35,23,.25);border-radius:999px;padding:5px 11px;font:700 11px var(--ui);letter-spacing:.05em;text-transform:uppercase;color:#5a4a1e}',
    '.tl-hero h3{font-family:var(--serif);font-weight:500;font-size:24px;line-height:1.16;letter-spacing:-.015em;margin:11px 0 3px;color:var(--ink)}',
    '.tl-hero p{font:500 13.5px/1.5 var(--ui);color:rgba(62,35,23,.72);margin:0}',
    '.tl-sec{margin-top:20px}',
    '.tl-lab{display:flex;align-items:center;gap:7px;font:700 11px var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--sky);margin:0 0 8px}',
    '.tl-lab .d{width:6px;height:6px;border-radius:50%;background:var(--sky)}',
    '.tl-h{font-family:var(--serif);font-weight:500;font-size:18.5px;line-height:1.25;color:var(--ink);margin:0 0 9px;letter-spacing:-.01em}',
    '.tl-p{font:400 15px/1.62 var(--ui);color:var(--ink);margin:0 0 10px}.tl-p:last-child{margin-bottom:0}.tl-p b{font-weight:700}.tl-p i{font-style:italic}',
    '.tl-tf{display:flex;flex-direction:column;gap:7px;margin:2px 0 9px}',
    '.tl-row{display:grid;grid-template-columns:92px 1fr;gap:12px;align-items:baseline;background:var(--surface-3);border:1px solid var(--line);border-radius:12px;padding:10px 13px}',
    '.tl-row .g{font:700 11.5px var(--ui);color:var(--seal)}',
    '.tl-row .r{font-family:var(--serif);font-size:16px;color:var(--ink)}',
    '.tl-row .n{display:block;font:500 12px var(--ui);color:var(--muted);margin-top:3px}',
    '.tl-pat{border:1.5px solid var(--line);border-radius:16px;padding:14px;margin-top:4px;background:var(--surface)}',
    '.tl-fx{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:8px}',
    '.tl-chip{background:var(--rose-soft);border:1.5px solid rgba(62,35,23,.28);border-radius:10px;padding:6px 12px;font-family:var(--serif);font-size:16px;font-weight:600;color:var(--ink)}',
    '.tl-op{color:var(--muted);font-family:var(--serif);font-size:18px}',
    '.tl-mean{font:500 14px/1.5 var(--ui);color:var(--muted);margin-bottom:10px}',
    '.tl-jobs{display:flex;flex-direction:column;gap:7px;margin:0 0 12px}',
    '.tl-job{display:flex;gap:9px;align-items:baseline;font:500 13.5px/1.5 var(--ui);color:var(--ink)}',
    '.tl-job .k{flex:0 0 auto;width:20px;height:20px;border-radius:7px;background:var(--sky);color:#fff;font:700 11px/20px var(--ui);text-align:center}',
    '.tl-ex{border-top:1px dashed var(--line);padding-top:12px;margin-top:12px}',
    '.tl-ex.first{border-top:none;padding-top:2px;margin-top:2px}',
    '.tl-ex .jp{font-family:var(--serif);font-weight:500;font-size:20px;line-height:1.42;color:var(--ink)}',
    '.tl-ex .rom{font:italic 400 13px var(--ui);color:var(--muted);margin-top:3px}',
    '.tl-ex .en{font:600 14.5px var(--ui);color:var(--ink);margin-top:3px}',
    '.tl-bd{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}',
    '.tl-piece{background:var(--surface-3);border:1px solid var(--line);border-radius:9px;padding:5px 9px;font:500 12px var(--ui);color:var(--muted)}',
    '.tl-piece b{font-family:var(--serif);font-weight:700;font-size:13.5px;color:var(--seal);margin-right:6px}',
    '.tl-why{background:#2A160C;border-radius:16px;padding:16px 16px 15px;margin-top:4px}',
    '.tl-why .tl-lab{color:var(--lime)}.tl-why .tl-lab .d{background:var(--lime)}',
    '.tl-why .tl-h{color:#F6EFE6}',
    '.tl-why .tl-p{color:#E7DBCF}.tl-why .tl-p b{color:var(--lime)}.tl-why .tl-p i{color:#F6EFE6}',
    '.tl-warn{background:var(--red-soft);border:1.5px solid rgba(228,105,79,.42);border-radius:14px;padding:6px 14px 12px;margin-top:4px}',
    '.tl-mis{padding:11px 0;border-top:1px solid rgba(192,64,47,.2)}.tl-mis.first{border-top:none}',
    '.tl-xy{font-family:var(--serif);font-size:16px;line-height:1.5;display:flex;flex-wrap:wrap;gap:4px 9px;align-items:center}',
    '.tl-x{color:var(--seal);text-decoration:line-through;text-decoration-thickness:1.5px}',
    '.tl-o{color:var(--green)}.tl-o::before{content:"\\2192 ";color:var(--muted)}',
    '.tl-mn{display:block;font:500 13px/1.5 var(--ui);color:var(--ink);margin-top:4px}',
    '.tl-mem{background:var(--rose-soft);border:1.5px solid rgba(62,35,23,.16);border-radius:14px;padding:8px 14px;margin-top:4px}',
    '.tl-mi{display:flex;gap:10px;padding:8px 0;font:400 14px/1.55 var(--ui);color:var(--ink);border-top:1px solid rgba(62,35,23,.09)}.tl-mi.first{border-top:none}.tl-mi b{font-weight:700}',
    '.tl-mi .ck{flex:0 0 auto;color:var(--green);font-weight:800}',
    '.tl-try{border:1.5px dashed rgba(62,35,23,.3);border-radius:14px;padding:6px 16px 14px;margin-top:4px;background:var(--surface)}',
    '.tl-try ol{margin:8px 0 0;padding-left:20px}.tl-try li{font:500 14.5px/1.72 var(--ui);color:var(--ink)}',
    '.tl-note{font:500 12.5px/1.5 var(--ui);color:var(--muted);margin-top:10px}',
    /* home: day banner + grammar card */
    '.td-daybar{display:flex;align-items:center;gap:12px;background:var(--ink);color:#F4EDE4;border-radius:16px;padding:12px 15px;margin:0 0 14px;box-shadow:0 3px 0 rgba(62,35,23,.5)}',
    '.td-daybar .n{flex:0 0 auto;width:42px;height:42px;border-radius:12px;background:var(--lime);color:var(--ink);display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1;border:1.6px solid #1c120b}',
    '.td-daybar .n b{font-family:var(--serif);font-size:19px;font-weight:600}',
    '.td-daybar .n span{font-size:8px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-top:1px}',
    '.td-daybar .tx b{font:600 14.5px var(--ui);color:#fff;letter-spacing:-.01em}',
    '.td-daybar .tx span{display:block;font:500 12px var(--ui);color:#B7A99C;margin-top:2px}',
    '.td-daybar .dots{margin-left:auto;display:flex;gap:4px}',
    '.td-daybar .dots i{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.22)}',
    '.td-daybar .dots i.on{background:var(--lime)}',
    '.td-gram .tomo-ic{background:#C3E5FF !important}',
    '.td-sub{display:block;font:500 12px var(--ui);color:var(--muted);margin-top:2px}'
  ].join('');
  function ensureCSS() {
    if (document.getElementById('tomo-daily-css')) return;
    var s = document.createElement('style'); s.id = 'tomo-daily-css'; s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  /* ========================================================================
     HELPERS
     ===================================================================== */
  function curWeek() { try { return currentWeek().w; } catch (e) { return 2; } }
  function todayStr() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function lsGet(k, d) { try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function particleName(p) { try { for (var i = 0; i < PLESSONS.length; i++) if (PLESSONS[i].p === p) return PLESSONS[i].name; } catch (e) {} return ''; }

  var FORCE_DAY = null; // test override

  function dayIdx() {
    if (FORCE_DAY) return FORCE_DAY;
    var w = curWeek(), d = todayStr(), s = lsGet('tomo_day', null);
    if (!s || s.w !== w) { s = { w: w, idx: 1, date: d }; lsSet('tomo_day', s); }
    else if (s.date !== d) { s.idx = Math.min(7, s.idx + 1); s.date = d; lsSet('tomo_day', s); }
    return s.idx;
  }
  function unitFor(w) { return UNITS[w] || null; }
  function dayData(w, idx) { var u = unitFor(w); if (!u || !u.days) return null; return u.days[Math.min(idx, u.days.length) - 1] || null; }

  function gramDoneKey() { return 'tomo_gram_' + curWeek() + '_' + dayIdx(); }
  function isGramDone() { return lsGet(gramDoneKey(), false) === todayStr(); }
  function markGramDone() { lsSet(gramDoneKey(), todayStr()); }

  /* ========================================================================
     LESSON RENDERER  (shared with the preview)
     ===================================================================== */
  function esc(s) { return String(s).replace(/[<>&]/g, function (c) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]; }); }
  function exHTML(ex, i) {
    var bd = (ex.bd || []).map(function (p) { return '<span class="tl-piece"><b>' + p[0] + '</b>' + esc(p[1]) + '</span>'; }).join('');
    return '<div class="tl-ex' + (i === 0 ? ' first' : '') + '"><div class="jp">' + ex.jp + '</div><div class="rom">' + esc(ex.rom) + '</div><div class="en">' + esc(ex.en) + '</div>' + (bd ? '<div class="tl-bd">' + bd + '</div>' : '') + '</div>';
  }
  function secHTML(s) {
    var lab = '<div class="tl-lab"><span class="d"></span>' + esc(s.lab) + '</div>';
    var h = s.h ? '<div class="tl-h">' + s.h + '</div>' : '';
    if (s.t === 'p') return '<div class="tl-sec">' + lab + h + s.body.map(function (b) { return '<p class="tl-p">' + b + '</p>'; }).join('') + '</div>';
    if (s.t === 'tf') {
      var rows = s.rows.map(function (r) { return '<div class="tl-row"><span class="g">' + esc(r.g) + '</span><span><span class="r">' + r.r + '</span><span class="n">' + r.n + '</span></span></div>'; }).join('');
      return '<div class="tl-sec">' + lab + h + (s.intro ? '<p class="tl-p">' + s.intro + '</p>' : '') + '<div class="tl-tf">' + rows + '</div>' + (s.note ? '<p class="tl-p">' + s.note + '</p>' : '') + '</div>';
    }
    if (s.t === 'pat') {
      var formula = '<div class="tl-fx">' + s.formula.map(function (f) { return f === '+' ? '<span class="tl-op">+</span>' : '<span class="tl-chip">' + f + '</span>'; }).join('') + '</div>';
      var jobs = s.twojobs ? '<div class="tl-jobs">' + s.twojobs.map(function (j) { return '<div class="tl-job"><span class="k">' + j.k + '</span><span>' + j.title + '</span></div>'; }).join('') + '</div>' : '';
      return '<div class="tl-sec">' + lab + h + '<div class="tl-pat">' + formula + '<div class="tl-mean">' + s.mean + '</div>' + jobs + s.ex.map(exHTML).join('') + '</div>' + (s.extra ? '<p class="tl-p" style="margin-top:10px">' + s.extra + '</p>' : '') + '</div>';
    }
    if (s.t === 'why') return '<div class="tl-sec"><div class="tl-why">' + lab + h + s.body.map(function (b) { return '<p class="tl-p">' + b + '</p>'; }).join('') + '</div></div>';
    if (s.t === 'warn') {
      var mis = s.items.map(function (m, i) { return '<div class="tl-mis' + (i === 0 ? ' first' : '') + '"><span class="tl-xy"><span class="tl-x">✗ ' + m.x + '</span><span class="tl-o">' + m.o + '</span></span><span class="tl-mn">' + m.n + '</span></div>'; }).join('');
      return '<div class="tl-sec">' + lab + h + '<div class="tl-warn">' + mis + '</div></div>';
    }
    if (s.t === 'mem') {
      var mi = s.items.map(function (m, i) { return '<div class="tl-mi' + (i === 0 ? ' first' : '') + '"><span class="ck">✓</span><span>' + m + '</span></div>'; }).join('');
      return '<div class="tl-sec">' + lab + h + '<div class="tl-mem">' + mi + '</div></div>';
    }
    if (s.t === 'try') return '<div class="tl-sec">' + lab + h + '<div class="tl-try"><ol>' + s.items.map(function (it) { return '<li>' + it + '</li>'; }).join('') + '</ol>' + (s.note ? '<p class="tl-note">' + esc(s.note) + '</p>' : '') + '</div></div>';
    return '';
  }
  function lessonHTML(day, idx) {
    var read = day.read ? ('Read &amp; listen: ' + esc(day.read.task)) : '';
    var extras = '<div class="tl-sec"><div class="tl-lab"><span class="d"></span>Today’s practice</div>' +
      '<div class="tl-try"><ol>' +
      (day.particle ? '<li>Particle focus: <b>' + day.particle + '</b> — ' + esc(particleName(day.particle)) + '</li>' : '') +
      (day.read ? '<li>' + read + '</li>' : '') +
      (day.produce ? '<li>Write: ' + esc(day.produce) + '</li>' : '') +
      '</ol></div></div>';
    return '<div class="tl-hero"><span class="fx">📚 Day ' + idx + ' · Grammar</span><h3>' + day.focus + '</h3>' + (day.sub ? '<p>' + esc(day.sub) + '</p>' : '') + '</div>' +
      day.lesson.secs.map(secHTML).join('') + extras;
  }

  /* ========================================================================
     FULL-SCREEN GRAMMAR READER
     ===================================================================== */
  function closeGram() { var g = document.getElementById('tomo-gram'); if (g) g.remove(); document.documentElement.style.overflow = ''; }
  function openGram(idx) {
    ensureCSS();
    var w = curWeek(); idx = idx || dayIdx();
    var day = dayData(w, idx);
    var g = document.getElementById('tomo-gram');
    if (!g) { g = document.createElement('div'); g.id = 'tomo-gram'; document.body.appendChild(g); }
    document.documentElement.style.overflow = 'hidden';
    if (!day) {
      g.innerHTML = '<div class="tg-head"><button class="tg-back" onclick="TomoDaily.close()">‹ Back</button><div class="tg-ttl">Grammar<small>Day ' + idx + '</small></div></div><div class="tg-body"><p class="tl-p" style="margin-top:20px">This day’s lesson is being written. It’ll appear here once this unit is authored.</p></div>';
      return;
    }
    var u = unitFor(w), n = (u && u.days ? u.days.length : 7);
    var tabs = '';
    for (var i = 1; i <= n; i++) tabs += '<div class="tg-day' + (i === idx ? ' on' : '') + (lsGet('tomo_gram_' + w + '_' + i, false) === todayStr() ? ' done' : '') + '" onclick="TomoDaily.open(' + i + ')">' + i + '</div>';
    var done = isGramDone() || lsGet('tomo_gram_' + w + '_' + idx, false) === todayStr();
    g.innerHTML =
      '<div class="tg-head"><button class="tg-back" onclick="TomoDaily.close()">‹ Back</button>' +
      '<div class="tg-ttl"><small>' + esc(u && u.title ? u.title : 'Week ' + w) + '</small>Grammar — Day ' + idx + ' of ' + n + '</div></div>' +
      '<div class="tg-days">' + tabs + '</div>' +
      '<div class="tg-body" id="tg-body">' + lessonHTML(day, idx) + '</div>' +
      '<div class="tg-foot"><button class="tg-done" onclick="TomoDaily.finish(' + idx + ')">' + (done ? '✓ Done — close' : 'Mark day complete') + '</button></div>';
    var body = g.querySelector('#tg-body'); if (body) body.scrollTop = 0;
    try { if (window.__tomoGloss) window.__tomoGloss(g); } catch (e) {}
  }
  function finishGram(idx) {
    var w = curWeek(); lsSet('tomo_gram_' + w + '_' + idx, todayStr());
    closeGram();
    try { if (typeof renderHome === 'function') renderHome(); } catch (e) {}
  }

  /* ========================================================================
     HOME AUGMENTATION  (wrap renderHome)
     ===================================================================== */
  function preRender() {
    // set the day's particle so the app's Particle-lesson task opens the right one
    try {
      var day = dayData(curWeek(), dayIdx());
      if (day && day.particle && typeof state !== 'undefined') {
        state.plessonToday = { p: day.particle, date: todayStr() };
      }
    } catch (e) {}
  }

  function decorateHome() {
    var home = document.getElementById('v-home'); if (!home) return;
    var w = curWeek(), idx = dayIdx(), day = dayData(w, idx), u = unitFor(w);
    var n = (u && u.days ? u.days.length : 7);

    // 1) Day banner (once, near the top of the session)
    var host = home.querySelector('.todo') ? home.querySelector('.todo').parentNode : home;
    if (host && !host.querySelector('.td-daybar')) {
      var dots = ''; for (var i = 1; i <= n; i++) dots += '<i class="' + (i <= idx ? 'on' : '') + '"></i>';
      var bar = document.createElement('div');
      bar.className = 'td-daybar';
      bar.innerHTML = '<div class="n"><b>' + idx + '</b><span>Day</span></div>' +
        '<div class="tx"><b>' + (day ? day.focus : (u && u.title ? u.title : 'Today')) + '</b>' +
        '<span>' + (u && u.title ? esc(u.title) + ' · ' : '') + 'Day ' + idx + ' of ' + n + '</span></div>' +
        '<div class="dots">' + dots + '</div>';
      host.insertBefore(bar, host.firstChild);
    }

    // 2) Grammar task card (first in the session)
    if (host && !host.querySelector('.td-gram') && day) {
      var done = isGramDone();
      var card = document.createElement('div');
      card.className = 'todo td-gram' + (done ? ' done' : '');
      card.innerHTML = '<div class="ttx"><b>Grammar lesson</b><span class="td-sub">' + esc(day.focus) + '</span></div>' +
        '<button class="tgo" onclick="TomoDaily.open()">' + (done ? 'Review' : 'Start') + '</button>';
      // place it right after the day banner
      var bar2 = host.querySelector('.td-daybar');
      if (bar2 && bar2.nextSibling) host.insertBefore(card, bar2.nextSibling); else host.insertBefore(card, host.firstChild);
    }

    if (!day) return;

    // 3) Relabel + re-target existing tasks for the day
    [].forEach.call(home.querySelectorAll('.todo'), function (td) {
      var b = td.querySelector('.ttx b'); if (!b) return;
      var title = b.textContent.trim();
      if (/read\s*&|read &amp;|read and listen|read & listen/i.test(title) && day.read) {
        var sub = td.querySelector('.td-sub') || td.querySelector('.ttx span');
        if (sub) { sub.textContent = day.read.task; sub.classList.add('td-sub'); }
        else { var s = document.createElement('span'); s.className = 'td-sub'; s.textContent = day.read.task; b.parentNode.appendChild(s); }
        [].forEach.call(td.querySelectorAll('[onclick]'), function (btn) {
          var oc = btn.getAttribute('onclick') || '';
          if (/openReading\(/.test(oc)) btn.setAttribute('onclick', oc.replace(/openReading\(\s*\d+\s*\)/, 'openReading(' + day.read.k + ')'));
        });
      }
      else if (/particle lesson/i.test(title) && day.particle) {
        var sub2 = td.querySelector('.td-sub') || td.querySelector('.ttx span');
        var txt = day.particle + ' — ' + particleName(day.particle);
        if (sub2) { sub2.textContent = txt; sub2.classList.add('td-sub'); }
        else { var s2 = document.createElement('span'); s2.className = 'td-sub'; s2.textContent = txt; b.parentNode.appendChild(s2); }
      }
      else if (/write a sentence|produce/i.test(title) && day.produce) {
        var sub3 = td.querySelector('.td-sub') || td.querySelector('.ttx span');
        if (sub3) { sub3.textContent = day.produce; sub3.classList.add('td-sub'); }
        else { var s3 = document.createElement('span'); s3.className = 'td-sub'; s3.textContent = day.produce; b.parentNode.appendChild(s3); }
      }
    });
  }

  function wrapRenderHome() {
    if (typeof window.renderHome !== 'function' || window.renderHome.__tdWrapped) return false;
    var orig = window.renderHome;
    window.renderHome = function () {
      try { preRender(); } catch (e) {}
      var r = orig.apply(this, arguments);
      try { decorateHome(); } catch (e) {}
      return r;
    };
    window.renderHome.__tdWrapped = true;
    return true;
  }

  /* ========================================================================
     PUBLIC API + BOOT
     ===================================================================== */
  window.TomoDaily = {
    open: function (d) { openGram(d); },
    close: closeGram,
    finish: finishGram,
    day: dayIdx,
    setDay: function (n) { FORCE_DAY = n; lsSet('tomo_day', { w: curWeek(), idx: n, date: todayStr() }); try { renderHome(); } catch (e) {} },
    nextDay: function () { var s = lsGet('tomo_day', { w: curWeek(), idx: 1 }); this.setDay(Math.min(7, (s.idx || 1) + 1)); },
    units: UNITS,
    render: function (w, idx, host) { ensureCSS(); (host || document.body).insertAdjacentHTML('beforeend', '<div class="tg-body" style="max-width:560px;margin:0 auto">' + lessonHTML(dayData(w, idx), idx) + '</div>'); }
  };

  function boot() {
    ensureCSS();
    if (!wrapRenderHome()) { var tries = 0, iv = setInterval(function () { if (wrapRenderHome() || ++tries > 40) clearInterval(iv); }, 150); }
    // if home is already rendered, decorate now + on first paint
    try { preRender(); decorateHome(); } catch (e) {}
    // keep the decoration alive across the app's own re-renders
    try {
      var mo = new MutationObserver(function () {
        var home = document.getElementById('v-home');
        if (home && home.classList.contains('active') && !home.querySelector('.td-daybar')) { try { decorateHome(); } catch (e) {} }
      });
      mo.observe(document.querySelector('.app') || document.body, { childList: true, subtree: true });
    } catch (e) {}
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
