'use strict'
const number = getOperand('Enter number');

function getOperand(label) {
    let operand;

    do {
        operand = prompt(label);
    } while (isOperandInvalid(operand));

    return Number(operand);
}
function isOperandInvalid(value) {
    return value === null || value <= 0 || value.trim() === '' || isNaN(value);
}

let sumEven = 0;
let sumOdd = 0;

// цикл, который будет выполняться начиная с 1 и увеличиваясь на 1 (посткремент) пока не будет равен введенному числу
for (let i = 1; i <= number; i++) {
    if (i % 2 == 0) {
        sumEven += i;
    } else {
        sumOdd += i;
 }
}

alert(`Your number ${number}
Sum of even numbers ${sumEven}
Sum of odd numbers ${sumOdd}`);