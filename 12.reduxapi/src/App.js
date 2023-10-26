import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Characters from './pages/Characters';
import Locations from './pages/Locations';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path='' element={<Characters/>} />
          <Route path='locations' element={<Locations/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
