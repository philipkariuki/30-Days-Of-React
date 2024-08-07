
// An array is a list of data values in a square bracket
// Array values are referenced by their index. In JavaScript array index starts at zero.
// It is very common to use const instead of let to declare an array variable. If you are using const it means you do not use that variable name again.

// creating an empty array using array constructor
const mtu = Array()
// or
let mtu = new Array()
console.log(mtu)  // []

// creating an empty array using square brackets
const mtu = []
console.log(mtu)  // []


// How to create an array with values

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products

// Print the array and its length
console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)  // Number of numbers: 6

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)  // Number of fruits: 4

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

// Arrays can have items of different data types

const vituMingi = [
  'Nokia',
  20000,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { features: ['Android 12', 'Gmail', '5000 mah battery'] },
]
console.log(vituMingi)

const phones = [
    'Android',
    12,
    true,
    { Brand: 'Nokia', Model: '208' },
    {features: ['black','5000mAh','super']},
    ]
 console.log(phones)
 