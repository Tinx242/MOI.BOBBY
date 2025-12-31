// Sélectionner le bouton et l'icône
const toggleButton = document.querySelector('.toggle-dark-mode');
const themeIcon = document.getElementById('theme-logo');

// Vérifier si un mode est déjà sauvegardé
const currentMode = localStorage.getItem('theme') || 'light';

// Appliquer le mode au chargement
if (currentMode === 'dark') {
    document.body.style.backgroundColor = '#1a1a2e';
    themeIcon.setAttribute('name', 'sunny');
} else {
    document.body.style.backgroundColor = 'rgb(199, 199, 191)';
    themeIcon.setAttribute('name', 'moon');
}

// Ajouter l'événement de clic
toggleButton.addEventListener('click', () => {
    const currentBgColor = getComputedStyle(document.body).backgroundColor;
    
    // Vérifier si on est en mode sombre ou clair
    if (currentBgColor === 'rgb(26, 26, 46)') {
        // Passer au mode clair
        document.body.style.backgroundColor = 'rgb(199, 199, 191)';
        themeIcon.setAttribute('name', 'moon');
        localStorage.setItem('theme', 'light');
    } else {
        // Passer au mode sombre
        document.body.style.backgroundColor = '#1a1a2e';
        themeIcon.setAttribute('name', 'sunny');
        localStorage.setItem('theme', 'dark');
    }
});