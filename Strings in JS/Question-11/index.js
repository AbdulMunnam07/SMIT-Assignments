// Count the number of words in a string.

function countWords(str) {
    // Use the split method to split the string into words
    const wordsArray = str.split(/\s+/);
    // Return the length of the array, which represents the number of words
    return wordsArray.length;
}

// Example usage
const sentence = "This is a sample sentence";
const wordCount = countWords(sentence);
console.log("Number of words:", wordCount); // Output: 5
