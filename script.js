function add(num1, num2) {
    return parseInt((num1 + num2).toFixed(2));
};

function subtract(num1, num2) {
    return parseInt((num1 < num2 ? num2 - num1 : num1 - num2).toFixed(2));
};

function multiply(num1, num2) {
    return parseInt((num1 * num2).toFixed(2));
}

function divide(num1, num2) {
    if (num2 == 0) {
        return 'Division by zero.'
    } else {
        return parseInt((num1 / num2).toFixed(2));
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

let displayNumber;
let firstNumber;
let operator;

const numberBtns = document.querySelector('.numbers').childNodes;
const operatorBtns = document.querySelector('.operators').childNodes;
const topDisplay = document.querySelector('.topDisplay');
const bottomDisplay = document.querySelector('.bottomDisplay');

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

/* PSEUDO CODE

    *VALOR DEFAULT DO DISPLAY SEMPRE TEM QUE SER ZERO
    **CORRIGIR FUNÇÃO OPERATE PRA SEMPRE ARREDONDAR O RESULTADO PRA DUAS CASAS DECIMAIS
    ***CORRIGIR DIVISION BY ZERO NA FUNCAO DIVIDE

    QUANDO USER CLICAR NO BOTÃO DE OPERADOR
        SE TIVER ALGUM NUMERO SALVO NA PRIMEIRA VARIAVEL
            EXECUTAR OPERATE EM CIMA DOS VALORES ATUAIS
            SUBSTITUIR O VALOR DA PRIMEIRA VARIAVEL PELO RESULTADO DE OPERATE
            SUBSTITUIR O VALOR DA VARIAVEL OPERADOR PELO OPERADOR DO BOTÃO CLICADO
        SE NÃO
            SALVAR O NUMERO DO DISPLAY EM UMA VARIAVEL
            SALVAR O OPERADOR EM UMA VARIAVEL
            MOSTRAR O PRIMEIRO NUMERO E O OPERADOR NO TOP DO DISPLAY
    
    QUANDO USER CLICAR NO BOTÃO DE =
        SALVAR O NUMERO DO DISPLAY EM OUTRA VARIAVEL
        EXECUTAR A FUNÇÃO OPERATE COM O PRIMEIRO NUMERO SALVO, O OPERADOR SALVO E O NUMERO ATUAL DO DISPLAY
        LIMPAR O DISPLAY
        INSERIR O RESULTADO DE OPERATE NO DISPLAY

    QUANDO CLICAR NO BOTÃO CLEAR
        TODAS AS VARIAVEIS DEVEM SER LIMPAS
        O DISPLAY DEVE SER LIMPO        
*/