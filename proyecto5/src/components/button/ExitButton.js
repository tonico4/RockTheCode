import { exitGame } from "../../controller/AppController";
import "./ExitButton.css";

const ExitButton = (onExit) => {
  const exitButton = document.createElement("button");
  exitButton.textContent = "Salir";
  exitButton.className = "exitBtn";
  exitButton.addEventListener("click", () => {
    exitGame();
    onExit();
  });

  return exitButton;
};

export default ExitButton;
