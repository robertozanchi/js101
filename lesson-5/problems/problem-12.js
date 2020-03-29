// Problem 12

// return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let arr2 = arr.map(element => {
  let newArr = [];
  element.forEach(element => {
    if (element % 3 === 0) {
      newArr.push(element);
    }
  });
  return newArr;
});

console.log(arr2);

// arr.map(subArr => {
//   return subArr.filter(num => num % 3 === 0);
// });
