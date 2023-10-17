import logo from './logo.svg';
import './App.css';
import Nombre from './components/Nombre';
import Persona from './components/Persona';
import Listado from './components/Listado';
import ModoNoche from './components/ModoNoche';

function App() {
  
  const saluda = () => {
    console.log("hola holita")
}

  return (
    <div className="App">
      <Nombre funcion={saluda}/>
      <Persona />
      <Listado />
      <ModoNoche />
    </div>
  );
}

export default App;
