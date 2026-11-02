// Q6: Prototype chain, Person -> Faculty -> Professor

function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function () {
  console.log(`Hi, I am ${this.name}.`);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () {
  console.log(`I work in the ${this.department} department.`);
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function () {
  console.log(`I teach ${this.subject}.`);
};

const prof = new Professor("Dr. Rao", "Computer Science", "Algorithms");

// One Professor object can reach every method up the chain
prof.introduce();       // from Person
prof.showDepartment();  // from Faculty
prof.teach();           // from Professor

console.log("prof instanceof Professor:", prof instanceof Professor);
console.log("prof instanceof Faculty:", prof instanceof Faculty);
console.log("prof instanceof Person:", prof instanceof Person);
