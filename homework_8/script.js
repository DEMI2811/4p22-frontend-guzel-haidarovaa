'use strict';

const out = document.getElementById('out');
const button = document.getElementById('submit');



function func() {

    const number1 = document.getElementById('number1').value;
    const operator = document.getElementById('operator').value;
    const number2 = document.getElementById('number2').value;
    let result;

    switch (operator) {
        case '+':
            result = Number(number1) + Number(number2);
            break;
        case '-':
            result = Number(number1) - Number(number2);
            break; 
        case '/':
            result = Number(number1) / Number(number2);
        break;  
        case '*':
            result = Number(number1) * Number(number2);
        break;

    }

    console.log(result)
}