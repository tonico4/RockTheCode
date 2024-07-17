import Menu from '../../../components/menu/Menu';
import Ball from '../components/ball/Ball';
import BallView from '../components/ballview/BallView';
import PlayPauseButton from '../components/button/PlayPauseButton';
import BallGrid from '../components/grid/BallGrid';

let gameInterval;
let balls = JSON.parse(sessionStorage.getItem("balls")) || Array.from({ length: 99 }, (_, i) => i + 1); // Array del 0 al 98 convertido en 1 al 99
let selectedBalls = JSON.parse(sessionStorage.getItem("selectedBalls")) || [];

export function initializeGame(root) {
  const controlPanel = document.createElement("div");
  controlPanel.className = "controlPanel";

  const ballView = BallView(selectedBalls.length > 0 ? Ball(selectedBalls[selectedBalls.length - 1]) : "");
  controlPanel.append(ballView);

  const pauseButton = PlayPauseButton(gameInterval ? "Pause" : "Play", () => togglePause(pauseButton, ballView));
  controlPanel.append(pauseButton);

  const mainArea = document.createElement("div");
  mainArea.className = "mainArea";
  mainArea.append(createBallGrid());

  root.append(controlPanel, mainArea, Menu(() => resetGame(root), () => exitGame()));

  // No añadir la bola de nuevo al actualizar si ya está en el `BallView`
  if (selectedBalls.length > 0 && !ballView.firstChild) {
    ballView.append(Ball(selectedBalls[selectedBalls.length - 1]));
  }

  if (gameInterval) {
    startGame(ballView, document.querySelector(".ballGridContainer"));
  }
}

function createBallGrid() {
  const ballGridContainer = document.createElement("div");
  ballGridContainer.className = "ballGridContainer";
  
  const ballGrid = BallGrid(balls, selectedBalls);
  ballGridContainer.append(ballGrid);
  
  return ballGridContainer;
}

function startGame(ballView, ballGridContainer) {
  gameInterval = setInterval(() => {
    if (balls.length > 0) {
      const randomIndex = Math.floor(Math.random() * balls.length);
      const ball = balls.splice(randomIndex, 1)[0];

      selectedBalls.push(ball);

      sessionStorage.setItem("balls", JSON.stringify(balls));
      sessionStorage.setItem("selectedBalls", JSON.stringify(selectedBalls));

      ballView.innerHTML = "";
      ballView.append(Ball(ball));

      ballGridContainer.innerHTML = "";
      ballGridContainer.append(BallGrid(balls, selectedBalls));

      announceBall(ball);
    } else {
      clearInterval(gameInterval);
    }
  }, 4000);
}

function togglePause(button, ballView) {
  const ballGridContainer = document.querySelector(".ballGridContainer");

  if (gameInterval) {
    clearInterval(gameInterval);
    gameInterval = null;
    button.textContent = "Play";
  } else {
    button.textContent = "Pause";
    startGame(ballView, ballGridContainer);
  }
}

export function resumeGame() {
  if (!gameInterval) {
    const ballView = document.querySelector(".ballView");
    const ballGridContainer = document.querySelector(".ballGridContainer");
    togglePause(document.querySelector(".button"), ballView);
  }
}

export function pauseGame() {
  if (gameInterval) {
    togglePause(document.querySelector(".button"), document.querySelector(".ballView"));
  }
}

// Voz 
function announceBall(num) {
  const msg = new SpeechSynthesisUtterance(`Número ${num}`);
  window.speechSynthesis.speak(msg);
}

// Reset / Exit
function resetGame(root) {
  balls = Array.from({ length: 99 }, (_, i) => i + 1);
  selectedBalls = [];
  sessionStorage.removeItem("balls");
  sessionStorage.removeItem("selectedBalls");
  clearInterval(gameInterval);
  gameInterval = null;
  root.innerHTML = "";
  initializeGame(root);
}

function exitGame() {
  balls = Array.from({ length: 99 }, (_, i) => i + 1);
  selectedBalls = [];
  sessionStorage.removeItem("balls");
  sessionStorage.removeItem("selectedBalls");
  clearInterval(gameInterval);
  gameInterval = null;
}