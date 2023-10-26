import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    // const [counter, setCounter] = useState(0)
  const {counter} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
        {counter}
        <button onClick={() => dispatch({type: "Add", payload: counter + 1})}>Add</button>
        <button onClick={() => dispatch({type: "Subs", payload: counter - 1})}>Subs</button>
        <button onClick={() => dispatch({type: "Reset", payload: 0})}>Reset</button>

        {/* <button onClick={() => setCounter(counter + 1)}>Add</button>
        <button onClick={() => setCounter(counter - 1)}>Subs</button>        
        <button onClick={() => setCounter(0)}>Reset</button> */}
    </div>
  )
}

export default Counter