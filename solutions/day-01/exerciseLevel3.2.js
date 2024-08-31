// Q1 Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.


const personAccount = {
    firstName: 'Samueli',
    lastName: 'Musa',
    incomes: [
        { description: 'Salary', amount: 5000 },
        { description: 'Freelance', amount: 1500 }
    ],
    expenses: [
        { description: 'Rent', amount: 1000 },
        { description: 'Groceries', amount: 300 }
    ],

    totalIncome: function() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },  // reduce method is used to iterate over the incomes array. It accumulates the total income by summing up the amount of each income object. 
    // When a function is called as a method of an object, this refers to the object the method is called on ie the personAccount object.

    /* alternate way
        totalIncome: function() {
        return this.incomes.reduce(function(total, income) {
            return total + income.amount;
        }, 0);
    }, */
        
    totalExpense: function() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },

    accountInfo: function() {
        return `Name: ${this.firstName} ${this.lastName}\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}`;
    },

    addIncome: function(description, amount) {
        this.incomes.push({ description, amount });
    },// push is used to add a new element to the end of an array
    // { description, amount }: An object representing the new income,with the properties description and amount.
    // When you call addIncome with a description and an amount, it creates a new income object and adds it to the incomes array

    addExpense: function(description, amount) {
        this.expenses.push({ description, amount });
    },
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
    };
      
      
console.log(personAccount.accountInfo());
/* Name: Samueli Musa
Total Income: 6500
Total Expense: 1300 */
personAccount.addIncome('Bonus', 2000);
personAccount.addExpense('Utilities', 150);
console.log('Updated Account Info:', personAccount.accountInfo());
/* Updated Account Info: Name: Samueli Musa
Total Income: 8500
Total Expense: 1450 */
console.log('Account Balance:', personAccount.accountBalance());
// Account Balance: 7050


// Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
]


const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
]

// Q2 Imagine you are getting the above users collection from a MongoDB database. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account

function signUp(newUser) {
    // Check if the user already exists
    const userExists = users.some(user => user.email === newUser.email);  // .some() is an array method that checks if at least one element in the array passes the test implemented by the provided function.
    // Here, the arrow function is used as the test function for .some(). It checks if the email property of any user in the users array matches the email property of newUser.
  
    if (userExists) {
      return 'User already has an account';
    } else {
      // Add new user to the users collection
      users.push(newUser);
      return 'User successfully signed up';
    }
}

/*  alternative
function signUp(newUser) {
let userExists = false;                       // Here we initialize userExists to false
for (let i = 0; i < users.length; i++) {     // We loop through each user in the users array
    if (users[i].email === newUser.email) {   // If we find a user with the same email as newUser, we set userExists to true and break out of the loop
    userExists = true;
    break;
    }
}

if (userExists) {
    return 'User already has an account';
} else {      
    users.push(newUser);
    return 'User successfully signed up';
}
} */
  
// Example:
const newUser = {
_id: 'newId',
username: 'NewUser',
email: 'newuser@newuser.com',
password: 'newpassword',
createdAt: new Date().toLocaleString(),
isLoggedIn: false,
};

console.log(signUp(newUser)); // User successfully signed up
console.log(signUp(newUser)); // User already has an account



// Q3 Create a function called signIn which allows user to sign in to the application

function signIn(email, password) {
    // Find the user with the matching email and password
    const user = users.find(user => user.email === email && user.password === password);  // find method is used to search for a user in the users array whose email and password match the provided values
    // or 
    /*  let user = null;
        for (let i = 0; i < users.length; i++) {   // We loop through each user in the users array
        if (users[i].email === email && users[i].password === password) {  // Inside the loop we check if the current user’s email and password match the provided email and password
        user = users[i];  // If a match is found, we assign the current user to the user variable and break out of the loop
        break;
        }
    } */
  
    if (user) {
      user.isLoggedIn = true;   //  If a matching user is found, their isLoggedIn status is set to true
      return 'User successfully signed in';
    } else {
      return 'Invalid email or password';
    }
}
  
// Example:
console.log(signIn('alex@alex.com', '123123')); // User successfully signed in
console.log(signIn('alex@alex.com', 'wrongpassword123')); // Invalid email or password



// Q4 The products array has three elements and each of them has six properties. 
// a) Create a function called rateProduct which rates the product

