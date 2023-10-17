import React from 'react'

const Enlace = (props) => {
  return (
    <>
        {props.link && <p>Tengo props</p>}
        {props.link ? <a href={props.link} alt={props.alt}>Enlace</a> : <p>Enlace</p>}
    </>
  )
}

export default Enlace