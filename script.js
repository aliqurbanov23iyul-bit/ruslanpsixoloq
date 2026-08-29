/* Ruslan Dosmammadov Psixoloq — shared interactions */
const cursorGlow = document.querySelector('.cursor-glow');
if (cursorGlow) {
  window.addEventListener('pointermove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileOverlay = document.getElementById('mobileOverlay');

function closeMenu() {
  if (!menuBtn || !mobileNav || !mobileOverlay) return;
  menuBtn.classList.remove('active');
  mobileNav.classList.remove('open');
  mobileOverlay.classList.remove('show');
  document.body.style.overflow = '';
}

if (menuBtn && mobileNav && mobileOverlay) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) return closeMenu();
    menuBtn.classList.add('active');
    mobileNav.classList.add('open');
    mobileOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
  mobileOverlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.mob-link').forEach((link) => link.addEventListener('click', closeMenu));
}

const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
  const COLORS = [
    'rgba(46, 131, 200, 0.5)', 'rgba(93, 182, 155, 0.5)',
    'rgba(194, 60, 131, 0.4)', 'rgba(18, 61, 105, 0.3)',
    'rgba(167, 220, 255, 0.6)'
  ];
  for (let i = 0; i < 18; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 10 + 4;
    particle.style.cssText = `width:${size}px;height:${size}px;background:${COLORS[Math.floor(Math.random()*COLORS.length)]};left:${Math.random()*100}%;top:${Math.random()*100}%;--dur:${(Math.random()*8+5).toFixed(1)}s;--delay:${(Math.random()*6).toFixed(1)}s;`;
    particlesContainer.appendChild(particle);
  }
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
if (sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active-link');
          if (link.getAttribute('href') === '#' + entry.target.id) link.classList.add('active-link');
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((section) => sectionObserver.observe(section));
}
