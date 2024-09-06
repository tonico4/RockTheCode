import React, { useState } from "react";
import "./Character.css";

export const Character = ({ urlImg, name, specie, location }) => {

  const [isUp, setIsUp] = useState(true);

  const handleRotation = (event) => {
    const img = event.target;
    if (isUp) {
      img.style.transform = "rotate(180deg)";
    } else {
      img.style.transform = "rotate(0deg)";
    }
    setIsUp(!isUp);
  }

  return (
    <li className='char-container'>
      <img src={urlImg} alt={name} onClick={(e) => handleRotation(e)}/>
      <p><span>Nombre: </span>{name}</p>
      <p><span>Especie: </span>{specie}</p>
    </li>
  );
};
