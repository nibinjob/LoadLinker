// Theme toggle + remember preference + password toggle + simple demo login
(function () {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const stored = localStorage.getItem('loadlinker-theme');

  function applyTheme(mode) {
    if (mode === 'dark') {
      body.classList.add('dark-mode');
      themeIcon.className = 'bi bi-sun-fill';
    } else {
      body.classList.remove('dark-mode');
      themeIcon.className = 'bi bi-moon-fill';
    }
  }

  if (stored) {
    applyTheme(stored);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  themeToggle.addEventListener('click', function () {
    const isDark = body.classList.contains('dark-mode');
    const newMode = isDark ? 'light' : 'dark';
    applyTheme(newMode);
    try { localStorage.setItem('loadlinker-theme', newMode); } catch (e) { /* ignore */ }
  });

  // Password show/hide
  const pwToggle = document.getElementById('pwToggle');
  const pwInput = document.getElementById('password');
  const pwIcon = document.getElementById('pwIcon');
  pwToggle.addEventListener('click', function () {
    const isPwd = pwInput.type === 'password';
    pwInput.type = isPwd ? 'text' : 'password';
    pwIcon.className = isPwd ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill';
  });

  // Demo login handler
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    if (!email || !pwInput.value) {
      alert('Please enter email and password.');
      return;
    }
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Signing in...';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
      alert('Signed in (demo). Integrate with your backend to proceed.');
    }, 800);
  });

  // Optional: ensure viewport resizing doesn't create scrollbars
  window.addEventListener('resize', function () {
    // small safeguard: if a scrollbar appears, reduce some paddings (handled via CSS media queries)
    // No JS resizing logic needed — CSS media queries take care of fitting the content.
  });
})();
