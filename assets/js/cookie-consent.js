(function () {
  var STORAGE_KEY = 'kleia_consent_analytics';
  var GA_ID = 'G-3KJ382KWXE';

  function loadGoogleAnalytics() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  function hideBanner() {
    var banner = document.getElementById('cookie-consent-banner');
    if (banner) banner.remove();
  }

  function showBanner() {
    var banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Consentement cookies');
    banner.innerHTML =
      '<p>Ce site utilise Google Analytics pour mesurer sa fréquentation. Ces données m\'aident à comprendre ce qui vous intéresse. ' +
      '<a href="/confidentialite.html">En savoir plus</a></p>' +
      '<div class="cookie-consent-actions">' +
      '<button type="button" class="cookie-consent-refuse">Refuser</button>' +
      '<button type="button" class="cookie-consent-accept">Accepter</button>' +
      '</div>';
    document.body.appendChild(banner);

    banner.querySelector('.cookie-consent-accept').addEventListener('click', function () {
      localStorage.setItem(STORAGE_KEY, 'accepted');
      loadGoogleAnalytics();
      hideBanner();
    });

    banner.querySelector('.cookie-consent-refuse').addEventListener('click', function () {
      localStorage.setItem(STORAGE_KEY, 'refused');
      hideBanner();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var consent = localStorage.getItem(STORAGE_KEY);
    if (consent === 'accepted') {
      loadGoogleAnalytics();
    } else if (consent !== 'refused') {
      showBanner();
    }
  });
})();
