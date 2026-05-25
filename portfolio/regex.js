console.log("Regex page opened");

const patterns = {
  plate:    /^[a-zA-Z]{3}-\d{3}$/,
  date:     /^\d{1,2}\.\d{1,2}\.\d{4}$/,
  identity: /^\d{6}[-A]?\d{3}[A-Za-z0-9]$/,
  phone:    /^\d{7,10}$/,
  html:     /^<.+>.*<\/.+>$/,
};

const messages = {
  plate:    { ok: "✓ Valid plate number",       err: "✗ Format must be ABC-123" },
  date:     { ok: "✓ Valid date",               err: "✗ Format must be DD.MM.YYYY" },
  identity: { ok: "✓ Valid identity code",      err: "✗ Format: 6 digits, optional separator, 3 digits, 1 char" },
  phone:    { ok: "✓ Valid phone number",       err: "✗ Must be 7–10 digits only" },
  html:     { ok: "✓ Valid HTML tag",           err: "✗ Format must be <tag>content</tag>" },
};

function validate(id) {
  const input    = document.getElementById(id);
  const feedback = document.getElementById(id + '-feedback');
  const value    = input.value.trim();

  if (!value) {
    feedback.textContent = '✗ Field cannot be empty';
    feedback.className   = 'field-feedback err';
    return;
  }

  const valid = patterns[id].test(value);
  feedback.textContent = valid ? messages[id].ok : messages[id].err;
  feedback.className   = 'field-feedback ' + (valid ? 'ok' : 'err');
}

// Also allow Enter key to trigger submit on each field
document.addEventListener('DOMContentLoaded', () => {
  ['plate', 'date', 'identity', 'phone', 'html'].forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); validate(id); }
      });
    }
  });
});