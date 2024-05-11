let array = [3, 8, 2, 10, 5];
let largestNumber = findLargestNumber(array);

function findLargestNumber(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let largest = arr[0];t
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}console.log("Largest number:", largestNumber);
