// Problem 8

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Algorithm
/*
- Declare empty object obj = {}
- Loop through array: for idx in range 0, array.length -1
  -  for each value of idx, set obj[flintstones[idx]] = idx;
- Return obj
*/

let obj = {};

for (let idx = 0; idx < flintstones.length; idx += 1) {
  obj[flintstones[idx]] = idx;
}

console.log(obj);

// LS solution
let flintstonesObj = {};

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

flintstonesObj;
