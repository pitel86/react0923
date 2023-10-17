import React from 'react'

const Elemento = () => {
    let nombre = "";
    const saluda = (texto) => {
        console.log("hola", texto)
    }

  return (
    <>
    <input name="nombre" onChange={(ev) => nombre = ev.target.value} />
    <div onClick={() => saluda(nombre)}>Elemento</div>
    </>
  )
}

export default Elemento