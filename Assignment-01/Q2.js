// Q2: Multi-Type Data Summary

// Variables of different data types
const userName = "Uddeshya";
const userAge = 22;
const isActive = true;
const skills = ["HTML", "CSS", "JavaScript"];
const address = { city: "Mathura", state: "Uttar Pradesh" };
const middleName = null;
let phoneNumber; // undefined

// typeof reports null as "object" and arrays as "object",
// so we check null and Array.isArray() first
const getType = (value) => {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
};

const entries = [
  ["userName", userName],
  ["userAge", userAge],
  ["isActive", isActive],
  ["skills", skills],
  ["address", address],
  ["middleName", middleName],
  ["phoneNumber", phoneNumber],
];

// One console.table() statement prints the whole report
console.table(
  entries.map(([label, value]) => ({
    Label: label,
    Value: JSON.stringify(value) ?? "undefined",
    Type: getType(value),
  }))
);
