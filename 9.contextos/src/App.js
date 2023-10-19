import logo from './logo.svg';
import './App.css';
import { MiContexto } from './shared/Context';
import { useState } from 'react';
import Buscardor from './components/Buscardor';
import Gallery from './components/Gallery';
import Pagination from './components/Pagination';

function App() {
  const [counter, setCounter] = useState(0)
  const [texto, setTexto] = useState("")
  return (
    //proveemos nuestro contexto en toda la app
    <MiContexto.Provider value={{counter, setCounter, texto, setTexto}}>
      <div className="App">
        <Buscardor />
        <Pagination />
        <Gallery />
        {/* <OtroContexto.Provider>
          <Componente1></Componente1>
          <Componente2></Componente2>
          <Componente3></Componente3>
        </OtroContexto.Provider>*/}
         
      </div>
    </MiContexto.Provider>
    
  );
}

export default App;
