import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {};

  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Introduce una ciudad'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='search-btn' onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
