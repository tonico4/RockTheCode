import './Board.css';
import ScoreComponent from '../score/Score';
import TimerComponent from '../timer/Timer';
import LandBoard from './LandBoard';

const Board = (score, seconds = 60) => {
  const board = document.createElement("div");
  board.className = "board2";

  board.append(ScoreComponent(score), TimerComponent(seconds), LandBoard());

  return board;
}

export default Board;