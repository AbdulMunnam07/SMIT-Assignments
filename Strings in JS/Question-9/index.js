// Replace all occurrences of a given character in a string with another character.

function replaceCharacters(str, target, replacement) {
    let newString = '';
    // Loop through each character in the string
    for (let char of str) {
        // If the current character matches the target, append the replacement character
        if (char === target) {
            newString += replacement;
        } else {
            // Otherwise, append the original character
            newString += char;
        }
    }
    return newString;
}

// Example usage
const originalString = "hello world";
const newString = replaceCharacters(originalString, 'l', 'z');
console.log(newString); // Output: "hezzo worzd"
