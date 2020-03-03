// Question 7

// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// logs to console 34 (result of 42 - 8).
// somenumber passes a copy of answer variable

// "When you pass primitive values to functions, you can treat JavaScript like pass by value."
