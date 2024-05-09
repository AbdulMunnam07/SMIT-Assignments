// Convert a string into title case (the first letter of each word capitalized).

function toTitleCase(str) {
    // Split the string into an array of words
    const words = str.toLowerCase().split(' ');
    
    // Iterate over each word in the array
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter of each word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    // Join the words back together into a string
    return words.join(' ');
}

// Example usage
const sentence = "this is a sample sentence";
const titleCaseSentence = toTitleCase(sentence);
console.log(titleCaseSentence); // Output: "This Is A Sample Sentence"
