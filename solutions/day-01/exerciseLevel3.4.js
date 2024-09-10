// Q1 Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratedByUser() {
    // Prompt the user for the number of characters and the number of IDs
    let numOfChars = prompt('Enter the number of characters for each ID:');
    let numOfIds = prompt('Enter the number of IDs to generate:');
    
    // Convert the inputs to integers
    numOfChars = parseInt(numOfChars);
    numOfIds = parseInt(numOfIds);
    
    // Characters to use for generating IDs
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    
    // Array to store the generated IDs
    let ids = [];
    
    // Generate the IDs
    for (let i = 0; i < numOfIds; i++) {
        let id = '';
        for (let j = 0; j < numOfChars; j++) {
            id += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        ids.push(id);
    }    
    
    console.log(ids);
}

userIdGeneratedByUser(); // Generates ids depending on no. of characters and no. of IDs set in the prompts eg 5, 3 will generate [ "LgoOc", "HpZnk", "5zvRw" ]



// Q2 Write a function generateColors which can generate any number of hexa or rgb colors

function generateColors(type, num) {
    let colors = [];
    for (let i = 0; i < num; i++) {  // for loop runs num times to generate the specified number of colors
        if (type === 'rgb') {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            colors.push(`rgb(${r}, ${g}, ${b})`);
        } else if (type === 'hexa') {
            let hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            colors.push(hex);
        } else {
            console.log('Invalid type. Please use "rgb" or "hexa".');
            return [];
        }
    }
    return colors;
}

// Example:
console.log(generateColors('rgb', 3)); // [ "rgb(77, 218, 174)", "rgb(26, 89, 125)", "rgb(4, 210, 168)" ]
console.log(generateColors('hexa', 5)); // [ "#f7a01a", "#25f708", "#fb464d", "#6f13e1", "#43ceac" ]

//  Q3 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {  // the for loop starts from the last element of the array and iterates backwards to the first element (i > 0)
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // the syntax is a shorthand for swapping values in javascript
    }
    return array;
}

// Example:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const shuffledArr = shuffleArray(arr)
console.log(shuffledArr)  // [ 7, 2, 3, 8, 9, 5, 6, 1, 4 ]


/* const j = Math.floor(Math.random() * (i + 1));
Why do we multiply the random number by (i + 1): Suppose i is 4. When you multiply the random number by (i + 1), which is 5, the result will be a random number between 0 and 5 (but less than 5) since the random number lies between 0(inclusive) and 1(exclusive)

Why (i + 1): If you just multiplied by i, the random number would be between 0 and 4 (but less than 4). By using (i + 1), you ensure the range is from 0 to just under i + 1, which means when you round down, you get a number between 0 and i.

So, multiplying by (i + 1) ensures that when you round down, you get a whole number that can be any value from 0 up to i. This way, the random index j is always within the range you need for each iteration of the loop. */


// Q4 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number


// The factorial function (symbol: !) says to multiply all whole numbers from our chosen number down to 1
// Formula is: n! = n × (n−1)!
// The factorial of any number is that number times the factorial of (that number minus 1)

function factorial(n) {
    if (n === 0) {   // 0! = 1
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)) // 120


// Q5 Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }
    if (typeof value === 'object') {  //the typeof operator in js returns a string indicating the type of the operand.When you use typeof value === 'object', it checks if the type of value is 'object'.
        return Object.keys(value).length === 0;  // If value is an object, the function checks if it has any own properties. If the object has no properties, it returns true
    }
    if (typeof value === 'string') {
        return value.trim().length === 0;  // If value is a string, the function trims any whitespace from the string and checks its length. If the trimmed string is empty, it returns true
    }
    if (Array.isArray(value)) {  // Array.isArray() method is used to determine if a given value is an array
        return value.length === 0; // If value is an array, the function checks its length. If the array is empty, it returns true
    }
    return false;
}

// Example usage:
console.log(isEmpty({})); // true
console.log(isEmpty([])); // true
console.log(isEmpty('')); // true
console.log(isEmpty()); // true
console.log(isEmpty('Hello')); // false
console.log(isEmpty({ name: 'John' })); // false


// Q6 Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(arr) {
    if (!Array.isArray(arr)) {
        return "Input is not an array.";
    }

    if (arr.length === 0) {
        return "Array is empty.";
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return "All items in the array must be numbers.";
        }
    }

    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}


console.log(average([1, 2, 3, 4, 5])); // 3
console.log(average([1, '2', 3])); // All items in the array must be numbers.
console.log(average([])); // Array is empty.
console.log(average('not an array')); // Input is not an array.
