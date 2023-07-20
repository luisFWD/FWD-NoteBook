import React from "react";
import Comida from "../../components/Comida/Comida";
import "./MenuComidas.css";
import { useState, useEffect } from "react";
import { getComidas } from "../../api/apiComidas";

function MenuComidas() {
  const [listaComidas, setListaComidas] = useState([]);

  async function cargarComidas() {
    let resultadoComidas = await getComidas();
    console.log(resultadoComidas);
    setListaComidas(resultadoComidas.meals);
    //
  }

  useEffect(() => {
    cargarComidas();
  }, []);

  return (
    <div className="contenedor-comidas">
      <h1 className="menu-title">Menu + </h1>
      <div className="row"></div>
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
    </div>
  );
}

export default MenuComidas;
