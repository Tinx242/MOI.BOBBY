function loadThemeCSS(theme) {
    let darkLink = document.getElementById('dark-mode-css');
    if (theme === 'dark') {
        if (!darkLink) {
            darkLink = document.createElement('link');
            darkLink.rel = 'stylesheet';
            darkLink.href = 'css/dark-mode.css';
            darkLink.id = 'dark-mode-css';
            document.head.appendChild(darkLink);
        }
    } else {
        if (darkLink) {
            darkLink.parentNode.removeChild(darkLink);
        }
    }
}

const toggleBtn = document.querySelector('.toggle-dark-mode');
const themeLogo = document.getElementById('theme-logo');

function updateToggleIcon(theme) {
    if (!themeLogo) return;
    themeLogo.setAttribute('name', theme === 'dark' ? 'moon' : 'sunny');
}

function toggleDarkMode() {
    const body = document.body;
    if (body.classList.contains('mode-dark')) {
        body.classList.remove('mode-dark');
        body.classList.add('mode-light');
        localStorage.setItem('theme', 'light');
        loadThemeCSS('light');
        updateToggleIcon('light');
    } else {
        body.classList.remove('mode-light');
        body.classList.add('mode-dark');
        localStorage.setItem('theme', 'dark');
        loadThemeCSS('dark');
        updateToggleIcon('dark');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('mode-light');
        loadThemeCSS('light');
        updateToggleIcon('light');
    } else {
        document.body.classList.add('mode-dark');
        loadThemeCSS('dark');
        updateToggleIcon('dark');
    }
});

if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleDarkMode);
}