import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
import Contador2 from './components/Contador2';
import { useState } from 'react';
import Datos from './components/Datos';

function App() {
  const [active, setActive] = useState(true)
  return (
    <div className="App">
      {active ? <Contador /> : <Contador2 />}
      <button onClick={() => setActive(!active)}>cambiar</button>

      <Datos />
    </div>
  );
}

export default App;
