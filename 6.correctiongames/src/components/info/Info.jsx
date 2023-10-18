import React from 'react'

const Info = ({name, price, discount}) => {
  return (
    <div>
        <p>{name}</p>
        <p>{price}</p>
        <p>{discount}</p>
    </div>
  )
}

export default Info