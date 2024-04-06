//  Q1: Write a js program to find the maximum between two numbers.

// let num1 = prompt("Enter first number: ", "");
// let num2 = prompt("Enter secound number: ", "");
// if(num1>num2){
//     console.log(`${num1} is greater than ${num2}`);
// }
// else if(num1<num2){
//     console.log(`${num2} is greater than ${num1}`);
// }
// else{
//     alert("You are not given input")
// }



// Q2: Write a js program to find the maximum between three numbers.

// let num1 = prompt("Enter first number:")
// let num2 = prompt("Enter secound number:")
// let num3 = prompt("Enter third number:")
// if (num1 > num2 || num1 > num3) {
//     console.log(`${num1} is maximum number`);
// }
// else if (num2 > num1 || num2 > num3) {
//     console.log(`${num2} is maximum number`);
// }
// else if (num3>num1 || num3>num2) {
//     console.log(`${num3} is maximum number`);
// }
// else{
//     console.log(`You did't give any input`);
// }



// Q:3 Write a js program to check whether a number is negative, positive or
// zero.

// let number = prompt("Enter first number:")
// if (number>0) {
//     console.log(`${number} is positive`);
// }
// else if (number<0){
//     console.log(`${number} is negative`);
// } 
// else {
//     console.log(`${number} is zero`);
// }




// Q:4 Write a js program to check whether a number is divisible by 5 and 11 or
// not.

// let number = prompt("Enter a number")
// if (number%5 == 0 && number%11 == 0) {
//     console.log(`${number} is dvisible by 5 and 11`);
// } else {
//     console.log(`${number} isn't divisible by 5 and 11`);
// }



// Q:5 Write a js program to check whether a number is even or odd.

// let number = prompt(`Enter a number`)
// if (number%2 == 0) {         
//     console.log(`${number} is even number`);
// } else {
//     console.log(`${number} is odd number`);
//     }



// Q:6 Write a js program to check whether a year is leap year or not.

// let number = prompt("Enter a number of year")
// if (number%4 == 0) {
//     console.log(`${number} is a leap year`);
// } else {
//     console.log(`${number} is not a leap year`);
// }



// Q:7 Write a js program to input any alphabet and check whether it is vowel or
// consonant.

// let alpha = prompt("Enter an alphabet")
// switch (alpha) {
//     case 'a':
//     case 'A':
//         console.log(`It's a vowel`);
//         break;
//     case 'e':
//     case 'E':
//         console.log(`It's a vowel`);
//         break;
//     case 'i':
//     case 'I':
//         console.log(`It's a vowel`);
//         break;
//     case 'o':
//     case 'O':
//         console.log(`It's a vowel`);
//         break;
//     case 'u':
//     case 'U':
//         console.log(`It's a vowel`);
//         break;
//     default:
//         console.log(`It's a consonant`);
//         break;
// }




// Q:8 Write a js program to check whether a character is uppercase or
// lowercase alphabet.

// let character = prompt("Enter a character")
// if (character>='A' && character<='Z') {
//     console.log(`${character} is Uppercase alphebet`);
// } else if(character>='a' && character<='z') {
//     console.log(`${character} is Lowercase alphebet`);
// }



// Q:9 Write a js program to input the week number and print weekday.

// let num = prompt("Enter a day of the week")
// switch (num) {
//     case 1:
//         console.log(`Friday`);
//         break;
//     case 2:
//         console.log(`Saturday`);
//         break;
//     case 3:
//         console.log(`Sunday`);
//         break;
//     case 4:
//         console.log(`Monday`);
//         break;
//     case 5:
//         console.log(`Tuesday`);
//         break;
//     case 6:
//         console.log(`Wednesday`);
//         break;
//     case 7:
//         console.log(`Thursday`);
//         break;
//     default:
//         console.log(`Invalid input`);
//         break;
// }




// Q:10 Write a js program to input the month number and print the number of days in that month.

// let m = prompt("Enter a number of the month")
// if (m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12) {
//     console.log(`31 Days`);
// }
// else if(m==4 || m==6 || m==9 || m==11){
//     console.log(`30 Days`);
// }
// else if(m==2){
//     console.log(`29 Or 29 Days`);
// }
// else{
//     console.log(`Invalid input`);
// }




