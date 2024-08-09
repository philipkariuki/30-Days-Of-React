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

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']

// 7. Print the array using console.log()
console.log(itCompanies)  // [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ]

// 8. Print the number of companies in the array
let numberOfCompanies = itCompanies.length
console.log(numberOfCompanies)  // 7

// 9. Print the first company, middle and last company
// First company
let firstCompany = itCompanies[0]
console.log(firstCompany)  // Facebook

// Last Company
let lastCompanyIndex = itCompanies.length -1
let lastCompany = itCompanies[lastCompanyIndex]
console.log(lastCompany)  // Amazon

// Middle Company
let middleCompanyIndex = Math.floor(itCompanies.length/2)  // gets array length,divides by 2,rounds down,gives index value of middle element
let middleCompany = itCompanies[middleCompany]  // value of middle index
console.log(middleCompany)   // Apple

