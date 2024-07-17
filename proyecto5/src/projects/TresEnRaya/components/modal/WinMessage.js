import { resetGame } from '../../controller/gameController';

const WinMessage = (player, root) => {
  const modal = document.createElement("div");
  modal.className = "modal";

  const message = document.createElement("p");
  message.textContent = `${player} ha sido el ganador!!`;

  const closeMessage = document.createElement("button");
  closeMessage.textContent = "Cerrar";
  closeMessage.addEventListener("click", () => resetGame(root));

  modal.append(message, closeMessage);

  return modal;
}

export default WinMessage;