'use strict'
// выбрать мат. операцию через функцию
const action = getAction();

// выбрать количество чисел для подсчета через функцию
const numbersCounter = getNumbersCount();

let result;

// переменная для выражения с операндами и математической операции
let expression = '';

// Цикл, который выполняется то количество раз сколько введено количество чисел 
// и подсчитывает результат выбранной математической операции через switch в функции

for (let i = 1; i <= numbersCounter; i++) {
    let number = getNumber(`Enter number ${i}`);
    if (i === 1){
        result = number
    } else{
        calculateResult(action, number);
    }
    // if else в укороченом виде через ? :
    let newAction = (i == numbersCounter) ? '' : action;
    expression = getExpression(number, newAction);  
}

showExpression(expression);


function getAction() {
    let val;

    do {
        val = prompt('Action? + - * /');
    } while (isActionInvalid(val));

    return val;
}

function isActionInvalid(val) {
    return val !== '+' && val !== '-' && val !== '*' && val !== '/';
}

function getNumbersCount(){
    let count = prompt('How many numbers will you enter?');
        
    while (isCountInvalid(count)){
        count = prompt('How many numbers will you enter?'); 
    }

    return count;
}

function isCountInvalid(val){
    return val === null || val.trim() === '' || isNaN(val) || val <=2
}

function getNumber(label) {
    let operand;

    do {
        operand = prompt(label);
    } while (isNumberInvalid(operand));

    return Number(operand);
}

function isNumberInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val) || val <= 0;
}

function calculateResult(action, currentNumber) {
    switch (action) {
        case '+':
            return result += currentNumber;
        case '-':
            return result -= currentNumber;
        case '*':
            return result *= currentNumber;
        case '/':
            return result /= currentNumber;
    }
}

function getExpression(number, action) {
    expression += `${number} ${action} `;
    return expression;
}

function showExpression(expression) {
    const userMessage  = alert(`Your calculation: ${expression} = ${result}`);
    return userMessage;
}