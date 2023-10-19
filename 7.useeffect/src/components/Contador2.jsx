import React, { useEffect, useState } from 'react'

const Contador2 = () => {
    const [count, setCount] = useState(0);
    const [ver, setVer] = useState(true);
    const [ver2, setVer2] = useState(true);
    useEffect(() => {
        console.log("me pinto soy contaddor 2");

        return () => {
            console.log("me despinto soy contaddor 2");
        } //Algo que se ejecuta cuando se "quita" el componente
    },[ver,ver2])
  return (
    <div>
        {count}
        <button onClick={() => setCount(count + 5)}>+</button>
        <button onClick={() => setCount(count - 5)}>-</button>
        <button onClick={() => setVer(!ver)}>cambiar</button>
        <button onClick={() => setVer(!ver2)}>cambiar</button>
    </div>
  )
}

export default Contador2