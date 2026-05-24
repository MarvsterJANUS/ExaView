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

  // ── MISSION ──
  gsap.from('.about-mission-text', {
    scrollTrigger: { trigger: '.about-mission', start: 'top 78%' },
    opacity: 0, x: -36, duration: 0.9, ease: 'power3.out'
  });
  gsap.from('.mission-stat', {
    scrollTrigger: { trigger: '.about-mission-stats', start: 'top 80%' },
    opacity: 0, y: 20, duration: 0.55, ease: 'power3.out',
    stagger: 0.07
  });

  // ── PRODUCT ──
  gsap.from('.about-product-text > *', {
    scrollTrigger: { trigger: '.about-product', start: 'top 78%' },
    opacity: 0, y: 28, duration: 0.7, ease: 'power3.out',
    stagger: 0.1
  });
  gsap.from('.about-product-drone img', {
    scrollTrigger: { trigger: '.about-product', start: 'top 78%' },
    opacity: 0, x: 36, duration: 1, ease: 'power3.out', delay: 0.15
  });

  // Callout sequence: dot → line draws → label
  document.querySelectorAll('.callout-lines line').forEach(line => {
    const len = line.getTotalLength();
    gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
  });
  gsap.set('.callout-dot', { opacity: 0 });
  gsap.set('.callout-label', { opacity: 0 });

  gsap.timeline({
    scrollTrigger: { trigger: '.about-product-drone', start: 'top 68%' },
    delay: 0.3
  })
    .to('.callout-dot', {
      opacity: 1, duration: 0.15, ease: 'power2.out', stagger: 0.08
    })
    .to('.callout-lines line', {
      strokeDashoffset: 0, duration: 0.28, ease: 'power2.inOut', stagger: 0.08
    }, '-=0.05')
    .to('.callout-label', {
      opacity: 1, duration: 0.2, ease: 'power2.out', stagger: 0.08
    }, '-=0.15');

  // ── VALUES ──
  gsap.from('.about-values-header > *', {
    scrollTrigger: { trigger: '.about-values-section', start: 'top 78%' },
    opacity: 0, y: 28, duration: 0.7, ease: 'power3.out',
    stagger: 0.12
  });
  gsap.from('.value-card', {
    scrollTrigger: { trigger: '.about-values-grid', start: 'top 82%' },
    opacity: 0, y: 36, duration: 0.65, ease: 'power3.out',
    stagger: 0.14
  });

  // ── CTA ──
  gsap.from('.about-cta-inner > *', {
    scrollTrigger: { trigger: '.about-cta-section', start: 'top 82%' },
    opacity: 0, y: 24, duration: 0.65, ease: 'power3.out',
    stagger: 0.12
  });

}
