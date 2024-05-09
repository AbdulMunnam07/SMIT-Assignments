// Find the longest word in a string.

// 1. Split the string into an array of words.
// 2. Iterate over each word in the array and keep track of the longest word found so far.
// 3. After iterating through all the words, return the longest word found.

function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(' ');
    
    // Initialize a variable to store the longest word
    let longestWord = '';
    
    // Iterate over each word in the array
    for (let word of words) {
        // Update the longest word if the current word is longer
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    // Return the longest word found
    return longestWord;
}

// Example usage
const sentence = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(sentence);
console.log(longestWord); // Output: "jumps"
