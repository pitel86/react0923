import React, { useState } from 'react'
import Heroe from './Heroe'
import NewHero from './NewHero'

const Listado = () => {
    const [heroes, setHeroes] = useState([
        {
            nombre: "Clark Kent",
            alias: "Superman"
        },{
            nombre: "Bruce Wayne",
            alias: "Batman"
        },{
            nombre: "Peter parker",
            alias: "Spiderman"
        }
    ])

    const eliminarHeroe = (heroe) => {
        const newHeroes = heroes.filter((hero) => hero !== heroe);
        setHeroes([...newHeroes])
    }

    const addHero = (heroe) => {
        setHeroes([...heroes, heroe])
    }
  return (
    <div>
        {heroes.map((heroe, index) => { return (
            <div key={index}>
            <button onClick={() => eliminarHeroe(heroe)}>X</button>
            <Heroe heroe={heroe}/>
            </div>
        )} )}
        
        <NewHero addHero={addHero}/>
    </div>
  )
}

export default Listado