import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Numeros = () => {
    const { numeros }= useSelector(state => state.numeros);
    const dispatch = useDispatch();

    let  newNumero = 0;
    
    const handleInput = (e) => {
        newNumero = e.target.value
    }

    const handleSubmit = () => {
        dispatch({type: "addNumber", payload: newNumero})
    }
    const handleSubmit2 = () => {
        dispatch({type: "removeNumber", payload: newNumero})
    }
  return (
    <>
    <ul>{numeros.map((numero) => <li>{numero}</li>)}</ul>
    <input onChange={handleInput} />
    <button onClick={handleSubmit}>Add</button>
    <input onChange={handleInput} />
    <button onClick={handleSubmit2}>Remove</button>
    </>
  )
}

export default Numeros