import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Elemento from './components/Elemento';
function App() {
  // let texto = "pepito";
  // USESTATE => [valor, funcionCambiaValor] = useState(VALORINICIAL)
  const [texto, setTexto ] = useState("Pepito")
  const [persona, setPersona] = useState({nombre: 'pepito', apellido: 'perez'})
  const handleInput = (evento, texto) => {
    const {name, value} = evento.target;
    console.log(texto)
    console.log(name, value)
    setPersona({ ...persona, [name]: value})  // aqui recibo en name nombre o apellido segun el input que cambie
  }

  const saludaMouseLeave = (nombre) =>  {
    console.log("hasta luego", nombre)
  }

  return (
    <div className="App" onMouseLeave={() => saludaMouseLeave("Lucas")}>
      <input name="nombre" value={persona.nombre} onChange={(evento) => handleInput(evento, "hola")} />
      <input name="apellido" value={persona.apellido} onChange={handleInput} />
      <p>{persona.nombre}</p>
      <p>{persona.apellido}</p>
      <Elemento />
    </div>
  );
}

export default App;
