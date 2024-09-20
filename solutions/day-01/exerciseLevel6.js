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


// Q3 Override the method you create in Animal class

// i) Override in Animal class

/* In object-oriented programming, overriding typically occurs in a subclass, not within the parent class itself. The concept of overriding is designed to allow a subclass to provide a specific implementation of a method that is already defined in its parent class.
However, if you want to modify the behavior of a method within the same class, you can simply redefine/re-edit the method.
True method overriding happens when a subclass provides a new implementation for a method inherited from its parent class. */


// ii) Override in Dog class

class DogWithOveride extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs);  // Call the parent class constructor
        this.breed = breed;  // Additional property specific to Dog
    }

    // Override the displayDetails method
    displayDetails() {
        return `${super.displayDetails()}, Breed: ${this.breed}`;
    }

    // Override the speak method
    speak() {
        return `${this.name} barks.`;
    }
}

const daDog = new DogWithOveride('Tom', 5, 'Black and brown', 4, 'Mixed breed');

console.log(daDog.displayDetails());  // Name: Tom, Age: 5, Color: Black and brown, Legs: 4, Breed: Mixed breed
console.log(daDog.speak());  // Tom barks.


// iii) Override in Cat class

class CatWithOveride extends Animal {
    constructor(name, age, color, legs, isIndoor) { // adds new property, isIndoor(boolean)
        super(name, age, color, legs);  // Call the parent class constructor
        this.isIndoor = isIndoor;  // Additional property specific to Cat
    }

    // Override the displayDetails method
    displayDetails() {
        return `${super.displayDetails()}, Indoor: ${this.isIndoor}`;
    }

    // Override the speak method
    speak() {
        return `${this.name} meows.`;
    }
}

const daCat = new CatWithOveride('Paka', 2, 'Orange', 4, true);

console.log(daCat.displayDetails());  // Name: Paka, Age: 2, Color: Orange, Legs: 4, Indoor: true
console.log(daCat.speak());  // Paka meows.




// Q4 Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

/* ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)] */

// your output should look like this
/* console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)] */


