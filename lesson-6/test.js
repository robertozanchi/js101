// while (true) {
//   let a = 0;

//   while (true) {
//     a += 1;
//     if (a === 5) break;
//   }
//   console.log(a);
//   break;
// }

let a = 0;

// function add(num) {
//   num += 1;
//   console.log(num);
// }
// add(a);
// console.log(a);

let b = function() {
  a += 1;
  console.log(a);
};

b();
console.log(a);
