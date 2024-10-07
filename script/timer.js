'use strict';

const timer = (receiveTime) => {
    const originalTime = receiveTime;
    let time = receiveTime;
    const outputTimeElement = timerElement.children[0].children[0].children[1];
    outputTimeElement.textContent = time;
    const timerInterval = setInterval(() => {
        time--;
        outputTimeElement.textContent = time;
        document.getElementById('bar').style.width = time / originalTime * 100 + '%';
        if (time <= 0) {
            ending();
            clearInterval(timerInterval);
        };
    }, 1000);
};