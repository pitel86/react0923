import React from 'react'
import { useContext } from 'react'
import { MiContexto } from '../shared/Context'
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

const Gallery = () => {
    const {texto, counter} = useContext(MiContexto);
    const [characters, setCharacters] = useState([])
    const [charactersFilter, setCharactersFilter] = useState([])
    
    const getCharacters = async() => {
        const results = await axios(`https://rickandmortyapi.com/api/character/?name=${texto}&page=${counter}`);
        setCharacters(results.data.results)
        setCharactersFilter(results.data.results)
    }

    const filterCharacters = () => {
        const filterCharacters = characters.filter((character) => character.name.toLowerCase().includes(texto.toLowerCase()));
        setCharactersFilter([...filterCharacters])
    }
    
    useEffect(() => {
        getCharacters()
    },[])         //[texto, counter] los metemos para buscar por nombre y pagina

    useEffect(() => {
        filterCharacters()
    },[texto])
  
  return (
    <div>{charactersFilter.map((character) => <p>{character.name}</p>)}</div>
  )
}

export default Gallery