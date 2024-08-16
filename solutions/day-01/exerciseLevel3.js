const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

// Sort the array and find the min and max age
ages.sort(function(a, b){return a-b})
// or
ages.sort((a, b) => a - b)

const minAge = ages[0];
const maxAge = ages[ages.length - 1]

console.log("Sorted ages:", ages);  // Sorted ages:[ 19, 19, 20, 22, 24, 24, 24, 25, 25, 26 ]
console.log("Minimum age:", minAge);  // Minimum age: 19
console.log("Maximum age:", maxAge);  // Maximum age: 26

