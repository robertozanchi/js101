// Problem 14

let obj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" }
};

// Return colors of the fruit and sizes of vegetables as follows:
//[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
console.log(Object.values(obj));

let finalArray = [];
Object.keys(obj).forEach(element => {
  if (obj[element]["type"] === "fruit") {
    let colors = obj[element]["colors"];
    let capitalizedColors = colors.map(color => {
      return color[0].toUpperCase() + color.slice(1);
    });
    finalArray.push(capitalizedColors);
  } else {
    finalArray.push(obj[element]["size"].toUpperCase());
  }
});

console.log(finalArray);

// // LS solution
// let capitalize = word => word[0].toUpperCase() + word.slice(1);

// let test = Object.values(obj).map(attributes => {
//   if (attributes["type"] === "fruit") {
//     return attributes["colors"].map(char => capitalize(char));
//   } else {
//     return attributes["size"].toUpperCase();
//   }
// // });

// console.log(test);
