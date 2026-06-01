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

  const len = current.length;

  exprEl.style.fontSize =
    len > 13 ? '22px' :
    len > 9 ? '32px' :
    '48px';
}

// ── Append ─────────────────────────────────────────────
function appendTodisplay(val) {

  const ops = ['+', '-', '*', '/', '%'];
  const isOp = ops.includes(val);

  if (justCalc) {

    if (!isOp) {
      current = '0';
      historyStr = '';
    }

    justCalc = false;
  }

  if (isOp) {

    if (ops.includes(current.slice(-1))) {
      current = current.slice(0, -1);
    }

    current += val;

  } else if (val === '.') {

    const seg = current.split(/[\+\-\*\/]/).pop();

    if (!seg.includes('.')) {
      current += '.';
    }

  } else {

    current = (current === '0')
      ? val
      : current + val;
  }

  render();
}

// ── Calculate ──────────────────────────────────────────
function calculate() {

  if (!current || current === '0') return;

  try {

    historyStr = current + ' =';

    const raw =
      Function('"use strict"; return (' + current + ')')();

    current = isFinite(raw)
      ? String(parseFloat(raw.toFixed(10)))
      : 'Error';

    justCalc = true;

  } catch {

    current = 'Error';
    justCalc = true;
  }

  render();

  exprEl.style.color = 'var(--orange)';

  setTimeout(() => {
    exprEl.style.color = '';
  }, 220);
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

  current = current.startsWith('-')
    ? current.slice(1)
    : '-' + current;

  render();
}

// ── Quick operation buttons ────────────────────────────
function quickOp(op) {

  if (justCalc) {
    justCalc = false;
  }

  appendTodisplay(op);
}

// ── Odin modal ─────────────────────────────────────────
function invokeOdin() {
  document.getElementById('modal').classList.add('open');
}

function closeModal(e) {

  if (
    !e ||
    e.target === document.getElementById('modal')
  ) {

    document
      .getElementById('modal')
      .classList.remove('open');
  }
}

// ── Mouse radial effect on keys ────────────────────────
document.querySelectorAll('.key').forEach(btn => {

  btn.addEventListener('mousemove', e => {

    const r = btn.getBoundingClientRect();

    btn.style.setProperty(
      '--mx',
      ((e.clientX - r.left) / r.width * 100) + '%'
    );

    btn.style.setProperty(
      '--my',
      ((e.clientY - r.top) / r.height * 100) + '%'
    );
  });
});

// ── Keyboard support ───────────────────────────────────
document.addEventListener('keydown', e => {

  if (
    document
      .getElementById('modal')
      .classList.contains('open')
  ) {

    if (e.key === 'Escape') {

      closeModal({
        target: document.getElementById('modal')
      });
    }

    return;
  }

  const digits = '0123456789';
  const ops = '+-*/%';

  if (digits.includes(e.key)) {

    appendTodisplay(e.key);

  } else if (ops.includes(e.key)) {

    appendTodisplay(e.key);

  } else if (e.key === '.') {

    appendTodisplay('.');

  } else if (
    e.key === 'Enter' ||
    e.key === '='
  ) {

    calculate();

  } else if (e.key === 'Escape') {

    clearDisplay();

  } else if (e.key === 'Backspace') {

    if (
      current.length > 1 &&
      current !== 'Error'
    ) {

      current = current.slice(0, -1);

    } else {

      current = '0';
    }

    render();
  }
});

// ── Date & Time ────────────────────────────────────────
function showDateTime() {

  var d = new Date();

  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  document.getElementById('daynumber').textContent =
    d.toLocaleDateString('fi-FI');

  document.getElementById('time').textContent =
    d.toLocaleTimeString('fi-FI');

  document.getElementById('dayAndTime').textContent =
    d.toLocaleString('fi-FI');

  document.getElementById('dayoftheweek').textContent =
    days[d.getDay()];

  document.getElementById('month').textContent =
    months[d.getMonth()];
}

// ── SETS SECTION ───────────────────────────────────────

var veijo = new Set([
  'read',
  'delete'
]);

var elvira = new Set([
  'read',
  'write',
  'edit'
]);

var mehdi = new Set([
  'read',
  'edit',
  'delete'
]);

var tuuli = new Set([
  'write',
  'delete'
]);

var users = [
  {
    set: veijo,
    listId: 'veijo-list'
  },
  {
    set: elvira,
    listId: 'elvira-list'
  },
  {
    set: mehdi,
    listId: 'mehdi-list'
  },
  {
    set: tuuli,
    listId: 'tuuli-list'
  }
];

// Display permissions
for (var u of users) {

  var ul =
    document.getElementById(u.listId);

  for (var perm of u.set) {

    var li =
      document.createElement('li');

    li.textContent = perm;

    ul.appendChild(li);
  }
}

// ── Veijotuuli : UNION ────────────────────────────────

var veijotuuliSet =
  new Set([
    ...veijo,
    ...tuuli
  ]);

var vtUl =
  document.getElementById('veijotuuli');

for (var perm of veijotuuliSet) {

  var li =
    document.createElement('li');

  li.textContent = perm;

  vtUl.appendChild(li);
}

// ── Mehdielvira : INTERSECTION ────────────────────────

var mehdielviraSet =
  new Set(
    [...mehdi].filter(
      permission => elvira.has(permission)
    )
  );

var meUl =
  document.getElementById('mehdielvira');

for (var perm of mehdielviraSet) {

  var li =
    document.createElement('li');

  li.textContent = perm;

  meUl.appendChild(li);
}

// ── Elviratuuli : DIFFERENCE ──────────────────────────

var elviratuuliSet =
  new Set([

    ...[...elvira].filter(
      permission => !tuuli.has(permission)
    ),

    ...[...tuuli].filter(
      permission => !elvira.has(permission)
    )
  ]);

var etUl =
  document.getElementById('elviratuuli');

for (var perm of elviratuuliSet) {

  var li =
    document.createElement('li');

  li.textContent = perm;

  etUl.appendChild(li);
}

// ── Math Object Functions ─────────────────────────────

// Abs
function mathAbs() {

  var num = parseFloat(current);

  if (!isNaN(num)) {

    alert(
      "Absolute value: " +
      Math.abs(num)
    );
  }
}

// Sqrt
function mathSqrt() {

  var num = parseFloat(current);

  if (!isNaN(num)) {

    alert(
      "Square root: " +
      Math.sqrt(num)
    );
  }
}

// Pow
function mathPow() {

  var base =
    parseFloat(prompt("Enter first number"));

  var exponent =
    parseFloat(prompt("Enter second number"));

  if (
    !isNaN(base) &&
    !isNaN(exponent)
  ) {

    alert(
      "Power result: " +
      Math.pow(base, exponent)
    );
  }
}

// Max
function mathMax() {

  var first =
    parseFloat(prompt("Enter first number"));

  var second =
    parseFloat(prompt("Enter second number"));

  if (
    !isNaN(first) &&
    !isNaN(second)
  ) {

    alert(
      "Largest number: " +
      Math.max(first, second)
    );
  }
}

// Min
function mathMin() {

  var first =
    parseFloat(prompt("Enter first number"));

  var second =
    parseFloat(prompt("Enter second number"));

  if (
    !isNaN(first) &&
    !isNaN(second)
  ) {

    alert(
      "Smallest number: " +
      Math.min(first, second)
    );
  }
}

// Round
function mathRound() {

  var num = parseFloat(current);

  if (!isNaN(num)) {

    alert(
      "Rounded number: " +
      Math.round(num)
    );
  }
}

// ── Init ───────────────────────────────────────────────
render();