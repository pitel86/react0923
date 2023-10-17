import React, { useState } from 'react'

const NewHero = ({addHero}) => {
    const [hero, setHero] = useState({
        nombre: "",
        alias: ""
    })

    const handleInput = (ev) => {
        const {name, value} = ev.target;
        setHero({...hero, [name]: value})
    }
  return (
    <div>
        <input name="nombre" value={hero.nombre} onChange={handleInput}/>
        <input name="alias" value={hero.alias} onChange={handleInput}/>
        <button onClick={()=>addHero(hero)}>Añadir</button>
    </div>
  )
}

export default NewHero