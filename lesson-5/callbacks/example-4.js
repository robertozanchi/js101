// let myArr = [
//   [18, 7],
//   [3, 12]
// ].forEach(arr => {
//   return arr.map(num => {
//     if (num > 5) {
//       return console.log(num);
//     }
//   });
// });

[18, 7].map(num => {
  if (num > 5) {
    return console.log(num);
  }
});

[3, 12].map(num => {
  if (num > 5) {
    return console.log(num);
  }
});
// Returns [ undefined, undefined ]

//the first undefined it's because nothing is returned by the callback
// the second because return console.log(12) returns undefined
