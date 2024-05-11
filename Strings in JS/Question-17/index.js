// Check if a string is a valid palindrome permutation (ignoring spaces).

// 1. Remove all spaces from the string.
// 2. Count the frequency of each character in the string.
// 3. Check if at most one character has an odd frequency.
// 4. If yes, return true, as the string can be rearranged into a palindrome.
// 5. If no, return false.

function isPalindromePermutation(str) {
    // Remove spaces from the string and convert to lowercase
    const cleanStr = str.replace(/\s+/g, '').toLowerCase();
    
    // Count the frequency of each character
    const charCount = {};
    for (let char of cleanStr) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Count the number of characters with odd frequency
    let oddCount = 0;
    for (let char in charCount) {
        if (charCount[char] % 2 !== 0) {
            oddCount++;
        }
    }
    
    // Check if at most one character has an odd frequency
    return oddCount <= 1;
}

// Example usage
console.log(isPalindromePermutation("Tact Coa")); // Output: true
console.log(isPalindromePermutation("Able was I ere I saw Elba")); // Output: true
console.log(isPalindromePermutation("Hello World")); // Output: false
