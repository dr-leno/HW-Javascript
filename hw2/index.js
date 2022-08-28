'use strict'

let firstNumber = prompt('Enter first number',20);

// пока условие в скобках true будет выполняться цикл

while (isInvalid(firstNumber)) {
    firstNumber = prompt('Enter NUMBER');
}

let secondNumber = prompt('Enter second number',34);
 
while (isInvalid(secondNumber)) {
    secondNumber = prompt('Enter NUMBER');
}

//проверка введенного числа. Если пользователь нажал Отмена - null

function isInvalid(str) {
    return str === null || str.trim() === '' || isNaN(str);
}

const sum = +firstNumber + ' + ' + +secondNumber + ' = ' + (+firstNumber + +secondNumber);
const subtraction = +firstNumber + ' - ' + +secondNumber + ' = ' +  (+firstNumber - +secondNumber);
const division = +firstNumber + ' / ' + +secondNumber + ' = ' + (+firstNumber / +secondNumber);
const multiplication = +firstNumber + ' * ' + +secondNumber + ' = ' + (+firstNumber * +secondNumber);

let operation = prompt('Type the operation: +, -, * or /').trim();  
    
 while(validation(operation)) {
    operation = prompt('Valid operations: +, -, * or /').trim();
}

/*проверка введенного оператора. Если ввела не + - / * получу false 
а для цикла условие превращаю в true с помощью !*/

function validation(result){
    return !(result === '+' || result === '-' || result === '*' || result === '/');
}

switch(operation){
    case '+': 
        alert(sum); break;
    case '-': 
        alert(subtraction); break;
    case '/': 
        alert(division); break;
    case '*': 
        alert(multiplication); break;
    default: 
        prompt('Error');
}

alert('Finally it works! It was so difficult')