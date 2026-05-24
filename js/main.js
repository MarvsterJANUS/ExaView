/* ═══════════════════════════════════════════════════════════════
   ExaView — Cinematic Hero Animation
   GSAP + ScrollTrigger + Lenis
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Reduced Motion Check ─────────────────────────────────── */
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* ─── Lenis Smooth Scroll ──────────────────────────────────── */
  const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: false,
  });

  /* Connect Lenis to GSAP ticker */
  gsap.registerPlugin(ScrollTrigger);

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  /* ─── Element References ───────────────────────────────────── */
  const skyImg      = document.getElementById('sky-img');
  const cloud1      = document.querySelector('#layer-cloud1 img');
  const cloud2      = document.querySelector('#layer-cloud2 img');
  const cloud3      = document.querySelector('#layer-cloud3 img');
  const cloud4      = document.querySelector('#layer-cloud4 img');
  const droneImg    = document.getElementById('drone-img');
  const logoImg     = document.getElementById('hero-logo-img');
  const subline     = document.getElementById('hero-subline');
  const scrollInd   = document.getElementById('scroll-indicator');
  const terrainMtn  = document.getElementById('terrain-mountain');
  const terrainGnd  = document.getElementById('terrain-ground');

  /* ─── Reduced Motion Fallback ──────────────────────────────── */
  if (prefersReducedMotion) {
    document.getElementById('hero-scroll-spacer').style.height = '100vh';
    gsap.set(droneImg, { scale: 1, x: 0, y: 0, filter: 'none', opacity: 0.15 });
    gsap.set(logoImg,  { opacity: 1, scale: 1, filter: 'none' });
    return;
  }

  /* ─── Set Initial States Before Any Scroll ─────────────────── */
  /* Must happen immediately so there's no flash of wrong state */

  gsap.set(droneImg, {
    scale: 0.03,
    x: 160,      /* starts upper-right — hidden in sky/clouds */
    y: -110,
    rotation: 4, /* slight banking tilt for the right-to-center arc */
    opacity: 0,  /* fades in as if emerging from behind a cloud */
    filter: 'blur(3px) drop-shadow(0 0 0px rgba(100,160,255,0))',
  });

  gsap.set(logoImg, {
    opacity: 0,
    scale: 0.82,
    filter: 'blur(14px)',
  });

  gsap.set(subline, { opacity: 0, y: 14 });

  /* Terrain starts pushed below — hero-sticky clips it out of view */
  gsap.set(terrainMtn, { y: 480 });
  gsap.set(terrainGnd, { y: 500 });

  /* ─── Build the Main Animation Timeline ─────────────────────── */
  function buildTimeline() {

    const heroTL = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero-scroll-spacer',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,           /* cinematic lag — tune lower for snappier feel */
        invalidateOnRefresh: true,

        onLeave: () => {
          /* Release GPU memory once hero is done */
          [skyImg, droneImg, cloud1, cloud2, cloud3, logoImg].forEach((el) => {
            if (el) el.style.willChange = 'auto';
          });
        },
        onEnterBack: () => {
          [skyImg, droneImg, cloud1, cloud2, cloud3, logoImg].forEach((el) => {
            if (el) el.style.willChange = 'transform, opacity, filter';
          });
        },
      },
    });

    /* ──────────────────────────────────────────────────────────
       SKY — slow upward pan (no scale/zoom)
       Image is 130% tall so there is room to travel without
       exposing the dark background at top or bottom.
    ────────────────────────────────────────────────────────── */
    heroTL.fromTo(
      skyImg,
      { y: 0 },
      { y: -180, ease: 'none', duration: 1 },
      0
    );

    /* ──────────────────────────────────────────────────────────
       CLOUDS  (full timeline duration: 0 → 1)
       Transform only — no filter — for GPU compositing
       Opposite directions create depth parallax
    ────────────────────────────────────────────────────────── */
    heroTL.to(
      cloud1,
      { x: '8vw', y: '-3vh', ease: 'none', duration: 1 },
      0
    );

    heroTL.to(
      cloud2,
      { x: '-14vw', y: '-5vh', ease: 'none', duration: 1 },
      0
    );

    heroTL.to(
      cloud3,
      { x: '22vw', y: '-8vh', ease: 'none', duration: 1 },
      0
    );

    heroTL.to(
      cloud4,
      { x: '-10vw', y: '-4vh', ease: 'none', duration: 1 },
      0
    );

    /* ──────────────────────────────────────────────────────────
       DRONE  — Three-phase approach
       Phase A (0% → 55%):  tiny dot grows, arc begins
       Phase B (50% → 85%): mid-size to full presence, peak clarity
       Phase C (75% → 100%): overshoots camera, flies past
    ────────────────────────────────────────────────────────── */

    /* Fade in from "behind clouds" — 0% → 10% */
    heroTL.to(
      droneImg,
      { opacity: 1, ease: 'none', duration: 0.10 },
      0
    );

    /* Phase A — 0% → 25%: emerges upper-right, sweeps diagonally toward center */
    heroTL.to(
      droneImg,
      {
        scale: 0.45,
        x: 65,
        y: -50,
        rotation: 2,
        filter: 'blur(1.5px) drop-shadow(0 4px 20px rgba(100,160,255,0.12))',
        ease: 'none',
        duration: 0.25,
      },
      0
    );

    /* Phase B — 23% → 48%: banks left, arcs toward center, sharpens */
    heroTL.to(
      droneImg,
      {
        scale: 1.45,
        x: -15,
        y: -5,
        rotation: -3,
        filter: 'blur(0px) drop-shadow(0 8px 40px rgba(100,160,255,0.35))',
        ease: 'none',
        duration: 0.25,
      },
      0.23
    );

    /* Phase C — 48% → 65%: rises and passes overhead, banking further left */
    heroTL.to(
      droneImg,
      {
        scale: 2.6,
        x: -60,
        y: -90,
        rotation: -8,
        filter: 'blur(0px) drop-shadow(0 12px 60px rgba(80,140,255,0.5))',
        ease: 'none',
        duration: 0.17,
      },
      0.48
    );

    /* Drone opacity fade 50% → 65% — gone well before terrain arrives */
    heroTL.to(
      droneImg,
      { opacity: 0, ease: 'none', duration: 0.15 },
      0.50
    );

    /* ──────────────────────────────────────────────────────────
       LOGO REVEAL (20% → 45%) — stays fully visible for the
       long breathing-room window (45% → 82%) where nothing else
       is happening. User gets to read the logo in peace.
    ────────────────────────────────────────────────────────── */
    heroTL.to(
      logoImg,
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        ease: 'none',
        duration: 0.25,
      },
      0.20
    );

    /* Subline rises in after logo is fully visible (52% → 64%) */
    heroTL.to(
      subline,
      { opacity: 1, y: 0, ease: 'none', duration: 0.12 },
      0.52
    );

    /* ──────────────────────────────────────────────────────────
       SCROLL INDICATOR — fades out early
    ────────────────────────────────────────────────────────── */
    heroTL.to(
      scrollInd,
      { opacity: 0, y: 10, ease: 'none', duration: 0.10 },
      0.18
    );

    /* ──────────────────────────────────────────────────────────
       TERRAIN SLIDE UP — pushed to final 18% so there is a
       clear gap between logo reveal (done at 45%) and terrain.
       Sequence: logo visible alone (65%–82%), then terrain rises.
    ────────────────────────────────────────────────────────── */
    /* Mountain rises first, slower — feels distant/far plane */
    heroTL.to(
      terrainMtn,
      { y: 0, ease: 'none', duration: 0.24 },
      0.74
    );

    /* Ground rises later, faster — snaps into foreground over mountain */
    heroTL.to(
      terrainGnd,
      { y: 0, ease: 'none', duration: 0.15 },
      0.85
    );

  }

  /* ─── Entry Point: Run After All Images Are Loaded ─────────── */
  window.addEventListener('load', () => {
    buildTimeline();
    ScrollTrigger.refresh();
  });

})();
