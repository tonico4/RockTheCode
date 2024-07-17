import { initializeGame } from './controller/gameController';
import './WhacAMole.css';

const WhacAMoleGame = () => {
  const root = document.createElement("div");
  root.className = "root";
  root.id = "WhacAMole";

  initializeGame(root);

  return root;
}

export default WhacAMoleGame;