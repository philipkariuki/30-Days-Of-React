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
let oddArray = [1,2,7,4,5]
let oddMiddleNumberIndex = Math.floor((oddArray.length)/2)  // 2
let oddMiddleNumber = oddArray[oddMiddleNumberIndex]  // value of index 2
console.log(oddMiddleNumber)  // 7
// or
let oddMiddleN = Math.floor((oddArray.length)/2)
console.log(oddArray[oddMiddleN])  // 7

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
let middleCompany = itCompanies[middleCompanyIndex]  // value of middle index
console.log(middleCompany)   // Apple

// 10. Print out each company

// Solution 1
itCompanies.forEach(function(company){
    console.log(company);
})

// Solution 2
for (let index = 0; index < itCompanies.length; index++) {
    const kampuni = itCompanies[index];
    console.log(kampuni);
    
}
// or
function printkampuni() {
    for (let index = 0; index < itCompanies.length; index++) {
        const kampuni = itCompanies[index];
        console.log(kampuni);
    }
}
printkampuni()

// Solution 3
function printCompanies() {
    for (let index = 0; index < itCompanies.length; index++) {
        console.log(itCompanies[index]);
    }
}

printCompanies()

// 11. Change each company name to uppercase one by one and print them out
for (const kampuni of itCompanies) {
    console.log(kampuni.toUpperCase())
  }

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

let sentence = itCompanies.slice(0, -1).join(', ') + ' and ' + itCompanies.slice(-1) + ' are big IT companies.'
console.log(sentence)  // Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.

// 13. Check if a certain company exists in the itCompanies array. If it exists return the company else return a company is not found
function checkCompany(company) {
    if (itCompanies.includes(company)) {
        return company;
    } else {
        return 'Company is not found';
    }
}

console.log(checkCompany('IBM'))  // IBM
console.log(checkCompany('ibm'))  // Company is not found
console.log(checkCompany('Tesla'));  // Company is not found

// 14. Filter out companies which have more than one 'o' without the filter method
let filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
  let companyName = itCompanies[i];
  let count = 0;
  for (let j = 0; j < companyName.length; j++) {
    if (companyName[j] === 'o') {
      count++;
    }
  }
  if (count <= 1) {
    filteredCompanies.push(itCompanies[i]);
  }
}
console.log(filteredCompanies); // Output: [ "Apple", "IBM", "Oracle", "Amazon" ]

// 15. Sort the array using sort() method
let sortedCompanies = itCompanies.sort()  // sort: arranges array elements in ascending order
console.log(sortedCompanies)  // [ "Amazon", "Apple", "Facebook", "Google", "IBM", "Microsoft", "Oracle" ]

// 16. Reverse the array using reverse() method
let reversedCompanies = itCompanies.reverse()  // reverses the order of an array
console.log(reversedCompanies) // [ "Amazon", "Oracle", "IBM", "Apple", "Microsoft", "Google", "Facebook" ]

// 17. Slice out the first 3 companies from the array
const firstThreeCompanies = itCompanies.slice(0, 3);
console.log(firstThreeCompanies); // Output: ['Facebook', 'Google', 'Microsoft']

// 18. Slice out the last 3 companies from the array
const lastThreeCompanies = itCompanies.slice(-3);
console.log(lastThreeCompanies); // Output: ['IBM', 'Oracle', 'Amazon']

// 19. Slice out the middle IT company or companies from the array
const middleCompanyIndex = Math.floor(itCompanies.length/2)
const middleCompany = itCompanies[middleCompanyIndex].slice()
console.log(middleCompany)   // Apple

// 20. Remove the first IT company from the array
itCompanies.shift()  // shift removes first item from the beginning
console.log(itCompanies)  // [ "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ]

// 21. Remove the middle IT company or companies from the array

// Splice takes three parameters:Starting position, number of times to be removed and number of items to be added
let middleCompanyIndex = Math.floor(itCompanies.length/2)
itCompanies.splice(middleCompanyIndex, 1) // takes 2 parameters; the middle index and no. of times to remove it
console.log(itCompanies)  // [ "Facebook", "Google", "Microsoft", "IBM", "Oracle", "Amazon" ]

// 22. Remove the last IT company from the array
let lastCompanyIndex = itCompanies.length -1
itCompanies.splice(lastCompanyIndex,1)  // Amazon
console.log(itCompanies)  // ['Facebook','Google','Microsoft','Apple','IBM','Oracle']

// 23. Remove all IT companies
console.log(itCompanies.splice()) // []

