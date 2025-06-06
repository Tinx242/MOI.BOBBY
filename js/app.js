




function triggerCardButton(cardFigure) {
    const btn = cardFigure.querySelector('button, .card-btn');
    if (btn) btn.click();
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('figure').forEach(figure => {
        const img = figure.querySelector('img');
        if (img) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => triggerCardButton(figure));
        }
        const number = figure.querySelector('.number');
        if (number) {
            number.style.cursor = 'pointer';
            number.addEventListener('click', () => triggerCardButton(figure));
        }
        const caption = figure.querySelector('figcaption');
        if (caption) {
            caption.style.cursor = 'pointer';
            caption.addEventListener('click', () => triggerCardButton(figure));
        }
    });
});

function tabs(){
    const links = document.querySelectorAll('.tabs__menu li');
    const contents = document.querySelectorAll('.tab__content');

    toggle = (targetId) =>{
        console.log(targetId);

        contents.forEach((elem) => {
            elem.style.dislay = elem.id === targetId ? 'block' : 'none';
            document.querySelector(`[data-target="${elem.id}"]`.classList[elem.id === targetId ? 'add' : 'remove']('is-active'));
        });

    }
    links.forEach((link) => {
        link.addEventListener('click', () => {
            toggle(link.dataset.target);
        });
    
    if(link.className.includes('is-active')) {
            toggle(link.dataset.target);
        }
    })
}
tabs();