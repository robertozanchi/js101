// Problem 16

let arr = [
  ["a", 1],
  ["b", "two"],
  ["sea", { c: 3 }],
  ["D", ["a", "b", "c"]]
];

let obj = {};
arr.forEach(element => {
  obj[element[0]] = element[1];
});

console.log(obj);

// // LS solution
// let obj = {};
// arr.forEach(subarray => {
//   let key = subarray[0];
//   let value = subarray[1];

//   obj[key] = value;
// });

// obj;
