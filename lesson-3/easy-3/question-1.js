// Question 1

// Write four different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

while (numbers.length > 0) {
  numbers.pop();
}

while (numbers.length > 0) {
  numbers.shift();
}

numbers.splice(0, numbers.length);

// Additionally:
numbers = []; // won't work if numbers declared with const.

numbers.length = 0;
