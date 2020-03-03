// Question 6

// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// I guess false but not sure why.

// Solution
// JavaScript doesn't let you use == and === to determine whether a value is NaN.
// To test whether the value is NaN, we use the isNaN() function:
// isNaN(nanArray[0]) => true
