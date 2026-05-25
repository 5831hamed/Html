// ── State ──────────────────────────────────────────────
let current = '0';
let historyStr = '';
let justCalc = false;

const exprEl = document.getElementById('expr');
const histEl = document.getElementById('history');

// ── Render ─────────────────────────────────────────────
function render() {
  exprEl.textContent = current;
  histEl.textContent = historyStr || '\u00a0';
  // scale font for long numbers
  const len = current.length;
  exprEl.style.fontSize = len > 13 ? '22px' : len > 9 ? '32px' : '48px';
}

// ── Append ─────────────────────────────────────────────
function appendTodisplay(val) {
  const ops = ['+', '-', '*', '/', '%'];
  const isOp = ops.includes(val);

  if (justCalc) {
    // after = : operator continues from result; digit starts fresh
    if (!isOp) { current = '0'; historyStr = ''; }
    justCalc = false;
  }

  if (isOp) {
    // replace trailing operator instead of stacking
    if (ops.includes(current.slice(-1))) {
      current = current.slice(0, -1);
    }
    current += val;
  } else if (val === '.') {
    const seg = current.split(/[\+\-\*\/]/).pop();
    if (!seg.includes('.')) current += '.';
  } else {
    current = (current === '0') ? val : current + val;
  }

  render();
}

// ── Calculate ──────────────────────────────────────────
function calculate() {
  if (!current || current === '0') return;
  try {
    historyStr = current + ' =';
    const raw = Function('"use strict"; return (' + current + ')')();
    current = isFinite(raw)
      ? String(parseFloat(raw.toFixed(10)))
      : 'Error';
    justCalc = true;
  } catch {
    current = 'Error';
    justCalc = true;
  }
  render();
  // flash the display
  exprEl.style.color = 'var(--orange)';
  setTimeout(() => exprEl.style.color = '', 220);
}

// ── Clear ──────────────────────────────────────────────
function clearDisplay() {
  current = '0';
  historyStr = '';
  justCalc = false;
  render();
}

// ── Toggle sign ────────────────────────────────────────
function toggleSign() {
  if (current === '0' || current === 'Error') return;
  current = current.startsWith('-') ? current.slice(1) : '-' + current;
  render();
}

// ── Quick op buttons ───────────────────────────────────
function quickOp(op) {
  if (justCalc) justCalc = false;
  appendTodisplay(op);
}

// ── Odin modal ─────────────────────────────────────────
function invokeOdin() {
  document.getElementById('modal').classList.add('open');
}

function closeModal(e) {
  // close if clicking the overlay itself (not the box)
  if (!e || e.target === document.getElementById('modal')) {
    document.getElementById('modal').classList.remove('open');
  }
}

// ── Mouse-tracking radial on keys ──────────────────────
document.querySelectorAll('.key').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    btn.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    btn.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100) + '%');
  });
});

// ── Keyboard support ───────────────────────────────────
document.addEventListener('keydown', e => {
  if (document.getElementById('modal').classList.contains('open')) {
    if (e.key === 'Escape') closeModal({target: document.getElementById('modal')});
    return;
  }
  const d = '0123456789';
  const o = '+-*/%';
  if (d.includes(e.key))           appendTodisplay(e.key);
  else if (o.includes(e.key))      appendTodisplay(e.key);
  else if (e.key === '.')          appendTodisplay('.');
  else if (e.key === 'Enter' || e.key === '=') calculate();
  else if (e.key === 'Escape')     clearDisplay();
  else if (e.key === 'Backspace') {
    if (current.length > 1 && current !== 'Error') {
      current = current.slice(0, -1);
    } else {
      current = '0';
    }
    render();
  }
});

// ── Init ───────────────────────────────────────────────
render();