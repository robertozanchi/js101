// Problem 5

// What is the callback's return value in the following code?
// Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return (num = num * 2);
});

// Callbak returns result of num * 2 (it's an assigment)
// Every returns true because every num * 2 is truthy
