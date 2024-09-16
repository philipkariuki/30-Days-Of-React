// Q1 Create an Animal class. The class will have name, age, color, legs properties and create different methods

// A class is a blueprint for creating objects with similar properties and methods. Classes provide a more convenient and structured way to create objects and handle inheritance.

// Define the Animal class
class Animal {
    constructor(name, age, color, legs) {  // The constructor method is called when a new instance of the animal class is created
        //The Animal class has a constructor method that initializes the name,age,color and legs properties
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    // Method to display animal details
    displayDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`;
    }

    // Method to make the animal speak
    speak() {
        return `${this.name} makes a sound.`;
    }

    // Method to simulate the animal eating
    eat(food) {
        return `${this.name} is eating ${food}.`;
    }

    // Method to simulate the animal moving
    move() {
        return `${this.name} is moving around.`;
    }
}

// Create an instance of the Animal class
const thaAnimal = new Animal('Elephant', 20, 'Grey', 4);

// Call the methods on the instance
console.log(thaAnimal.displayDetails()); // Name: Elephant, Age: 20, Color: Grey, Legs: 4
console.log(thaAnimal.speak()); // Elephant makes a sound.
console.log(thaAnimal.eat('acacia trees')); // Elephant is eating acacia trees.
console.log(thaAnimal.move()); // Elephant is moving around.



// Q2 Create a Dog and Cat child class from the Animal Class.

// i) Dog class

class Dog extends Animal {
    constructor(name, age, color, legs, breed) { // adds new property, breed
        super(name, age, color, legs);  // We call the super() function to access all the properties (and methods) from the parent class constructor
        this.breed = breed;  // Additional property specific to Dog
    }

    // Additional method specific to Dog
    fetch() {
        return `${this.name} is fetching the ball.`;
    }
}

const myDog = new Dog('Bud', 2, 'Brown', 4, 'Labrador');

console.log(myDog.displayDetails());  // Name: Bud, Age: 3, Color: Brown, Legs: 4
console.log(myDog.speak());  // Bud makes a sound.
console.log(myDog.eat('omena'));  // Bud is eating omena.
console.log(myDog.fetch());  // Bud is fetching the ball.


// ii) Cat class

class Cat extends Animal {
    constructor(name, age, color, legs, isIndoor) { // adds new property, isIndoor(boolean)
        super(name, age, color, legs);  // Call the parent class constructor
        this.isIndoor = isIndoor;  // Additional property specific to Cat
    }

    // Additional method specific to Cat
    scratch() {
        return `${this.name} is scratching the furniture.`;
    }
}

const fatCat = new Cat('Paka', 2, 'Orange', 4, true);

console.log(fatCat.displayDetails());  // Name: Paka, Age: 2, Color: Orange, Legs: 4
console.log(fatCat.speak());  // Paka makes a sound.
console.log(fatCat.eat('omena'));  // Paka is eating omena.
console.log(fatCat.scratch());  // Paka is scratching the furniture.


