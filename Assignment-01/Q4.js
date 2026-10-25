// Q4: Academic Performance Evaluator

// Marks of 5 subjects (each out of 100)
const marks = [78, 85, 92, 67, 88];

// Total, average and percentage
let totalMarks = 0;
let hasFailedSubject = false;

for (let i = 0; i < marks.length; i++) {
  totalMarks += marks[i];
  // Validation: any subject below 35 means automatic detention
  if (marks[i] < 35) {
    hasFailedSubject = true;
  }
}

const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

// Decide the result using logical operators
if (hasFailedSubject) {
  console.log("Detained (scored below 35 in a subject)");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
  console.log("Promoted");
} else {
  console.log("Detained");
}
