// Q1: E-Commerce Product Manager

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Reduce the price by the given percentage
  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
  }

  // Return the product details as a formatted string
  getDetails() {
    return `ID: ${this.id} | ${this.name} | Rs. ${this.price.toFixed(2)} | ${this.category}`;
  }
}

// Store multiple products in an array
const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mouse", 599, "Accessories"),
  new Product(3, "Headphones", 2499, "Electronics"),
  new Product(4, "Notebook", 120, "Stationery"),
  new Product(5, "Backpack", 1799, "Fashion"),
];

console.log("All products:");
products.forEach((p) => console.log(p.getDetails()));

// Apply a 10% discount to the first product
products[0].applyDiscount(10);
console.log("\nAfter 10% discount on the laptop:");
console.log(products[0].getDetails());

// Show only products priced above 1000
console.log("\nProducts with price > 1000:");
products
  .filter((p) => p.price > 1000)
  .forEach((p) => console.log(p.getDetails()));
