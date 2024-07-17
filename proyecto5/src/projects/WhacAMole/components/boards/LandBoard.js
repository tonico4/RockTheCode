import './LandBoard.css';
import Cell from '../cell/Cell';

const LandBoard = () => {
  const landBoard = document.createElement("div");
  landBoard.className = "landBoard";

  for (let index = 0; index < 12; index++) {
    const cell = Cell(index);
    landBoard.append(cell);
  }

  return landBoard;
}

export default LandBoard;