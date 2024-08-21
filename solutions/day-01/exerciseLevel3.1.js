// Q1     Write a program which tells the number of days in a month. 
//Enter a month: January
// January has 31 days.

function getDaysInMonth(month, year) {
    const daysInMonths = {
        January: 31,
        February: 28,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31
    };
    return daysInMonths[month];
}

function promptUserForMonth() {
    const monthInput = prompt("Enter a month:").toLowerCase();
    const month = monthInput.charAt(0).toUpperCase() + monthInput.slice(1);  // This retrieves the first character of the monthInput string,converts it to uppercase eg for input january, converts j to J, then slice retrieves the rest of the string starting from the second character eg anuary. The + operator is used to concatenate the uppercase first character with the rest of the string; so "J" + "anuary" results in "January"
    const year = new Date().getFullYear(); // You can modify this to prompt for a specific year if needed
    const days = getDaysInMonth(month, year);

    if (days) {
        alert(`${month} has ${days} days.`);
    } else {
        alert("Invalid month entered. Please try again.");
    }
}

promptUserForMonth();


