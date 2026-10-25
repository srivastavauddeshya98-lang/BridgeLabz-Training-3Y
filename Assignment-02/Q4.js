// Q4: Array Performance Analyzer

// Create 8 random scores between 30 and 100
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);

// Average using reduce()
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

// Students who passed (score >= 50) using filter()
const passedStudents = scores.filter((score) => score >= 50);

// Pass/Fail label for each score using map()
const results = scores.map((score) => (score >= 50 ? "Pass" : "Fail"));

console.log("===== Performance Summary =====");
console.log(`Scores         : ${scores.join(", ")}`);
console.log(`Results        : ${results.join(", ")}`);
console.log(`Highest score  : ${highest}`);
console.log(`Lowest score   : ${lowest}`);
console.log(`Average score  : ${average.toFixed(2)}`);
console.log(`Passed         : ${passedStudents.length} of ${scores.length}`);
