import './Score.css';

const ScoreComponent = (score) => {
  const scoreComponent = document.createElement("p");
  scoreComponent.className = "score";
  scoreComponent.textContent = `Puntuación: ${score}`;

  return scoreComponent;
}

export default ScoreComponent;