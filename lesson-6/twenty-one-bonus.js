const readline = require("readline-sync");

const GAME_NAME = "Twenty-One";
const MAX_SCORE = 21;
const DEALER_LIMIT = 17;
const SUITS = ["H", "D", "C", "S"];
const VALUES = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "Q",
  "K",
  "A"
];
const VALID_ANSWERS = ["hit", "stay"];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function initializeDeck() {
  let deck = [];
  SUITS.forEach(suit => {
    VALUES.forEach(value => {
      deck.push([suit, value]);
    });
  });
  return deck;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

function dealCards(player, deck, times) {
  for (let idx = 1; idx <= times; idx += 1) {
    player.push(deck.pop());
  }
}

function showCards(cards, number) {
  let message = "";
  for (let idx = 0; idx < number; idx += 1) {
    message += "[" + cards[idx] + "] ";
  }
  return message;
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (["J", "Q", "K"].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values
    .filter(value => value === "A")
    .forEach(_ => {
      if (sum > MAX_SCORE) sum -= 10;
    });

  return sum;
}

function isBust(total) {
  return total > MAX_SCORE;
}

function diplayResults(playerTotal, dealerTotal) {
  if (
    (isBust(playerTotal) || playerTotal < dealerTotal) &&
    !isBust(dealerTotal)
  ) {
    prompt(`Dealer won with ${dealerTotal}. Player scored ${playerTotal}.`);
  } else if (isBust(dealerTotal) || dealerTotal < playerTotal) {
    prompt(`Player wins with ${playerTotal}. Dealer scored ${dealerTotal}.`);
  } else if (playerTotal === dealerTotal) {
    prompt(`Player and Dealer both scored ${playerTotal}.`);
  }
}

function playAgain() {
  prompt("Do you want to play again? (y or n)");
  let answer = readline.question();
  return answer.toLowerCase()[0] === "y";
}

while (true) {
  let deck = initializeDeck();
  shuffle(deck);

  let playerCards = [];
  let dealerCards = [];
  dealCards(playerCards, deck, 2);
  dealCards(dealerCards, deck, 2);

  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  while (true) {
    console.clear();

    prompt(`Player's cards: ${showCards(playerCards, playerCards.length)}`);
    prompt(`Dealer's cards: ${showCards(dealerCards, 1)}`);
    prompt(`Your current score is ${playerTotal}`);

    prompt("Choose: hit or stay?");
    let answer = readline.question().toLowerCase();
    while (!VALID_ANSWERS.includes(answer)) {
      prompt("That's not a valid choice.");
      answer = readline.question().toLowerCase();
    }

    if (answer === "stay") {
      break;
    } else if (answer === "hit") {
      dealCards(playerCards, deck, 1);
      playerTotal = total(playerCards);
      if (isBust(playerTotal)) break;
    }
  }

  console.log();
  prompt(`Player's cards: ${showCards(playerCards, playerCards.length)}`);
  if (isBust(playerTotal)) {
    prompt(`You went bust! Your final score is ${playerTotal}.\n`);
  } else {
    prompt(`You chose to stay. Your final score is ${playerTotal}.\n`);
  }

  while (true) {
    if (isBust(playerTotal) || dealerTotal >= DEALER_LIMIT) {
      break;
    }
    dealCards(dealerCards, deck, 1);
    dealerTotal = total(dealerCards);
  }

  prompt(`Dealer's cards: ${showCards(dealerCards, dealerCards.length)}\n`);
  diplayResults(playerTotal, dealerTotal);

  console.log();
  prompt(`Thanks for playing ${GAME_NAME}!\n`);

  if (!playAgain()) break;
}
