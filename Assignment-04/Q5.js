// Q5: Prototype inheritance, Person -> Student

function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  // Reuse the Person constructor to set name
  Person.call(this, name);
  this.branch = branch;
}

// Link Student's prototype to Person's prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

const student = new Student("Aarav", "Computer Science");

student.printName();   // inherited from Person.prototype
student.printBranch(); // defined on Student.prototype

// Demonstrate the prototype chain
console.log("student -> Student.prototype:", Object.getPrototypeOf(student) === Student.prototype);
console.log("Student.prototype -> Person.prototype:", Object.getPrototypeOf(Student.prototype) === Person.prototype);
console.log("student instanceof Student:", student instanceof Student);
console.log("student instanceof Person:", student instanceof Person);
