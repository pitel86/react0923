import React, { useState } from 'react'
import './ModoNoche.css'

const ModoNoche = () => {
    const time = new Date();
    const hour = time.getHours();
    const [active, setActive ] = useState((hour > 19 || hour < 9 )? true : false);

  
  return (
    <div className={active ? 'darkMode' : 'lightMode'}>
        <button onClick={() => setActive(!active)}>{active ? "☾" : "☀️"}</button>
        ModoNoche
        {hour}
    </div>
  )
}

export default ModoNoche