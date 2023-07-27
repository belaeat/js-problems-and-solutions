function reverseString(inputStr) {
    let reversedStr = '';
    // Iterate through the inputString in reverse order
    for (let i = inputStr.length - 1; i >= 0; i--) {
        reversedStr += inputStr.charAt(i);
    }
    return reversedStr;
}

// Example
const originalString = "hello world";
const reversed = reverseString(originalString);
console.log(reversed);