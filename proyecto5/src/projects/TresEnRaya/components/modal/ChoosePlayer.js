import { chooseStartPlayer, player1, player2, startGame } from '../../controller/gameController';
import './ChoosePlayer.css';

const ChoosePlayer = (root) => {
  const modal = document.createElement("div");
  modal.className = "modal";

  const chooseOne = document.createElement("p");
  chooseOne.textContent = "Elige quién comienza:";

  const selectPlayer1 = document.createElement("button");
  selectPlayer1.textContent = player1;
  selectPlayer1.addEventListener("click", () => {
    chooseStartPlayer(player1);
    startGame(root);
  });

  const selectPlayer2 = document.createElement("button");
  selectPlayer2.textContent = player2;
  selectPlayer2.addEventListener("click", () => {
    chooseStartPlayer(player2);
    startGame(root);
  });

  modal.append(chooseOne, selectPlayer1, selectPlayer2);

  return modal;
}

export default ChoosePlayer;