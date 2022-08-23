'use strict'

const firstNumber = Number(prompt('Enter first number', 2));
const secondNumber = Number(prompt('Enter second number', 3));

// If user will choose cancel - it means null. Null to Number = 0. Sum will be 0

const sum = firstNumber + secondNumber;
alert('Your result is ' + firstNumber + '+' + secondNumber + '='  + sum);
