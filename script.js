/* ============================================================
   KléIA SOLUTIONS — script.js
   Navigation, FAQ accordéon, filtres cas d'usage, animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Nav sticky --- */
  const nav = document.querySelector('nav');
  if (nav) {
    const onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  /* --- Hamburger mobile --- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  }

  /* --- Smooth scroll ancres --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    const href = anchor.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navH = nav ? nav.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 20;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* --- FAQ accordéon --- */
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      const item = q.closest('.faq-item');
      item.classList.toggle('ouvert');
    });
  });

  /* --- Filtres cas d'usage --- */
  const filtres = document.querySelectorAll('.filtre-btn');
  const cards = document.querySelectorAll('.usecase');
  const vide = document.querySelector('.uc-vide');
  if (filtres.length && cards.length) {
    filtres.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filtres.forEach(function (b) { b.classList.remove('actif'); });
        btn.classList.add('actif');
        const f = btn.dataset.filtre;
        let visibles = 0;
        cards.forEach(function (card) {
          const show = (f === 'tous') || card.dataset.secteur.split(' ').indexOf(f) !== -1;
          card.style.display = show ? 'flex' : 'none';
          if (show) visibles++;
        });
        if (vide) vide.style.display = visibles === 0 ? 'block' : 'none';
      });
    });
  }

  /* --- Carrousel témoignages infini (2 par page) --- */
  var track = document.querySelector('.temoignages-track');
  var dotsContainer = document.getElementById('temoignage-dots');
  var btnPrev = document.getElementById('temoignage-prev');
  var btnNext = document.getElementById('temoignage-next');
  if (track && dotsContainer && btnPrev && btnNext) {
    var originaux = Array.prototype.slice.call(track.querySelectorAll('.temoignage'));
    var total = originaux.length;
    var parPage = 2;
    var nbPages = Math.ceil(total / parPage);

    /* Cloner la dernière page au début et la première page à la fin */
    /* Cela permet de téléporter sans saut visible lors du loop */
    for (var i = originaux.length - 1; i >= 0; i--) {
      var cloneDebut = originaux[i].cloneNode(true);
      cloneDebut.setAttribute('aria-hidden', 'true');
      track.insertBefore(cloneDebut, track.firstChild);
    }
    for (var j = 0; j < originaux.length; j++) {
      var cloneFin = originaux[j].cloneNode(true);
      cloneFin.setAttribute('aria-hidden', 'true');
      track.appendChild(cloneFin);
    }

    var page = 0;
    var enTransition = false;
    var dots = [];

    for (var p = 0; p < nbPages; p++) {
      (function(p) {
        var dot = document.createElement('button');
        dot.className = 'carrousel-dot' + (p === 0 ? ' actif' : '');
        dot.setAttribute('aria-label', 'Page ' + (p + 1));
        dot.addEventListener('click', function () { goTo(p); });
        dotsContainer.appendChild(dot);
        dots.push(dot);
      })(p);
    }

    function getItemW() {
      var fenetre = track.parentElement.offsetWidth;
      var estMobile = fenetre < 600;
      if (estMobile) return fenetre;
      return (fenetre - 1.5 * 16) / 2;
    }

    function getOffset(p) {
      var fenetre = track.parentElement.offsetWidth;
      var estMobile = fenetre < 600;
      var itemW = estMobile ? fenetre : (fenetre - 1.5 * 16) / 2;
      var gap = estMobile ? 0 : 1.5 * 16;
      /* Les clones du début occupent "total" items — on les saute avant d'afficher p */
      return (total + p * parPage) * (itemW + gap);
    }

    function goTo(n, sansAnimation) {
      dots[((page % nbPages) + nbPages) % nbPages].classList.remove('actif');
      page = n;
      dots[((page % nbPages) + nbPages) % nbPages].classList.add('actif');
      if (sansAnimation) {
        track.style.transition = 'none';
      } else {
        track.style.transition = 'transform 0.4s ease';
      }
      track.style.transform = 'translateX(-' + getOffset(page) + 'px)';
    }

    function apresTransition() {
      /* Téléportation silencieuse si on est sur un clone */
      if (page < 0) {
        page = nbPages - 1;
        goTo(page, true);
      } else if (page >= nbPages) {
        page = 0;
        goTo(page, true);
      }
      enTransition = false;
    }

    track.addEventListener('transitionend', apresTransition);

    btnPrev.addEventListener('click', function () {
      if (enTransition) return;
      enTransition = true;
      goTo(page - 1);
    });
    btnNext.addEventListener('click', function () {
      if (enTransition) return;
      enTransition = true;
      goTo(page + 1);
    });
    window.addEventListener('resize', function () { goTo(page, true); });

    /* Position initiale sans animation */
    goTo(0, true);
  }

  /* --- Carrousel études de cas infini (2 par page) --- */
  (function () {
    var track = document.querySelector('.cas-track');
    var dotsContainer = document.getElementById('cas-dots');
    var btnPrev = document.getElementById('cas-prev');
    var btnNext = document.getElementById('cas-next');
    if (!track || !dotsContainer || !btnPrev || !btnNext) return;

    var originaux = Array.prototype.slice.call(track.querySelectorAll('.cas'));
    var total = originaux.length;
    var parPage = 2;
    var nbPages = Math.ceil(total / parPage);

    for (var i = originaux.length - 1; i >= 0; i--) {
      var c = originaux[i].cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      track.insertBefore(c, track.firstChild);
    }
    for (var j = 0; j < originaux.length; j++) {
      var c2 = originaux[j].cloneNode(true);
      c2.setAttribute('aria-hidden', 'true');
      track.appendChild(c2);
    }

    var page = 0;
    var enTransition = false;
    var dots = [];

    for (var p = 0; p < nbPages; p++) {
      (function(p) {
        var dot = document.createElement('button');
        dot.className = 'carrousel-dot' + (p === 0 ? ' actif' : '');
        dot.setAttribute('aria-label', 'Page ' + (p + 1));
        dot.addEventListener('click', function () { goTo(p); });
        dotsContainer.appendChild(dot);
        dots.push(dot);
      })(p);
    }

    function getOffset(p) {
      var fenetre = track.parentElement.offsetWidth;
      var estMobile = fenetre < 600;
      var itemW = estMobile ? fenetre : (fenetre - 1.5 * 16) / 2;
      var gap = estMobile ? 0 : 1.5 * 16;
      return (total + p * parPage) * (itemW + gap);
    }

    function goTo(n, sansAnimation) {
      dots[((page % nbPages) + nbPages) % nbPages].classList.remove('actif');
      page = n;
      dots[((page % nbPages) + nbPages) % nbPages].classList.add('actif');
      track.style.transition = sansAnimation ? 'none' : 'transform 0.4s ease';
      track.style.transform = 'translateX(-' + getOffset(page) + 'px)';
    }

    track.addEventListener('transitionend', function () {
      if (page < 0) { page = nbPages - 1; goTo(page, true); }
      else if (page >= nbPages) { page = 0; goTo(page, true); }
      enTransition = false;
    });

    btnPrev.addEventListener('click', function () {
      if (enTransition) return; enTransition = true; goTo(page - 1);
    });
    btnNext.addEventListener('click', function () {
      if (enTransition) return; enTransition = true; goTo(page + 1);
    });
    window.addEventListener('resize', function () { goTo(page, true); });
    goTo(0, true);
  })();

  /* --- Apparition au scroll --- */
  const anim = document.querySelectorAll('.carte, .offre, .usecase, .article-card, .formation, .etape, .preuve-item');
  if (anim.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    anim.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      obs.observe(el);
    });
  }

});
