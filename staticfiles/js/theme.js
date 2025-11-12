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

// ===== Search Button Toggle =====
const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');

if (searchBtn && searchBox) {
  searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('show');
    if (searchBox.classList.contains('show')) {
      searchInput.focus();
    }
  });
}
