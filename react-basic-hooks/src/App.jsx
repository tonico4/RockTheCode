import { useState, useEffect } from "react";
import "./App.css";
import { Character } from "./components/Character/Character";

function App() {
  const [characters, setCharacters] = useState([]);
  const [word, setWord] = useState("");

  const getChar = (name) => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results || []);
      })
      .catch((err) => console.log("Error al obtener datos."));
  };

  const handleSearch = () => {
    if (word.length > 0) {
      getChar(word);
    } else {
      setCharacters([]);
    }
  };

  return (
    <>
      <div className='search'>
        <input
          type='text'
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch()
            }
          }}
          placeholder='Morty'
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <div className='gallery'>
        <ul>
          {characters.length > 0 ? (
            characters.map((char, index) => (
              <Character
                key={index}
                urlImg={char.image}
                name={char.name}
                specie={char.species}
              />
            ))
          ) : (
            <div>
              <p>Busca un personaje de la serie <span>Rick & Morty</span> que exista.</p>
              <img src="./src/assets/pngwing.com.png" alt="" className='main-img'/>
            </div>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
