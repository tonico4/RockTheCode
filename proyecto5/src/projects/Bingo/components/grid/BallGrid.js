import Ball from '../ball/Ball';
import './BallGrid.css';

const BallGrid = (balls, markedBalls) => {
  const grid = document.createElement("div");
  grid.className = "ballGrid";

  for (let i = 1; i <= 99; i++) {
    const ball = Ball(i);
    if (markedBalls.includes(i)) {
      ball.classList.add("marked");
    }
    grid.append(ball);
  }

  return grid;
}

export default BallGrid;
