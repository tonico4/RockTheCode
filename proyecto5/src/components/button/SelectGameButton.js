import { renderGame } from "../../controller/AppController";
import "./SelectGameButton.css";

export const SelectGameButton = (title, game, gameName) => {
  const button = document.createElement("button");
  button.textContent = title;
  button.className = "select-game-btn";
  button.addEventListener("click", () => {
    sessionStorage.setItem("currentGame", gameName);
    renderGame(game);
  });

  return button;
};
