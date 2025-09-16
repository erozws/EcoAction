// Mobile nav toggle and smooth enhancements
const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });
  nav.addEventListener('click', (e) => {
    const target = e.target;
    if (target instanceof HTMLElement && target.tagName === 'A' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  });
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Ensure Back-to-top works reliably
document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Also update the hash for accessibility/history
    if (history.pushState) {
      history.pushState(null, '', '#top');
    } else {
      window.location.hash = 'top';
    }
  });
});

