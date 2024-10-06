'use strict';

const timer = (receiveTime) => {
    let time = receiveTime;
    timerElement.children[1].textContent = time;
    const timerInterval = setInterval(() => {
        time--;
        timerElement.children[1].textContent = time;
        if (time <= 0) {
            clearInterval(timerInterval);
        };
    }, 1000);
};