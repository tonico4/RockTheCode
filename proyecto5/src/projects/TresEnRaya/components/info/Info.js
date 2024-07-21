import './Info.css';
import crossIcon from '../../assets/cross.svg';
import circleIcon from '../../assets/circle.svg';
import Player from '../player/Player';
import { player1, player2 } from '../../controller/gameController';

const Info = (currentPlayer) => {
  const info = document.createElement("div");
  info.className = "info";

  const crossPlayer = Player(crossIcon, player1);
  const circlePlayer = Player(circleIcon, player2);

  const turnInfo = document.createElement("p");
  turnInfo.id = "turnInfo";
  turnInfo.textContent = currentPlayer === undefined ? "-" : `Es el turno de ${currentPlayer}`;

  info.append(crossPlayer, circlePlayer, turnInfo);

  return info;
}

export default Info;