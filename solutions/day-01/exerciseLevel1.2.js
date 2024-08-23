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

// Q4 Get name, legs, color, age and bark value from the dog object
console.log(dog.name)  // Rosco
console.log(dog.legs)  // 4
console.log(dog.color)  // brown
console.log(dog.age)  // 2
console.log(dog.bark())  // woof woof


// NB: If the dog object had a property eg fur colour:
let doggo= {
    name: "Bosco",
    'fur color': "black",
};

// to get fur colour value
console.log(doggo['fur color']) // black


// Q5 Set new properties the dog object: breed, getDogInfo

dog.breed = "Alsatian";
dog.getDogInfo = function() {
    return `Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}, Bark: ${this.bark()}`;
};

console.log(dog.getDogInfo())  // Name: Rosco, Breed: Alsatian, Age: 2, Color: brown, Legs: 4, Bark: woof woof


