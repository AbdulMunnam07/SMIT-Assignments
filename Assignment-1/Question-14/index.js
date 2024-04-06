let units = Number(prompt('Enter Electricity Units :'));

let bill;

if (units<= 50) {
    bill = units * 0.50;
} else if (units <= 150) {
    bill = 50 * 0.50 + (units - 50) * 0.75;
} else if (units <= 250) {
    bill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
} else {
    bill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;
}

bill = bill + bill * 0.20;

alert('Total Electricity Bill: ' + bill);
console.log('Total Electricity Bill: ' + bill);