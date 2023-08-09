import React from "react";

import { useNavigate, Link, useParams } from "react-router-dom";

function PaginaDetalles() {
  const navigate = useNavigate();
  const { id } = useParams();
  function irInicio() {
    navigate("/");
  }

  return (
    <div>
      <h1>PaginaDetalles {id} </h1>
      <button onClick={irInicio}> Ir a inicio</button>

      <Link to={"/"}> Ir a inicio con link</Link>
    </div>
  );
}

export default PaginaDetalles;
