import Bingo from '../../projects/Bingo/Bingo';
import TresEnRaya from '../../projects/TresEnRaya/TresEnRaya';
import WhacAMoleGame from '../../projects/WhacAMole/WhacAMole';
import SelectionMenu from '../menu/SelectionMenu';
import './GameView.css';

const GameView = () => {
  const window = document.createElement("main");
  
  // Verificar si hay un estado del juego guardado y mostrar el juego correspondiente
  if (sessionStorage.getItem("currentGame")) {
    const currentGame = sessionStorage.getItem("currentGame");
    if (currentGame === "TresEnRaya") {
      window.append(TresEnRaya());
    } else if (currentGame === "WhacAMole") {
      window.append(WhacAMoleGame());
    } else {
      window.append(Bingo());
    }
  } else {
    window.append(SelectionMenu());
  }

  return window;
}

export default GameView;