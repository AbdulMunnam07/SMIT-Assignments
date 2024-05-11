// Count the number of vowels in a string.

function countVowels(string) {
    // Initialize vowelCount to 0
    let vowelCount = 0;
    
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    // Iterate through each character in the string
    for (let char of string) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            // If it is, increment vowelCount
            vowelCount++;
        }
    }
    
    // Return the final count of vowels
    return vowelCount;
}

// Example usage
const inputString = "Hello World";
console.log("Number of vowels:", countVowels(inputString));
