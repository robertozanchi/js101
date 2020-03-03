// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*
For object references (and not the actual object), slice copies object references
 into the new array. Both the original and new array refer to the same object. If
  a referenced object changes, the changes are visible to both the new and original arrays.

For strings, numbers and booleans (not String, Number and Boolean objects), slice copies
 the values into the new array. Changes to the string, number, or boolean in one array do
  not affect the other array.
*/

// Since slice creates a shallow copy, the object referenced with arr1[0] will be modified.
