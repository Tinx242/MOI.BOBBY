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
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.getAttribute('data-img');
            console.log(imgSrc); // Vérifie la valeur dans la console
            const techs = card.getAttribute('data-tech').split(',');
            const desc = card.getAttribute('data-desc') || '';
            const link = card.getAttribute('data-link');
            document.getElementById('modal-img').src = imgSrc;
            document.getElementById('modal-desc').textContent = desc;
            // Affiche les logos des technos
            const techsDiv = document.getElementById('modal-techs');
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
            // Affiche le bouton si lien présent
            const modalLink = document.getElementById('modal-link');
            if (link && link.trim() !== "") {
                modalLink.href = link;
                modalLink.style.display = "inline-block";
            } else {
                modalLink.style.display = "none";
            }
            document.getElementById('project-modal').style.display = 'flex';
        });
    });

    // Ferme le modal
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('project-modal').style.display = 'none';
    });
    // Ferme le modal en cliquant en dehors du contenu
    document.getElementById('project-modal').addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            document.getElementById('project-modal').style.display = 'none';
        }
    });
});