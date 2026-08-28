/* ════════════════════════════════════════════════
   script.js — Ruslan Dosmammadov Psixoloq
════════════════════════════════════════════════ */

/* ─── Cursor Glow ─────────────────────────────── */
const cursorGlow = document.querySelector('.cursor-glow');

window.addEventListener('pointermove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
});

/* ─── Reveal on Scroll ────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});

/* ─── Navbar Scroll Effect ───────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* ─── Mobile Menu ────────────────────────────── */
const menuBtn       = document.getElementById('menuBtn');
const mobileNav     = document.getElementById('mobileNav');
const mobileOverlay = document.getElementById('mobileOverlay');

function openMenu() {
  menuBtn.classList.add('active');
  mobileNav.classList.add('open');
  mobileOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuBtn.classList.remove('active');
  mobileNav.classList.remove('open');
  mobileOverlay.classList.remove('show');
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', () => {
  if (mobileNav.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

mobileOverlay.addEventListener('click', closeMenu);

// Close menu when a mobile nav link is clicked
document.querySelectorAll('.mob-link').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

/* ─── Floating Particles ─────────────────────── */
const particlesContainer = document.getElementById('particles');

const PARTICLE_COUNT = 18;
const COLORS = [
  'rgba(46, 131, 200, 0.5)',
  'rgba(93, 182, 155, 0.5)',
  'rgba(194, 60, 131, 0.4)',
  'rgba(18, 61, 105, 0.3)',
  'rgba(167, 220, 255, 0.6)',
];

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';

  const size = Math.random() * 10 + 4;
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const left  = Math.random() * 100;
  const top   = Math.random() * 100;
  const dur   = (Math.random() * 8 + 5).toFixed(1) + 's';
  const delay = (Math.random() * 6).toFixed(1) + 's';

  particle.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    background: ${color};
    left: ${left}%;
    top: ${top}%;
    --dur: ${dur};
    --delay: ${delay};
  `;

  particlesContainer.appendChild(particle);
}

/* ─── Smooth Active Nav Link Highlight ───────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active-link');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active-link');
          }
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((section) => sectionObserver.observe(section));