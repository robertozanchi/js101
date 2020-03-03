// Question 2

// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

let final = "";

munstersDescription.split("").forEach(element => {
  if (element === element.toUpperCase()) {
    final = final + element.toLowerCase();
  } else {
    final = final + element.toUpperCase();
  }
});

console.log(final);

// munstersDescription
//   .split("")
//   .map(function(char) {
//     if (char === char.toUpperCase()) {
//       return char.toLowerCase();
//     } else {
//       return char.toUpperCase();
//     }
//   })
//   .join("");
