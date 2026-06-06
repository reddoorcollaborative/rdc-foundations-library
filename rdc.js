/* ================================================================
   RED DOOR COLLABORATIVE — FOUNDATIONS LIBRARY
   rdc.js v2.0
   https://reddoorcollaborative.github.io/rdc-foundations-library/rdc.js

   Place before </body> on any RDC HTML page:
     <script src="https://reddoorcollaborative.github.io/rdc-foundations-library/rdc.js"></script>

   Provides:
     - Layout toggle widget (theme / size / alignment)
     - Preference persistence via localStorage ('rdc-prefs')

   FOUC prevention is a separate inline <head> script — keep it in
   each template so dark mode applies before CSS paints:
     <script>(function(){try{var p=JSON.parse(localStorage.getItem('rdc-prefs')||'{}');
     document.documentElement.setAttribute('data-theme',p.theme||
     (window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
     }catch(e){}})();</script>
================================================================ */

(function () {
  'use strict';

  // ── 0a. Keyboard-accessible scrollable code blocks ───────────
  document.querySelectorAll('pre').forEach(function (el) {
    el.setAttribute('tabindex', '0');
  });

  // ── 0b. Dynamic timestamp in sidebar version footer ──────────
  var versionEl = document.querySelector('.sidebar-version');
  if (versionEl) {
    try {
      var now = new Date();
      var fmt = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        month: 'numeric', day: 'numeric', year: '2-digit',
        hour: 'numeric', minute: '2-digit', hour12: true
      });
      var parts = {};
      fmt.formatToParts(now).forEach(function (p) { parts[p.type] = p.value; });
      var stamp = parts.month + '/' + parts.day + '/' + parts.year
                + ' ' + parts.hour + ':' + parts.minute
                + ' ' + parts.dayPeriod + ' PT';
      versionEl.textContent = versionEl.textContent + ' · ' + stamp;
    } catch (e) {}
  }

  // ── 1. Apply saved size / align preferences ──────────────────
  var prefs = {};
  try { prefs = JSON.parse(localStorage.getItem('rdc-prefs') || '{}'); } catch (e) {}
  if (prefs.size  && prefs.size  !== 'default') document.body.classList.add('size-'   + prefs.size);
  if (prefs.align && prefs.align !== 'center')  document.body.classList.add('layout-' + prefs.align);

  // ── 2. Inject layout toggle widget ───────────────────────────
  document.body.insertAdjacentHTML('beforeend',
    '<aside class="layout-toggle" aria-label="Display settings">' +
      '<div class="layout-toggle-group">' +
        '<span class="layout-toggle-label">Align</span>' +
        '<button class="layout-toggle-btn" data-group="align" data-value="center">Center</button>' +
        '<button class="layout-toggle-btn" data-group="align" data-value="left">Left</button>' +
      '</div>' +
      '<div class="layout-toggle-sep"></div>' +
      '<div class="layout-toggle-group">' +
        '<span class="layout-toggle-label">Size</span>' +
        '<button class="layout-toggle-btn" data-group="size" data-value="default">Default</button>' +
        '<button class="layout-toggle-btn" data-group="size" data-value="large">Large</button>' +
        '<button class="layout-toggle-btn" data-group="size" data-value="editorial">Editorial</button>' +
      '</div>' +
      '<div class="layout-toggle-sep"></div>' +
      '<div class="layout-toggle-group">' +
        '<span class="layout-toggle-label">Theme</span>' +
        '<button class="layout-toggle-btn" data-group="theme" data-value="light">Light</button>' +
        '<button class="layout-toggle-btn" data-group="theme" data-value="dark">Dark</button>' +
      '</div>' +
    '</aside>'
  );

  // ── 3. Wire up interactions ───────────────────────────────────
  function getCurrent(group) {
    if (group === 'theme') return document.documentElement.getAttribute('data-theme') || 'light';
    if (group === 'size') {
      var sc = Array.from(document.body.classList).find(function (c) { return c.startsWith('size-'); });
      return sc ? sc.replace('size-', '') : 'default';
    }
    var ac = Array.from(document.body.classList).find(function (c) { return c.startsWith('layout-'); });
    return ac ? ac.replace('layout-', '') : 'center';
  }

  var btns = document.querySelectorAll('.layout-toggle-btn');

  btns.forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.value === getCurrent(btn.dataset.group));
  });

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var g = this.dataset.group, v = this.dataset.value;
      document.querySelectorAll('.layout-toggle-btn[data-group="' + g + '"]').forEach(function (b) {
        b.classList.remove('active');
      });
      this.classList.add('active');
      if (g === 'theme') {
        document.documentElement.setAttribute('data-theme', v);
      } else if (g === 'align') {
        document.body.classList.remove('layout-center', 'layout-left');
        if (v !== 'center') document.body.classList.add('layout-' + v);
      } else {
        document.body.classList.remove('size-default', 'size-large', 'size-editorial');
        if (v !== 'default') document.body.classList.add('size-' + v);
      }
      try {
        var p = JSON.parse(localStorage.getItem('rdc-prefs') || '{}');
        p[g] = v;
        localStorage.setItem('rdc-prefs', JSON.stringify(p));
      } catch (e) {}
    });
  });

})();
