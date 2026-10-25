// Q6: Progressive Discount System

// Total purchase amount (in rupees)
const totalAmount = 6500;

let discountPercent;

// Pick the discount tier from highest to lowest
if (totalAmount >= 10000) {
  discountPercent = 25;
} else if (totalAmount >= 5000) {
  discountPercent = 15;
} else if (totalAmount >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

// Final price after discount, rounded to the nearest rupee
const finalPrice = Math.round(totalAmount - (totalAmount * discountPercent) / 100);

console.log(`Original total: ${totalAmount}`);
console.log(`Discount: ${discountPercent}%`);
console.log(`Final price: ${finalPrice}`);
