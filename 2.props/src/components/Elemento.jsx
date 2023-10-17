import React from 'react'

const Elemento = ({clase, children}) => { //Children es lo que metemos entre apertura y cierre en etiquetas
  return (
    <div className={clase}>{children}</div>
  )
}

export default Elemento