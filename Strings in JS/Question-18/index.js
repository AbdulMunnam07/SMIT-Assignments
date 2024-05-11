// Check if a string is an anagram of another string.

// 1. Remove any non-alphanumeric characters and convert both strings to lowercase (if necessary).
// 2. Sort the characters in both strings alphabetically.
// 3. Compare the sorted strings. If they are identical, the strings are anagrams; otherwise, they are not.

function isAnagram(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Sort the characters in both strings alphabetically
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
    
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Example usage
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false
