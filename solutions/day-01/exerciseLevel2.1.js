// Q1 Write a code which can give grades to students according to theirs scores:
//                          80-100, A
//                          70-89, B
//                          60-69, C
//                          50-59, D
//                          0-49, F

function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return 'A';
    } else if (score >= 70 && score < 80) {
        return 'B';
    } else if (score >= 60 && score < 70) {
        return 'C';
    } else if (score >= 50 && score < 60) {
        return 'D';
    } else if (score >= 0 && score < 50) {
        return 'F';
    } else {
        return 'Invalid score';
    }
}

let scores = [85, 72, 67, 54, 45];
let grades = scores.map(getGrade);
console.log(grades); // ['A', 'B', 'C', 'D', 'F']


// Q2     Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

function getSeason(month) {
    month = month.toLowerCase();
    if (["september", "october", "november"].includes(month)) {
        return "Autumn";
    } else if (["december", "january", "february"].includes(month)) {
        return "Winter";
    } else if (["march", "april", "may"].includes(month)) {
        return "Spring";
    } else if (["june", "july", "august"].includes(month)) {
        return "Summer";
    } else {
        return "Invalid month";
    }
} // Converting the input to lowercase ensures that the function can correctly identify the month regardless of how the user types it. For example, whether the user inputs “January”, “january”, or “JANUARY”, the function will treat them all the same.

let userMonth = prompt("Enter a month:");
alert("The season is " + getSeason(userMonth));


// Q3     Check if a day is weekend day or a working day. Your script will take day as an input:
// What is the day today? Saturday
// Saturday is a weekend

function checkDay() {
    const day = prompt("Please enter a day of the week (e.g., 'Monday', 'friday'):");
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = daysOfWeek.findIndex(d => d.toLowerCase() === day.toLowerCase());  // findIndex is a method that searches the array for an element that satisfies the provided testing function. It returns the index of the first element that matches the condition. If no element matches, it returns -1

    if (dayIndex === -1) {
        alert("Invalid day entered. Please try again.");
    } else {
        const dayName = daysOfWeek[dayIndex];
        alert(`${dayName} is a ${dayIndex === 0 || dayIndex === 6 ? 'weekend' : 'working day'}.`);  /*  ?'weekend': If the condition is true, the expression returns the string 'weekend'. : 'working day': If the condition is false (i.e., dayIndex is any value other than 0 or 6), the expression returns the string 'working day'. */
    }
}

checkDay();  // Tuesday is a working day.    or  Sunday is a weekend.  etc




















