import './Ball.css';

const Ball = (num) => {
  const ball = document.createElement("div");
  ball.className = "ball";
  
  const number = document.createElement("p");
  number.textContent = num;

  ball.append(number);

  return ball;
}

export default Ball;