import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import "./PaginaPrincipal.css";

import {
  getPokemon,
  getPokemonThenCatch,
  getListPokemon,
} from "../../api/pokeapi";
import CartaPokemon from "../../componentes/CartaPokemon/CartaPokemon";

function PaginaPrincipal() {
  const [listPokemon, setListPokemon] = useState<any[]>([]); //name , url
  const [listPokemonData, setListPokemonData] = useState<any[]>([]); //{ name, moves, sprites, ..... }

  async function loadPokemon() {
    const datosListaPokemon = await getListPokemon();

    console.log("Pokemon LISTA:", datosListaPokemon);
    setListPokemon(datosListaPokemon.results);
  }

  async function loadConThenCatch() {
    //Datos del pokemon con el Await
    const datosPokemon = await getPokemon(45);
    console.log("Pokemon:", datosPokemon);

    //Datos del pokemon con la promesa
    const datosPoke = getPokemonThenCatch()
      .then((datos) => {
        console.log("Datos de l pokemon con then y catch:", datos);
      })
      .catch((error) => {
        return {
          error: "Hubo un error al llamar al api utilizando then catch",
        };
      });
  }
  // 1` Funcion a ejecutar,  2` es el array de dependencias "lo que veo o escucho por cambios"
  useEffect(() => {
    loadPokemon();
  }, []);

  async function cargarPokemon() {
    var listTemp = [];
    for (let index = 0; index < listPokemon.length; index++) {
      const poke = listPokemon[index];
      const pokeData = await getPokemon(poke.name);
      listTemp.push(pokeData);
      console.log("dataaaa", pokeData);
    }
    setListPokemonData(listTemp);
  }

  useEffect(() => {
    cargarPokemon();
  }, [listPokemon]);

  const navigate = useNavigate();

  function irDetalles(id: number | string) {
    navigate("/pokemon/" + id);
  }

  return (
    <div>
      <h1>pagina principal</h1>

      <ul className="pokemon-list__container">
        {listPokemonData.map((pokemon, indice) => (
          <CartaPokemon
            img={pokemon.sprites.front_default}
            key={indice}
            name={pokemon.name}
            types={pokemon.types}
          ></CartaPokemon>
        ))}
      </ul>
    </div>
  );
}

export default PaginaPrincipal;
