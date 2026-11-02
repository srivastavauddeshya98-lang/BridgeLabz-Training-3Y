// Q2: applyOperation with callback functions

// Applies the given operation to every number and returns a new array
function applyOperation(numbers, operation) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i]));
  }
  return result;
}

const numbers = [1, 2, 3, 4];

// Callback 1: double a number
const double = (n) => n * 2;
// Callback 2: square a number
const square = (n) => n * n;

console.log("Original:", numbers);
console.log("Doubled:", applyOperation(numbers, double));
console.log("Squared:", applyOperation(numbers, square));
