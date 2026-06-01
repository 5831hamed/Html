console.log("Hamed Gholami — Work Experience loaded");

/* ── SCROLL REVEAL FOR JOB CARDS ── */
const cards = document.querySelectorAll('.job-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(20px)';
      entry.target.style.transition = `opacity 0.45s ${i * 0.1}s ease, transform 0.45s ${i * 0.1}s ease`;
      requestAnimationFrame(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

/* ── DETAILS OPEN/CLOSE LOG ── */
document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    const title = detail.closest('.job-card')?.querySelector('.job-title')?.textContent?.trim();
    console.log(`${detail.open ? 'Opened' : 'Closed'}: ${title}`);
  });
});