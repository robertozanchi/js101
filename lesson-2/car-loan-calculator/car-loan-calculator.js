const readline = require("readline-sync");
const MESSAGES = require("./loan_calculator_messages.json");
const LANGUAGE = "en";

function messages(message, lang = "en") {
  return MESSAGES[lang.toLowerCase()][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function displayMoney(value, currency) {
  console.log(`=> The selected loan amount is ${currency}${value}.`);
}

function displayInterest(rate) {
  console.log(`=> The selected APR is ${rate}%.`);
}

function displayMonths(number) {
  console.log(`=> The selected loan duration is ${number} months.`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function askLoanAmount() {
  let amount = readline.question();
  while (invalidNumber(amount)) {
    prompt("askValidNumber");
    amount = readline.question();
  }
  while (amount < 1000) {
    prompt("warningMinLoan");
    amount = readline.question();
  }
  amount = Math.round(parseFloat(amount));
  return amount;
}

function askInterestRate() {
  let rate = readline.question();
  while (invalidNumber(rate)) {
    prompt("askValidNumber");
    rate = readline.question();
  }
  while (rate < 0) {
    prompt("warningMinRate");
    rate = readline.question();
  }
  rate = parseFloat(rate);
  return rate;
}

function getLoanDuration() {
  let months = readline.question();
  while (invalidNumber(months)) {
    prompt("askValidMonths");
    months = readline.question();
  }
  while (months < 1) {
    prompt("askValidMonths");
    months = readline.question();
  }
  months = parseInt(months, 10);
  return months;
}

function calculatePayment(amount, rate, duration) {
  let payment = amount * (rate / (1 - Math.pow(1 + rate, -duration)));
  return parseInt(payment, 10);
}

prompt("welcome");

prompt("askLoanAmount");
let loanAmount = askLoanAmount();
displayMoney(loanAmount, messages("USD"));

prompt("askInterestRate");
let interestRate = askInterestRate();
displayInterest(interestRate);

let monthlyRate = interestRate / 12;

prompt("askDuration");
let loanDuration = getLoanDuration();
displayMonths(loanDuration);

let monthlyPayment = calculatePayment(loanAmount, monthlyRate, loanDuration);
console.log(
  `The monthly payment for this loan is ${messages("USD")}${monthlyPayment}.`
);
