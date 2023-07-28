import React from "react";
import Comida from "../../components/Comida/Comida";
import "./MenuComidas.css";
import { useState, useEffect } from "react";
import { getComidas } from "../../api/apiComidas";
import Menu from "../../components/Menu/Menu";
function MenuComidas() {
  const [listaComidas, setListaComidas] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  async function cargarComidas(letra = "a") {
    let resultadoComidas = await getComidas(letra);
    console.log(resultadoComidas);
    setListaComidas(resultadoComidas.meals ?? []);

    //
  }

  useEffect(() => {
    cargarComidas();
  }, []);

  return (
    <div className="menu-comidas__page">
      <Menu searchFood={cargarComidas}></Menu>
      <div className="contenedor-comidas">
        <h1 className="menu-title">Menu + </h1>
        <div className="row"></div>
        {listaComidas.length > 0 ? (
          <ul>
            {listaComidas.map((elemento, index) => (
              <li className="li-platillo" key={index}>
                <Comida
                  precio={elemento.strMeal.length * 100}
                  calorias={elemento.idMeal}
                  image={elemento.strMealThumb}
                  name={elemento.strMeal}
                ></Comida>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <h6>No hay platillos</h6>
          </div>
        )}

        {errorMessage ? <div>{errorMessage}</div> : <></>}
      </div>
    </div>
  );
}

export default MenuComidas;
