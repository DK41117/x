// ─── SCROLL OBSERVER ───
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up,.scale-in').forEach(el => observer.observe(el));

// ─── NAV SCROLL STATE ───
const nav = document.querySelector('nav.topnav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }, { passive: true });
}

// ─── DRAWER ───
function toggleDrawer() {
  const drawer = document.getElementById('navDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const btn = document.getElementById('burgerBtn');
  if (!drawer) return;
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    closeDrawer();
  } else {
    drawer.classList.add('open');
    overlay.classList.add('open');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
    drawer.setAttribute('aria-hidden', 'false');
  }
}
function closeDrawer() {
  const drawer = document.getElementById('navDrawer');
  if (!drawer) return;
  drawer.classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
  const btn = document.getElementById('burgerBtn');
  btn.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('drawer-open');
  drawer.setAttribute('aria-hidden', 'true');
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

// ─── SMOOTH SCROLL FOR ANCHORS ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      closeDrawer();
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }
  });
});

// ─── DATE INPUTS: MIN = TOMORROW ───
document.querySelectorAll('input[type="date"]').forEach(di => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  di.min = d.toISOString().split('T')[0];
});

// ─── FORM SUBMITS (mock) ───
function handleFormSubmit(btn, successText, originalHTML) {
  btn.innerHTML = successText;
  btn.style.background = '#2ECC71';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.style.background = '';
    btn.disabled = false;
  }, 4500);
}
window.handleFormSubmit = handleFormSubmit;
