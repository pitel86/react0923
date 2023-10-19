import React from 'react'
import { useContext } from 'react'
import { MiContexto } from '../shared/Context'

const Buscardor = () => {

  const {setTexto} = useContext(MiContexto);
  
  return (
    <input onChange={(ev) => setTexto(ev.target.value)} />
  )
}

export default Buscardor