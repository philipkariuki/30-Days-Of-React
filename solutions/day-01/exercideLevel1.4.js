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

// using arrow function
let areaOfCircle = radius => Math.PI * radius * radius
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

// using arrow function
const convertCelciusToFahrenheit = celsius => (celsius * 9/5) + 32
console.log(convertCelciusToFahrenheit(37.8))   // 100.03999999999999

// rounded off
const convertCelciusToFahrenheits = celsius => Math.round(celsius * 9/5) + 32
console.log(convertCelciusToFahrenheit(37.8))   // 100


// Q5     Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    // The same groups apply to both men and women.
    // Underweight: BMI is less than 18.5
    // Normal weight: BMI is 18.5 to 24.9
    // Overweight: BMI is 25 to 29.9
    // Obese: BMI is 30 or more

/
// i) Write a function which calculates bmi
function bmi(weight,height){
    return weight/(height*height)
  }
console.log(bmi(72,1.76))  // 23.243801652892564

// ii) Function to determine bmi category
function checkBmi(w,h){
    let fullBmi = w/(h*h)
    let bmi = fullBmi.toFixed(2)  // truncates to 2 decimal places
    const underweight = bmi < 18.5
    const normalweight = bmi >= 18.5 && bmi <= 24.9
    const overweight = bmi >= 25 && bmi <= 29.9
    const obese = bmi >= 30

    if (underweight) {
        console.log(`Your bmi of ${bmi} is underweight ` )
    }
    else if (normalweight) {
        console.log(`Your bmi of ${bmi} is normal weight ` )
    }
    else if (overweight) {
        return { bmi, category: 'overweight' }
    }
    else if (obese) {
        console.log(`Your bmi of ${bmi} is obese ` )
    }
  }

console.log(checkBmi(70,1.77))  // Your bmi of 22.34 is normal weight
console.log(checkBmi(85,1.8))  //  { bmi: "26.23", category: "overweight" }


