function test(array) {
  console.log(array);
  array.forEach(element => {
    console.log(element);
    array.shift();
    console.log(array);
  });
}

test([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
