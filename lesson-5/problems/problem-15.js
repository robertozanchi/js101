//Problem 15

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] }
];

/*
Algorithm
use filter on array
detect if object has all even numbers
  get list of list of values using Object.values()
  for each item in list, if it contains an odd number, 
    return false
  return true
*/

// let arr2 = arr.filter(obj => {
//   return Object.values(obj);
// });

function isAllEven(obj) {
  let value = true;
  Object.values(obj).forEach(array => {
    array.forEach(item => {
      if (item % 2 === 1) {
        value = false;
      }
    });
  });
  return value;
}

let arr2 = arr.filter(element => isAllEven(element));

console.log(arr2);

// //LS solution
// arr.filter(obj => {
//   return Object.values(obj).every(subArr => {
//     return subArr.every(num => num % 2 === 0);
//   });
// });
