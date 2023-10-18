import React from 'react'
import Image from '../image/Image'
import Info from '../info/Info'

const Game = ({game}) => {
  return (
    <div>
        <Image {...game}/>
        <Info {...game} />
    </div>
  )
}

export default Game