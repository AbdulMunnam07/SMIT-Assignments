                    // Task-1: Object Creation

//  let's create emty object
let obj = {};
// Now craete object with properties name, age and profession
let obj_Properties  = {
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
let obj_prop ={
    My_age: 19,
    MyBrother_age: 9,
    calculate: function() {
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


// 


