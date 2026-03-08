// Logos des technologies (comme dans menu.js)
const techLogos = {
    HTML: './asset/html5.svg',
    CSS: './asset/css.svg',
    JavaScript: './asset/javascript.svg',
    Java: './asset/java.svg',
    Spring: './asset/spring.svg',
    Python: './asset/python.svg',
    Django: './asset/django.svg',
    PHP: './asset/php.svg',
    MySQL: './asset/mysql.svg',
    React: './asset/react.svg',
    "Node.js": './asset/nodejs.svg',
    "C#": './asset/csharp.svg',
    Unity: './asset/unity.svg',
    Glide: './asset/glide.svg',
    "glide.js": './asset/glide.svg',
    Gns3: './asset/gns3.png',
    Mysql: './asset/mysql.svg',    
};

    // Animation au survol des skill-items et passion-items
    const addHoverEffect = (selector) => {
        document.querySelectorAll(selector).forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-5px) scale(1.02)';
            });
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
            });
        });
    };

    addHoverEffect('.skill-item');
    addHoverEffect('.passion-item');

    // Animation de la photo de profil
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('click', () => {
            // Effet confetti si la bibliothèque est chargée
            if (typeof confetti !== 'undefined') {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        });
    }
    
    // Lancer l'animation des titres après un court délai
    setTimeout(animateTitle, 300);

    // Animation au survol des stage-rows
    document.querySelectorAll('.stage-row').forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transition = 'background 0.2s ease';
        });
    });


// Export pour utilisation dans d'autres fichiers si nécessaire
export { };