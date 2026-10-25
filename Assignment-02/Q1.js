// Q1: Scope Conflict Resolver

// Global variable: accessible everywhere in the file
let bonus = 5000;

function calculateSalary() {
  // Local variables: exist only inside this function
  const salary = 40000;
  const isPermanent = true;

  let totalSalary = salary;

  // Add the global bonus only for permanent employees
  if (isPermanent) {
    totalSalary += bonus;
  }

  console.log(`Permanent: ${isPermanent} | Total salary: ${totalSalary}`);
}

function calculateContractSalary() {
  // A different local isPermanent, separate from the one above
  const salary = 40000;
  const isPermanent = false;

  let totalSalary = salary;

  if (isPermanent) {
    totalSalary += bonus;
  }

  console.log(`Permanent: ${isPermanent} | Total salary: ${totalSalary}`);
}

calculateSalary();
calculateContractSalary();

// Changing isPermanent only changes the local result.
// The global bonus is read, never modified, so it stays the same.
console.log(`Global bonus after both calls: ${bonus}`);

// Local variables are not visible outside their function
console.log(`typeof salary outside function: ${typeof salary}`);
