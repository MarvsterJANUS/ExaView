(function () {
  if (localStorage.getItem('cookie-consent')) return;

  var banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie-Hinweis');
  banner.innerHTML = [
    '<p class="cookie-text">',
      'Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.',
      ' Weitere Informationen finden Sie in unserer <a href="datenschutz.html">Datenschutzerklärung</a>.',
    '</p>',
    '<div class="cookie-actions">',
      '<button class="cookie-btn cookie-btn--decline" id="cookie-decline">Ablehnen</button>',
      '<button class="cookie-btn cookie-btn--accept" id="cookie-accept">Akzeptieren</button>',
    '</div>',
  ].join('');

  document.body.appendChild(banner);

  function dismiss(value) {
    localStorage.setItem('cookie-consent', value);
    banner.classList.add('is-hidden');
    setTimeout(function () { banner.remove(); }, 450);
  }

  document.getElementById('cookie-accept').addEventListener('click', function () { dismiss('accepted'); });
  document.getElementById('cookie-decline').addEventListener('click', function () { dismiss('declined'); });
})();
