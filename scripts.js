/* ============================================================
   Capilla Santa Rita de Casia — scripts.js
   Vanilla JS: menú mobile, smooth scroll, año dinámico.
   ============================================================ */

(function () {
  'use strict';

  // ---- Año dinámico en el footer ----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Menú mobile (hamburger) ----
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
  }

  function openMenu() {
    if (!menu || !toggle) return;
    menu.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      if (menu.classList.contains('open')) closeMenu();
      else openMenu();
    });

    // Cerrar al hacer click en un link
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });

    // Cerrar al pasar a desktop
    var mq = window.matchMedia('(min-width: 768px)');
    mq.addEventListener('change', function (e) { if (e.matches) closeMenu(); });

    // Cerrar con Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // ---- Smooth scroll con offset del navbar fijo ----
  var NAV_HEIGHT = 64;
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT + 1;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

})();
