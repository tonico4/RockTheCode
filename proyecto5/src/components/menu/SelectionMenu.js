import './SelectionMenu.css';
import { SelectGameButton } from '../button/SelectGameButton';
import WhacAMoleGame from '../../projects/WhacAMole/WhacAMole';
import TresEnRaya from '../../projects/TresEnRaya/TresEnRaya';
import Bingo from '../../projects/Bingo/Bingo';

const SelectionMenu = () => {
  const menu = document.createElement("div");
  menu.className = "menu";

  const tresEnRayaBtn = SelectGameButton("Tres en Raya", TresEnRaya(), "TresEnRaya");
  const whacAMoleBtn = SelectGameButton("Whac A Mole", WhacAMoleGame(), "WhacAMole");
  const bingoBtn = SelectGameButton("Bingo", Bingo(), "Bingo");

  menu.append(tresEnRayaBtn,whacAMoleBtn,bingoBtn);

  return menu;
}

export default SelectionMenu;