function rateProduct(productId, userId, rating) {          // takes 3 parameters; productId, userId, rating)
    // Check if the rating is valid. Valid rating is any number between 1-10
    if (typeof rating !== 'number' || rating < 1 || rating > 10) {
      return 'Please input a valid rating between 1 and 10';
    }
  
    // Find the product by ID
    const product = products.find(product => product._id === productId);
    
  
    if (!product) {
      return 'Product not found';
    }
  
    // Check if the user has already rated the product
    const existingRating = product.ratings.find(r => r.userId === userId);
    // r is a parameter name used in the arrow function to represent each element in the ratings array as the find method iterates through it. You can think of r as a placeholder for each rating object in the ratings array.
    // .find(r => r.userId === userId): The find method iterates over each element in the ratings array, passing each element to the arrow function.
    // r: Represents the current rating object being processed in the ratings array.
    // r.userId === userId: Checks if the userId of the current rating object matches the provided userId

  
    if (existingRating) {
      // Update the existing rating
      existingRating.rate = rating;
    } else {
      // Add a new rating
      product.ratings.push({ userId, rate: rating });
    }
  
    return 'Product rated successfully';
  }
  
// Example:
console.log(rateProduct('eedfcf', 'ab12ex', 4)); // Output: 'Product rated successfully'
console.log(rateProduct('aegfal', 'fg12cy', 11)); // Output: 'Please input a valid rating between 1 and 10'
console.log(rateProduct('nonexistent', 'fg12cy', 5)); // Output: 'Product not found'
console.log(rateProduct('eedfcf', 'ab12ex', 'five')); // Output: 'Please input a valid rating between 1 and 10'


// b) Create a function called averageRating which calculates the average rating of a product

function averageRating(productId) {
    // Find the product by ID
    const product = products.find(product => product._id === productId);
  
    if (!product) {
      return 'Product not found';
    }
  
    // Check if the product has any ratings
    if (product.ratings.length === 0) {
      return 'No ratings for this product';
    }
  
    // Calculate the sum of all ratings
    const sum = product.ratings.reduce((acc, rating) => acc + rating.rate, 0);
    // acc is the accumulator, which accumulates the sum of the ratings. It starts with the initial value provided, in this case, 0
    // rating: This represents the current rating object being processed in the ratings array
    // acc + rating.rate: This adds the rate property of the current rating object to the accumulator
    // 0: is the initial value for the accumulator. The reduce method starts with this value and then adds each rating.rate to it

    // Initial Value: The accumulator (acc) starts at 0
    // First Iteration: The first rating object is processed, and its rate is added to the accumulator
    // If the first rating is { userId: 'fg12cy', rate: 5 }, then acc becomes 0 + 5 = 5
    // Second Iteration: The next rating object is processed, and its rate is added to the accumulator
    // If the second rating is { userId: 'zwf8md', rate: 4.5 }, then acc becomes 5 + 4.5 = 9.5
    // And so on: This process continues for all rating objects in the ratings array
    // The final value of acc after all iterations is the sum of all rate values in the ratings array
  
    // Calculate the average rating
    const average = sum / product.ratings.length;    // divides the sum by the number of ratings to get the average rating
  
    return average;
  }
  
// Example:
console.log(averageRating('eedfcf')); // 4.75
console.log(averageRating('aegfal')); // No ratings for this product
console.log(averageRating('hedfcg')); // 5
console.log(averageRating('nonexistent')); // Product not found


// c) Create a function called likeProduct. This function will help to like the product if it is not liked, and remove like if it was already liked

function likeProduct(productId, userId) {
    // Find the product by ID
    const product = products.find(product => product._id === productId);
  
    if (!product) {
      return 'Product not found';
    }
  
    // Check if the user has already liked the product
    const likeIndex = product.likes.indexOf(userId);  // The indexOf method searches the likes array for the specified userId and returns the index of the first occurrence. If the userId is not found, it returns -1
  
    if (likeIndex === -1) {  // If the userId is not found, likeIndex will be -1
      // User has not liked the product, so add the like
      product.likes.push(userId);    //  If the userId is not found, this line adds the userId to the likes array using the push method
      return 'Product liked successfully';
    } else {
      // User has already liked the product, so remove the like
      product.likes.splice(likeIndex, 1);  //  The splice method removes one element(represented by the 1 parameter) at the position likeIndex. This effectively removes the userId from the likes array, meaning the user is unliking the product
      return 'Product unliked successfully';
    }
  }
  
// Example:
console.log(likeProduct('eedfcf', 'ab12ex')); // Product liked successfully or Product unliked successfully
console.log(likeProduct('aegfal', 'fg12cy')); // Product liked successfully or Product unliked successfully
console.log(likeProduct('nonexistent', 'fg12cy')); // Product not found
