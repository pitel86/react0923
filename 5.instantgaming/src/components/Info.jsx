import React from 'react'

const Info = ({name, price}) => {
  return (
    <div>
        <p>{name}</p>
        <p className='price'>{price}</p>
    </div>
  )
}

export default Info