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
