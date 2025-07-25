function triggerCardButton(cardFigure) {
    const captionLink = cardFigure.querySelector('figcaption a[href]');
    if (captionLink) {
        window.open(captionLink.href, captionLink.target === '_blank' ? '_blank' : '_self');
        return;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('figure').forEach(figure => {
        figure.style.cursor = 'pointer';
        figure.addEventListener('click', (e) => {
            if (
                e.target.closest('figcaption a[href]') ||  
                e.target.closest('.card-btn')
            ) {
                return;
            }
            triggerCardButton(figure);
        });

        const img = figure.querySelector('img');
        if (img) img.style.cursor = 'pointer';
        const number = figure.querySelector('.number');
        if (number) number.style.cursor = 'pointer';
        const caption = figure.querySelector('figcaption');
        if (caption) caption.style.cursor = 'pointer';
        const textContent = figure.querySelector('h2');
        if (textContent) caption.style.cursor = 'pointer';
    });
});


function tabs(){
    const links = document.querySelectorAll('.tabs__menu li');
    const contents = document.querySelectorAll('.tab__content');

    const toggle = (targetId) => {
        console.log(targetId);

        contents.forEach((elem) => {
            elem.style.display = elem.id === targetId ? 'block' : 'none';
            document.querySelector(`[data-target="${elem.id}"]`).classList[elem.id === targetId ? 'add' : 'remove']('is-active');
        });

    };
    links.forEach((link) => {
        link.addEventListener('click', () => {
            toggle(link.dataset.target);
        });
    
        if(link.className.includes('is-active')) {
            toggle(link.dataset.target);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('.download-cv-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            confetti({
                particleCount: 120,
                spread: 90,
                origin: { y: 0.7 }
            });
        });
    });
});



tabs();