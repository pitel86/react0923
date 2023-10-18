import React from 'react'
import Discount from './Discount'
import Picture from './Picture'
import Info from './Info'

const Game = ({juego}) => {
  return (
    <div>
        <Picture {...juego}/>
        <Discount discount={juego.discount} />
        <Info {...juego} />
    </div>
  )
}

export default Game