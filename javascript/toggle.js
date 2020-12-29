const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('toggle-theme', currentTheme);
  toggleSwitch.checked = currentTheme === 'dark';
}

function switchTheme(e) {
  var theme;

  if (e.target.checked) {
    theme = 'dark';
  }
  else {
    theme = 'light';
  }
  document.documentElement.setAttribute('toggle-theme', theme);
  localStorage.setItem('theme', theme);
}

toggleSwitch.addEventListener('change', switchTheme, false);
