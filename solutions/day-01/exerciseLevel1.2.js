// Q1 Create an empty object called dog
let dog = {};

// Q2 Print the the dog object on the console
console.log(dog)  // Object {  }

// Q3 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
let dog = {
    name: "Rosco",
    legs: 4,
    color: "brown",
    age: 2,
    bark: function() {
        return "woof woof";
    }
};

console.log(dog)  //  Object { name: "Rosco", legs: 4, color: "brown", age: 2, bark: bark() }
console.log(dog.bark()) // woof woof
