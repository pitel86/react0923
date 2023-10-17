import React from 'react'
import Button from './Button'

const Container = () => {
    const texto  = "soy pepito";
    const listado = ["juan", "pepe", "luis"]

    return (
    <div>Container {texto}
    <ul>
        {listado.map((elemento, index) => <li key={index}>{elemento}</li>)}
    </ul>
    <Button />
    </div>
  )
}

export default Container