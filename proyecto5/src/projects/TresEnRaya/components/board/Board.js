import './Board.css';
import { takeTurn } from '../../controller/gameController';

const Board = (root) => {
  const board = document.createElement("div");
  board.className = "board1";

  const tableBoard = document.createElement("table");
  for (let i = 0; i < 9; i++) {
    const td = document.createElement("td");
    td.id = i;
    td.addEventListener("click", (e) => {
      takeTurn(e, root);
    });
    tableBoard.append(td);
  }

  board.append(tableBoard);

  return board;
}

export default Board;