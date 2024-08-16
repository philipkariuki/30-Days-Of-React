const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

//Q1.1 Sort the array and find the min and max age
ages.sort(function(a, b){return a-b})
// or
ages.sort((a, b) => a - b)

const minAge = ages[0];
const maxAge = ages[ages.length - 1]

console.log("Sorted ages:", ages);  // Sorted ages:[ 19, 19, 20, 22, 24, 24, 24, 25, 25, 26 ]
console.log("Minimum age:", minAge);  // Minimum age: 19
console.log("Maximum age:", maxAge);  // Maximum age: 26

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];


// Q1.2 Find the median age(one middle item or two middle items divided by two)
// Sort the array in ascending order
ages.sort((a, b) => a - b);

// Find the median age
let median;
const mid = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {  // even array with 2 medians
  median = (ages[mid - 1] + ages[mid]) / 2;   // (median 1 + median 2)/2
} else {
  median = ages[mid];  // odd array
}

console.log("Median age:", median);  // Median age: 24
