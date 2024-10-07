'use strict';

const ending = () => {
    const endElement = document.getElementById('end');
    const score = scoreProcess(null, true);
    const highScore = Number(document.getElementById('highScore').children[1].textContent);

    mainElement.style.display = 'none';
    timerElement.style.display = 'none';

    const message = score > highScore ? 'HIGH SCORE!!' : 'TIME UP!';
    endElement.style.display = 'block';
    endElement.children[0].textContent = message;

    const button = document.getElementById('endButton');
    button.addEventListener('click', () => {
        displayInit();
    }, { once: true });
}