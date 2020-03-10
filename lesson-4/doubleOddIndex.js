function doubleOddIndex(numbers) {
  let doubledNums = [];

  for (let idx in numbers) {
    if (idx % 2 === 1) {
      doubledNums.push(numbers[idx] * 2);
    } else {
      doubledNums.push(numbers[idx]);
    }
  }

  console.log(doubledNums);
  return doubledNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleOddIndex(myNumbers); // => [ 1, 8, 3, 14, 2, 12 ]

// not mutated
myNumbers; // => [1, 4, 3, 7, 2, 6]
