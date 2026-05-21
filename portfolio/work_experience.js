console.log("🔥 Hamed Gholami — Work Experience. The most beautiful website in the universe.");

/* ---- Custom Cursor ---- */
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top  = mouseY + 'px';
});

(function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
})();

/* ---- Scroll reveal for job cards ---- */
const cards = document.querySelectorAll('.job-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));

/* ---- Details open/close log ---- */
document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    const title = detail.closest('.job-card')?.querySelector('.job-title')?.textContent?.trim();
    console.log(`📋 ${detail.open ? 'Opened' : 'Closed'}: ${title}`);
  });
});

/* ---- Subtle parallax on header name ---- */
document.addEventListener('mousemove', e => {
  const xPct = (e.clientX / window.innerWidth  - 0.5) * 10;
  const yPct = (e.clientY / window.innerHeight - 0.5) * 6;
  const name = document.querySelector('.header-name');
  if (name) {
    name.style.transform = `translate(${xPct * 0.4}px, ${yPct * 0.3}px)`;
  }
});