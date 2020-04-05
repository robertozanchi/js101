const readline = require("readline-sync");

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
VALID_ANSWERS = ["hit", "stay"];

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
      if (sum > 21) sum -= 10;
    });

  return sum;
}

function isBust(cards) {
  return total(cards) > 21;
}

function diplayResults(playerCards, dealerCards) {
  //console.clear();
  prompt(`Player's cards: ${showCards(playerCards, playerCards.length)}`);
  prompt(`Dealer's cards: ${showCards(dealerCards, dealerCards.length)}`);

  if (isBust(playerCards) || total(playerCards) < total(dealerCards)) {
    prompt(
      `Dealer won with ${total(dealerCards)}. Player scored ${total(
        playerCards
      )}.`
    );
  } else if (isBust(dealerCards) || total(dealerCards) < total(playerCards)) {
    prompt(
      `Player wins with ${total(playerCards)}. Dealer scored ${total(
        dealerCards
      )}.`
    );
  } else if (total(playerCards) === total(dealerCards)) {
    prompt(`Player and Dealer both scored ${total(playerCards)}`);
  }
}

let deck = initializeDeck();
shuffle(deck);

let playerCards = [];
let dealerCards = [];
dealCards(playerCards, deck, 2);
dealCards(dealerCards, deck, 2);

while (true) {
  // Player turn
  while (true) {
    console.clear();

    prompt(`Player's cards: ${showCards(playerCards, playerCards.length)}`);
    prompt(`Dealer's cards: ${showCards(dealerCards, 1)}`);
    prompt(`Your current score is ${total(playerCards)}`);

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
      if (isBust(playerCards)) break;
    }
  }

  console.log();
  prompt(`Player's final cards: ${showCards(playerCards, playerCards.length)}`);
  if (isBust(playerCards)) {
    prompt(`You're bust! Your final score is ${total(playerCards)}.`);
    break;
  } else {
    prompt(`You chose to stay. Your final score is ${total(playerCards)}.\n`);
    break;
  }
}

while (true) {
  // Dealer turn
  if (isBust(playerCards) || total(dealerCards) >= 17) {
    break;
  }
  dealCards(dealerCards, deck, 1);
}

// Display the results
diplayResults(playerCards, dealerCards);

prompt("Thanks for playing Twenty-One!");
