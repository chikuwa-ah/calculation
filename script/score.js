'use strict';

const scoreProcess = (score, get, reset) => {
    const outputScoreElement = document.getElementById('score').children[1];
    if (reset) {
        outputScoreElement.textContent = '0';
        return;
    };
    const nowScore = Number(outputScoreElement.textContent);
    if (get) {
        return nowScore;
    };
    const newScore = score + nowScore;
    outputScoreElement.textContent = newScore;
};
