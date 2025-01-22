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

function operate(number1,number2,operator) {
    switch (operator) {
        case '+':
            return add(number1,number2);
        case '-':
            return subtract(number1,number2);
        case 'x':
            return multiply(number1,number2);
        case '/':
            return divide(number1,number2);
    }
}

let number1 = 0;
let number2 = 0;
let operator = '';

