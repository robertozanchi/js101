// Problem 7

// What is the return value of map in the following code? Why?

["ant", "bear"].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// The return of the callback function with "ant" is undefined. So:
// [undefined, "bear"]

function test(elem) {
  if (elem.length > 3) {
    return elem;
  }
}

console.log(test("ant"));
