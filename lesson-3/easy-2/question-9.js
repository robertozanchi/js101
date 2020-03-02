// Question 9

// Write two one-line expressions to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log((statement1.match(/t/g) || []).length);
console.log((statement2.match(/t/g) || []).length);

/*
However, the && and || operators actually return the value of one of the specified operands,
 so if these operators are used with non-Boolean values, they will return a non-Boolean value.
*/
//console.log(statement2.match(/t/g).length);
