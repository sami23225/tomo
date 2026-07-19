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

  /* ---------------- observe renders ---------------- */
  var mo, t;
  function run() {
    if (mo) mo.disconnect();
    try { glossActive(); polish(); } catch (e) {}
    if (mo) mo.observe(document.querySelector('.app') || document.body, { childList: true, subtree: true });
  }
  function start() {
    mo = new MutationObserver(function () { clearTimeout(t); t = setTimeout(run, 120); });
    run();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
