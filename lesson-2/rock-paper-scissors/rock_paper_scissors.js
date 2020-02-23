const readline = require("readline-sync");
const VALID_CHOICES = ["1", "2", "3", "4", "5"];

let playerGamesWon = 0;
let computerGamesWon = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function matchWon() {
  return playerGamesWon === 5 || computerGamesWon === 5;
}

function convertChoice(selection) {
  let output;
  switch (selection) {
    case "1":
      output = "rock";
      break;
    case "2":
      output = "paper";
      break;
    case "3":
      output = "scissors";
      break;
    case "4":
      output = "lizard";
      break;
    case "5":
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

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (playerWins(choice, computerChoice)) {
    playerGamesWon += 1;
    prompt("You win!");
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    computerGamesWon += 1;
    prompt("Computer wins!");
  }
}

function announceMatchWinner(playerGamesWon, computerGamesWon) {
  if (playerGamesWon === 5) {
    prompt("Congrats you won five games!");
  } else if (computerGamesWon === 5) {
    prompt("The computer won five games.");
  }
}

while (true) {
  while (!matchWon()) {
    prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
    prompt(
      "1 for rock, 2 for paper, 3 for scissors, 4 for lizard, 5 for Spock"
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

    displayWinner(choice, computerChoice);
    announceMatchWinner(playerGamesWon, computerGamesWon);
  }

  playerGamesWon = 0;
  computerGamesWon = 0;

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== "y") break;
}
