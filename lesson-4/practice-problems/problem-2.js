// Problem 2

// What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

// return statement missing from arrow function.
// So map return undefined or an empty array.

// LS solution:
// The callback returns undefined each time, so map returns:
// [ undefined, undefined, undefined ]

// To verify:
function test(num) {
  num * num;
}

console.log(test(2));
