// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
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
