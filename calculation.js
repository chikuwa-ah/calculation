'use strict';

const title = () => {
    const startButton = document.getElementById('title').children[1];
    startButton.addEventListener('click', () => {
        const audio = new Audio('./se/correct.mp3');
        audio.play();
    }, { once: true });
};

window.addEventListener('DOMContentLoaded', () => {
    const main_element = document.getElementById('main');
    main_element.style.display = 'none';
    title();
});