// Question 7

let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5
};

// Create an array from this object that contains only two elements: Barney's name and Barney's number:

//Object.entries(flintstones).filter(pair => pair[0] === "Barney");

for (let [key, value] of Object.entries(flintstones)) {
  if (key === "Barney") {
    let array = [key, value];
    console.log(array);
  }
}
