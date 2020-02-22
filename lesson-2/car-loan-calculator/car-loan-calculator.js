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

function isInvalidNumber(number) {
  return (
    number.trim() === "" || Number(number) < 0 || Number.isNaN(Number(number))
  );
}

function askLoanAmount() {
  let amount = readline.question();
  while (isInvalidNumber(amount)) {
    prompt("askValidNumber");
    amount = readline.question();
  }
  return Number(amount);
}

function askInterestRate() {
  let rate = readline.question();
  while (isInvalidNumber(rate)) {
    prompt("askValidNumber");
    rate = readline.question();
  }
  rate = Number(rate) / 100;
  return rate;
}

function getLoanDuration() {
  let months = readline.question();
  while (isInvalidNumber(months)) {
    prompt("askValidMonths");
    months = readline.question();
  }
  while (months < 1) {
    prompt("askValidMonths");
    months = readline.question();
  }
  return Number(months);
}

function calculatePayment(amount, rate, duration) {
  let payment;
  if (rate === 0) {
    payment = amount / duration;
  } else {
    payment = amount * (rate / (1 - Math.pow(1 + rate, -duration)));
  }
  return payment.toFixed(2);
}

prompt("welcome");

prompt("askLoanAmount");
let loanAmount = askLoanAmount();
console.log(`=> The selected loan amount is $${loanAmount}.`);

prompt("askInterestRate");
prompt("interestRateExample");
let annualRate = askInterestRate();
console.log(`=> The selected APR is ${(annualRate * 100).toFixed(2)}%.`);
let monthlyRate = annualRate / 12;

prompt("askDuration");
let loanDuration = getLoanDuration();
console.log(`=> The selected loan duration is ${loanDuration} months.`);

let monthlyPayment = calculatePayment(loanAmount, monthlyRate, loanDuration);
console.log(`The monthly payment is $${monthlyPayment}.`);
