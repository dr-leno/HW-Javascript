'use strict'
const action = getAction();
const numbers = getNumbers();
const answer = getResult(numbers, action);
const expression = getExpression(numbers, action, answer);


function getAction() {
    let operation;

    do{
        operation = prompt('Enter mathematical operation + - * /');
    }
    while (isActionInvalid(operation));

    return operation;
}

function isActionInvalid(val) {
        return val !== '+' && val !== '-' && val !== '*' && val !== '/';
}

//split - превратить строку в массив, который выдаст числа в "" в виде строки
//map - нужен чтобы превратить массив из строк в массив из чисел используя метод Number

function getNumbers() {
    let str;

    do{
        str = prompt('Enter numbers splitted with comma');
    }
    while(isStringValid(str));
    
    return str.split(',').map(Number);
}

function isStringValid(str) {
    return str === null || str.trim() === '';
}

//reduce - метод массива, выполняет функцию для каждого элемента и накапливает значение (accumulator)

function getResult(values, operation) {
    const result = values.reduce(function (acc, item) {
        return calculateResult(acc, item, operation);
    });

    return result;  
}

function calculateResult(a, b, action) {
    switch (action) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

function getExpression(values, operation , result) {
    const output = values.join(` ${operation} `);
    return alert(`Your calculation: ${output} = ${result}`);
}