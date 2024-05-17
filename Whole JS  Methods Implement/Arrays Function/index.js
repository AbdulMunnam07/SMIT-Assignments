let arr = [];
let arr1 = [12,13,14,15,16]
let arr2 = [9,,8,7,6,5,4,3,2,1]

console.log(arr.push(1,2,3,4,5,6,7,8));
console.log(arr);

console.log(arr1.pop());  // Remove last element of the array

console.log(arr1.shift());
console.log(arr1);  // Remove first element of the array

console.log(arr1.unshift("Hello"));
console.log(arr1);

console.log(arr1.length());

console.log(arr1.indexOf(13));    // Output: 2

console.log(arr1.lastIndexOf(15));  // Output: 3

console.log(arr1.reverse());

console.log(arr2.sort());

console.log(arr1.toString());

console.log(arr1.join("-"));

console.log(arr1.reverse());

let fruits = ["apple", "banana", "orange", "mango"];

for (const fruit of fruits) {
  console.log("I'm eating a delicious", fruit);
}

arr1.forEach(arr1 => {
    console.log(arr1);
});

delete arr1[2]
console.log(arr1);

console.log(arr1.slice(2));
console.log(arr1.slice(1,5));

let numbers1 = [1, 2, 3, 4, 5];
let doubledNumbers = numbers1.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

let numbers = [1, 3, 5, 2, 4, 6];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0; // Test: is the number even?
});
console.log(evenNumbers); // Output: [2, 4, 6]












