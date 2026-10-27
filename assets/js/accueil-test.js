/* Page d'accueil TEST (index-anime.html) : apparitions au defilement
   et phrase qui s'allume mot par mot. Sans dependance. */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Video du haut de page : ordinateur seulement, lancee apres le chargement
     complet pour ne pas retarder l'affichage. Elle apparait en fondu par-dessus
     l'image fixe une fois la lecture demarree. */
  var heroVideo = document.querySelector(".lp-hero-video");
  if (heroVideo && !reduced && window.matchMedia("(min-width: 961px)").matches) {
    var startVideo = function () {
      heroVideo.addEventListener("playing", function () {
        heroVideo.classList.add("is-playing");
      }, { once: true });
      heroVideo.preload = "auto";
      var p = heroVideo.play();
      if (p && p.catch) p.catch(function () {});
    };
    if (document.readyState === "complete") startVideo();
    else window.addEventListener("load", startVideo, { once: true });
  }

  /* Sections qui montent de 32px en apparaissant, une seule fois */
  var reveals = document.querySelectorAll("[data-reveal]");
  if (reveals.length && "IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("rv-in");
          entry.target.classList.remove("rv-wait");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) {
      el.classList.add("rv-wait");
      obs.observe(el);
    });
  }

  /* Phrase qui s'allume : chaque mot passe du gris au violet quand il
     franchit la ligne situee aux 2/3 de l'ecran */
  var tagline = document.querySelector("[data-tagline]");
  if (tagline && !reduced) {
    var accentWords = (tagline.getAttribute("data-accent") || "").split("|");
    var words = tagline.textContent.trim().split(/\s+/);
    tagline.textContent = "";
    var spans = words.map(function (word, i) {
      var span = document.createElement("span");
      span.className = "w" + (accentWords.indexOf(word.replace(/[.,]/g, "")) !== -1 ? " accent" : "");
      span.textContent = word;
      tagline.appendChild(span);
      if (i < words.length - 1) tagline.appendChild(document.createTextNode(" "));
      return span;
    });

    var ticking = false;
    var update = function () {
      var line = window.innerHeight * 0.66;
      spans.forEach(function (span) {
        if (span.getBoundingClientRect().top < line) span.classList.add("on");
      });
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
    update();
  }
})();
