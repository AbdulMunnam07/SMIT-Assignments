let obj = {
    name: "Habibi",
    age: 10,
    class: 4,
}
//  Acessing values
console.log(obj.name);
console.log(obj.age);
console.log(obj.class);
// Acessing keys
console.log(Object.keys(obj));

// Acess through looping
for (const key in obj) {
        console.log(obj);
}
