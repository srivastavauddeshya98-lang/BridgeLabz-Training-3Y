// Q6: Event-Based Counter Simulation

let count = 0;

function increment() {
  count++;

  // Nested function: it can read and use count from the outer scope
  function logCount() {
    console.log(`Incremented -> count is now ${count}`);
  }
  logCount();
}

function decrement() {
  count--;

  function logCount() {
    console.log(`Decremented -> count is now ${count}`);
  }
  logCount();
}

// Simulate click events by calling the functions manually
console.log("Initial count:", count);
increment();
increment();
increment();
decrement();
increment();
decrement();
decrement();
console.log("Final count:", count);
