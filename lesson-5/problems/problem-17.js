// Problem 17

let char = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let segments = [8, 4, 4, 4, 12];

let string = "";
for (let segment = 0; segment < segments.length; segment += 1) {
  for (let idx = 0; idx < segments[segment]; idx += 1) {
    let pos = Math.floor(Math.random() * char.length);
    string += char[pos];
  }

  if (segment < segments.length - 1) {
    string += "-";
  }
}

console.log(string);
