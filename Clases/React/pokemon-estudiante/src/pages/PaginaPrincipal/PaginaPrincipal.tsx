import React, { useEffect, useState } from "react";

import {
  getPokemon,
  getPokemonThenCatch,
  get20Pokemon,
} from "../../api/pokeapi";

function PaginaPrincipal() {
  const [pokemon, setPokemon] = useState<any[]>([]);

  async function getPokemonss() {
    const datosPokemon = await get20Pokemon();

    setPokemon(datosPokemon.results);
  }

  async function loadPokemon() {
    //Datos del pokemon con el Await
    const datosPokemon = await getPokemon();
    console.log("Pokemon:", datosPokemon);
    setPokemon([datosPokemon]);

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

  return (
    <div>
      <h1>pagina principal</h1>
    </div>
  );
}

export default PaginaPrincipal;
