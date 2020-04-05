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
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
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
    message += " [" + cards[idx] + "]";
  }
  return message;
}

function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
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

  // correct for Aces
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

let deck = initializeDeck();
shuffle(deck);

let playerCards = [];
let dealerCards = [];
dealCards(playerCards, deck, 2);
dealCards(dealerCards, deck, 2);

// Player's turn
while (true) {
  while (true) {
    prompt(`Player's cards: ${showCards(playerCards, playerCards.length)}`);
    prompt(`Dealer's cards: ${showCards(dealerCards, 1)}`);
    prompt(`Your current score is ${total(playerCards)}`);

    prompt("Choose: hit or stay?");
    let answer = readline.question().toLowerCase();
    while (!VALID_ANSWERS.includes(answer)) {
      prompt("That's not a valid choice.");
      answer = readline.question().toLowerCase();
    }

    if (answer === "stay") break;

    if (answer === "hit") {
      dealCards(playerCards, deck, 1);
      if (isBust(playerCards)) break;
    }
  }

  prompt(`Player's cards: ${showCards(playerCards, playerCards.length)}`);

  if (isBust(playerCards)) {
    prompt(`You're bust! Your final score is ${total(playerCards)}`);
    break;
  } else {
    prompt(`You chose to stay. Your final score is ${total(playerCards)}`);
    break;
  }
}

// Dealer's turn
// while (true) {
//   // the dealer's break condition occurs at the top of the "hit or stay" loop.
//   if (isBust(playerCards) || isBust(dealerCards)) break;
// }

//Displaying the Results
// When you display the result, you also need to perform the calculation of who won.
