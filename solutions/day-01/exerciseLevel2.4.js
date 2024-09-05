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








