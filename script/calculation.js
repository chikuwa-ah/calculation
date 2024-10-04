'use strict';

const displayFormula = (number, operator) => {
    const operator_sign = ['＋', 'ー', 'X', '÷'];
    const formula = `${number[0]} ${operator_sign[operator]} ${number[1]} ＝`;
    const mainChildren = document.getElementById('main').children;

    mainChildren[0].textContent = formula;
};
const keyInput = () => {

}
const answerCheck = () => {

}

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
            answer = [number[0] / number[1], number[0] % number[1]];
            break;
    };
    return answer;
};
const generateFormula = () => {
    const operator = Math.floor(Math.random() * 4);

    const outputNumber = () => {
        const numberArray = Array.apply(null, { length: 2 }).map(() => {
            return Math.floor(Math.random() * maxNumber) + 1;
        });
        return numberArray;
    };

    let maxNumber = 999, numbers;
    if (operator <= 2) {
        if (operator === 2) {
            maxNumber = 99;
        };
        numbers = outputNumber();
    } else {
        //case of division
        numbers = outputNumber();
        while (numbers[0] < numbers[1]) {
            numbers = outputNumber();
        };
    };

    const answer = findAnswer(numbers, operator);

    displayFormula(numbers, operator);
    answerCheck(answer, operator);
};

const title = (mainElement) => {
    const titleElement = document.getElementById('title');
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
    const mainElement = document.getElementById('main');
    mainElement.style.display = 'none';
    title(mainElement);
});