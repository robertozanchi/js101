const readline = require("readline-sync");
const VALID_CHOICES = ["r", "p", "s", "l", "sp"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function isMatchWon(score, computerScore) {
  return score === 5 || computerScore === 5;
}

function convertChoice(selection) {
  let output;
  switch (selection) {
    case "r":
      output = "rock";
      break;
    case "p":
      output = "paper";
      break;
    case "s":
      output = "scissors";
      break;
    case "l":
      output = "lizard";
      break;
    case "sp":
      output = "spock";
  }
  return output;
}

function playerWins(choice, computerChoice) {
  return (
    (choice === "scissors" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "rock" && computerChoice === "lizard") ||
    (choice === "lizard" && computerChoice === "spock") ||
    (choice === "spock" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "lizard") ||
    (choice === "lizard" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "spock") ||
    (choice === "spock" && computerChoice === "rock") ||
    (choice === "rock" && computerChoice === "scissors")
  );
}

function announceGameWinner(choice, computerChoice, score, computerScore) {
  if (playerWins(choice, computerChoice)) {
    score += 1;
    prompt("You win!\n");
  } else if (choice === computerChoice) {
    prompt("It's a tie!\n");
  } else {
    computerScore += 1;
    prompt("Computer wins!\n");
  }
}

function announceMatchWinner(score, computerScore) {
  if (score === 5) {
    prompt("Congrats you won five games!");
  } else if (computerScore === 5) {
    prompt("The computer won five games.");
  }
}

while (true) {
  let score = 0;
  let computerScore = 0;

  console.clear();
  prompt("Welcome to Rock, Paper Scissors, Lizard, Spock!\n");
  prompt("The first player to win 5 games wins the Match.\n");

  while (!isMatchWon(score, computerScore)) {
    prompt(`Player score: ${score} - Computer score: ${computerScore}`);
    prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
    prompt(
      "r for rock, p for paper, s for scissors, l for lizard, sp for Spock"
    );
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice.");
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    choice = convertChoice(choice);
    computerChoice = convertChoice(computerChoice);

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);
    announceGameWinner(choice, computerChoice, score, computerScore);

    announceMatchWinner(score, computerScore);
  }

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== "y") break;
}
