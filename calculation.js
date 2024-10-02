'use strict';

const generateFormula = () => {
    const mainElement = document.getElementById('main');
    mainElement.style.display = 'flex';
}

const title = () => {
    const titleHTMLElement = document.getElementById('title');
    const titleChildren = titleHTMLElement.children;
    titleChildren[1].children[0].addEventListener('click', () => {
        titleChildren[0].textContent = 'START!';
        titleChildren[1].style.display = 'none';

        setTimeout(() => {
            titleHTMLElement.style.display = 'none';
            generateFormula();
        }, 1500);
    }, { once: true });
};

window.addEventListener('DOMContentLoaded', () => {
    const mainElement = document.getElementById('main');
    mainElement.style.display = 'none';
    title();
});