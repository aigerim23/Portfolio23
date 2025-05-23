/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2025 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function setLang(lang) {
  const langNames = {
    ru: 'RU',
    kk: 'KZ',
    en: 'EN',
    de: 'DE'
  };

  // переключение текста
  const btn = document.getElementById('currentLang');
  if (btn && langNames[lang]) {
    btn.textContent = langNames[lang] + ' ▼';
  }

  // отображение текста нужного языка
document.querySelectorAll('.lang').forEach(el => {
  el.classList.remove('active-lang');
  if (el.getAttribute('lang') === lang) {
    el.classList.add('active-lang');
  }
});


  AOS.refresh();
}
  document.addEventListener('DOMContentLoaded', () => setLang('ru'));

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('toggleSkills');
    const block = document.getElementById('skillsContent');

    if (btn && block) {
      btn.addEventListener('click', () => {
        block.classList.toggle('expanded');
        const langSpans = btn.querySelectorAll('.lang');
langSpans.forEach(span => {
  const isExpanded = block.classList.contains('expanded');
  span.textContent = isExpanded
    ? span.getAttribute('data-close')
    : span.getAttribute('data-open');
});

      });
    }
  });