// Q:11 Write a js program to count a minimum number of notes in a given amount.


// let amount = Number(prompt('Enter the amount:'));

// let notes = 0;

// if (amount >= 5000) {
//     notes += Math.floor(amount / 5000);
//     amount %= 5000;
//     amount = amount % 5000;
// }

// if (amount >= 1000) {
//     notes += Math.floor(amount / 1000);
//     amount %= 1000;
// }

// if (amount >= 500) {
//     notes += Math.floor(amount / 500);
//     amount %= 500;
// }

// if (amount >= 100) {
//     notes += Math.floor(amount / 100);
//     amount %= 100;
// }

// if (amount >= 50) {
//     notes += Math.floor(amount / 50);
//     amount %= 50;
// }

// if (amount >= 10) {
//     notes += Math.floor(amount / 10);
//     amount %= 10;
// }

// if (amount >= 5) {
//     notes += Math.floor(amount / 5);
//     amount %= 5;
// }

// if (amount >= 2) {
//     notes += Math.floor(amount / 2);
//     amount %= 2;
// }

// if (amount >= 1) {
//     notes += amount;
// }

// alert('Minimum number of notes: ' + notes);
// console.log('Minimum number of notes: ' + notes);





// Q:12 Write a js program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics, and Computer. Calculate percentage and grade
// according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F


// let marks1 = Number(prompt(`Enter your Physics marks`));
// let marks2 = Number(prompt(`Enter your Chemistry marks`)); 
// let marks3 = Number(prompt(`Enter your Biology marks`)); 
// let marks4 = Number(prompt(`Enter your Mathematics marks`)); 
// let marks5 = Number(prompt(`Enter your Computer marks`)); 

// let totalMarks = marks1 + marks2 + marks3 +  marks4 + marks5;

// let percentage = (totalMarks/500)*100;

// if (percentage >= 90) {
//     alert(`Percentage: ${percentage} Grade: A`)
//     console.log(`Percentage: ${percentage} Grade: A`)

// }
// else if (percentage >= 80) {
//     alert(`Percentage: ${percentage} Grade: B`)
//     console.log(`Percentage: ${percentage} Grade: B`)

// }
// else if (percentage >= 70){
//     alert(`Percentage: ${percentage} Grade: C`)
//     console.log(`Percentage: ${percentage} Grade: C`)     

// }
// else if (percentage >= 60){
//     alert(`Percentage: ${percentage} Grade: D`)
//         console.log(`Percentage: ${percentage} Grade: D`)
// }
// else if (percentage >= 40){
//     alert(`Percentage: ${percentage} Grade: E`)
//     console.log(`Percentage: ${percentage} Grade: E`)
// }
// else{
//     alert(`Percentage: ${percentage} Grade: F`)
//     console.log(`Percentage: ${percentage} Grade: F`)
// }







// Q:13 Write a js program to input the basic salary of an employee and calculate
// its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// let basicSalary = Number(prompt('Enter Your Basic Salary :'));
// let hra, da;

// if (basicSalary <= 10000) {

//     hra = basicSalary * 0.2;
//     da = basicSalary * 0.8;

// } else if (basicSalary <= 20000) {

//     hra = basicSalary * 0.25;
//     da = basicSalary * 0.9;

// } else {

//     hra = basicSalary * 0.3;
//     da = basicSalary * 0.95;
    
// }

// let grossSalary = basicSalary + hra + da;

// alert('Gross Salary: ' + grossSalary);
// console.log('Gross Salary: ' + grossSalary);





// Q:14 Write a js program to input electricity unit charges and calculate total
// electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit                            
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

// let units = Number(prompt('Enter Electricity Units :'));

// let bill;

// if (units<= 50) {
//     bill = units * 0.50;
// } else if (units <= 150) {
//     bill = 50 * 0.50 + (units - 50) * 0.75;
// } else if (units <= 250) {
//     bill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
// } else {
//     bill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;
// }

// bill = bill + bill * 0.20;

// alert('Total Electricity Bill: ' + bill);
// console.log('Total Electricity Bill: ' + bill);