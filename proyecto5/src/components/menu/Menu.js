import './Menu.css';
import ResetGameButton from '../button/ResetGameButton';
import ExitButton from '../button/ExitButton';

const Menu = (onReset, onExit) => {
  const menu = document.createElement("div");
  menu.className = "appMenu";

  menu.append(ResetGameButton(onReset), ExitButton(onExit));

  return menu;
}

export default Menu;