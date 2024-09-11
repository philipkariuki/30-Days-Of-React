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