class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((acc, curVal) => acc + curVal, 0);
    }
  
    min() {
      return Math.min(...this.data); // (...this.data) is known as the spread operator in JS. It allows an iterable (like an array) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. The Math.min function expects individual numbers as arguments, not an array.
      // The spread operator ... expands the array data into individual elements, so the function call effectively becomes Math.min(31, 26, 34, 37), which returns the minimum value, 26.
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() { // The Range is the difference between the lowest and highest values
      return this.max() - this.min();
    }
  
    mean() {  // sum divided by the count
      return this.sum() / this.count();
    }
  
    median() {  // The Median is the middle of a sorted list of numbers
      const sorted = [...this.data].sort((a, b) => a - b);  // The ternary operator is a shorthand for an if-else statement. It has the form "condition ? expr1 : expr2". If the condition is true, it returns expr1; otherwise, it returns expr2. Syntax: variable = (condition) ? expressionTrue :  expressionFalse;
      const mid = Math.floor(sorted.length / 2);
      return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    }
    // alternative way to find median
    /* median() {
        const sorted = [...this.data].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        if (sorted.length % 2 !== 0) {
          return sorted[mid];
        } else {
          return (sorted[mid - 1] + sorted[mid]) / 2;
        }
      } */
    mode() {  // The mode is simply the number which appears most often. To find the mode it is best to put the numbers in order (makes it easier to count them), then count how many of each number. We can have more than one mode.Having two modes is called "bimodal".Having more than two modes is called "multimodal".
      const frequency = {};  // This object will store the frequency of each number in the dataset
      this.data.forEach(val => frequency[val] = (frequency[val] || 0) + 1);  // This line iterates over each value/element in the data array.val represents the current element being processed in the array.For each value, it increments its count in the frequency object. If the value is not already in the object, it initializes it to 0 and then increments it by 1.
      //frequency[val] = (frequency[val] || 0) + 1: updates the frequency object to count the occurrences of each element (val) in the data array.
      // frequency[val] || 0: This uses the logical OR (||) operator.If frequency[val] is undefined (i.e., val has not been encountered before), it evaluates to 0. If frequency[val] already has a value (i.e., val has been encountered before), it evaluates to that value.
      // (frequency[val] || 0) + 1: This adds 1 to the current count of val. If val is encountered for the first time, it becomes 0 + 1 = 1.If val has been encountered before, it increments the existing count by 1.
      //For each element 'val' in the data array,the code:
      //Checks if frequency[val] exists. If not, it initializes it to 0.
      //Increments the count of val by 1.
      // frequency[val]: This accesses the property of the frequency object corresponding to the current element val. If val is 26, for example, frequency[26] refers to the count of how many times 26 has appeared so far.
      /* Let’s say data is [26, 27, 26]: First Iteration (val = 26):
        frequency[26] is undefined.
        frequency[26] || 0 evaluates to 0.
        frequency[26] = 0 + 1 results in frequency[26] = 1.
        Second Iteration (val = 27):
        frequency[27] is undefined.
        frequency[27] || 0 evaluates to 0.
        frequency[27] = 0 + 1 results in frequency[27] = 1.
        Third Iteration (val = 26):
        frequency[26] is 1.
        frequency[26] || 0 evaluates to 1.
        frequency[26] = 1 + 1 results in frequency[26] = 2.
        After these iterations, frequency would be { 26: 2, 27: 1 }. */
      let maxFreq = 0;  // will store the highest frequency found
      let mode = [];  // will store the number(s) that have the highest frequency
      for (const key in frequency) {  // key represents each unique value from the original data array
        if (frequency[key] > maxFreq) {
          maxFreq = frequency[key]; // If the frequency of the current key is greater than maxFreq,update maxFreq to this new higher frequency
          mode = [Number(key)]; // Set mode to an array containing just this key (converted to a number)
        } else if (frequency[key] === maxFreq) {
          mode.push(Number(key));  // If the frequency of the current key is equal to maxFreq,add this key (converted to a number) to the mode array
        }
      }
      return { mode: mode.length === 1 ? mode[0] : mode, count: maxFreq }; // If mode contains only one element, return that single element.Otherwise, return an array of those numbers. Also, return maxFreq (frequency of the mode(s) ) as count.

      /* Let’s say frequency is {1: 3, 2: 5, 3: 5, 4: 2}:

        Initially, maxFreq is 0 and mode is an empty array.
        The loop starts with key = 1:
        frequency[1] (3) is greater than maxFreq (0), so maxFreq becomes 3 and mode becomes [1].
        Next, key = 2:
        frequency[2] (5) is greater than maxFreq (3), so maxFreq becomes 5 and mode becomes [2].
        Next, key = 3:
        frequency[3] (5) equals maxFreq (5), so 3 is added to mode, making it [2, 3].
        Finally, key = 4:
        frequency[4] (2) is less than maxFreq (5), so no changes are made.
        The function returns { mode: [2, 3], count: 5 }. */
    }
  
    variance() {
       /*  Variance is the average of the squared differences from the Mean
        To calculate the variance:
        Work out the Mean.
        Then for each number: subtract the Mean, then square the result (the squared difference).
        Then work out the average of those squared differences. */
      const mean = this.mean();
      return this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / this.count();  // We use reduce method to sum up the squared differences between each data point (val) and the mean. 0 is the initial value of the accumulator. Then we divide the total sum of squared differences by the number of data points (obtained by calling the count method) to get the variance.
    }
  
    std() { // The Standard Deviation is a measure of how spread out numbers are. The formula is just the square root of Variance
      return Math.sqrt(this.variance());
    }
  
    freqDist() {
    // A frequency distribution is a way to organize and summarize data to show how often each value occurs in a dataset.
      const frequency = {};
      this.data.forEach(val => frequency[val] = (frequency[val] || 0) + 1);
      const freqArray = [];
      for (const key in frequency) {
        freqArray.push([frequency[key] / this.count() * 100, Number(key)]); // For each key, it calculates the percentage frequency by dividing the count by the total number of data points (this.count()) and multiplying by 100. It then pushes an array containing this percentage and the key (converted to a number) into freqArray.
      }
      return freqArray.sort((a, b) => b[0] - a[0]); // This sorts the freqArray in descending order based on the percentage frequency (the first element of each sub-array).

      /* Example
      Let’s say this.data is [1, 2, 2, 3, 3, 3]:
      The frequency object will be {1: 1, 2: 2, 3: 3}.
      The freqArray will be [[16.67, 1], [33.33, 2], [50, 3]] (assuming this.count() returns 6).
      After sorting, freqArray will be [[50, 3], [33.33, 2], [16.67, 1]].
      The function returns this sorted array, showing the percentage frequency of each unique value in descending order. */

    }
  
    describe() {
      return `
  Count: ${this.count()}
  Sum: ${this.sum()}
  Min: ${this.min()}
  Max: ${this.max()}
  Range: ${this.range()}
  Mean: ${this.mean()}
  Median: ${this.median()}
  Mode: (${this.mode().mode}, ${this.mode().count})
  Variance: ${this.variance()}
  Standard Deviation: ${this.std()}
  Frequency Distribution: ${JSON.stringify(this.freqDist())}
      `;
    }
  }
  
// Sample data
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);
  
console.log(statistics.describe());
// output
/* Count: 25
Sum: 744
Min: 24
Max: 38
Range: 14
Mean: 29.76
Median: 29
Mode: (26, 5)
Variance: 17.5424
Standard Deviation: 4.188364836066696
Frequency Distribution: [[20,26],[16,27],[12,32],[8,24],[8,31],[8,33],[8,34],[8,37],[4,25],[4,29],[4,38]] */
  


