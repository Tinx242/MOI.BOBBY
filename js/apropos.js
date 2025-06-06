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
tabs();