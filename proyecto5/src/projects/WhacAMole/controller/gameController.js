import Menu from '../../../components/menu/Menu';
import Board from '../components/boards/Board';
import PlayButton from '../components/play/PlayButton';

let score = 0;
let seconds = 60;
let moleInterval;
let countdown;

const root = document.getElementById("root");

// Init Game
export function initializeGame(root) {
  root.innerHTML = ``;
  root.append(PlayButton(root));
}

export function startGame(root) {
  root.innerHTML = ``;
  root.append(Board(score, seconds), Menu(() => resetGame(root), () => exitGame()));
  handleMole();
  timer();
}

// Game
function timer() {
  countdown = setInterval(() => {
    seconds--;
    updateTime(seconds);

    if (seconds === 30) {
      clearInterval(moleInterval);
      handleMole(1000);
    } else if (seconds === 10) {
      clearInterval(moleInterval);
      handleMole(600);
    }

    if (seconds === 0) {
      clearInterval(moleInterval);
      clearInterval(countdown);
    }
  }, 1000);
}

function handleMole(time = 2000) {
  moleInterval = setInterval(() => {
    const randomId = Math.floor(Math.random() * 12);
    const randomMole = document.getElementById(`mole-${randomId}`);

    if (randomMole) {
      const moleImg = randomMole.querySelector('img');
      moleImg.classList.remove("hidden", "clicked");
      setTimeout(() => {
        moleImg.classList.add("hidden");
      }, time / 2); // El topo se esconde después de la mitad del tiempo del intervalo
    }
  }, time);
}

export function handleCellClick() {
  score++;
  updateScore(score);
}

// Updates
function updateScore(newScore) {
  document.querySelector(".score").textContent = `Puntuación: ${newScore}`;
}

function updateTime(time) {
  document.querySelector(".timer").textContent = `Tiempo: ${time} seg`;
}

// Reset
export function resetGame(root) {
  clearInterval(countdown);
  clearInterval(moleInterval);
  score = 0;
  seconds = 60;
  initializeGame(root);
}

// Exit
export function exitGame() {
  clearInterval(countdown);
  clearInterval(moleInterval);
  score = 0;
  seconds = 60;
}