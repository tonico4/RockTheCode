import './Player.css';

const Player = (piece, idPiece) => {
  const player = document.createElement("div");
  player.className = "player";
  player.id = idPiece;

  const sign = document.createElement("img");
  sign.src = piece;

  player.append(sign);

  return player;
}

export default Player;