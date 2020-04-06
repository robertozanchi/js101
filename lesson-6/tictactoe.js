const readline = require("readline-sync");

const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const VALID_PLAYERS = ["player", "computer"];
const CURRENT_PLAYER = "player"; // set to "player", "computer", or "choose".
const VALID_YES = ["Y", "y"];
const VALID_NO = ["n", "N"];
const VALID_ANSWERS = ["Y", "y", "N", "n"];
const GAMES_IN_MATCH = 5;
const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // rows
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // columns
  [1, 5, 9],
  [3, 5, 7] // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log("");
  console.log("  1  |  2  |  3");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("  4  |  5  |  6");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("  7  |  8  |  9 ");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === " ");
}

function joinOr(array, separator = ", ", conjunction = "or") {
  let length = array.length;
  if (length === 0) {
    return "";
  }
  if (length === 1) {
    return `${array[0]}`;
  } else if (length === 2) {
    return `${array[0]} ${conjunction} ${array[1]}`;
  } else {
    return (
      array.slice(0, array.length - 1).join(separator) +
      ` ${conjunction} ${array[array.length - 1]}`
    );
  }
}

function setPlayer(INITIAL_SETTING) {
  let player;
  if (INITIAL_SETTING.toLowerCase() === "player") {
    player = "Player";
  } else if (INITIAL_SETTING.toLowerCase() === "computer") {
    player = "Computer";
  } else if (INITIAL_SETTING.toLowerCase() === "choose") {
    prompt("Who makes the first move? Enter 'Player' or 'Computer'.");
    let answer = readline.question().toLowerCase();
    while (!VALID_PLAYERS.includes(answer)) {
      prompt("That's not a valid choice.");
      answer = readline.question().toLowerCase();
    }
    player = answer[0].toUpperCase() + answer.slice(1);
  }
  return player;
}

function alternatePlayer(player) {
  let alternate;
  if (player === "Player") {
    alternate = "Computer";
  } else {
    alternate = "Player";
  }
  return alternate;
}

function chooseSquare(board, player) {
  let choice;
  if (player === "Player") {
    choice = playerChoosesSquare(board);
  } else if (player === "Computer") {
    choice = computerChoosesSquare(board);
  }
  return choice;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function computerChoosesSquare(board) {
  let square;

  if (board["5"] === INITIAL_MARKER) {
    square = "5";
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, COMPUTER_MARKER);
      if (square) break;
    }
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }

  return null;
}

let currentPlayer = setPlayer(CURRENT_PLAYER);

while (true) {
  let playerScore = 0;
  let computerScore = 0;

  while (true) {
    let board = initializeBoard();

    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won the game!`);
    } else {
      prompt("It's a tie!");
    }

    if (detectWinner(board) === "Player") {
      playerScore += 1;
    } else if (detectWinner(board) === "Computer") {
      computerScore += 1;
    }

    prompt(`Games won: Player ${playerScore} - ${computerScore} Computer`);

    if (playerScore === GAMES_IN_MATCH) {
      prompt(`Congratulations, Player. You won the match!`);
      break;
    }

    if (computerScore === GAMES_IN_MATCH) {
      prompt(`Computer won the match!`);
      break;
    }

    prompt("Play another game?");
    let answer = readline.question()[0];
    while (!VALID_ANSWERS.includes(answer)) {
      prompt("That's not a valid choice.");
      answer = readline.question()[0];
    }
    if (VALID_NO.includes(answer)) {
      break;
    } else if (VALID_YES.includes(answer)) {
      continue;
    }
  }

  prompt("Start a new match?");
  let answer = readline.question()[0];
  while (!VALID_ANSWERS.includes(answer)) {
    prompt("That's not a valid choice.");
    answer = readline.question()[0];
  }
  if (VALID_NO.includes(answer)) {
    break;
  } else if (VALID_YES.includes(answer)) {
    continue;
  }
}

prompt("Thanks for playing Tic Tac Toe!");
