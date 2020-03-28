// Problem 5

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

let ageTotal = 0;
let keys = Object.keys(munsters);
keys.forEach(element => {
  if (munsters[element]["gender"] === "male") {
    ageTotal += munsters[element]["age"];
  }
});

console.log(ageTotal);
