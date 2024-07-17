import { startGame } from '../../controller/gameController';
import './PlayButton.css';

const PlayButton = (root) => {
  const button = document.createElement("button");
  button.textContent = "JUGAR";
  button.className = "playbtn";
  button.addEventListener("click", () => startGame(root));

  return button;
}

export default PlayButton;