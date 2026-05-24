// ── SELECT PLACEHOLDER COLOR ──
document.querySelectorAll('.form-group select').forEach(select => {
  select.addEventListener('change', () => {
    select.classList.toggle('has-value', select.value !== '');
  });
});

// ── NEWSLETTER FORM SUBMISSION ──
const newsletterForm = document.querySelector('.contact-form');
const newsletterSuccess = document.querySelector('.form-success');

newsletterForm.addEventListener('submit', function(e) {
  e.preventDefault();
  gsap.to(newsletterForm, {
    opacity: 0, y: -12, duration: 0.35, ease: 'power2.in',
    onComplete: () => {
      newsletterForm.style.display = 'none';
      newsletterSuccess.style.display = 'flex';
      gsap.from(newsletterSuccess, { opacity: 0, y: 12, duration: 0.5, ease: 'power3.out' });
    }
  });
});

// ── INQUIRY FORM SUBMISSION ──
const inquiryForm = document.getElementById('inquiry-form');
const inquirySuccess = document.querySelector('.inquiry-success');

inquiryForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = inquiryForm.querySelector('input[type="email"]');
  const firstName = inquiryForm.querySelector('input[name="firstName"]');
  if (!firstName.value.trim() || !email.value.trim()) {
    [firstName, email].forEach(el => {
      if (!el.value.trim()) {
        el.style.borderColor = 'rgba(255,80,80,0.5)';
        el.addEventListener('input', () => el.style.borderColor = '', { once: true });
      }
    });
    return;
  }

  gsap.to(inquiryForm, {
    opacity: 0, y: -12, duration: 0.35, ease: 'power2.in',
    onComplete: () => {
      inquiryForm.style.display = 'none';
      inquirySuccess.style.display = 'flex';
      gsap.from(inquirySuccess, { opacity: 0, y: 12, duration: 0.5, ease: 'power3.out' });
    }
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

  // ── NEWSLETTER SECTION ──
  gsap.from('.contact-intro > *', {
    scrollTrigger: { trigger: '#contact-section', start: 'top 78%' },
    opacity: 0, y: 28, duration: 0.7, ease: 'power3.out', stagger: 0.12
  });
  gsap.from('#contact-section .form-group', {
    scrollTrigger: { trigger: '.contact-form', start: 'top 82%' },
    opacity: 0, y: 20, duration: 0.55, ease: 'power3.out', stagger: 0.1
  });
  gsap.from('.contact-form .cta-btn', {
    scrollTrigger: { trigger: '.contact-form', start: 'top 82%' },
    opacity: 0, y: 16, duration: 0.5, ease: 'power3.out', delay: 0.4
  });

  // ── INQUIRY SECTION ──
  gsap.from('.inquiry-intro > *', {
    scrollTrigger: { trigger: '#inquiry-section', start: 'top 78%' },
    opacity: 0, y: 28, duration: 0.7, ease: 'power3.out', stagger: 0.12
  });
  gsap.from('#inquiry-form .form-group', {
    scrollTrigger: { trigger: '#inquiry-form', start: 'top 85%' },
    opacity: 0, y: 20, duration: 0.55, ease: 'power3.out', stagger: 0.08
  });
  gsap.from('#inquiry-form .cta-btn', {
    scrollTrigger: { trigger: '#inquiry-form', start: 'top 85%' },
    opacity: 0, y: 16, duration: 0.5, ease: 'power3.out', delay: 0.55
  });

}
