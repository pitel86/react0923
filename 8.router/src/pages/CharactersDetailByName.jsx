import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharactersDetailByName = () => {
    const [name, setName] = useState("")
    const [page, setPage] = useState(1)
    const [characters, setCharacters] = useState([])
    // const {id, name} = useParams();

    const getCharacters = async() => {
        const results = await axios(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
        setCharacters(results.data.results)
    }
    useEffect(() => {
        getCharacters()
    },[name, page])

  return (
    <div>
        {characters.map((character) => <p>{character.name}</p>)}
        <input onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setPage(page + 1)}>siguiente</button>
        <button onClick={() => setPage(page - 1)}>anterior</button>
    </div>
  )
}

export default CharactersDetailByName