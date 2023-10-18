import React from 'react'

const Image = ({image, name}) => {
  return (
    <img src={image} alt={name} />
  )
}

export default Image