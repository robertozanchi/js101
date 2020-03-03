// Question 1

// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return; // JS automatically inserts ; here and return; returns undefined.
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());

// first() returns an object
// second returns undefined or raises error because nothing on the return line
