'use strict'

let firstNumber = prompt('Enter first number',20);

// пока условие true будет выполняться цикл, то есть пока - Отмена, пустая строка или буквенные кракозябры 

while (isInvalid(firstNumber)) {
    firstNumber = prompt('Enter NUMBER');
}

let secondNumber = prompt('Enter second number',34);
 
while (isInvalid(secondNumber)) {
    secondNumber = prompt('Enter NUMBER');
}

// Функция проверки введенного числа. Если пользователь нажал Отмена - null

function isInvalid(str) {
    return str === null || str.trim() === '' || isNaN(str);
}

const sum = +firstNumber + ' + ' + +secondNumber + ' = ' + (+firstNumber + +secondNumber);
const subtraction = +firstNumber + ' - ' + +secondNumber + ' = ' +  (+firstNumber - +secondNumber);
const division = +firstNumber + ' / ' + +secondNumber + ' = ' + (+firstNumber / +secondNumber);
const multiplication = +firstNumber + ' * ' + +secondNumber + ' = ' + (+firstNumber * +secondNumber);

let operation = prompt('Type the operation: +, -, * or /');

/*В условии циклв должно быть true, 
а если я спрашиваю ввести строго равно операторы, а получаю кракозябры или отмену, то в скобках получу false 
стоит привести к обратному boolean с помощью ! чтобы получить true в условии цикла*/
    
 while(validation(operation)) {
    operation = prompt('Valid operations: +, -, * or /');
}

function validation(result){
    return !(result.trim() === '+' || result.trim() === '-' || result.trim() === '*' || result.trim() === '/');
}

switch(operation){
    case '+': 
        alert(sum); break;
    case '-': 
        alert(subtraction); break;
    case '/': 
        alert( division); break;
    case '*': 
        alert(multiplication); break;
    default: 
        prompt('Error');
}

alert('Finally it works! It was so difficult')




