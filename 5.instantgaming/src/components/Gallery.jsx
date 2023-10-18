import React from 'react'
import Game from './Game'

const Gallery = ({games}) => {
  return (
    <div>
        {games.map((game, index) => <Game key={index} juego={game}/>)}
    </div>
  )
}

export default Gallery