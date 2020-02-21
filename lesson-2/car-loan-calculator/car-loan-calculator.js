// consider whether you want to support no-interest loans or loans that aren't for an integer number of years.

// START
// GET loan amount
// GET Annual Percentage Rate (APR) from user
// GET loan duration as number of months (or years?) from user
// SET monthly interest rate to APR / 12
// SET calculate m, the monthly payment, using the formula
// PRINT m
// PRINT number of months

const readline = require("readline-sync");
const MESSAGES = require("./loan_calculator_messages.json");
const LANGUAGE = "en";

function messages(message, lang = "en") {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE.toLowerCase()); // LANGUAGE.toLowerCase to deal with upper case argument e.g. "EN"
  console.log(`=> ${message}`);
}

function askLoanAmount() {
  prompt("askLoanAmount");
  let amount = Number(readline.question());
  // IF NOT A NUMBER ASK FOR A NUMBER

  // // optional: set minimum loan amount
  // while (amount < 1000) {
  //   prompt("warningMinLoan");
  //   amount = readline.question();
  // }
  console.log(typeof amount);
  return amount;
}

// welcome to cal loan calculator
prompt("welcome");

// ask for loan amount
let loanAmount = askLoanAmount();

//ask for interest rate
