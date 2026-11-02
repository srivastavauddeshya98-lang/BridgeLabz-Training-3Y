// Q6: Employee Management System

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  // Annual salary = monthly salary x 12
  getAnnualSalary() {
    return this.salary * 12;
  }

  // Increase the monthly salary by the given percentage
  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

// Five employee objects
const employees = [
  new Employee(1, "Aarav", "HR", 30000),
  new Employee(2, "Meera", "Finance", 45000),
  new Employee(3, "Kabir", "Tech", 60000),
  new Employee(4, "Isha", "Support", 28000),
  new Employee(5, "Rohan", "Tech", 55000),
];

console.log("Annual salaries:");
employees.forEach((e) => {
  console.log(`${e.name} (${e.department}): Rs. ${e.getAnnualSalary()}`);
});

// reduce() adds up every annual salary
const totalPayout = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log(`\nTotal annual payout: Rs. ${totalPayout}`);

// Give the Tech employees a 10% bonus and recalculate
console.log("\nAfter a 10% bonus for the Tech department:");
employees
  .filter((e) => e.department === "Tech")
  .forEach((e) => e.applyBonus(10));

employees.forEach((e) => {
  console.log(`${e.name} (${e.department}): Rs. ${e.getAnnualSalary()}`);
});

const newTotal = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log(`\nNew total annual payout: Rs. ${newTotal}`);
