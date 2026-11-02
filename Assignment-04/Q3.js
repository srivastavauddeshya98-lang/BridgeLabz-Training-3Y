// Q3: Arrow function vs normal function and "this"

// Version 1: arrow function method (the problem)
const userArrow = {
  name: "Uddeshya",
  showName: () => {
    console.log("Arrow function:", this.name);
  },
};

userArrow.showName(); // undefined

/*
  Why is this.name undefined?
  An arrow function does not get its own "this". It uses the "this" of the
  place where it was written. Here that is the top level of the file, not the
  user object. In Node.js a module's top-level "this" is an empty object ({}),
  so this.name is undefined.
*/

// Version 2: normal function method (the fix)
const userNormal = {
  name: "Uddeshya",
  showName: function () {
    console.log("Normal function:", this.name);
  },
};

// A normal function gets "this" from the object that calls it
userNormal.showName(); // Uddeshya
