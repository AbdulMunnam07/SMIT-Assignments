function containsOnlyNumericCharacters(str) {
    // Use a regular expression to match only numeric characters
    return /^[0-9]+$/.test(str);
}

// Example usage
console.log(containsOnlyNumericCharacters("12345")); // Output: true
console.log(containsOnlyNumericCharacters("12345abc")); // Output: false
console.log(containsOnlyNumericCharacters("abc")); // Output: false
