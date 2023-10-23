import React, { useContext } from 'react'
import { AppContext } from '../shared/AppContext'

const Contador = () => {
    const { search, counter }= useContext(AppContext);
  return (
    <div>
        <p>Search : {search}</p>
        <p>Counter : {counter}</p>
    </div>
  )
}

export default Contador