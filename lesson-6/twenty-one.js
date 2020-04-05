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

function initializeDeck() {
  let deck = [];
  SUITS.forEach(suit => {
    VALUES.forEach(value => {
      deck.push([suit, value]);
    });
  });
  return deck;
}

console.log(initializeDeck());

// Game execution

// Initialize deck of card
let deck = initializeDeck();

// Deal cards to player and dealer

// Player's turn
while (true) {
  // Visualize player's cards
  // Choose hit or stay
  //   If hit, pick a card, calculate value
  //   if stay, break
  if (isBust(playerCards)) break;
}

// Dealer's turn
while (true) {}
