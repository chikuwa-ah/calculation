'use strict';

const displayFormula = (number, operator) => {
    const outputNumber = number.map(e => e < 0 ? `( ${e} )` : String(e));
    const operator_sign = ['+', '-', '×', '÷'];
    const formula = `${outputNumber[0]} ${operator_sign[operator]} ${outputNumber[1]} ＝`;
    const mainChildren = mainElement.children;
    mainChildren[0].textContent = formula;
};

const findAnswer = (number, operator) => {
    let answer = {
        num: 0,
        operator: operator
    };
    switch (operator) {
        case 0:
            answer.num = number[0] + number[1];
            break;
        case 1:
            answer.num = number[0] - number[1];
            break;
        case 2:
            answer.num = number[0] * number[1];
            break;
        case 3:
            answer.num = number[0] / number[1];
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
        while (numbers[0] % numbers[1] != 0 || Math.abs(numbers[1]) === 1 || Math.abs(numbers[0] / numbers[1]) === 1) {
            numbers = outputNumber(maxNumber);
        };
    };

    const answer = findAnswer(numbers, operator);
    displayFormula(numbers, operator);
    keyInput(answer);
};