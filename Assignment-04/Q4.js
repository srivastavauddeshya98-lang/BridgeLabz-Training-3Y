// Q4: Constructor function with a prototype method

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// Stored once on the prototype and shared by every Car object
Car.prototype.getDetails = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();

// Prove the method is shared, not copied
console.log("Same method shared?", car1.getDetails === car2.getDetails); // true
console.log("Own property on car1?", car1.hasOwnProperty("getDetails")); // false
