// Problem 8

/*
Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.
*/

let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"]
};

let lists = Object.values(obj);
lists.forEach(list => {
  list.forEach(string => {
    string.split("").forEach(element => {
      if ("aeiou".includes(element)) {
        console.log(element);
      }
    });
  });
});

let vowels = "aeiou";

// Object.values(obj).forEach(arr => {
//   arr.forEach(word => {
//     word.split('').forEach(char => {
//       if (vowels.includes(char)) {
//         console.log(char);
//       }
//     });
//   });
// });
