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


