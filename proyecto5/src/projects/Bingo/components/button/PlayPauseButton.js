import './PPButtons.css';

const PlayPauseButton = (text, onClick) => {
  const button = document.createElement("button");
  button.className = "ppBtn";
  button.textContent = text;

  button.addEventListener("click",onClick);

  return button;
}

export default PlayPauseButton;