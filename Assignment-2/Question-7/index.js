let number = 12345;
let digitSum = sumOfDigits(number);

function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}console.log("Sum of digits:", digitSum);