// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumOfPositiveNumbers(numArray) {
    let sum = 0;

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            sum += numArray[i];
        }
    }
    return sum;
}

// Example
const numbers = [2, -5, 10, -3, 7];
const result = sumOfPositiveNumbers(numbers);
console.log(result);
