document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('main a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.href.startsWith('mailto:')) {
                e.preventDefault();
                confetti({
                    particleCount: 120,
                    spread: 90,
                    origin: { y: 0.7 }
                });
                setTimeout(() => {
                    window.open(link.href, '_blank');
                }, 600);
                return;
            }
            if (link.hasAttribute('download')) {
                e.preventDefault();
                confetti({
                    particleCount: 120,
                    spread: 90,
                    origin: { y: 0.7 }
                });
                setTimeout(() => {
                    const tempLink = document.createElement('a');
                    tempLink.href = link.href;
                    tempLink.setAttribute('download', '');
                    document.body.appendChild(tempLink);
                    tempLink.click();
                    document.body.removeChild(tempLink);
                }, 600);
                return;
            }
            e.preventDefault();
            confetti({
                particleCount: 120,
                spread: 90,
                origin: { y: 0.7 }
            });
            setTimeout(() => {
                window.open(link.href, link.target || '_self');
            }, 600);
        });
    });
});