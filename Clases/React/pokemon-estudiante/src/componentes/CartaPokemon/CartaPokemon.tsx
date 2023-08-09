import React from "react";
import "./CartaPokemon.css";
import { getTypeColor } from "../../utils/pokemonTypeColor";

interface CartaPokemonProps {
  name: string;
  img: string;
  types: any[];
}

function CartaPokemon({ name, img, types }: CartaPokemonProps) {
  return (
    <li className="pokemon-card__container" tabIndex={0}>
      <ul className="pokemon-card__types">
        {types.map((type) => (
          <li style={{ backgroundColor: getTypeColor(type.type.name) }}>
            {type.type.name}
          </li>
        ))}
      </ul>
      <h2>{name}</h2>
      <button className="btn btn-primary">asd</button>
      <img src={img} alt="img pokemon" className="pokemon-card__img" />
    </li>
  );
}

export default CartaPokemon;
