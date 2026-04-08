// Scroll reveal
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }),
  { threshold: 0.1 }
);

document.querySelectorAll([
  '.hero-kicker', '.hero-text h1', '.hero-desc', '.hero-ctas', '.hero-stats',
  '.chat-window', '.section-head', '.feat-row', '.dapp-split',
  '.sec-item', '.install-block', '.dapp-badge'
].join(',')).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i % 6) * 55 + 'ms';
  io.observe(el);
});

// Nav active section highlight
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) {
      navLinks.forEach((a) => a.classList.remove('active'));
      const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (a) a.classList.add('active');
    }
  }),
  { rootMargin: '-35% 0px -60% 0px' }
).observe;

sections.forEach((s) =>
  new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((a) => a.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    }),
    { rootMargin: '-35% 0px -60% 0px' }
  ).observe(s)
);

// Pause ticker on hover
const ticker = document.querySelector('.ticker');
if (ticker) {
  ticker.addEventListener('mouseenter', () => ticker.style.animationPlayState = 'paused');
  ticker.addEventListener('mouseleave', () => ticker.style.animationPlayState = 'running');
}

// Hide scroll hint on scroll
const scrollHint = document.querySelector('.scroll-hint');
if (scrollHint) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    scrollHint.style.opacity = y > 30 ? '0' : '0.35';
  }, { passive: true });
}
