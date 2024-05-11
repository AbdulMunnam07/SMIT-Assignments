let num1 = prompt("Enter first number: ", "");
let num2 = prompt("Enter secound number: ", "");
if(num1>num2){
    console.log(`${num1} is greater than ${num2}`);
}
else if(num1<num2){
    console.log(`${num2} is greater than ${num1}`);
}
else{
    alert("You are not given input")
}