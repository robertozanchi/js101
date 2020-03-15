// Problem 11

// Create an object that expresses the frequency
// with which each letter occurs in this string:

let statement = "The Flintstones Rock";

let obj = {};

for (let idx = 0; idx < statement.length; idx += 1) {
  let letter = statement[idx];

  if (letter === " ") {
    continue;
  }

  if (Object.keys(obj).includes(letter)) {
    obj[letter] += 1;
  } else {
    obj[letter] = 1;
  }
}

console.log(obj);

// LS solution
// let charsInStatement = statement.split("").filter(char => char !== " ");
// let result = {};

// charsInStatement.forEach(char => {
//   result[char] = result[char] || 0;
//   result[char] += 1;
// });

// result;
