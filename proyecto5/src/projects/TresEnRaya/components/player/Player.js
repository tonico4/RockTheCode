import './Player.css';

const Player = (piece) => {
  const player = document.createElement("div");
  player.className = "player";

  const sign = document.createElement("img");
  sign.src = piece;

  const score = document.createElement("span");
  score.textContent = sessionStorage.getItem("score") || 0;

  player.append(sign, score);

  return player;
}

export default Player;