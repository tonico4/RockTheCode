import './Board.css';
import ScoreComponent from '../score/Score';
import TimerComponent from '../timer/Timer';
import LandBoard from './LandBoard';
import RecordComponent from '../record/RecordComponent';
import { record } from '../../controller/gameController';

const Board = (score, seconds = 60) => {
  const board = document.createElement("div");
  board.className = "board2";

  board.append(ScoreComponent(score), RecordComponent(record), TimerComponent(seconds), LandBoard());

  return board;
}

export default Board;