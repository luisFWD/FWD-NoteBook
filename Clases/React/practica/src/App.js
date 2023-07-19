import logo from './logo.svg';
import './App.css';
import ImagenOrnitorinco from './components/ImagenOrnitorinco/ImagenOrnitorinco'
import Titulo from './components/Titulo/Titulo';
import Boton from './components/Boton/Boton';
import { useState } from 'react';
import ElementoLista from './components/ElementoLista/ElementoLista';
import Menu from './components/Menu/Menu';


function App() {

  const inventos = [
    "Magneto Gigante",
    "Destructinador",
    "Edificio Robot Gigante",
    "Desinfla-inador",
    "Acelerador de edad y tiempo (Age Accelerator-inator)",
    "Hipnotizador (The Slave-inator)",
    "Drill-inator",
    "Plans for magnet",
    "Desinteti-vaporizador",
    "Copy and Paste-inator",
    "Termite Controlling Helmet",
    "Melt-inator 6-5000-inator",
  ];


  //usamos el "hook" de useState
  const [tieneSombrero, setTieneSombrero] = useState(false);
  const [textoBoton, setTextoBoton] = useState("Poner Sombrero");



  function ponerSombrero() {
    setTieneSombrero(!tieneSombrero);

    if (!tieneSombrero === true) {
      setTextoBoton("Quitar Sombrero")
    }
    else {
      setTextoBoton("Poner Sombrero")
    }
  }
  return (
    <div className="App">
      <header className="App-header">

        <Menu></Menu>

        <Titulo tieneSombrero={tieneSombrero} >
          <ImagenOrnitorinco tieneSombrero={tieneSombrero}></ImagenOrnitorinco>
        </Titulo>

        <Boton onClick={ponerSombrero} nombreBoton={textoBoton} ></Boton>

        <img src='/Doof.png' alt='An evil Inventor'></img>
        <ul>
          {inventos.map((elemento, indice) => (
            <ElementoLista texto={elemento} key={indice}  ></ElementoLista>
          ))}
        </ul>


      </header>
    </div>
  );
}

export default App;
