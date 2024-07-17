import { initializeGame } from './controller/gameController';
import './Bingo.css';

const Bingo = () => {
  const root = document.createElement("div");
  root.className = "root";
  root.id = "root";

  initializeGame(root);

  return root;
};

export default Bingo;
