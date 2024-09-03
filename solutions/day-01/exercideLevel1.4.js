// Q1     Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full name

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

// Example usage:
console.log(fullName("Jina", "Lako")); // Jina Lako


// Q2 Declare a function addNumbers and it takes two two parameters and it returns the sum
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 3)); // 8

// shorter method using arrow functions
let addNumberz = (e,f) => e + f

console.log(addNumbers(3,4)); // 7


// Q3 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}


console.log(areaOfCircle(3)) // 28.274333882308138


// Q4 Temperature in °C can be converted to  °F using this formula:  °F = ( °C x 9/5) + 32. Write a function which convert  °C to  °F convertCelciusToFahrenheit
function convertCelciusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Example
let tempInCelsius = 37
let tempInFahrenheit = convertCelciusToFahrenheit(tempInCelsius)
console.log(`${tempInCelsius}°C is equal to ${tempInFahrenheit}°F`)  // 37°C is equal to 98.6°F
       //  or
console.log(convertCelciusToFahrenheit(37.8)) // 100.03999999999999


