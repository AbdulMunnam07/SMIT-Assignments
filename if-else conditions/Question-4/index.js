let number = prompt("Enter a number")
if (number%5 == 0 && number%11 == 0) {
    console.log(`${number} is dvisible by 5 and 11`);
} else {
    console.log(`${number} isn't divisible by 5 and 11`);
}