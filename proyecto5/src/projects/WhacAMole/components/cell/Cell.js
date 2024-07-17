import './Cell.css';
import topo from '../../assets/topo.png';
import { handleCellClick } from '../../controller/gameController';

const Cell = (id) => {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.id = `mole-${id}`;
  cell.addEventListener("click", () => {
    if (!cellImg.classList.contains("hidden") && !cellImg.classList.contains("clicked")) {
      cellImg.classList.add("clicked");
      handleCellClick();
    }
  });

  const cellImg = document.createElement("img");
  cellImg.src = topo;
  cellImg.className = "hidden";

  cell.append(cellImg);

  return cell;
}

export default Cell;