// 1. Declare an empty array

let arey = []
console.log(arey)

// 2. Declare an array with more than 5 number of elements
let arey = [
    'word',
    true,
    3,
    4,
    5,
    {firstName:'James', secondName: 'Paul'},
    {properties: ['car','bike']},
]

// 3. Find the length of your array
let areyLength = arey.length 
console.log(areyLength) // 7

// 4. Get the first item, the middle item and the last item of the array
// i) Getting first item

let firstItem = arey[0]
console.log(firstItem)  // word


// ii) Getting last item

let lastItem = arey.length - 1
let thelastItem = arey[lastItem]
console.log(thelastItem)


// iii) Getting middle item

// For odd number of array elements eg 5
let oddArray = [1,2,3,4,5]  // formula to find middle item is n+1/2 where n is size of the array
let oddMiddleNumber = Math.floor((oddArray.length+1)/2)
console.log(oddMiddleNumber)  // 3
// or
let oddMiddle = (oddArray.length+1)/2 
console.log(oddMiddle)  // 3

// For even number of array elements eg 8  ----> will have 2 elements since it's even
let evenArray = [1,2,3,4,5,6,7,8]
let firstNumber = (evenArray.length/2)-1  // 3 which is the index of element '4' ie [3]=4
let secondNumber = evenArray.length/2   // 4 which is the index of element '5' ie [4]=5

const middleNumbers = [evenArray[firstNumber],evenArray[secondNumber]]
console.log(middleNumbers)   // [4,5]


// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
    'word',
    true,
    3,
    4,
    5,
    {firstName:'James', secondName: 'Paul'},
    {properties: ['car','bike']},
]

console.log(mixedDataTypes.length)


