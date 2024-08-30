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
  