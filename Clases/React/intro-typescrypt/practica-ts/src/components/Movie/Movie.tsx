import React from "react";
import "./Movie.css";
interface MovieProps {
  movie: string;
  year: number;
  oscar: boolean;
}

function Movie({ movie, year, oscar }: MovieProps) {
  return (
    <li className="movie-container">
      <h2> {movie} </h2>
      <p> {year} </p>

      {/* <p className="p-oscar">{oscar ? "ganador" : ""}</p> */}

      {/* Rederizado condicional */}
      {oscar && <p className="p-oscar"> 🏆 </p>}

      {/* Rederizado condicional */}
      {!oscar ? <p>no hay oscar</p> : <></>}
    </li>
  );
}

export default Movie;
