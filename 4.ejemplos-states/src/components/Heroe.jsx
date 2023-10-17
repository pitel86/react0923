import React from 'react'

const Heroe = ({heroe}) => {
  return (
    <>
        <p>{heroe.nombre}</p>
        <p>{heroe.alias}</p>
    </>
  )
}

export default Heroe