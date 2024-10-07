'use strict';

const define = (name, value) => {
    Object.defineProperty(window, name, {
        value: value,
        writable: false
    });
};

const title = () => {
    const titleChildren = titleElement.children;
    titleChildren[1].children[0].addEventListener('click', () => {
        titleChildren[0].textContent = 'START!';
        titleChildren[1].style.display = 'none';

        setTimeout(() => {
            titleElement.style.display = 'none';
            mainElement.style.display = 'flex';
            timerElement.style.display = 'block';
            timer(10);
            generateFormula();
        }, 1500);
    }, { once: true });
};

const displayInit = () => {
    mainElement.style.display = 'none';
    timerElement.style.display = 'none';
    scoreProcess(null, false, true);
    title();
};

window.addEventListener('DOMContentLoaded', () => {
    define('mainElement', document.getElementById('main'));
    define('titleElement', document.getElementById('title'));
    define('timerElement', document.getElementById('allTimer'));
    displayInit();
});