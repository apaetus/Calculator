const buttonNumber0 = document.getElementById('number0');
const buttonNumber1 = document.getElementById('number1');
const buttonNumber2 = document.getElementById('number2');
const buttonNumber3 = document.getElementById('number3');
const buttonNumber4 = document.getElementById('number4');
const buttonNumber5 = document.getElementById('number5');
const buttonNumber6 = document.getElementById('number6');
const buttonNumber7 = document.getElementById('number7');
const buttonNumber8 = document.getElementById('number8');
const buttonNumber9 = document.getElementById('number9');
const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');
const buttonMultiply = document.getElementById('multiply');
const buttonDivide = document.getElementById('divide');
const buttonOpeningBracket =
    document.getElementById('openingBracket');
const buttonClosingBracket =
    document.getElementById('closingBracket');
const buttonPoint = document.getElementById('point');
const buttonBackspace = document.getElementById('backspace');
const buttonClear = document.getElementById('clear');

const outputElements = document.getElementById('expressionOutput');
const INITIAL_STATE = '';

let expressionState = INITIAL_STATE;

const MATH_OPERATION_SYMBOLS = ['+', '-', '*', '÷'];

function updateExpression(newExpression) {
    expressionState = newExpression;
    outputElements.innerHTML = expressionState;
}

function getNewExpressionState(symbol) {
    const lastSymbol = expressionState.at(-1);
    if (MATH_OPERATION_SYMBOLS.includes(lastSymbol)) {
        return expressionState.slice(0, -1) + symbol;
    } else if (lastSymbol === '.') {
        return expressionState;
    } else {
        return expressionState + symbol;
    }
}

buttonNumber0.addEventListener('click', () => {
    updateExpression(expressionState + '0');
});

buttonNumber1.addEventListener('click', () => {
    updateExpression(expressionState + '1');
});

buttonNumber2.addEventListener('click', () => {
    updateExpression(expressionState + '2');
});

buttonNumber3.addEventListener('click', () => {
    updateExpression(expressionState + '3');
});

buttonNumber4.addEventListener('click', () => {
    updateExpression(expressionState + '4');
});

buttonNumber5.addEventListener('click', () => {
    updateExpression(expressionState + '5');
});

buttonNumber6.addEventListener('click', () => {
    updateExpression(expressionState + '6');
});

buttonNumber7.addEventListener('click', () => {
    updateExpression(expressionState + '7');
});

buttonNumber8.addEventListener('click', () => {
    updateExpression(expressionState + '8');
});

buttonNumber9.addEventListener('click', () => {
    updateExpression(expressionState + '9');
});

buttonPlus.addEventListener('click', () => {
    updateExpression(getNewExpressionState('+'));
});

buttonMinus.addEventListener('click', () => {
    updateExpression(getNewExpressionState('-'));
});

buttonMultiply.addEventListener('click', () => {
    updateExpression(getNewExpressionState('*'));
});

buttonDivide.addEventListener('click', () => {
    updateExpression(getNewExpressionState('÷'));
});

buttonOpeningBracket.addEventListener('click', () => {
    updateExpression(getNewExpressionState('('));
});

buttonClosingBracket.addEventListener('click', () => {
    updateExpression(getNewExpressionState(')'));
});

buttonPoint.addEventListener('click', () => {
    updateExpression(getNewExpressionState('.'));
});

buttonBackspace.addEventListener('click', () => {
    updateExpression(expressionState.slice(0, -1));
});

buttonClear.addEventListener('click', () => {
    updateExpression(INITIAL_STATE);
});
