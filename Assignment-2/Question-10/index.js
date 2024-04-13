let array = [1, 2, 3, 4, 2, 5, 6, 4, 7, 7];
let duplicateValues = findDuplicates(array);

function findDuplicates(arr) {
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
                break;
            }
        }
    }

    return duplicates;
}

console.log("Duplicate values:", duplicateValues);
