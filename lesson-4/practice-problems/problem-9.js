// Problem 9

// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sum = 0;

Object.values(ages).forEach(element => {
  sum += element;
});

console.log(sum);

// let totalAges = 0;
// Object.values(ages).forEach(age => (totalAges += age));
// totalAges;
