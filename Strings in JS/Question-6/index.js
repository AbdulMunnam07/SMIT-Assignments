// Check if a string is a palindrome.

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');
    // Check if the original and reversed strings are the same
    return cleanStr === reversedStr;
}

// Example usage
const string1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(string1)); // Output: true

const string2 = "Hello World";
console.log(isPalindrome(string2)); // Output: false
