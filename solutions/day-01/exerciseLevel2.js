let sentensiString = 'Hii ni mfano ya sentensi. Kiswahili kinatumika nchini Kenya, Tanzania, Uganda'
console.log(sentensiString)  // Hii ni mfano ya sentensi. Kiswahili kinatumika nchini Kenya, Tanzania, Uganda
console.log(sentensiString.length) // 77

// First remove all the punctuations and change the string to array and count the number of words in the array
let sentensiArray = ['Hii', 'ni', 'mfano', 'ya', 'sentensi', 'Kiswahili', 'kinatumika', 'nchini', 'Kenya', 'Tanzania', 'Uganda']
console.log(sentensiArray)  // [ "Hii", "ni", "mfano", "ya", "sentensi", "Kiswahili", "kinatumika", "nchini", "Kenya", "Tanzania", "Uganda"]
console.log(sentensiArray.length)  //  11


// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// Add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.splice(0,0, 'Meat') // use splice to add items in this case,first 0 is index position 0, second 0 means number of times to delete, 'Meat' is the item being inserted at index 0
console.log(shoppingCart)  // [ "Meat", "Milk", "Coffee", "Tea", "Honey" ]
 
// or(easier method)
shoppingCart.unshift('Meat')  // unshift inserts new element at start of array
console.log(shoppingCart)  //  [ "Meat", "Milk", "Coffee", "Tea", "Honey" ]


// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.splice(shoppingCart.length,0,'Sugar')
console.log(shoppingCart)  // [ "Meat", "Milk", "Coffee", "Tea", "Sugar", "Honey", "Sugar" ]
// or(easier method)
shoppingCart.push('Sugar');  // .push method adds new items to the end of an array
console.log(shoppingCart);  // [ "Meat", "Milk", "Coffee", "Tea", "Sugar", "Honey", "Sugar" ]


// remove 'Honey' if you are allergic to honey
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
const indx = shoppingCart.indexOf('Honey');   // shoppingCart.indexOf('Honey') returns the index of the first occurrence of ‘Honey’ in the array. If ‘Honey’ is not found, it returns -1.

if (indx !== -1) {   // checks if the index is not equal to -1. This means ‘Honey’ is present in the array
  shoppingCart.splice(indx, 1);
}
console.log(shoppingCart); // ['Milk', 'Coffee', 'Tea', 'Sugar']


// modify Tea to 'Green Tea'
const index = shoppingCart.indexOf('Tea');

if (index !== -1) {
  shoppingCart[index] = 'Green Tea';
}

console.log(shoppingCart);  // [ "Milk", "Coffee", "Green Tea", "Honey" ]





