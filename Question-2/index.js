let num1 = prompt("Enter first number:")
let num2 = prompt("Enter secound number:")
let num3 = prompt("Enter third number:")
if (num1 > num2 || num1 > num3) {
    console.log(`${num1} is maximum number`);
}
else if (num2 > num1 || num2 > num3) {
    console.log(`${num2} is maximum number`);
}
else if (num3>num1 || num3>num2) {
    console.log(`${num3} is maximum number`);
}
else{
    console.log(`You did't give any input`);
}