// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        // There should be at least two elements in the array otherwise it will return undefined.
        return undefined;
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    return secondSmallest === Infinity ? undefined : secondSmallest;
}

// Example
const numbers = [8, 3, 6, 12, 10, 9, 4, 7, 5];
const secondSmallest = findSecondSmallest(numbers);
console.log(secondSmallest);