import React, { useEffect, useState } from 'react'

const Contador = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("me pinto soy contaddor 1");

        
        return () => {
            console.log("me despinto soy contaddor 1");
        } //Algo que se ejecuta cuando se "quita" el componente
    },[])
  return (
    <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Contador