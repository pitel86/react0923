import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const CharactersDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({});
  const getCharacters = async () => {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    console.log(result);
    setCharacter(result.data);
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div>
      {character && (
        <>
          <p>{character.name}</p>
          <button onClick={() => navigate("/characters")}>Volver</button>
        </>
      )}
    </div>
  );
};

export default CharactersDetail;
