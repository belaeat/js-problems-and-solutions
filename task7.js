//  Task7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNum) {
    const romanToIntegerMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = romanNum.length - 1; i >= 0; i--) {
        const currentChar = romanNum[i];
        const currentValue = romanToIntegerMap[currentChar];

        if (currentValue >= prevValue) {
            result += currentValue;
        } else {
            result -= currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}

// Test the function
const romanNum1 = "IX";
const romanNum2 = "XXI";
const result1 = romanToInteger(romanNum1);
const result2 = romanToInteger(romanNum2);
console.log(result1); 
console.log(result2);
