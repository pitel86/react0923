import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const results = await axios("https://rickandmortyapi.com/api/character");
    setCharacters([...results.data.results]);
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div>
      {characters.map((character) => (
        <>
          <p>{character.name}</p>
          <Link to={`/characters/${character.id}`}>Ver más</Link>
        </>
      ))}
    </div>
  );
};

export default Characters;
