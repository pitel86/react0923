import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import { getCharacters } from '../redux/characters/characterFunctions';

const Characters = () => {
    const {characters, isLoading, error} = useSelector(state => state.characters);
    const dispatch = useDispatch();
    
    useEffect(() => {
        characters.length === 0 && dispatch(getCharacters())
    },[])
  return (
    <>
    <div>{isLoading && <p>Cargando</p>}</div>
    <div>{!isLoading && characters.map((character) => <p>{character.name}</p>)}</div>
    <div>{error && error.message}</div>
    </>
  )
}

export default Characters