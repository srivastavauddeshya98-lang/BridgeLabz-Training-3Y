// Q1: Callback flow with greetUser

// This function is passed in as the callback
function showEndMessage() {
  console.log("Welcome to the course!");
}

// greetUser runs its own work first, then calls the callback
function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback(); // callback runs AFTER the greeting
}

console.log("Start");
greetUser("Uddeshya", showEndMessage);
console.log("End");
