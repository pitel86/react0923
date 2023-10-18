import React, { useState } from 'react'

const Input = ({nombre, valor, funcion}) => {
  const [dato, setDato] = useState(valor)
  
  const manejoDato = (ev) => {
    console.log(ev.target.name, ev.target.value)
    setDato(ev.target.value)
    funcion(ev.target.name, ev.target.value)
  }
  
  return (
    <input name={nombre} value={dato} onChange={manejoDato} />
  )
}

export default Input