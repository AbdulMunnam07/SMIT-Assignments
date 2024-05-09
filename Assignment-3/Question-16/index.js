// Remove all non-alphabetic characters from a string.

function removeNonAlphabetic(str) {
    // Use a regular expression to remove all non-alphabetic characters
    return str.replace(/[^a-zA-Z]/g, '');
}

// Example usage
const stringWithNonAlpha = "hello123 world!";
const stringWithAlphaOnly = removeNonAlphabetic(stringWithNonAlpha);
console.log(stringWithAlphaOnly); // Output: "helloworld"
