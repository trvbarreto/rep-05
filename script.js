// DOM Variables
const numberBtns = document.querySelector('.numbers').childNodes;
const operatorBtns = document.querySelector('.operators').childNodes;
const topDisplay = document.querySelector('.topDisplay');
const bottomDisplay = document.querySelector('.bottomDisplay');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

// Program Variables
let displayNumber;
let firstNumber;
let operator;

// Operations Functions
function add(num1, num2) {
    return parseFloat((num1 + num2).toFixed(2));
};

function subtract(num1, num2) {
    return parseFloat((num1 - num2).toFixed(2));
};

function multiply(num1, num2) {
    return parseFloat((num1 * num2).toFixed(2));
}

function divide(num1, num2) {
    if (num2 == 0) {
        return 'Division by zero.'
    } else {
        return parseFloat((num1 / num2).toFixed(2));
    }    
}

function operate(operator, num1, num2) {

    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    
        default:
            break;
    }
}

// Buttons actions
for (const button of numberBtns) {
    button.addEventListener('click', () => {
        bottomDisplay.innerText += button.innerText;
        displayNumber = parseInt(bottomDisplay.innerText);
    })
};

for (const button of operatorBtns) {
    button.addEventListener('click', () => {
        if (firstNumber === undefined) {

            firstNumber = displayNumber;
            operator = button.innerText;
            displayNumber = 0;

            topDisplay.innerText = `${firstNumber} ${operator}`;
            bottomDisplay.innerText = '';
        } else {
            let result = operate(operator, firstNumber, displayNumber);

            firstNumber = result;
            
            displayNumber = 0;
            operator = button.innerText;

            if (typeof(firstNumber) == 'string') {
                topDisplay.innerText = `${firstNumber}`;
                firstNumber = undefined;
                displayNumber = 0;
            } else {
                topDisplay.innerText = `${firstNumber} ${operator}`;            
            }

            bottomDisplay.innerText = '';
        }
    })
};

equalsButton.addEventListener('click', () => {
    if (firstNumber !== undefined) {
        let result = operate(operator, firstNumber, displayNumber);
        bottomDisplay.innerText = result;
        topDisplay.innerText = '';
    };
});

clearButton.addEventListener('click', () => {
    displayNumber = 0;
    firstNumber = undefined;
    operator = undefined;

    bottomDisplay.innerText = '';
    topDisplay.innerText = '';
});