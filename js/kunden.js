if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // skip animations
} else {

  const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  gsap.from('.about-header-overlay .section-eyebrow', {
    opacity: 0, y: 16, duration: 0.7, ease: 'power3.out', delay: 0.2
  });
  gsap.from('.about-header-overlay h1', {
    opacity: 0, y: 28, duration: 0.9, ease: 'power3.out', delay: 0.4
  });

  gsap.from('.kunden-featured-link', {
    scrollTrigger: { trigger: '#kunden-featured', start: 'top 80%' },
    opacity: 0, y: 32, duration: 0.9, ease: 'power3.out'
  });

  gsap.from('.post-card', {
    scrollTrigger: { trigger: '.kunden-grid', start: 'top 84%' },
    opacity: 0, y: 24, duration: 0.6, ease: 'power3.out', stagger: 0.09
  });

}
