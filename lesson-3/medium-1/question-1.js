// Question 1

let title = "The Flintstones Rock!";

for (let padding = 0; padding < 10; padding += 1) {
  console.log(title.padStart(padding + title.length));
}

for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}
