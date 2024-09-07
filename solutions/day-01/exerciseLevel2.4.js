// Q1 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation

// In ax2 + bx + c = 0    and  a ≠ 0; x is an unknown variable and a, b, c are are the constant terms, or the numerical coefficients/quadratic coefficients
// The important condition for an equation to be a quadratic equation is the coefficient of x2 is a non-zero term (a ≠ 0)
// a and b are coefficients of x, and c is the constant
// The solutions to the quadratic equation are the values of the unknown variable x, which satisfy the equation. These solutions are called roots or zeros of quadratic equations
// Quadratic equations have maximum of two solutions, which can be real or complex numbers. These two solutions (values of x) are also called the roots of the quadratic equations
/* The nature of roots of a quadratic equation can be found without actually finding the roots (α, β) of the equation. This is possible by taking the discriminant value, which is part of the formula to solve the quadratic equation. The value b2 - 4ac is called the discriminant of a quadratic equation and is designated as 'D'. Based on the discriminant value the nature of the roots of the quadratic equation can be predicted.
Based on the discriminant value the nature of the roots of the quadratic equation can be predicted.
Discriminant: D = b2 - 4ac
    D > 0, the roots are real and distinct
    D = 0, the roots are real and equal.
    D < 0, the roots do not exist or the roots are imaginary. */


function solveQuadEquation(a, b, c) {
    // Calculate the discriminant
    let discriminant = b * b - 4 * a * c;
    let root1, root2;

    // Check the nature of the roots
    if (discriminant > 0) {
        // Two distinct real roots
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `The roots are ${root1} and ${root2}`;
    } else if (discriminant === 0) {
        // One real root
        root1 = root2 = -b / (2 * a);
        return `The roots are ${root1} and ${root2}`;
    } else {
        // Complex roots
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        return `The roots are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`;
    }
}

// Example:
console.log(solveQuadEquation(1, -7, 12)); // The roots are 4 and 3
console.log(solveQuadEquation(1, -6, 9));  // The roots are 3 and 3
console.log(solveQuadEquation(1, -3, 10)); // The roots are 1.50 + 2.78i and 1.50 - 2.78i


// Q2 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let myArray = [1, 2, 3, 4, 5]
printArray(myArray)  // prints 1 - 5


// Q3 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    const now = new Date();  //  creates a new Date object to get the current date and time
    const year = now.getFullYear();  //  extract the year, month, day, hours, and minutes from the Date object
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based ie January=0  || To convert this zero-based month value to a more human-readable format (where January is 1, February is 2, etc.), we add 1 to the result of getMonth()
    const day = String(now.getDate()).padStart(2, '0');  // we use String().padStart(2, '0') to ensure that month, day, hours, and minutes values are always two digits.
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}`;  //  format the date and time as MM/DD/YYYY HH:MM
    console.log(formattedDateTime);
}


showDateTime();  // 09/05/2024 11:38



// Q4 Declare a function name swapValues. This function swaps value of x to y

function swapValues(x, y) {
    [x, y] = [y, x];  // Array Destructuring is used to swap variables. Destructuring assignment is a convenient way to extract values from arrays or properties from objects into distinct variables
    return [x, y];
}

swapValues(3,4)  // [4,3]
// or
let [x, y] = swapValues(3, 4);
console.log(`x=> ${x}, y=> ${y}`); // x=> 4, y=> 3



// Q5 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use the reverse method)

function reverseArray(array) {
    // Create a new array to store the reversed elements
    let reversedArray = [];
    
    for (let i = 0; i < array.length; i++) {
        reversedArray.unshift(array[i]);  // unshift method adds elements to the beginning of a new array. The loop will start adding new elements at the beginning of the array, from 1, then 2, then 3 etc, until 5 is at the beginning
    }
    
    return reversedArray;
}

let originalArray = [1, 2, 3, 4, 5];
let reversed = reverseArray(originalArray);
console.log(reversed); // [5, 4, 3, 2, 1]


// another method
function reverseArray(array) {
    // Create a new array to store the reversed elements
    let reversedArray = [];
    
    // Loop through the original array from the end to the beginning
    for (let i = array.length - 1; i >= 0; i--) {
        // Push each element to the new array
        reversedArray.push(array[i]);
    }
    
    // Return the new array
    return reversedArray;
}

let originlArray = [1, 2, 3, 4, 5];
let reversd = reverseArray(originlArray);
console.log(reversd); // [5, 4, 3, 2, 1]



// Q6 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(array) {
    return array.map(function(element) {  // map method creates a new array populated with the results of calling a provided function on every element
        return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();  // For each element in the array, the callback function(element) capitalizes the first letter and converts the rest to lowercase
    });
}

// Example:
const words = ['these', 'are', 'words'];
const capitalizedWords = capitalizeArray(words);
console.log(capitalizedWords); // ['These', 'Are', 'Words']



// Q7 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(item) {
    // Initialize an empty array
    let array = [];
    
    // Add the item to the array
    array.push(item);
    
    // Return the updated array
    return array;
}

console.log(addItem('apple')) // ['apple']


// Q8 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(n) {
    let evens = 0;
    let odds = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }

    return { evens, odds };  // returns an object with the counts of even and odd numbers
}

// Example
const result = evensAndOdds(101);
console.log(`The number of evens are ${result.evens}`);  // The number of evens are 50
console.log(`The number of odds are ${result.odds}`);  // The number of odds are 51



// Q9 Write a function which takes any number of arguments and return the sum of the arguments

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];   // += is the addition assignment operator
    }
    return total;
}

console.log(sum(5, 10, 15))  // 30

// or
function sum(...args) {   // the (...args) syntax allows the function to accept an indefinite number of arguments as an array 
    return args.reduce((acc, curr) => acc + curr, 0);  // acc: accumulator is the accumulated value. curr is the Current Value being processed in the array
}
console.log(sum(1, 2, 3, 4)) // 10



// Q10 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id

function userIdGenerator() {
    return Math.random().toString(36).substring(2, 9);  // toString(36) converts the randomly generated number to a base-36 string (which includes digits and letters ie [0-9,A-Z])
}  // Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)
   // substring(2, 9) extracts characters between two indices from a string and returns the substring. Since math.random() will generate figures such as 0.07514356187832741, we extract a substring of 7 characters starting from the third character(index 2) to ensure the ID is seven characters long

console.log(userIdGenerator()) // 9br799x



// Q11 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem(array, index) {
    return array.reduce(function(acc, item, i) {
        if (i !== index) {
            acc.push(item);  // if the current index i is not equal to the index parameter, the current item is added to the accumulator array acc
        }
        return acc;  // The reduce method returns the acc array, which is the original array minus the item at the specified index
    }, []);
}

let myarray= [1,2,3,5,7]
removeItem(myarray,2)  // [1,2,5,7]

