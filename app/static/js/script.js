// Dark Mode toggle with persistence
const body = document.body;
const nav = document.getElementById('mainNav');
const toggleBtn = document.getElementById('toggleMode');
const toggleIcon = toggleBtn.querySelector('i');

function applyMode(isDark){
  if(isDark){
    body.classList.add('dark-mode');
    nav.classList.add('dark-mode');
    toggleIcon.classList.replace('fa-moon','fa-sun');
  } else {
    body.classList.remove('dark-mode');
    nav.classList.remove('dark-mode');
    toggleIcon.classList.replace('fa-sun','fa-moon');
  }
}

// Load preference
applyMode(localStorage.getItem('ll_dark_mode') === '1');

toggleBtn.addEventListener('click', () => {
  const isNowDark = !body.classList.contains('dark-mode');
  applyMode(isNowDark);
  localStorage.setItem('ll_dark_mode', isNowDark ? '1' : '0');
});

// Bootstrap validation
(function () {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})();
