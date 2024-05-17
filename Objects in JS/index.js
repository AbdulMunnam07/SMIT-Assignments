// Task-1: Object Creation

//  let's create emty object
let obj = {};
// Now craete object with properties name, age and profession
let obj_Properties = {
    name: "Abdul Munnam",
    age: 19,
    profession: "Programming"
}


// Task-2: Object Properties

// lets' print the values of object
console.log(obj_Properties);

// We also print these values by using "for in loop" given below:

// for (const key in obj_Properties) {
//         const element = obj_Properties[key];
// }


//  TO modify the value of object
obj_Properties.age = 20;
// Now the age will be changed into 20
console.log(obj_Properties.age);

// To add a new property to an existing object we use:
obj_Properties.location = "Faisalabad";
console.log(obj_Properties);


// Task-3: Object Methods

// let's Create an object method that prints a message to the console
let my_obj = {
    name: "Habib",
    class: "Four",
    gender: "Male",
    greet: function Name() {
        console.log(`Hello, My name is ${this.name}`);
    }
};
// By calling function from object
my_obj.greet();


// Now let's craete a method that calculates and returns a value based on object properties.
let obj_prop = {
    My_age: 19,
    MyBrother_age: 9,
    calculate: function () {
        let BothBrothers_age = this.My_age + this.MyBrother_age;
        return BothBrothers_age
    }
}
// let's call function form object
let TotalAge = obj_prop.calculate();
console.log(`Total Age is: ${TotalAge}`);


// Task-4: Object Iteration

// Now let's Iterate over the properties of an object and print their values.
let Iterate_obj = {
    name: "Aliyar",
    city: "Faisalabad",
    education: "Intermediate",
    age: 18,
}
// To Iterate over the properties of object we can use "for in loop"
for (const key in Iterate_obj) {
    console.log(Iterate_obj[key]);
}


// Now let's Iterate over the properties of an object and perform a specific action for each property.
let person = {
    name: "Muhammad Ali",
    city: "Qatar",
    passion: "Boxer",
}
// Using "for in loop"
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}


// Task-5: Object Comparison

// To Compare two objects to check if they have the same properties and values.
let obj1 = {
    name: "Ali",
    class: 9,
    age: 14,
};
let obj2 = {
    name: "Ali",
    class: 9,
    age: 14,
};

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

let obj3 = deepEqual(obj1, obj2);
console.log(obj3); // true


// TO Compare two objects to check if they refer to the same object in memory.

// create two list in object:
// Create two objects with the same properties
let obj4 = { a: 1, b: 2 };
let obj5 = { a: 1, b: 2 };

// Check for value equality (not built-in, need a function)
console.log(obj4 === obj5);  // Output: false, because they are different objects in memory

// Check for reference equality
let obj6 = obj4;
console.log(obj4 === obj6);  // Output: true, because obj3 references the same object as obj1

// Example function for deep value equality check
// function deepEqual(obj1, obj2) {
//     if (obj1 === obj2) return true;
//     if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false;

//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length) return false;

//     for (let key of keys1) {
//         if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
//     }

//     return true;
// }

// // Check for value equality using deepEqual function
// console.log(deepEqual(obj1, obj2));  // Output: true, because their contents are the same



// Task-6: Object Nesting

let person_G = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Springfield",
        zipCode: "12345"
    }
};

console.log(person_G);
console.log(person_G.address.city); // Output: Springfield

// Accessing a property
console.log(person_G.address.street); // Output: 123 Main St

// Modifying a property
person_G.address.street = "456 Elm St";
console.log(person_G.address.street); // Output: 456 Elm St

// Adding a new property
person_G.address.country = "USA";
console.log(person_G.address.country); // Output: USA

// Logging the updated object
console.log(person_G);



// Task-7: Object Prototypes

// Constructor function
function Hero(name, age) {
    this.name = name;
    this.age = age;
}

// Add a method to the prototype
Hero.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Add a property to the prototype
Hero.prototype.species = "Homo sapiens";

// Create multiple instances of the Person object
let person1 = new Hero("Ahmad", 25);
let person2 = new Hero("Ali", 30);

