// Problem 9

let arr = [
  ["b", "c", "a"],
  [2, 1, 3],
  ["blue", "black", "green"]
];

let arr2 = arr.map(element => {
  if (typeof element[0] === Number) {
    return element.slice().sort((a, b) => a - b);
  } else {
    return element.slice().sort();
  }
});

console.log(arr2);
