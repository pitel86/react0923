import React, { useState } from 'react'

const Nombre = ({funcion}) => {
    const [nombre, setNombre] = useState(localStorage.getItem('nombre') || "pepito")
    
    const changeNombre = (ev) => {
        setNombre(ev.target.value);
        localStorage.setItem('nombre', ev.target.value);
    }

    
    return (
    <div>
        {nombre}
        <input name='nombre' value={nombre} onChange={changeNombre} />
        <button onClick={funcion}>saluda</button>
    </div>
  )
}

export default Nombre