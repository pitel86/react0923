import React, { useContext } from 'react'
import { AppContext } from '../shared/AppContext'

const Pagination = () => {
    const {counter, setCounter, hola} = useContext(AppContext);
  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        <button onClick={() => setCounter(counter - 1)}>Subs</button>
        <button onClick={hola}>Di hola</button>
    </div>
  )
}

export default Pagination