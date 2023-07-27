// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: Cannot divide by zero.";
            }
        default:
            return "Error: Invalid operator.";
    }
}

// Example
const num1 = 50;
const operator = '/';
const num2 = 10;
const result = calculate(num1, operator, num2);
console.log(result);