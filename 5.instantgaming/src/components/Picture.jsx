import React from 'react'

const Picture = ({image, name}) => {
  return (
    <img src={image} alt={name} />
  )
}

export default Picture