const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// Load saved preference
if (localStorage.getItem('theme') === 'dark') {
  root.setAttribute('data-theme', 'dark');
}

toggleBtn.addEventListener('click', () => {
  if (root.getAttribute('data-theme') === 'dark') {
    root.removeAttribute('data-theme');
    toggleBtn.textContent = '🌙';
  } else {
    root.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️';
  }
});
