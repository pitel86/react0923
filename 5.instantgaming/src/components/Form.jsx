import React, { useState } from 'react'
import Game from './Game'
import Input from './Input'

const Form = ({addGame}) => {
    const [game, setGame] = useState({
        name: "",
        image: "",
        price: "",
        discount: ""
    })

    const manejoDato = (name, value) => {
        console.log("form", name, value)
        setGame({...game, [name]: value});
    }

    const saveGame = () => {
        addGame(game);
    }
  return (
    <>
        <div>
            <Input nombre="name" valor={game.name} funcion={manejoDato}/>
            <Input nombre="image" valor={game.image} funcion={manejoDato}/>
            <Input nombre="price" valor={game.price} funcion={manejoDato}/>
            <Input nombre="discount" valor={game.discount} funcion={manejoDato}/>
            <button onClick={saveGame} >Guardar</button>
        </div>
        <Game juego={game} />
    </>
  )
}

export default Form