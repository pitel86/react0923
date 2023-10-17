import React from 'react'
import Enlace from './Enlace'

const Button = ({texto, clase, ...resto}) => {
    console.log(resto)
  return (
    <>
        <div className={clase}>{texto}</div>
        <Enlace {...resto}/>
    </>
  )
}

export default Button