console.log("🚀 Hamed Gholami — Portfolio loaded");

/* ── CURSOR ORB ── */
const orb = document.getElementById('cursorOrb');
let ox = 0, oy = 0;

document.addEventListener('mousemove', e => {
  ox += (e.clientX - ox) * 0.07;
  oy += (e.clientY - oy) * 0.07;
  orb.style.left = e.clientX + 'px';
  orb.style.top  = e.clientY + 'px';
});

/* ── CANVAS BACKGROUND ── */
const canvas = document.getElementById('bg-canvas');
const ctx    = canvas.getContext('2d');

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const blobs = [
  { x: 0.1,  y: 0.15, r: 380, c: '167,139,250', spd: 0.00018 },
  { x: 0.85, y: 0.5,  r: 320, c: '56,189,248',  spd: -0.00014 },
  { x: 0.45, y: 0.88, r: 260, c: '244,63,94',   spd: 0.00012 },
  { x: 0.6,  y: 0.1,  r: 200, c: '52,211,153',  spd: -0.0001 },
];

let t = 0;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  t++;
  blobs.forEach((b, i) => {
    const cx = (b.x + Math.sin(t * b.spd * 1000 + i) * 0.1) * canvas.width;
    const cy = (b.y + Math.cos(t * b.spd * 1000 + i * 1.3) * 0.08) * canvas.height;
    const g  = ctx.createRadialGradient(cx, cy, 0, cx, cy, b.r);
    g.addColorStop(0, `rgba(${b.c},0.1)`);
    g.addColorStop(1, `rgba(${b.c},0)`);
    ctx.beginPath();
    ctx.arc(cx, cy, b.r, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw();

/* ── SCROLL REVEAL CARDS ── */
const cards = document.querySelectorAll('[data-reveal]');
const cardObs = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = (i * 0.08) + 's';
      entry.target.style.animation = 'fadeUp 0.65s cubic-bezier(.16,1,.3,1) both';
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

/* ── CARD STAGGER ON LOAD ── */
document.querySelectorAll('.card').forEach((card, i) => {
  card.style.animationDelay = (0.2 + i * 0.08) + 's';
});

/* ── ASIDE ITEM HOVER SOUND (visual feedback) ── */
document.querySelectorAll('.aside-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transition = 'background 0.15s, color 0.15s, transform 0.15s';
    item.style.transform = 'translateX(4px)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = '';
  });
});