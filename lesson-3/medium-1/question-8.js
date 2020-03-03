// Question 8

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

// After writing this function, he typed the following code:

messWithDemographics(munsters);

// Did the family's data get ransacked? Why or why not?

// No, the munsters object was not modified.
// Object.values() method returns an array of a given object's own enumerable property values

// SOLUTION: I was wrong. Changing the array of values returned by Object.values() transforms the object.
