console.log("Hamed Gholami — Portfolio loaded");

/* ── SCROLL REVEAL CARDS ── */
const cards = document.querySelectorAll('[data-reveal]');
const cardObs = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(18px)';
      entry.target.style.transition = `opacity 0.5s ${i * 0.08}s ease, transform 0.5s ${i * 0.08}s ease`;
      requestAnimationFrame(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      });
      cardObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
cards.forEach(c => cardObs.observe(c));

/* ── LANGUAGE BAR REVEAL ── */
const langFills = document.querySelectorAll('.lang-fill');
const langObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('revealed'), 200);
      langObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
langFills.forEach(f => langObs.observe(f));

/* ── ASIDE ITEM HOVER SLIDE ── */
document.querySelectorAll('.aside-nav a').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transition = 'background 0.15s, color 0.15s, transform 0.15s';
    item.style.transform = 'translateX(4px)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = '';
  });
});