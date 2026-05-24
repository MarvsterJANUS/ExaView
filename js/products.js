// ── COLOR SWITCHER ──
const droneImg = document.getElementById('drone-main-img');
document.querySelectorAll('.color-swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    if (swatch.classList.contains('is-active')) return;
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('is-active'));
    swatch.classList.add('is-active');
    gsap.to(droneImg, {
      opacity: 0, scale: 0.93, duration: 0.22, ease: 'power2.in',
      onComplete: () => {
        droneImg.src = swatch.dataset.src;
        gsap.to(droneImg, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' });
      }
    });
  });
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // skip all animations
} else {

  const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // ── PAGE HEADER ──
  gsap.from('.about-header-overlay .section-eyebrow', {
    opacity: 0, y: 16, duration: 0.7, ease: 'power3.out', delay: 0.2
  });
  gsap.from('.about-header-overlay h1', {
    opacity: 0, y: 28, duration: 0.9, ease: 'power3.out', delay: 0.4
  });

  // ── PRODUCT STAGE ──
  gsap.from('.product-drone-wrap img', {
    scrollTrigger: { trigger: '#product-stage', start: 'top 88%' },
    opacity: 0, y: 50, duration: 1.2, ease: 'power3.out'
  });
  gsap.from('.color-selector', {
    scrollTrigger: { trigger: '#product-stage', start: 'top 88%' },
    opacity: 0, x: 12, duration: 0.9, ease: 'power3.out', delay: 0.5
  });
  gsap.from('.product-stage-headline h2', {
    scrollTrigger: { trigger: '.product-stage-headline', start: 'top 85%' },
    opacity: 0, y: 28, duration: 0.9, ease: 'power3.out'
  });
  gsap.from('.product-stage-headline > p', {
    scrollTrigger: { trigger: '.product-stage-headline', start: 'top 85%' },
    opacity: 0, y: 18, duration: 0.7, ease: 'power3.out', delay: 0.18
  });

  // ── SPECS TICKER ──
  gsap.from('.product-ticker', {
    scrollTrigger: { trigger: '.product-ticker', start: 'top 92%' },
    opacity: 0, duration: 0.8, ease: 'power2.out'
  });

  // ── SHOWCASE ──
  gsap.from('.showcase-left > *', {
    scrollTrigger: { trigger: '#product-showcase', start: 'top 78%' },
    opacity: 0, y: 28, duration: 0.7, ease: 'power3.out', stagger: 0.12
  });
  gsap.from('.showcase-right-img img', {
    scrollTrigger: { trigger: '.showcase-content', start: 'top 82%' },
    opacity: 0, x: 40, duration: 1, ease: 'power3.out', delay: 0.25
  });

  // ── OPTICS ──
  gsap.from('#product-optics .split-media img', {
    scrollTrigger: { trigger: '#product-optics', start: 'top 78%' },
    opacity: 0, x: -40, duration: 1, ease: 'power3.out'
  });
  gsap.from('#product-optics .split-text > *', {
    scrollTrigger: { trigger: '#product-optics', start: 'top 78%' },
    opacity: 0, y: 28, duration: 0.7, ease: 'power3.out', stagger: 0.1, delay: 0.15
  });

  // ── TECH ──
  gsap.from('#product-tech .split-text > *', {
    scrollTrigger: { trigger: '#product-tech', start: 'top 78%' },
    opacity: 0, x: -28, duration: 0.9, ease: 'power3.out', stagger: 0.1
  });
  gsap.from('#product-tech .split-media img', {
    scrollTrigger: { trigger: '#product-tech', start: 'top 78%' },
    opacity: 0, x: 40, duration: 1, ease: 'power3.out', delay: 0.2
  });

  // ── CTA ──
  gsap.from('.about-cta-inner > *', {
    scrollTrigger: { trigger: '.about-cta-section', start: 'top 82%' },
    opacity: 0, y: 24, duration: 0.65, ease: 'power3.out', stagger: 0.12
  });

}
