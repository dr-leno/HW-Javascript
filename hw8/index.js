const resultDiv = document.querySelector('#result');
const calculateBtn = document.querySelector('#calculate');

function onBtnCalculate(){
    let operandA = document.querySelector('#number1').valueAsNumber;
    let operandB = document.querySelector('#number2').valueAsNumber;
    let action = document.querySelector('#action').value;
    if (isNaN(operandA) || isNaN(operandB)) {
        resultDiv.style.color = 'red';
        resultDiv.textContent = 'ERROR Please, enter number';
    }
    else{
        const answer = calculateResult(operandA, operandB, action);
        resultDiv.style.color = 'black';
        resultDiv.textContent = `Expression: ${operandA} ${action} ${operandB} = ${answer}`; 
    }
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

calculateBtn.addEventListener('click', onBtnCalculate);