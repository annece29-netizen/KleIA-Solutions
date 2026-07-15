/* KléIA Solutions — interactions légères, sans dépendance */
(function () {
  "use strict";

  /* Menu mobile */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      /* Bloque le defilement de la page tant que le menu est ouvert */
      document.body.classList.toggle("nav-open", open);
    });
    /* Ferme le menu quand on clique sur un lien */
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      }
    });
  }

  /* Ombre du header au défilement */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Filtres du blog (index) */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var posts = document.querySelectorAll(".post-card[data-cat]");
  if (filterBtns.length && posts.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var cat = btn.getAttribute("data-filter");
        posts.forEach(function (post) {
          var show = cat === "all" || post.getAttribute("data-cat") === cat;
          post.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* Copier l'adresse email en un clic */
  var copyBtns = document.querySelectorAll(".copy-email");
  copyBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var email = btn.getAttribute("data-email");
      if (!email) return;
      navigator.clipboard.writeText(email).then(function () {
        btn.classList.add("copied");
        setTimeout(function () { btn.classList.remove("copied"); }, 1800);
      });
    });
  });

  /* Année courante dans le pied de page */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* Filtres cas d'usage (page cas-usage.html) */
  var filtres = document.querySelectorAll(".filtre-btn");
  var usecases = document.querySelectorAll(".usecase");
  var ucVide = document.querySelector(".uc-vide");
  if (filtres.length && usecases.length) {
    filtres.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filtres.forEach(function (b) { b.classList.remove("actif"); });
        btn.classList.add("actif");
        var f = btn.dataset.filtre;
        var visibles = 0;
        usecases.forEach(function (card) {
          var show = (f === "tous") || card.dataset.secteur.split(" ").indexOf(f) !== -1;
          card.style.display = show ? "flex" : "none";
          if (show) visibles++;
        });
        if (ucVide) ucVide.style.display = visibles === 0 ? "block" : "none";
      });
    });
  }

  /* Carrousel témoignages infini (2 par page) */
  (function () {
    var track = document.querySelector(".temoignages-track");
    var dotsContainer = document.getElementById("temoignage-dots");
    var btnPrev = document.getElementById("temoignage-prev");
    var btnNext = document.getElementById("temoignage-next");
    if (!track || !dotsContainer || !btnPrev || !btnNext) return;

    var originaux = Array.prototype.slice.call(track.querySelectorAll(".temoignage"));
    var total = originaux.length;
    var parPage = 2;
    var nbPages = Math.ceil(total / parPage);

    /* Cloner la dernière page au début et la première page à la fin,
       pour permettre une téléportation sans saut visible lors du loop */
    for (var i = originaux.length - 1; i >= 0; i--) {
      var cloneDebut = originaux[i].cloneNode(true);
      cloneDebut.setAttribute("aria-hidden", "true");
      track.insertBefore(cloneDebut, track.firstChild);
    }
    for (var j = 0; j < originaux.length; j++) {
      var cloneFin = originaux[j].cloneNode(true);
      cloneFin.setAttribute("aria-hidden", "true");
      track.appendChild(cloneFin);
    }

    var page = 0;
    var enTransition = false;
    var dots = [];

    for (var p = 0; p < nbPages; p++) {
      (function (p) {
        var dot = document.createElement("button");
        dot.className = "carrousel-dot" + (p === 0 ? " actif" : "");
        dot.setAttribute("aria-label", "Page " + (p + 1));
        dot.addEventListener("click", function () { goTo(p); });
        dotsContainer.appendChild(dot);
        dots.push(dot);
      })(p);
    }

    function getOffset(p) {
      var fenetre = track.parentElement.offsetWidth;
      var estMobile = fenetre < 600;
      var itemW = estMobile ? fenetre : (fenetre - 1.5 * 16) / 2;
      var gap = estMobile ? 0 : 1.5 * 16;
      /* Les clones du début occupent "total" items : on les saute avant d'afficher p */
      return (total + p * parPage) * (itemW + gap);
    }

    function goTo(n, sansAnimation) {
      dots[((page % nbPages) + nbPages) % nbPages].classList.remove("actif");
      page = n;
      dots[((page % nbPages) + nbPages) % nbPages].classList.add("actif");
      track.style.transition = sansAnimation ? "none" : "transform 0.4s ease";
      track.style.transform = "translateX(-" + getOffset(page) + "px)";
    }

    track.addEventListener("transitionend", function () {
      if (page < 0) { page = nbPages - 1; goTo(page, true); }
      else if (page >= nbPages) { page = 0; goTo(page, true); }
      enTransition = false;
    });

    btnPrev.addEventListener("click", function () {
      if (enTransition) return;
      enTransition = true;
      goTo(page - 1);
    });
    btnNext.addEventListener("click", function () {
      if (enTransition) return;
      enTransition = true;
      goTo(page + 1);
    });
    window.addEventListener("resize", function () { goTo(page, true); });

    /* Position initiale sans animation */
    goTo(0, true);
  })();

  /* Apparition au scroll */
  var anim = document.querySelectorAll(".card, .usecase, .formation, .step, .post-card");
  if (anim.length && "IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    anim.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      obs.observe(el);
    });
  }

  /* Mot rotatif dans le titre du hero (page d'accueil, services, formations...) */
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll(".rotating-word").forEach(function (el) {
    var words = (el.getAttribute("data-words") || el.textContent).split("|");
    var wordIndex = 0;

    setInterval(function () {
      wordIndex = (wordIndex + 1) % words.length;
      if (prefersReducedMotion) {
        el.textContent = words[wordIndex];
        return;
      }
      el.style.transition = "opacity 0.25s ease, transform 0.25s ease";
      el.style.opacity = "0";
      el.style.transform = "translateY(6px)";
      setTimeout(function () {
        el.textContent = words[wordIndex];
        el.style.transform = "translateY(-6px)";
        requestAnimationFrame(function () {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
      }, 250);
    }, 2000);
  });
})();
