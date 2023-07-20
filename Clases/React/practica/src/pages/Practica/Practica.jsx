import React from "react";
import { useState, useEffect } from "react";
import Boton from "../../components/Boton/Boton";
import Titulo from "../../components/Titulo/Titulo";
import ImagenOrnitorinco from "../../components/ImagenOrnitorinco/ImagenOrnitorinco";
import ElementoLista from "../../components/ElementoLista/ElementoLista";

function Practica() {
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

  const [contador, setContador] = useState(0);

  //useEffect( /*funcioncallback*/  ,  /* lista dependencias */)
  useEffect(() => {
    document.title = " Count: " + contador;
  }, [contador]);

  function aumentarContador() {
    setContador(contador + 1);
  }

  function ponerSombrero() {
    setTieneSombrero(!tieneSombrero);

    if (!tieneSombrero === true) {
      setTextoBoton("Quitar Sombrero");
    } else {
      setTextoBoton("Poner Sombrero");
    }
  }
  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    const cronometroId = setInterval(() => {
      setTiempo(tiempo + 1);
      document.title = " Count: " + tiempo;
    }, 1000);

    //funcion limpieza
    return () => {
      clearInterval(cronometroId);
    };
  }, [tiempo]);

  return (
    <div>
      <p>{tiempo}</p>

      <Boton onClick={aumentarContador} nombreBoton="Aumentar Contador"></Boton>
      <Titulo tieneSombrero={tieneSombrero}>
        <ImagenOrnitorinco tieneSombrero={tieneSombrero}></ImagenOrnitorinco>
      </Titulo>
      <Boton onClick={ponerSombrero} nombreBoton={textoBoton}></Boton>

      <img src="/Doof.png" alt="An evil Inventor"></img>
      <ul>
        {inventos.map((elemento, indice) => (
          <ElementoLista texto={elemento} key={indice}></ElementoLista>
        ))}
      </ul>
    </div>
  );
}

export default Practica;
