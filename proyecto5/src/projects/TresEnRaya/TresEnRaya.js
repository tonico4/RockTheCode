import { initializeGame } from './controller/gameController';
import './TresEnRaya.css';

const TresEnRaya = () => {
  const root = document.createElement("div");
  root.className = "root";
  root.id = "TresEnRaya";

  initializeGame(root);

  return root;
};

export default TresEnRaya;
