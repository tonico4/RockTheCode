import './ResetGameButton.css';

const ResetGameButton = (onClick) => {
  const resetGameButton = document.createElement("button");
  resetGameButton.textContent = "Reiniciar partida";
  resetGameButton.className = "resetBtn";
  resetGameButton.addEventListener("click", () => onClick());

  return resetGameButton;
}

export default ResetGameButton;