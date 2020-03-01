// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// Answer
function checkExclamation(string) {
  return string[string.length - 1] === "!";
}
console.log(checkExclamation(str1));
console.log(checkExclamation(str2));

// LS Answer
str1.endsWith("!");
