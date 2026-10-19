/* ============================================================
   PINK UNICORN — shared.js
   Hamburger nav + scroll fade-in animations
   ============================================================ */

(function () {
  'use strict';

  /* ── Hamburger menu ───────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow =
        mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Scroll fade-in (Intersection Observer) ───────────── */
  const fadeTargets = document.querySelectorAll('.fade-up, .ai-section');

  if ('IntersectionObserver' in window && fadeTargets.length) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeTargets.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: show everything
    fadeTargets.forEach(function (el) { el.classList.add('visible'); });
  }
})();
