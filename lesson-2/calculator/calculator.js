// Refactored calculator program with bonus features

const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");
const LANGUAGE = "en";

function prompt(key) {
  let message = messages(key, LANGUAGE.toLowerCase()); // LANGUAGE.toLowerCase to deal with upper case argument e.g. "EN"
  console.log(`=> ${message}`);
}

function askForNumber(requestedNum) {
  prompt(requestedNum);
  let number = readline.question();
  while (invalidNumber(number)) {
    prompt("invalidNumber");
    number = readline.question();
  }
  return number;
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function isValidOperation(operation) {
  return ["1", "2", "3", "4"].includes(operation);
}

function isDivisionByZero(number, operation) {
  return Number(number) === 0 && operation === "4";
}

function executeOperation(operation, number1, number2) {
  let output;
  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }
  return output;
}

function messages(message, lang = "en") {
  return MESSAGES[lang][message];
}

// welcome to calculator
prompt("welcome");

while (true) {
  // ask for two numbers
  let number1 = askForNumber("askFirst");
  let number2 = askForNumber("askSecond");

  // ask for operation
  prompt("askOperation");
  let operation = readline.question();

  // check that operation is valid
  while (!isValidOperation(operation)) {
    prompt("selectOperation");
    operation = readline.question();
  }

  // check for division by zero and display output
  if (isDivisionByZero(number2, operation)) {
    prompt("infinityWarning");
  } else {
    let output = executeOperation(operation, number1, number2);
    prompt("displayResult");
    console.log(output.toString());
  }

  // ask about new operation
  prompt("askNewOperation");
  let answer = readline.question();
  if (answer[0].toLowerCase() !== messages("yes", LANGUAGE)) {
    prompt("thanks");
    break;
  }
}
