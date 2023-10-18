import React, { useState } from 'react'
import Game from '../game/Game'

const Form = ({addNewGame}) => {
    const [newGame, setNewGame ] = useState({
        name: '',
        image: '',
        price: '',
        discount: ''
    })

    const handleInput = (ev) => {
        const {name, value} = ev.target
        setNewGame({...newGame, [name]: value})
    }

    const onSubmit = (ev) => {
        ev.preventDefault()
       addNewGame(newGame)
    }

  return (
    <>
        <form>
            {/* <input name="name" onChange={(ev) => setNewGame({...newGame, name: ev.target.value})}/> */}
            <input name="name" onChange={handleInput}/> 
            <input name="image" onChange={handleInput}/>
            <input name="price" onChange={handleInput}/>
            <input name="discount" onChange={handleInput}/>
            <button onClick={onSubmit}>Añadir</button>
        </form>
        <Game game={newGame} />
    </>
  )
}

export default Form