// Problem 10

let arr = [
  ["b", "c", "a"],
  [2, 1, 3],
  ["blue", "black", "green"]
];

let arr2 = arr.map(element => {
  if (typeof element[0] === "number") {
    return element.slice().sort((a, b) => b - a);
  } else {
    return element.slice().sort((a, b) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
  }
});

console.log(arr2);
