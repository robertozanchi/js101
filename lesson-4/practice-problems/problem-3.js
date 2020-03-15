// Problem 3

// The following code differs slightly from the above code.
// What is the return value of map in this case? Why?

[1, 2, 3].map(num => num * num);

// By using the  arrow form without {}, the callback function now returns
// the value of num * num instead of undefined.
