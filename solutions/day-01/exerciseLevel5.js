const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Q1 Print the price of each product using forEach

products.forEach(itemm => {
  console.log(`The price of ${itemm.product} is ${itemm.price}`);
})

/* The price of banana is 3
The price of mango is 6
The price of potato is  
The price of avocado is 8
The price of coffee is 10
The price of tea is  */

// or in the case of an empty price
products.forEach(item => {
    if (typeof item.price === 'number' && !isNaN(item.price)) {
      console.log(`The price of ${item.product} is ${item.price}`);
    } else {
      console.log(`The price of ${item.product} is not available`);
    }
  })

/*   The price of banana is 3
  The price of mango is 6
  The price of potato is not available
  The price of avocado is 8
  The price of coffee is 10
  The price of tea is not available */

//Q2 Print the product items 

products.forEach(item => {
    if (typeof item.price === 'number' && !isNaN(item.price)) {
      console.log(`The price of ${item.product} is ${item.price} euros.`);
    } else {
      console.log(`The price of ${item.product} is unknown`);
    }
  })

/* The price of banana is 3 euros.
The price of mango is 6 euros.
The price of potato is unknown.
The price of avocado is 8 euros.
The price of coffee is 10 euros.
The price of tea is unknown. */

//Q3 Calculate the sum of all the prices using forEach

let sumOfPrices = 0;

products.forEach(item => {
  // Convert price to a number and add to sum if it's a valid number
  const price = parseFloat(item.price);
  if (!isNaN(price)) {  // (!isNaN(price)) returns true if price is a valid number and false if it is NaN
    sumOfPrices += price;
  }
});

console.log(sumOfPrices)  // 27

// Q4 Create an array of prices using map and store it in a variable prices

// We use the map method whenever we like to modify an array. We use the map method only with arrays and it always returns an array
// The Array.map() method creates a new array from the results of calling a function for every element.

const prices = products.map(item => item.price);
console.log(prices)  // [ 3, 6, " ", 8, 10, "" ]
// long form
const pricez = products.map(function(item) {
    return item.price;
  });
console.log(pricez) // [ 3, 6, " ", 8, 10, "" ]


// Q5 Filter products with prices

const validPrices = products
  .map(item => item.price)
  .filter(price => typeof price === 'number' && !isNaN(price));

console.log(validPrices) // [3, 6, 8, 10]


// Q6 Use method chaining to get the sum of the prices(map, filter, reduce)
// Method chaining in JavaScript is a programming technique that allows you to call multiple methods on the same object sequentially in a single statement

const total = products
  .map(item => item.price) // extract the prices
  .filter(price => typeof price === 'number' && !isNaN(price)) //  filter valid prices
  .reduce((sum, price) => sum + price, 0); // sum the filtered prices

console.log(total) // 27


// Q7 Calculate the sum of all the prices using reduce only

const total = products.reduce((sum, item) => {
  const price = parseFloat(item.price) || 0; // Convert price to a number, default to 0 if NaN
  return sum + price;
}, 0);

console.log(total); // 27


// Q8 Find the first product which doesn't have a price value

const firstProductWithoutPrice = products.find(item => !parseFloat(item.price) && item.price !== 0);
// parseFloat(item.price) attempts to convert the price to a floating-point number. 
// if parseFloat(item.price) can’t turn the price into a number (like if it’s an empty string or a non-numeric value), it returns NaN (Not-a-Number). The ! operator then turns NaN into true
// && item.price !== 0 makes sure the price is not exactly 0. If price is 0, parseFloat(item.price) would return 0, and !0 would be true, which we don’t want. So, we add item.price !== 0 to exclude 0 prices
// therefore (!parseFloat(item.price)) && item.price !== 0 checks if the price is either an empty string,a non-numeric value, or a string that cannot be converted to a number,but not exactly 0
// so firstProductWithoutPrice will be the first product in the array where the price is not a valid number or is an empty string, but not 0

console.log(firstProductWithoutPrice); // { product: "potato", price: " " }


// Q9 Find the index of the first product which does not have price value

const index = products.findIndex(item => item.price === '' || item.price === ' ' || item.price === undefined || item.price === null);
// checks for empty strings, spaces, undefined, and null values to determine if a product does not have a price.
// The findIndex method will return the index of the first product that meets this condition

console.log(index); // 2


// Q10 Check if some products do not have a price value

const hasMissingPrice = products.some(item => item.price === '' || item.price === ' ' || item.price === undefined || item.price === null);
// The some() method checks if any array elements pass a test (provided as a callback function). It executes the callback function once for each array element. The method returns true (and stops) if the function returns true for one of the array elements.
// In this case, it will return true because ‘potato’ and ‘tea’ do not have valid price values.

console.log(hasMissingPrice); // Output: true


// Q11 Check if all the products have price value

const allHavePrices = products.every(item => item.price !== '' && item.price !== ' ' && item.price !== undefined && item.price !== null);
// The every() method returns true if every element in an array pass a function test.
// It returns true if the function returns true for all elements, and false if the function returns false for one element.

console.log(allHavePrices); // Output: false


