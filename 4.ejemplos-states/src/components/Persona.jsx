import React, { useState } from 'react'

const Persona = () => {
    const [persona, setPersona] = useState(JSON.parse(localStorage.getItem('persona')) || {nombre: "pepito", apellido: "perez"})
    
    const handleInput = (ev) => {
        const {name, value} = ev.target
        setPersona({...persona, [name]: value})
        localStorage.setItem('persona', JSON.stringify({...persona, [name]: value}))
    }
  
    return (
    <div>
        <p>{persona.nombre}</p>
        <p>{persona.apellido}</p>
        <input name='nombre' value={persona.nombre} onChange={handleInput} />
        <input name='apellido' value={persona.apellido} onChange={handleInput} />
    </div>
  )
}

export default Persona