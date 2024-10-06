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
            scoreElement.style.display = 'flex';
            timerElement.style.display = 'flex';
            scoreProcess(null, false, true);
            timer(20);
            generateFormula();
        }, 1500);
    }, { once: true });
};

window.addEventListener('DOMContentLoaded', () => {
    define('mainElement', document.getElementById('main'));
    define('titleElement', document.getElementById('title'));
    define('scoreElement', document.getElementById('score'));
    define('timerElement', document.getElementById('timer'));
    mainElement.style.display = 'none';
    scoreElement.style.display = 'none';
    timerElement.style.display = 'none';
    title();
});