// Q3: Monthly Expense Tracker

// Expenses for 5 categories (in rupees)
const expenses = [
  { category: "Food", amount: 6500 },
  { category: "Travel", amount: 3200 },
  { category: "Rent", amount: 15000 },
  { category: "Bills", amount: 2800 },
  { category: "Leisure", amount: 1800 },
];

// Add up all the expenses
let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i].amount;
}

// Average per category
const average = total / expenses.length;

// Add 10% tax to the total using assignment operators
let finalAmount = total;
finalAmount += total * 0.1;

console.log(`Total expenses: ${total.toFixed(2)}`);
console.log(`Average expense: ${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: ${finalAmount.toFixed(2)}`);
