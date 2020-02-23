const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
let playerGamesWon = 0;
let computerGamesWon = 0;

function prompt(message) {
  console.log(`=> ${message}`);
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

function fiveGamesWon() {
  return playerGamesWon === 5 || computerGamesWon === 5;
}

while (true) {
  while (!fiveGamesWon()) {
    prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice.");
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    displayWinner(choice, computerChoice);

    if (playerGamesWon === 5) {
      prompt("Congrats you won five games!");
    } else if (computerGamesWon === 5) {
      prompt("The computer won five games.");
    }
  }

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== "y") break;
}
