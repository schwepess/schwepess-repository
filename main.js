let add = require('./add')
let inputHandler = require('./inputHandler')
let subtraction = require('./subtraction')
let multiplication = require('./multiplication')
let division = require('./division')
let degree = require('./degree')

const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculator() {
    userInput.question('Введите значения и оператор через пробел (например 2 + 3): ',
        (input) => {
            inputHandler(input, (number1, operator, number2) => {
 
                let result;
                switch (operator) {
                    case '+':
                    result = add(number1, number2);
                        break;
 
                        case '-':
                            result = subtraction(number1, number2);
                                    break;

                        case '*':
                             result = multiplication(number1, number2);
                                    break;
        
                        case '/':
                            result = division(number1, number2);
                                    break;
                   
                        case '**':
                            result = degree(number1, number2);
                                    break;
                               
                    default:
                        console.log('Неверная операция');
                        userInput.close;
                        break;
                }
                console.log('результат ' + result)
                calculator();
            })
});
}
calculator();
