import logo from './logo.svg';
import './App.css';
import Listado from './components/Listado';
import Button from './components/Button';
import Elemento from './components/Elemento';

function App() {
  const listado1 = ["pepe", "juan", "maria"]
  const listado2 = ["luis", "rodrigo", "ana"]
  const buttonProperties =  {
    texto: "Soy button1",
    clase: "redWhite",
  }

  const buttonProperties2 =  {
    texto: "Soy button2",
    clase: "blueWhite",
  }
  return (
    <div className="App">
      <Listado lista={listado1} colorin="red"/>
      <Listado lista={listado2} colorin="green"/>
      <Button {...buttonProperties}/> {/* --> convierte mi objeto en props --> texto="SoyButton1" class ="redWhite" */}
      <Button {...buttonProperties2}/>
      <Button clase="red" texto="asdads" link="asdasdad" alt="asdads" />
      <Elemento clase="pepito">Soy un elemento</Elemento>
      <Elemento> {/* Todo lo que meta entre etiquetas lo recogemos en una prop llamada children */}
        <Button {...buttonProperties2}/>
        <Listado lista={listado2} colorin="green"/>
      </Elemento>
    </div>
  );
}

export default App;