// Call the method on each instance
person1.greet(); // Output: Hello, my name is Ahmad and I am 25 years old.
person2.greet(); // Output: Hello, my name is Ali and I am 30 years old.

// Access the shared property
console.log(person1.species); // Output: Homo sapiens
console.log(person2.species); // Output: Homo sapiens



// Step 1: Define the constructor function
function Hero_2(name, age) {
    this.name = name;
    this.age = age;
}

// Step 2: Create instances of the Person object
let person11 = new Hero_2("Ahmad", 25);
let person22 = new Hero_2("Ali", 30);

// Initially, trying to call greet will result in an error as it doesn't exist yet
// person1.greet(); // Uncommenting this line before adding the method will cause an error

// Step 3: Add a method to the prototype
Hero_2.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Step 4: Call the new method on each instance
person11.greet(); // Output: Hello, my name is Ahmad and I am 25 years old.
person22.greet(); // Output: Hello, my name is Ali and I am 30 years old.




// Task-8: Object Serialization

// Use object destructuring to extract specific properties from an object.
// Step 1: Define the object
const person07 = {
    name: "Adam",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Springfield",
        zipCode: "12345"
    },
    hobbies: ["reading", "traveling", "swimming"]
};

// Step 2: Convert the object to a JSON string
const jsonString = JSON.stringify(person07);

// Log the JSON string to the console
console.log(jsonString);


// 2nd part

// Step 1: Define the JSON string
const jsonString01 = '{"name":"John Doe","age":30,"address":{"street":"123 Main St","city":"Springfield","zipCode":"12345"},"hobbies":["reading","traveling","swimming"]}';

// Step 2: Parse the JSON string to convert it back to a JavaScript object
const personObject = JSON.parse(jsonString01);

// Log the JavaScript object to the console
console.log(personObject);

// Access properties of the object
console.log(personObject.name);      // Output: Adam
console.log(personObject.age);       // Output: 30
console.log(personObject.address.city); // Output: Springfield
console.log(personObject.hobbies);   // Output: ["reading", "traveling", "swimming"]




// Task-9: Object Destructuring

// Step 1: Define the object
const person77 = {
    name: "AhmadAli",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Springfield",
        zipCode: "12345"
    },
    hobbies: ["reading", "traveling", "swimming"]
};

// Step 2: Destructure the object to extract specific properties
const { name, age, hobbies } = person77;

// Log the extracted variables
console.log(name);    // Output: AhmadAli
console.log(age);     // Output: 30
console.log(hobbies); // Output: ["reading", "traveling", "swimming"]



// Task 10: Object Property Enumeration.

let obj_00 = {
    name: "Salar",
    age: 21,
    region: "Muslim",
}
let prop = Object.keys(obj_00);
console.log(prop);




// Task 11: Object Inheritance

// Create a parent object and a child object that inherits properties and methods from the parent.
// Step 1: Define the Parent class
class Parent {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

// Step 2: Define the Child class that extends the Parent class
class Child extends Parent {
    constructor(name, age) {
        super(name); // Call the parent constructor
        this.age = age;
    }

    sayAge() {
        console.log(`I am ${this.age} years old.`);
    }
}

// Step 3: Create instances and test inheritance
const child1 = new Child("Ali", 25);

child1.greet();    // Output: Hello, my name is Ali.
child1.sayAge();   // Output: I am 25 years old.




// Task 12: Object Privacy

// Create private properties in an object using closures or symbols.
const _name = Symbol('name');
const _age = Symbol('age');

class Person {
    constructor(name, age) {
        this[_name] = name;
        this[_age] = age;
    }

    getName() {
        return this[_name];
    }

    getAge() {
        return this[_age];
    }

    setName(name) {
        this[_name] = name;
    }

    setAge(age) {
        this[_age] = age;
    }
}

const person12 = new Person("Habibi", 30);

console.log(person12.getName()); // Output: Habibi
console.log(person12.getAge());  // Output: 30

person12.setName("Saad");
person12.setAge(25);

console.log(person12.getName()); // Output: Saad
console.log(person12.getAge());  // Output: 25

