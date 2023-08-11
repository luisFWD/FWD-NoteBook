import React from "react";
import "./CartaPokemon.css";
import { getTypeColor } from "../../utils/pokemonTypeColor";

interface CartaPokemonProps {
  name: string;
  img: string;
  types: any[];
  funcionClick: (id: number | string) => void;
}

function CartaPokemon({ name, img, types, funcionClick }: CartaPokemonProps) {
  return (
    <li
      className="pokemon-card__container"
      tabIndex={0}
      onClick={() => {
        funcionClick(name);
      }}
    >
      <ul className="ul-types">
        {types.map((type, indice) => (
          <li
            key={indice}
            style={{ backgroundColor: getTypeColor(type.type.name) }}
          >
            {type.type.name}
          </li>
        ))}
      </ul>

      <h2>{name}</h2>

      <img src={img} alt="img pokemon" className="pokemon-card__img" />
    </li>
  );
}

export default CartaPokemon;
