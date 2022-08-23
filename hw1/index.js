'use strict'

let firstNumber = prompt('Enter first number', '2');
let secondNumber = prompt('Enter second number', '3');

// If user will choose cancel - it means false. False to Number = 0. Sum will be 0

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
alert('Your result is ' + sum);