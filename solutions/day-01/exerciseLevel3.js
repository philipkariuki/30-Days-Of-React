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
const mid = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {  // even array with 2 medians
  median = (ages[mid - 1] + ages[mid]) / 2;   // (median 1 + median 2)/2
} else {
  median = ages[mid];  // odd array
}

console.log("Median age:", median);  // Median age: 24

// Q1.3 Find the average age
const total = ages.reduce((sum, age) => sum + age, 0); // reduce method is used to sum up all the ages
const average = total / ages.length;  // divides the total by the length of the array to get the average
console.log(average); // Output: 22.8

// 1. The `reduce` method is used to iterate over the array and accumulate a single value from its elements. It takes a callback function and an initial value as arguments.

// 2. The callback function, in this case (sum, age) => sum + age, is executed for each element in the array. It has two parameters:
//    - sum: This is the accumulator that holds the accumulated value from the previous iterations.
//    - age: This is the current element being processed in the array.

// 3. Accumulation: For each element in the array, the callback function adds the current `age` to the `sum`. This process continues for all elements in the array.

// 4. Initial Value: The second argument to `reduce` is `0`, which is the initial value of `sum`. This means the accumulation starts from `0`.

// So, the `reduce` method iterates over the `ages` array, adding each `age` to the `sum`, and finally returns the total sum of all ages in the array. This total is then assigned to the `total` variable.



