import Board from "../components/board/Board";
import Info from "../components/info/Info";
import Piece from "../components/piece/Piece";
import crossPiece from "../assets/cross.svg";
import circlePiece from "../assets/circle.svg";
import WinMessage from "../components/modal/WinMessage";
import ChoosePlayer from "../components/modal/ChoosePlayer";
import Menu from '../../../components/menu/Menu';

// State
export let gameOver = false;
export const player1 = "X";
export const player2 = "O";
let currentPlayer = sessionStorage.getItem("currentPlayer") || undefined;
let winner;

// Board
let virtualBoard = JSON.parse(sessionStorage.getItem("virtualBoard")) || Array(9).fill(null);

// Win Condition
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Choose player
export function chooseStartPlayer(player) {
  currentPlayer = player;
  sessionStorage.setItem("currentPlayer", currentPlayer);
}

// Init Game
export function initializeGame(root) {
  if (sessionStorage.getItem("virtualBoard") && sessionStorage.getItem("currentPlayer")) {
    startGame(root);
  } else {
    root.innerHTML = ``;
    root.append(Info(currentPlayer), ChoosePlayer(root));
  }
}

export function startGame(root) {
  root.innerHTML = ``;
  root.append(Info(currentPlayer), Board(root), Menu(() => resetGame(root), () => exitGame()));
  sessionStorage.setItem("virtualBoard", JSON.stringify(virtualBoard));
  updateBoardUI(root);
  updateInfo(root);
}

// Take turn
export function takeTurn(event, root) {
  const cellIndex = event.target.id;

  // El índice hace match con el tablero virtual.
  if (virtualBoard[cellIndex] !== null || gameOver) {
    return;
  }

  virtualBoard[cellIndex] = currentPlayer;
  event.target.append(
    Piece(currentPlayer === player1 ? crossPiece : circlePiece)
  );
  sessionStorage.setItem("virtualBoard", JSON.stringify(virtualBoard));

  winner = checkWinner();
  console.log(winner);

  if (winner) {
    gameOver = true;
    printWinner(winner, root);
  } else {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    sessionStorage.setItem("currentPlayer", currentPlayer);
    updateInfo(root);
  }
}

// Check winner
export function checkWinner() {
  for (const combination of winCombinations) {
    const [a, b, c] = combination;
    if (
      virtualBoard[a] &&
      virtualBoard[a] === virtualBoard[b] &&
      virtualBoard[a] === virtualBoard[c]
    ) {
      return virtualBoard[a];
    }
  }
  return virtualBoard.includes(null) ? null : "Empate";
}

// Print Winner
function printWinner(winner, root) {
  root.innerHTML = ``;
  root.append(WinMessage(winner, root));
}

// Updates
function updateInfo(root) {
  const turnInfo = root.querySelector("#turnInfo");
  if (turnInfo) {
    turnInfo.textContent = currentPlayer === undefined ? "-" : `Es el turno de: ${currentPlayer}`;
  }
}

function updateBoardUI(root) {
  const cells = root.querySelectorAll("td");
  virtualBoard.forEach((piece, index) => {
    if (piece !== null) {
      cells[index].append(Piece(piece === player1 ? crossPiece : circlePiece));
    }
  });
}

// Reset
export function resetGame(root) {
  virtualBoard.fill(null);
  gameOver = false;
  currentPlayer = undefined;
  sessionStorage.removeItem("virtualBoard");
  sessionStorage.removeItem("currentPlayer");
  startGame(root);
}

export function exitGame() {
  virtualBoard.fill(null);
  gameOver = false;
  currentPlayer = undefined;
  sessionStorage.removeItem("virtualBoard");
  sessionStorage.removeItem("currentPlayer");
}