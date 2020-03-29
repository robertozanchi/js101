// Problem 13
// sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3]
];

console.log(arr);

function sumOdds(array) {
  let sum = 0;
  array.forEach(element => {
    if (element % 2 === 1) {
      sum += element;
    }
  });
  return sum;
}

arr.sort((a, b) => sumOdds(a) - sumOdds(b));

console.log(arr);

arr.sort((a, b) => {
  let oddSumA = a
    .filter(num => num % 2 === 1)
    .reduce((sum, next) => sum + next);
  let oddSumB = b
    .filter(num => num % 2 === 1)
    .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});
