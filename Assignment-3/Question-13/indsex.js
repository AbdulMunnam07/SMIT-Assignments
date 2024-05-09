// Check if a string is a valid email address.

function isValidEmail(email) {
    // Regular expression pattern for basic email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// Example usage
console.log(isValidEmail("example@example.com")); // Output: true
console.log(isValidEmail("example@example"));     // Output: false
console.log(isValidEmail("example.com"));         // Output: false
console.log(isValidEmail("example@example@com")); // Output: false
