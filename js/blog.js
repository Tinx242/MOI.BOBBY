function switchTab(id) {
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById('panel-' + id).classList.add('active');
            event.currentTarget.classList.add('active');
            window.scrollTo({ top: document.querySelector('.tabs-nav').offsetTop - 20, behavior: 'smooth' });
        }

        function openLightbox(img) {
            const lb = document.getElementById('lightbox');
            document.getElementById('lightbox-img').src = img.src;
            document.getElementById('lightbox-img').alt = img.alt;
            document.getElementById('lightbox-caption').textContent = img.alt;
            lb.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('open');
            document.body.style.overflow = '';
        }

        document.addEventListener('DOMContentLoaded', () => {
            const lb = document.getElementById('lightbox');
            document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
            // Clic sur le fond sombre pour fermer
            lb.addEventListener('click', (e) => {
                if (e.target === lb) closeLightbox();
            });
            // Touche Échap pour fermer
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeLightbox();
            });
        });