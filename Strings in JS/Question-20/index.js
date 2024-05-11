// Perform string compression by replacing repeated characters with the character followed by the count.

// 1. Iterate through the characters of the string.
// 2. Keep track of the current character and its count.
// 3. If the next character is the same as the current character, increment the count.
// 4. If the next character is different or we reach the end of the string, append the current character and its count to the compressed string.
// 5. Continue iterating until the end of the string is reached.
// 6. Return the compressed string.

function compressString(str) {
    let compressedStr = '';
    let currentChar = str[0];
    let charCount = 1;

    // Iterate through the characters of the string
    for (let i = 1; i <= str.length; i++) {
        // If the next character is the same as the current character, increment the count
        if (str[i] === currentChar) {
            charCount++;
        } else {
            // Append the current character and its count to the compressed string
            compressedStr += currentChar + charCount;
            // Reset current character and count for the next character
            currentChar = str[i];
            charCount = 1;
        }
    }

    // Return the compressed string if it's shorter than the original string
    return compressedStr.length < str.length ? compressedStr : str;
}

// Example usage
const originalString = "aabcccccaaa";
const compressedString = compressString(originalString);
console.log(compressedString); // Output: "a2b1c5a3"
