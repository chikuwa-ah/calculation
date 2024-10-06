'use strict';

const keyInput = (answer) => {
    const arrayOfAnswer = [];
    let answerString = '', negative = false;
    const outputAnsElement = mainElement.children[1];

    const keyDownHandler = (event) => {
        const numAdd = () => {
            arrayOfAnswer.push(Number(event.key));
            answerString += event.key;
        };
        if (event.key >= '1' && event.key <= '9') {
            numAdd();
        };
        if (event.key === '0') {
            if (arrayOfAnswer.length >= 1) { numAdd() };
        };

        if (event.key === '-') {
            negative = !negative;
            if (negative) {
                answerString = '-' + answerString;
            } else {
                answerString = answerString.slice(1);
            };
        };
        if (event.key === 'Backspace' || event.key === 'c') {
            arrayOfAnswer.splice(0, arrayOfAnswer.length);
            answerString = '', negative = false;
        };

        if (event.key == 'Enter' && answerString.length != 0) {
            document.removeEventListener('keydown', keyDownHandler);
            answerCheck(arrayOfAnswer, negative, answer);
        };
        outputAnsElement.textContent = answerString;
    };
    document.addEventListener('keydown', keyDownHandler);
};

const answerCheck = (resArray, negative, answer) => {
    let response = 0, addScore;
    for (let i = 0; i < resArray.length; i++) {
        response += resArray[i] * (10 ** (resArray.length - i - 1));
    };

    response = negative ? response *= -1 : response;
    if (response === answer.num) {
        addScore = resArray.length * 5;
        addScore *= negative ? 2 : 1;
        addScore *= answer.operator + 1;
    } else {
        addScore = -20;
    };
    scoreProcess(addScore);

    setTimeout(() => {

        generateFormula();
    }, 500);
};