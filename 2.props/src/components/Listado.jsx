import React from 'react'
import "./Listado.css"

const Listado = ({lista, colorin}) => {
  return (
    <div>
        {lista.map((elemento, index) => <p className={colorin} key={index}>{elemento}</p>)}
    </div>
  )
}
export default Listado