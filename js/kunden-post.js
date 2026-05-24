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

  gsap.from('.post-back', {
    scrollTrigger: { trigger: '#post-article', start: 'top 88%' },
    opacity: 0, x: -12, duration: 0.6, ease: 'power3.out'
  });

  gsap.from(['.post-article-meta', '#post-article h1', '.post-lead'], {
    scrollTrigger: { trigger: '#post-article', start: 'top 85%' },
    opacity: 0, y: 22, duration: 0.7, ease: 'power3.out', stagger: 0.12
  });

  gsap.from('.post-body', {
    scrollTrigger: { trigger: '.post-body', start: 'top 88%' },
    opacity: 0, y: 18, duration: 0.7, ease: 'power3.out'
  });

  gsap.from('.post-related-header > *', {
    scrollTrigger: { trigger: '#post-related', start: 'top 82%' },
    opacity: 0, y: 22, duration: 0.7, ease: 'power3.out', stagger: 0.1
  });

  gsap.from('.post-related-grid .post-card', {
    scrollTrigger: { trigger: '.post-related-grid', start: 'top 85%' },
    opacity: 0, y: 24, duration: 0.65, ease: 'power3.out', stagger: 0.15
  });

}
