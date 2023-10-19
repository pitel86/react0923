import React from 'react'
import { useContext } from 'react'
import { MiContexto } from '../shared/Context'

const Pagination = () => {
    const {counter, setCounter} = useContext(MiContexto);

  return (
    <div>
        <button onClick={() => setCounter(counter - 1)}>&lt;</button>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>&gt;</button>
    </div>
  )
}

export default Pagination