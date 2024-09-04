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


// Q6 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer
function checkSeason(month) {
    if (month < 1 || month > 12) {
        return "Invalid month";
    }

    switch (month) {
        case 12:
        case 1:
        case 2:
            return "Winter";
        case 3:
        case 4:
        case 5:
            return "Spring";
        case 6:
        case 7:
        case 8:
            return "Summer";
        case 9:
        case 10:
        case 11:
            return "Autumn";
        default:
            return "Invalid month";
    }
}

console.log(checkSeason(3)) // Spring
console.log(checkSeason(7)) // Summer
console.log(checkSeason(10)) // Autumn
console.log(checkSeason(1)) // Winter

// alternative
function checkSeason(month) {
    if (month < 1 || month > 12) {
        return "Invalid month";
    }

    if (month === 12 || month === 1 || month === 2) {
        return "Winter";
    } else if (month === 3 || month === 4 || month === 5) {
        return "Spring";
    } else if (month === 6 || month === 7 || month === 8) {
        return "Summer";
    } else if (month === 9 || month === 10 || month === 11) {
        return "Autumn";
    } else {
        return "Invalid month";
    }
}

console.log(checkSeason(5)) // Spring
console.log(checkSeason(8)) // Summer
console.log(checkSeason(11)) // Autumn
console.log(checkSeason(12)) // Winter

