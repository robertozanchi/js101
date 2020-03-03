// Question 5

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid(color) {
  return color === "blue" || color === "green";
}

function isColorValid(color) {
  return color === "blue" || color === "green" ? true : false;
}

const isColorValid = color => color === "blue" || color === "green";

const isColorValid = color => {
  return color === "blue" || color === "green";
};

const isColorValid = color => ["blue", "green"].includes(color);
