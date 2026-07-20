/* tomo-enhance.js — tap-to-gloss + playful polish for the Tomo study app.
   - Tap a word in the readings / lessons to see its reading + meaning.
   - Confetti celebration when you finish a quiz or reading.
   - Count-up animation on the home stats and result score.
   Self-contained; reads the app's own VOCAB / KANJI data. Load with:
     <script src="tomo-enhance.js" defer></script> */
(function () {
  'use strict';
  if (window.__tomoEnhance) return; window.__tomoEnhance = true;

  // Inject the premium theme stylesheet, appended LAST so its rules win the cascade
  // over the app's inline <style> (equal specificity → later source wins).
  if (!document.getElementById('tomo-theme-link')) {
    var _l = document.createElement('link');
    _l.id = 'tomo-theme-link'; _l.rel = 'stylesheet'; _l.href = 'tomo-theme.css';
    (document.head || document.documentElement).appendChild(_l);
  }

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ---------------- dictionary (from the app's own data) ---------------- */
  var DICT = Object.create(null), MAXLEN = 1;
  function add(surface, reading, meaning) {
    if (!surface || DICT[surface]) return;
    DICT[surface] = { r: reading || '', m: meaning || '' };
    if (surface.length > MAXLEN) MAXLEN = surface.length;
  }
  try {
    if (typeof VOCAB !== 'undefined') VOCAB.forEach(function (set) {
      (set.list || []).forEach(function (w) {
        add(w.k, w.r, w.m);
        if (w.r && w.r !== w.k) add(w.r, w.r, w.m); // kana-written form
      });
    });
  } catch (e) {}
  try {
    if (typeof KANJI !== 'undefined') KANJI.forEach(function (set) {
      (set.list || []).forEach(function (c) {
        var rd = [c.kun, c.on].filter(Boolean).join(' · ');
        add(c.k, rd, c.m);
      });
    });
  } catch (e) {}
  // common particles & grammar bits
  var P = {
    'は': ['wa', 'topic marker'], 'が': ['ga', 'subject marker'], 'を': ['o', 'object marker'],
    'に': ['ni', 'to / at / in'], 'で': ['de', 'by / at / with'], 'へ': ['e', 'to (direction)'],
    'と': ['to', 'and / with'], 'も': ['mo', 'also / too'], 'の': ['no', 'of / ~’s'],
    'から': ['kara', 'from / because'], 'まで': ['made', 'until / up to'], 'や': ['ya', 'and (etc.)'],
    'ね': ['ne', 'right? / isn’t it'], 'よ': ['yo', 'you know'], 'か': ['ka', '? (question)'],
    'てください': ['te kudasai', 'please do ~'], 'ください': ['kudasai', 'please'],
    'ています': ['te imasu', '~ing (ongoing)'], 'ばかり': ['bakari', 'nothing but / only'],
    'のに': ['noni', 'even though']
  };
  Object.keys(P).forEach(function (k) { add(k, P[k][0], P[k][1]); });

  var isJP = function (ch) { return /[぀-ヿ㐀-鿿ｦ-ﾟ]/.test(ch); };
  var hasJP = function (s) { return /[぀-鿿]/.test(s); };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---------------- tooltip ---------------- */
  var tip;
  function ensureTip() { if (!tip) { tip = document.createElement('div'); tip.id = 'tgtip'; document.body.appendChild(tip); } return tip; }
  function showTip(el, entry) {
    var t = ensureTip();
    t.innerHTML = (entry.r ? '<span class="tgr">' + esc(entry.r) + '</span>' : '') + '<span class="tgm">' + esc(entry.m || '—') + '</span>';
    t.style.display = 'block'; t.classList.remove('show');
    var r = el.getBoundingClientRect(), tw = t.offsetWidth, th = t.offsetHeight;
    var left = Math.min(Math.max(8, r.left + r.width / 2 - tw / 2), innerWidth - tw - 8);
    var top = r.top - th - 10; if (top < 8) top = r.bottom + 10;
    t.style.left = left + 'px'; t.style.top = top + 'px';
    requestAnimationFrame(function () { t.classList.add('show'); });
  }
  function hideTip() { if (tip) { tip.classList.remove('show'); tip.style.display = 'none'; } }
  document.addEventListener('click', function (e) { if (!(e.target.closest && e.target.closest('.tgw'))) hideTip(); }, true);
  addEventListener('scroll', hideTip, true); addEventListener('resize', hideTip);

  function bind(el, entry) {
    el.classList.add('tgw');
    el.addEventListener('click', function (ev) { ev.stopPropagation(); showTip(el, entry); });
  }

  /* ---------------- glossing ---------------- */
  function glossRuby(ruby) {
    if (ruby.__tg) return; ruby.__tg = true;
    var base = '';
    ruby.childNodes.forEach(function (nd) {
      if (nd.nodeType === 3) base += nd.nodeValue;
      else if (nd.nodeName !== 'RT') base += nd.textContent;
    });
    base = base.trim();
    var e = DICT[base];
    if (e) bind(ruby, e);
  }
  function glossTextNode(node) {
    var text = node.nodeValue; if (!text || !hasJP(text)) return;
    var frag = document.createDocumentFragment(), i = 0, n = text.length, changed = false;
    while (i < n) {
      var ch = text[i];
      if (!isJP(ch)) { frag.appendChild(document.createTextNode(ch)); i++; continue; }
      var hit = null, max = Math.min(MAXLEN, n - i);
      for (var L = max; L >= 1; L--) { var sub = text.substr(i, L); if (DICT[sub]) { hit = sub; break; } }
      if (hit) {
        var s = document.createElement('span'); s.textContent = hit; bind(s, DICT[hit]);
        frag.appendChild(s); i += hit.length; changed = true;
      } else { frag.appendChild(document.createTextNode(ch)); i++; }
    }
    if (changed) node.parentNode.replaceChild(frag, node);
  }
  function glossContainer(root) {
    if (!root) return;
    root.querySelectorAll('ruby:not([data-tg])').forEach(function (rb) { rb.setAttribute('data-tg', '1'); glossRuby(rb); });
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (nd) {
        if (!nd.nodeValue || !hasJP(nd.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = nd.parentElement;
        if (!p || p.closest('ruby,rt,button,input,textarea,select,.tgw,#tgtip')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], nd; while ((nd = walker.nextNode())) nodes.push(nd);
    nodes.forEach(glossTextNode);
  }
  // Gloss only reading/lesson surfaces (never flashcard fronts or quiz options).
  var SEL = '#v-reading, #v-lesson, .rsent, .rblock, .ex, .pnote, .when';
  function glossActive() { document.querySelectorAll(SEL).forEach(glossContainer); }

  /* ---------------- celebration + count-up ---------------- */
  var CONFETTI = ['#ECF956', '#3E2317', '#C0402F', '#5C8D6F', '#DCEB4A', '#F5F1EB'];
  function celebrate() {
    if (reduce) return;
    for (var i = 0; i < 46; i++) {
      (function (i) {
        var d = document.createElement('div');
        d.className = 'tomo-confetti';
        d.style.left = Math.random() * 100 + 'vw';
        d.style.background = CONFETTI[i % CONFETTI.length];
        d.style.opacity = '0';
        var dur = 1.5 + Math.random() * 1.4, delay = Math.random() * 0.5;
        d.style.animation = 'tomoConfetti ' + dur + 's cubic-bezier(.25,.6,.4,1) ' + delay + 's forwards';
        if (Math.random() > .5) d.style.borderRadius = '50%';
        document.body.appendChild(d);
        setTimeout(function () { d.remove(); }, (dur + delay) * 1000 + 200);
      })(i);
    }
  }
  function countUp(el) {
    if (el.__cu) return; el.__cu = true;
    var m = (el.textContent || '').match(/^(\d+)(.*)$/); if (!m) return;
    var target = +m[1], suffix = m[2] || '';
    if (target <= 1 || reduce) { return; }
    var start = performance.now(), dur = 650;
    (function tick(now) {
      var p = Math.min(1, (now - start) / dur), v = Math.round((1 - Math.pow(1 - p, 3)) * target);
      el.textContent = v + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }
  function polish() {
    document.querySelectorAll('.stat .num, .result .big').forEach(countUp);
    var res = document.querySelector('.result:not([data-celebrated])');
    if (res) { res.setAttribute('data-celebrated', '1'); setTimeout(celebrate, 150); }
  }

  /* ---------------- structural redesign: nav indicator, hero, session icons ---------------- */
  function placeDot() {
    var nav = document.querySelector('nav'); if (!nav) return;
    var dot = nav.querySelector('.tomo-navdot'), on = nav.querySelector('.tab.on'); if (!dot || !on) return;
    var nr = nav.getBoundingClientRect(), r = on.getBoundingClientRect();
    if (r.width) { dot.style.left = (r.left - nr.left) + 'px'; dot.style.width = r.width + 'px'; }
  }
  function navIndicator() {
    var nav = document.querySelector('nav'); if (!nav) return;
    var dot = nav.querySelector('.tomo-navdot');
    if (!dot) { dot = document.createElement('div'); dot.className = 'tomo-navdot'; nav.insertBefore(dot, nav.firstChild); }
    if (!nav.__tgnav) {
      nav.__tgnav = true;
      nav.addEventListener('click', function () { setTimeout(placeDot, 20); });
      addEventListener('resize', placeDot);
      // reposition once fonts load (label widths change) and after layout settles
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeDot).catch(function () {});
      setTimeout(placeDot, 300); setTimeout(placeDot, 900);
    }
    placeDot();
  }
  var SVG_STAR = '<svg width="44" height="44" viewBox="0 0 24 24" fill="#ECF956" stroke="#3E2317" stroke-width="1.4"><path d="M12 2l2.4 6.9H22l-5.8 4.3 2.2 6.8L12 16l-6.4 4 2.2-6.8L2 8.9h7.6z"/></svg>';
  var SVG_HEART = '<svg width="30" height="30" viewBox="0 0 24 24" fill="#FB7259" stroke="#3E2317" stroke-width="1.5"><path d="M12 21s-7-4.5-9.3-8.1C1 10 2 6.5 5.2 6.1 7 5.9 8.4 7 12 9.5 15.6 7 17 5.9 18.8 6.1 22 6.5 23 10 21.3 12.9 19 16.5 12 21 12 21z"/></svg>';
  var SVG_SPARK = '<svg width="28" height="28" viewBox="0 0 24 24" fill="#29A7FF" stroke="#3E2317" stroke-width="1.3"><path d="M12 2c.6 4.5 2.9 6.8 7.4 7.4-4.5.6-6.8 2.9-7.4 7.4-.6-4.5-2.9-6.8-7.4-7.4C9.1 8.8 11.4 6.5 12 2z"/></svg>';
  function heroExtras() {
    var hero = document.querySelector('#v-home .card.hero'); if (!hero || hero.querySelector('.tomo-wk')) return;
    function sticker(svg, css) { var d = document.createElement('div'); d.className = 'tomo-sticker'; d.style.cssText = css; d.innerHTML = svg; hero.appendChild(d); }
    if (!reduce) {
      sticker(SVG_STAR, 'top:20px; right:150px; --r:-14deg; animation:tomoBob 5s ease-in-out infinite;');
      sticker(SVG_HEART, 'top:96px; right:96px; --r:12deg; animation:tomoBob 6s ease-in-out infinite .3s;');
      sticker(SVG_SPARK, 'bottom:34px; right:190px; animation:tomoSpin 9s linear infinite;');
    }
    var cw = 1, tot = 19;
    try { cw = currentWeek().w; tot = Math.max.apply(null, OUTLINE.filter(function (o) { return isMain(o.w); }).map(function (o) { return o.w; })); } catch (e) {}
    var wk = document.createElement('div'); wk.className = 'tomo-wk';
    wk.innerHTML = '<div class="lbl">Week ' + cw + ' of ' + tot + '</div><div class="bar"><i style="width:0"></i></div>';
    hero.appendChild(wk);
    var pct = Math.round(cw / tot * 100); setTimeout(function () { var i = wk.querySelector('i'); if (i) i.style.width = pct + '%'; }, 150);
  }
  function iconFor(t) {
    t = (t || '').toLowerCase();
    if (/review|flashcard/.test(t)) return ['🃏', '#EFD8F0'];
    if (/lesson/.test(t) && !/particle/.test(t)) return ['📖', '#C3E5FF'];
    if (/listen|passage/.test(t)) return ['🎧', '#E4F1CF'];
    if (/particle/.test(t)) return ['🧩', '#FCE29D'];
    if (/write|sentence|speak/.test(t)) return ['✍️', '#FBD7CE'];
    return ['⭐', '#F1F6CE'];
  }
  function sessionIcons() {
    document.querySelectorAll('#v-home .todo').forEach(function (td) {
      if (td.querySelector('.tomo-ic')) return;
      var title = (td.querySelector('.ttx b') || td).textContent || '';
      var m = iconFor(title);
      var ic = document.createElement('div'); ic.className = 'tomo-ic'; ic.textContent = m[0]; ic.style.background = m[1];
      td.insertBefore(ic, td.firstChild);
    });
  }
  function redesign() { try { navIndicator(); heroExtras(); sessionIcons(); } catch (e) {} }

  /* ---------------- observe renders ---------------- */
  var mo, t;
  function run() {
    if (mo) mo.disconnect();
    try { glossActive(); polish(); redesign(); } catch (e) {}
    if (mo) mo.observe(document.querySelector('.app') || document.body, { childList: true, subtree: true });
  }
  function start() {
    mo = new MutationObserver(function () { clearTimeout(t); t = setTimeout(run, 120); });
    run();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
