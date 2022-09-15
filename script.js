function add(num1, num2) {
    return (num1 + num2).toFixed(2);
};

function subtract(num1, num2) {
    return (num1 < num2 ? num2 - num1 : num1 - num2).toFixed(2);
};

function multiply(num1, num2) {
    return (num1 * num2).toFixed(2);
}

function divide(num1, num2) {
    if (num2 == 0) {
        return 'It\'s not possible to divide by zero.'
    } else {
        return (num1 / num2).toFixed(2);
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

let displayValue;

const buttons = document.querySelector('.numbers').childNodes;
const display = document.querySelector('.display');

for (const button of buttons) {
    button.addEventListener('click', () => {
        display.innerText += button.innerText;
        displayValue = display.innerText;
        console.log(displayValue);
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