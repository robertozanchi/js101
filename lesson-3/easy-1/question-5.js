// Question 5

// What will the following code output?

console.log(false == "0"); // true. evaluates as true since they're both coerced to 0.

/*
Implicit Coercion with the == Operator

When a boolean is compared with any other value, it is coerced into a number and compared
 again using the == operator.
*/

console.log(false === "0"); // false
