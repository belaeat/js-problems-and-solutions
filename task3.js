// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

function mostFrequentElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        // If the input is not an array or it's an empty array, there is no most frequent element
        return undefined;
    }

    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;

    // Count the frequency of each element in the array
    for (const element of arr) {
        if (frequencyMap[element] === undefined) {
            frequencyMap[element] = 1;
        } else {
            frequencyMap[element]++;
        }

        // Update the most frequent element
        if (frequencyMap[element] > maxFrequency) {
            maxFrequency = frequencyMap[element];
            mostFrequentElement = element;
        }
    }
    return mostFrequentElement;
}

// Example
const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = mostFrequentElement(array);
console.log(mostFrequent);
