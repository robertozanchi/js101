// Improved "join"

/*
Problem
inputs:
- array
- separator
- optional, conjunction (default is "or")

output:
- a string with elements of array, separated by separator and conjunction before last element

Algorithm
- if 1 element, display "1"
- else, if 2 elements, display "1 or 2"
- else, if 3 or more elements, display "1, 2, and 3"
  - 
*/

function joinOr(array, separator = ", ", conjunction = "or") {
  let length = array.length;
  if (length === 0) {
    return "";
  }
  if (length === 1) {
    return `${array[0]}`;
  } else if (length === 2) {
    return `${array[0]} ${conjunction} ${array[1]}`;
  } else {
    return (
      array.slice(0, array.length - 1).join(separator) +
      ` ${conjunction} ${array[array.length - 1]}`
    );
  }
}

console.log(joinOr([1, 2])); // => "1 or 2"
console.log(joinOr([1, 2, 3])); // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], "; ")); // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ", ", "and")); // => "1, 2, and 3"
