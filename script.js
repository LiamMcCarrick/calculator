function add(number1,number2) {
    return number1 + number2;
}

function subtract (number1,number2) {
    return number1 - number2;
}

function multiply(number1,number2) {
    return number1 * number2;
}

function divide(number1,number2) {
    if (number2 === 0) {
        return "Error";
    }
    return number1 / number2;
}

function operate(numbers, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = numbers.reduce((total,currentNumber) => {
               return add(total,currentNumber);
            }); 
            return result.toFixed(2)
        case '-':
            result = numbers.reduce((total,currentNumber) => {
                return subtract(total,currentNumber);
             }); 
             return result.toFixed(2)
        case '*':
            result = numbers.reduce((total,currentNumber) => {
                return multiply(total,currentNumber);
             }); 
             return result.toFixed(2)
        case '/':
            result = numbers.reduce((total,currentNumber) => {
                return divide(total,currentNumber);
             }); 
             if (result === 'Error') {
                return result
             } else {
                return result.toFixed(2)
             }
    }
}

function display() {
    displayContainer.textContent = displayText;
}

function operationCheck() {
    if (operatorSelected !== '' && numbers.length === 2) {
        const result = operate(numbers,operatorSelected);
        operationConducted = true;
        displayText = result;
        display();
        displayText = '';
        numbers = [+result];
    };
}

let numbers = [];
let displayText = '';
let operatorSelected = '';

const displayContainer = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const equals = document.querySelector(".equals");

digits.forEach((digit) => {
    digit.addEventListener("click", function() {
        if (operationConducted) {
            displayText = '';
            operationConducted = false;
        }
        displayText += digit.textContent;
        display();
    });
});

const operators = document.querySelectorAll(".operator")
let operationConducted = false;

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (displayText !== '') {
            numbers.push(+displayText);
        }
        displayText = '';
        operationCheck();
        operatorSelected = operator.textContent;
    })
})

equals.addEventListener("click", function () {
    if (displayText !== '') {
        numbers.push(+displayText);
    }
    operationCheck();
});

const clearCalculation = document.querySelector(".clear");

clearCalculation.addEventListener("click", () => {
    numbers = [];
    displayText = '';
    operatorSelected = '';
    displayContainer.textContent = 0;
})