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

