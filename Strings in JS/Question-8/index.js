// Find the first occurrence of a given character in a string.


function firstOccurrence(str, char) {
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // If the current character matches the given character, return its index
        if (str[i] === char) {
            return i;
        }
    }
    // If the character is not found, return -1
    return -1;
}

// Example usage
const string = "hello";
const character = "l";
const index = firstOccurrence(string, character);
console.log("First occurrence of '" + character + "' is at index:", index); 
// Output: 2
