// Problem 11

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let arr2 = arr.map(obj => {
  newObj = {};
  Object.keys(obj).forEach(key => {
    newObj[key] = obj[key] + 1;
  });
  return newObj;
});

console.log(arr);
console.log(arr2);
