import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Datos = () => {
    const [ page, setPage] = useState(1)
    const [ characters, setCharacters ] = useState ([]);
    const [ charactersFilter, setCharactersFilter ] = useState ([]);

    // const getCharacters = async() =>{
    //     console.log("get characters");
    //     const results = await fetch("https://rickandmortyapi.com/api/character");
    //     const resultsJson = await results.json();

    //     console.log(resultsJson)
    //     setCharacters([...resultsJson.results])
    // }

    const filterCharacter = (valor) => {
        const filteredCharacters = characters.filter((character) => character.name.toLowerCase().includes(valor.toLowerCase()))
        setCharactersFilter([...filteredCharacters])
    }

    const getCharacters = async () => {
        const results = await axios(`https://rickandmortyapi.com/api/character?page=${page}`);
        console.log(results)
        setCharacters([...results.data.results])
        setCharactersFilter([...results.data.results])
    }
    
    useEffect(() => {
        getCharacters()
    },[page])

  return (
    <div>{
        charactersFilter.map((character) => <><p>{character.name}</p> </>)}
        <button onClick={() => setPage(page + 1)}>siguiente</button>  
        <button onClick={() => setPage(page - 1)}>anterior</button>
        <input onChange={(ev) => filterCharacter(ev.target.value)} />
    </div>
  )
}

export default Datos