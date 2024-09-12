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

