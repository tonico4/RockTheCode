import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"contact/toni"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
