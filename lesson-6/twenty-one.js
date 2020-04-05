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

function buildDeck(SUITS, VALUES) {
  let deck = [];
  SUITS.forEach(suit => {
    VALUES.forEach(value => {
      deck.push([suit, value]);
    });
  });
  return deck;
}

console.log(buildDeck(SUITS, VALUES));
