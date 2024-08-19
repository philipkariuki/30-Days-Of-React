// Q1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// Prompt the user to enter their age
let age = prompt("Enter your age:");

// Convert the input to a number
age = Number(age);

// Check if the user is 18 or older
if (age >= 18) {
    alert("You are old enough to drive");
} else {
    let yearsToWait = 18 - age;
    alert(`You need to wait ${yearsToWait} more year(s) to turn 18.`);
}

// Q2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 25
let yourAge = prompt("Enter your age:");

yourAge = Number(yourAge);

if (yourAge > myAge) {
    console.log("You are older than me.");
} else if (yourAge < myAge) {
    console.log("I am older than you.");
} else {
    console.log("We are the same age.");
}


// Q3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways using: i)if else
//                                                                                                                       ii)ternary operator
// i)Using if else
let a = 4
let b = 3

if (a > b) {
    console.log(`${a} is greater than ${b}`);  // 4 is greater than 3
} else if (a < b) {
    console.log(`${a} is less than ${b}`);
}

