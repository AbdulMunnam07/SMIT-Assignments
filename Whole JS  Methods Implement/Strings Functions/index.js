let str = ""
let str1 = "I am first string"
let str2 = "I am second string"
let str3 = "           HelloEveryone      "
// Using ".charAt(index)" method
console.log(str1.charAt(3));
// Using ".charCodeAt(index)" method
console.log(str1.charCodeAt(2));
// Using ".concate" method
console.log(str.concat(str1,str2));
// Using ".endWith" method
console.log(str2.endsWith("string"));  //true
console.log(str2.endsWith("strong"));  //false
// Using ".includes()" method
console.log(str1.includes("string"));  //true
console.log(str1.includes("sting"));  //false
// Using ".indexOf()" method
console.log(str2.indexOf("an"));

console.log(str1.toUpperCase());  // Converts the string to uppercase.

console.log(str1.toLowerCase());  // Converts the string to lowercase.

console.log(str3.trim());  // Removes leading and trailing whitespace.

console.log(str2.slice(0,11));  // Extracts a section of the string, starting at a specified index and ending at another 

console.log(str2.substring(0,11));  // Similar to slice, but throws an error if end is less than start.

console.log(str1.replace("I", "You"));  // Replaces all occurrences of a substring with a new substring.

console.log(str1.split()); // Splits a string into an array of substrings, based on a delimiter (separator) and an optional limit on the number of splits.







