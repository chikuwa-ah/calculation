'use strict';

const define = (name, value) => {
    Object.defineProperty(window, name, {
        value: value,
        writable: false
    });
};

const scoreProcess = () => {

}

const displayFormula = (number, operator) => {
    const outputNumber = number.map(e => e < 0 ? `( ${e} )` : String(e));
    const operator_sign = ['+', '-', '×', '÷'];
    const formula = `${outputNumber[0]} ${operator_sign[operator]} ${outputNumber[1]} ＝`;
    const mainChildren = mainElement.children;
    mainChildren[0].textContent = formula;
};

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
            if (negative && answerString.length >= 2) {
                numAdd();
            } else if (!negative && answerString.length >= 1) {
                numAdd();
            };
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
    let response = 0;
    for (let i = 0; i < resArray.length; i++) {
        response += resArray[i] * (10 ** (resArray.length - i - 1));
    };

    response = negative ? response *= -1 : response;

    let judge = response == answer ? 'correct' : 'miss';
    console.log(judge);

    generateFormula();
};



const findAnswer = (number, operator) => {
    let answer;
    switch (operator) {
        case 0:
            answer = number[0] + number[1];
            break;
        case 1:
            answer = number[0] - number[1];
            break;
        case 2:
            answer = number[0] * number[1];
            break;
        case 3:
            answer = number[0] / number[1];
            break;
    };
    return answer;
};

const outputNumber = (max) => {
    const numberArray = Array.apply(null, { length: 2 }).map(() => {
        let passNumber = Math.floor(Math.random() * max) + 1;
        if (Math.floor(Math.random() * 5) === 0) {
            passNumber *= -1;
        };
        return passNumber;
    });
    return numberArray;
};

const generateFormula = () => {
    const operator = Math.floor(Math.random() * 4);

    let maxNumber = 999, numbers = [];
    if (operator <= 2) {
        if (operator === 2) {
            maxNumber = 99;
        };
        numbers = outputNumber(maxNumber);
    } else {
        //case of division
        numbers = outputNumber(maxNumber);
        while (numbers[0] % numbers[1] != 0 || Math.abs(numbers[1]) === 1 || numbers[0] / numbers[1] === 1) {
            numbers = outputNumber(maxNumber);
        };
    };

    const answer = findAnswer(numbers, operator);
    displayFormula(numbers, operator);
    keyInput(answer);
};



const title = () => {
    const titleChildren = titleElement.children;
    titleChildren[1].children[0].addEventListener('click', () => {
        titleChildren[0].textContent = 'START!';
        titleChildren[1].style.display = 'none';

        setTimeout(() => {
            titleElement.style.display = 'none';
            mainElement.style.display = 'flex';
            generateFormula();
        }, 1500);
    }, { once: true });
};

window.addEventListener('DOMContentLoaded', () => {
    define('mainElement', document.getElementById('main'));
    define('titleElement', document.getElementById('title'));
    mainElement.style.display = 'none';
    title();
});