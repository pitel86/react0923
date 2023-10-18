import React from 'react'
import Game from '../game/Game'

const Gallery = ({juegos}) => {
  return (
    <div>
        {juegos.map((juego) => <Game game={juego}/>)}
    </div>
  )
}

export default Gallery