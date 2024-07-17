import './Info.css';
import crossIcon from '../../assets/cross.svg';
import circleIcon from '../../assets/circle.svg';
import Player from '../player/Player';

const Info = (currentPlayer) => {
  const info = document.createElement("div");
  info.className = "info";

  const player1 = Player(crossIcon);
  const player2 = Player(circleIcon);

  const turnInfo = document.createElement("p");
  turnInfo.id = "turnInfo";
  turnInfo.textContent = currentPlayer === undefined ? "-" : `Es el turno de ${currentPlayer}`;

  info.append(player1, player2, turnInfo);

  return info;
}

export default Info;