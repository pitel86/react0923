import './App.css';
import Buscador from './components/Buscador';
import Contador from './components/Contador';
import Pagination from './components/Pagination';
import { AppContext } from './shared/AppContext';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  const [search, setSearch] = useState("")

  const hola = () => {
    console.log("Hola")
  }
  
  return (
    <AppContext.Provider value={{counter, setCounter, search, setSearch, hola}}>
      <div className="App">
        <Buscador />
        <Contador />
        <Pagination />
      </div>
    </AppContext.Provider>
  );
}

export default App;
