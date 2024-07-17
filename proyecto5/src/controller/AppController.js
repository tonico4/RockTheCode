import SelectionMenu from '../components/menu/SelectionMenu';
import Bingo from '../projects/Bingo/Bingo';
import TresEnRaya from '../projects/TresEnRaya/TresEnRaya';
import WhacAMoleGame from '../projects/WhacAMole/WhacAMole';

export const renderGame = (game) => {
  const window = document.querySelector("main");
  window.innerHTML = ``;

  window.append(game);
}

export const initializeGame = () => {
  const currentGame = sessionStorage.getItem("currentGame");
  if (currentGame === "TresEnRaya") {
    renderGame(TresEnRaya());
  } else if (currentGame === "WhacAMole") {
    renderGame(WhacAMoleGame());
  } else if (currentGame === "Bingo") {
    renderGame(Bingo());
  } else {
    renderGame(SelectionMenu());
  }
}

export const exitGame = () => {
  sessionStorage.clear();
  renderGame(SelectionMenu());
}