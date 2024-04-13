const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers(arr) {
    arr.forEach(num => {
        if (num % 2 === 0) {
            console.log(num);
        }
    });
}console.log("Even numbers in the array:");
printEvenNumbers(numbers);