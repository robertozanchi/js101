function multiply(numbers, factor) {
  let multipliedNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    multipliedNums.push(currentNum * factor);

    counter += 1;
  }

  return multipliedNums;
}

// function multiply(numbers, multiplier) {
//   let multipliedNums = [];

//   for (let counter = 0; counter < numbers.length; counter += 1) {
//     let currentNumber = numbers[counter];
//     multipliedNums.push(currentNumber * multiplier);
//   }

//   return multipliedNums;
// }
