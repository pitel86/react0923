import logo from './logo.svg';
import './App.css';
import Gallery from './components/Gallery';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [videoJuegos, setVideoJuegos] = useState([
    {
      name: "Elden Ring",
      image: "https://gaming-cdn.com/images/products/4824/380x218/elden-ring-pc-juego-steam-europe-cover.jpg?v=1697630400",
      price: "28.73",
      discount: "52"
    },
    {
      name: "Sonic Superstars",
      image: "https://gaming-cdn.com/images/products/14325/380x218/sonic-superstars-pc-juego-steam-cover.jpg?v=1697630400",
      price: "44.99",
      discount: "25"
    },
    {
      name: "Hearts of Iron IV: Arms Against Tyranny",
      image: "https://gaming-cdn.com/images/products/14283/380x218/hearts-of-iron-iv-arms-against-tyranny-pc-mac-juego-steam-cover.jpg?v=1697630400",
      price: "15.69",
      discount: "22"
    },
    {
      name: "Lies Of P Deluxe Edition",
      image: "https://gaming-cdn.com/images/products/14681/380x218/lies-of-p-deluxe-edition-deluxe-edition-pc-juego-steam-cover.jpg?v=1697630400",
      price: "49.97",
      discount: "29"
    },
    {
      name: "Los Sims 4 Rancho de Caballos",
      image: "https://gaming-cdn.com/images/products/14273/380x218/los-sims-4-rancho-de-caballos-pc-mac-juego-ea-app-cover.jpg?v=1697630400",
      price: "21.19",
      discount: "47"
    },
    {
      name: "HumanitZ",
      image: "https://gaming-cdn.com/images/products/15035/380x218/humanitz-pc-juego-steam-cover.jpg?v=1697630400",
      price: "9.49",
      discount: "53"
    },
    {
      name: "Assassin’s Creed Mirage",
      image: "https://gaming-cdn.com/images/products/9187/380x218/assassin-s-creed-mirage-pc-juego-ubisoft-connect-europe-cover.jpg?v=1697630400",
      price: "43.84",
      discount: "12"
    },
    {
      name: "Lords of the Fallen",
      image: "https://gaming-cdn.com/images/products/12715/380x218/lords-of-the-fallen-pc-juego-steam-europe-cover.jpg?v=1697630400",
      price: "43.89",
      discount: "27"
    },
    {
      name: "EA Sports FC 24",
      image: "https://gaming-cdn.com/images/products/13588/380x218/ea-sports-fc-24-pc-juego-ea-app-cover.jpg?v=1697630400",
      price: "47.69",
      discount: "32"
    }])

  const addVideoJuego = (juego) => {
    setVideoJuegos([...videoJuegos, juego])
  }

  return (
    <div className="App">
      <Gallery games={videoJuegos}/>
      <Form addGame={addVideoJuego}/>
    </div>
  );
}

export default App;
