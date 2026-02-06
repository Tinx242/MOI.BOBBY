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

// Simple scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Observer pour les animations au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer toutes les sections
    document.querySelectorAll('.profile-section, .presentation-section, .skills-section, .experience-section, .passions-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

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

    // Effet de typing pour le titre (optionnel)
    const animateTitle = () => {
        const sections = document.querySelectorAll('.section-title');
        sections.forEach((title, index) => {
            setTimeout(() => {
                title.style.animation = `fadeInUp 0.5s ease forwards`;
            }, index * 200);
        });
    };

    // Lancer l'animation des titres après un court délai
    setTimeout(animateTitle, 300);

    // ============ GESTION DES CARTES DE STAGES ============
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.getAttribute('data-img');
            const techs = card.getAttribute('data-tech') ? card.getAttribute('data-tech').split(',') : [];
            const desc = card.getAttribute('data-desc') || '';
            const period = card.getAttribute('data-period') || '';
            const company = card.getAttribute('data-company') || '';
            const title = card.querySelector('h3').textContent;

            // Remplir le modal
            document.getElementById('modal-stage-img').src = imgSrc;
            document.getElementById('modal-stage-title').textContent = title;
            document.getElementById('modal-period').textContent = period;
            document.getElementById('modal-company').textContent = company;
            document.getElementById('modal-stage-desc').textContent = desc;

            // Afficher les logos des technos
            const techsDiv = document.getElementById('modal-stage-techs');
            techsDiv.innerHTML = '';
            techs.forEach(tech => {
                const t = tech.trim();
                if (techLogos[t]) {
                    const img = document.createElement('img');
                    img.src = techLogos[t];
                    img.alt = t;
                    img.title = t;
                    techsDiv.appendChild(img);
                }
            });

            // Afficher le modal
            document.getElementById('stage-modal').style.display = 'flex';
        });
    });

    // Fermer le modal
    const closeModal = () => {
        document.getElementById('stage-modal').style.display = 'none';
    };

    const modalCloseBtn = document.querySelector('.modal-close');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    // Fermer le modal en cliquant en dehors du contenu
    const modal = document.getElementById('stage-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal();
            }
        });
    }

    // Fermer avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Export pour utilisation dans d'autres fichiers si nécessaire
export { };