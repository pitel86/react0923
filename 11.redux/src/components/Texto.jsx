import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Texto = () => {

    const { texto } = useSelector( state => state.texto )

    const dispatch = useDispatch();
  return (
    <div>
        {texto}
        <input type="text" value={texto}   onChange={(ev) => dispatch({type: "changeName", payload: ev.target.value})} />
    </div>
  )
}

export default Texto