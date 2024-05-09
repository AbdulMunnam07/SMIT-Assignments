// Reverse a given string.

// let str = "Programming is another world";
function Reversestring(str) {
    return str.split('').reverse().join('');
}
const orignalstring = "Programming is another world";
const reversedstring = Reversestring(orignalstring);
console.log(reversedstring);