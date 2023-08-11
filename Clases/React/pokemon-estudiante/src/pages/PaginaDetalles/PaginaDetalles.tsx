import React, { useEffect, useState } from "react";
import "./PaginaDetalles.css";
import { useNavigate, Link, useParams } from "react-router-dom";
import { getEvolutionChain, getPokemon } from "../../api/pokeapi";
import { getTypeColor } from "../../utils/pokemonTypeColor";

function PaginaDetalles() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [pokemonDetails, setPokemonDetails] = useState<any>();
  const [pokemonEvolutions, setPokemonEvolutions] = useState<any[]>([]);

  function irInicio() {
    navigate("/");
  }

  async function getDetails() {
    const pokemonData = await getPokemon(id);
    setPokemonDetails(pokemonData);

    //erase
    setPokemonEvolutions([
      pokemonData,
      pokemonData,
      pokemonData,
      pokemonData,
      pokemonData,
      pokemonData,
      pokemonData,
      pokemonData,
    ]);
  }

  useEffect(() => {
    getDetails();
    getEvolutionChain(id);
  }, [id]);
  return (
    <div className="details-page__container">
      {pokemonDetails && (
        <div className="details-pokemon__card">
          <div className="life_container">
            <div className="pokemon-info_container">
              <div className="pokemon-name_container">
                <p className="pokemon-name">{pokemonDetails.name}</p>
                <p className="pokemon-gender">
                  <i className="bi bi-gender-female"></i>
                </p>
              </div>
              <p className="pokemon-exp">
                Exp: {pokemonDetails.base_experience}
              </p>
              <p className="pokemon-level">#{pokemonDetails.id}</p>
            </div>
            <div className="pokemon-bars">
              <p className="pokemon-help">
                HP: {pokemonDetails.stats[0].base_stat}/
                {pokemonDetails.stats[0].base_stat}
              </p>
            </div>
            <ul className="pokemon-types">
              {pokemonDetails.types.map((type: any, index: number) => (
                <li
                  style={{ backgroundColor: getTypeColor(type.type.name) }}
                  key={index}
                >
                  {type.type.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="evolutions-container">
            <ul className="evolutions-container__list">
              {pokemonEvolutions.map((evolution, index) => (
                <li key={index}>
                  <img
                    className="pokemon-evolution"
                    src={evolution.sprites.front_default}
                    alt="Pokemon evolution"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="trainer-container">
            <img src="/BW_Hilbert_Back.png" alt="" className="trainer-img" />
            <img
              src={pokemonDetails.sprites.front_default}
              alt=""
              className="pokemon-img"
            />
          </div>
        </div>
      )}

      {/* <button onClick={irInicio}> Ir a inicio</button>
      <Link to={"/"}> Ir a inicio con link</Link> */}
    </div>
  );
}

export default PaginaDetalles;
