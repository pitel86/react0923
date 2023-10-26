import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Texto from './components/Texto';
import Numeros from './components/Numeros';

function App() {
  return (
    <div className="App">
      <Counter />
      <Texto />
      <Numeros />
    </div>
  );
}

export default App;
