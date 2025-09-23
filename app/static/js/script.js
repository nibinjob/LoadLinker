// Theme toggle + remember preference
(function () {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const stored = localStorage.getItem('loadlinker-theme');

  // Initialize theme
  function applyTheme(mode) {
    if (mode === 'dark') {
      body.classList.add('dark-mode');
      themeIcon.className = 'bi bi-sun-fill';
    } else {
      body.classList.remove('dark-mode');
      themeIcon.className = 'bi bi-moon-fill';
    }
  }

  // Determine default: use stored, else prefer system
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

  // Fake login handler (replace with real auth)
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    // Basic client-side validation
    if (!email || !pwInput.value) {
      alert('Please enter email and password.');
      return;
    }
    // Replace this with real authentication call
    // For demo: simple success animation
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = 'Signing in...';
    setTimeout(() => {
      btn.innerHTML = 'Sign in';
      btn.disabled = false;
      // in a real app you'd redirect after successful auth:
      alert('Signed in (demo). Implement server auth to continue.');
    }, 900);
  });
})();
