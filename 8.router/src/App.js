import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Locations from './pages/Locations';
import Navbar from './components/Navbar';
import CharactersDetail from './pages/CharactersDetail';
import CharactersDetailByName from './pages/CharactersDetailByName';

function App() {
  return (
    <Router>
      
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='characters' element={<Characters />}/>
        <Route path='characters/:id' element={<CharactersDetail />}/>
        <Route path='characters/name/:name' element={<CharactersDetailByName />}/>
        <Route path='locations' element={<Locations />}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
