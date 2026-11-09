(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------------- Theme toggle ---------------- */
  var themeBtn = document.querySelector('.theme-toggle');
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) { /* storage unavailable */ }
  if (stored === 'dark' || stored === 'light') {
    root.setAttribute('data-theme', stored);
  }

  function currentTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit) return explicit;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
    });
  }

  /* ---------------- Mobile nav ---------------- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------- Active nav link on scroll ---------------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-menu a[href^="#"]'));

  function setActive() {
    var offset = 120;
    var current = null;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top - offset <= 0) current = sections[i].id;
    }
    navLinks.forEach(function (link) {
      link.classList.toggle('active', current !== null && link.getAttribute('href') === '#' + current);
    });
  }
  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', setActive, { passive: true });
    setActive();
  }

  /* ---------------- Reveal on scroll ---------------- */
  var revealTargets = document.querySelectorAll('.pub, .card, .tl-item, .award-list li, .contact-list li, .section-head');
  if ('IntersectionObserver' in window) {
    revealTargets.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealTargets.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- Footer year ---------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
