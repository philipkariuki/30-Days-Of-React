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


