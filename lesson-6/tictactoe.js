const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = " ";
  }

  return board;
}

function playerChoosesSquare(board) {
  prompt("Choose a square (1-9):");
  let square = readline.question();
  board[square] = "X";
}

// At bottom of board

let board = initializeBoard();
displayBoard(board);

playerChoosesSquare(board);
displayBoard(board);
