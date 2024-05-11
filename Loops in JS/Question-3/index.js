let array = [1, 2, 3, 4, 2, 5, 2];
let elementToRemove = 2;
let resultArray = removeAllOccurrences(array, elementToRemove);

function removeAllOccurrences(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            arr.splice(i, 1);
            i--; 
        }
    }
    return arr;
}console.log(resultArray);
