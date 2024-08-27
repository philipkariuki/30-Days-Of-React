const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


// Q1 Find the person who has many skills in the users object

let mostSkilledUser = null;
let maxSkills = 0;

for (const user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    mostSkilledUser = user;
  }
}

console.log(`The person with the most skills is ${mostSkilledUser} with ${maxSkills} skills.`)  // The person with the most skills is Asab with 8 skills.


/* let mostSkilledUser = null
Initializing `mostSkilledUser` to `null` serves a couple of purposes:
1. Initialization: It sets a starting value for `mostSkilledUser`. This is important because we need a variable to store the name of the user with the most skills as we iterate through the `users` object.

2. Type Safety: By initializing it to `null`, we ensure that `mostSkilledUser` is explicitly set to a known value that indicates it hasn't been assigned a user yet. This helps avoid potential issues if we try to use `mostSkilledUser` before it has been assigned a valid user name.

If we didn't initialize `mostSkilledUser`, it would be `undefined` by default, which could lead to confusion or errors in the code. Initializing it to `null` makes the code more readable and easier to debug.


let maxSkills = 0
The `maxSkills` variable is used to keep track of the highest number of skills any user has as we iterate through the `users` object. Here's why it's important:
1. Comparison: As we loop through each user, we compare the number of skills that user has with the current value of `maxSkills`. If the current user has more skills than the value stored in `maxSkills`, we update `maxSkills` to this new higher value.

2. Tracking: It helps us identify which user has the most skills. By keeping track of the maximum number of skills encountered so far, we can determine who the most skilled user is by the end of the loop.

- Initially, `maxSkills` is set to `0`.
- For each user, we check if their number of skills is greater than `maxSkills`.
- If it is, we update `maxSkills` to this new number and also update `mostSkilledUser` to the current user.

This way, by the end of the loop, `maxSkills` holds the highest number of skills, and `mostSkilledUser` holds the name of the user with the most skills.



The loop iterates through the users object using a for...in loop. This type of loop is specifically designed for iterating over the properties of an object. Here’s a breakdown of how it works in this context:

1. Initialization: The loop starts by initializing the variable `user` to the first property name in the `users` object. In this case, `user` will take on the values `'Alex'`, `'Asab'`, `'Brook'`, etc., one at a time.
2. Iteration: For each iteration, `user` is assigned the next property name in the `users` object. The loop continues until all properties have been iterated over.
3. Accessing Properties: Inside the loop, `users[user]` accesses the value associated with the current property name. For example, when `user` is `'Alex'`, `users[user]` is equivalent to `users['Alex']`, which gives us the object associated with Alex.
4. Condition Check: The `if` statement checks if the number of skills for the current user (`users[user].skills.length`) is greater than `maxSkills`.
5. Updating Variables: If the condition is true, `maxSkills` is updated to the current user's number of skills, and `mostSkilledUser` is updated to the current user's name.

This process ensures that by the end of the loop, `mostSkilledUser` holds the name of the user with the most skills, and `maxSkills` holds the highest number of skills found. */



// Q2 Count logged in users,count users having greater than equal to 50 points from the following object
// i) Count logged in users

let loggedInCount = 0;

for (let user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }
}

console.log(`Number of logged-in users: ${loggedInCount}`)  // Number of logged-in users: 2

// ii) Count users having greater than or equal to 50 points

let over50 = 0;

for (let user in users) {
  if (users[user].points>=50) {
    over50++;
  }
}

console.log(`Users having 50 points or more = ${over50}`)  // Users having 50 points or more = 3


// Q3 Find people who are MERN stack developers
// MERN : MongoDB, Express, React, and Node

let mernDevelopers = [];

for (let user in users) {
  const skills = users[user].skills;
  if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
    mernDevelopers.push(user);
  }
}

console.log(`MERN stack developers: ${mernDevelopers.join(', ')}`) // MERN stack developers: Asab, Paul

// Q4 Set your name in the users object without modifying the original users object

const newUser = {
    Peter: {
      email: 'peter@peter.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 28,
      isLoggedIn: true,
      points: 60
    }
  };
  
  const updatedUsers = { ...users, ...newUser };  //   The spread operator (...) allows you to expand elements of an iterable (like an array, string, or object) into individual elements. In this case, it's used to combine multiple objects(users and newUser) into one
  
console.log(updatedUsers)  // includes new user Peter


// Q5 Get all keys or properties of users object
const userKeys = Object.keys(users)

console.log(userKeys) // [ "Alex", "Asab", "Brook", "Daniel", "John", "Thomas", "Paul" ]

