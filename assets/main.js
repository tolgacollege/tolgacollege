/* Shared behavior: nav toggle, hero slideshow, small render helpers. */

document.addEventListener('DOMContentLoaded', function () {
  // mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  initSlideshow();
});

function initSlideshow() {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  var slides = Array.prototype.slice.call(hero.querySelectorAll('.slide'));
  var dotsWrap = hero.querySelector('.dots');
  if (!slides.length) return;

  var current = 0;
  slides[0].classList.add('active');

  if (dotsWrap) {
    slides.forEach(function (_, i) {
      var b = document.createElement('button');
      if (i === 0) b.classList.add('active');
      b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      b.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(b);
    });
  }

  function goTo(i) {
    slides[current].classList.remove('active');
    if (dotsWrap) dotsWrap.children[current].classList.remove('active');
    current = i;
    slides[current].classList.add('active');
    if (dotsWrap) dotsWrap.children[current].classList.add('active');
  }

  setInterval(function () {
    goTo((current + 1) % slides.length);
  }, 4500);
}

/* ---------- small formatting helpers used across pages ---------- */
function driveEmbedUrl(fileId) {
  return 'https://drive.google.com/file/d/' + fileId + '/preview';
}

function el(tag, className, html) {
  var e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function formatDate(iso) {
  var d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
