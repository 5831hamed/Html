console.log("Semantic page opened");

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

/* ── SMOOTH SCROLL FOR ASIDE LINKS ── */
document.querySelectorAll('.aside-nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── ACTIVE ASIDE LINK ON SCROLL ── */
const sections = document.querySelectorAll('main [id]');
const asideLinks = document.querySelectorAll('.aside-nav a');

const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      asideLinks.forEach(link => {
        link.style.background = '';
        link.style.color = '';
        if (link.getAttribute('href') === `#${id}`) {
          link.style.background = 'var(--c2)';
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => sectionObs.observe(s));