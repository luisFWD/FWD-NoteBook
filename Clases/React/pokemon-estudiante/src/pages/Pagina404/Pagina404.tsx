import React from "react";

import "./Pagina404.css";
import { Link } from "react-router-dom";

function Pagina404() {
  return (
    <div className="page404__container">
      <div className="page404__message-box">
        <div>
          <h1 className="page404__message-title">404</h1>
        </div>
        <img
          src="/404img.png"
          alt="Muestra un pokemon muy confuso como simbolo de que no se ha encontrado la página"
        />
        <Link to={"/"} className="page404__message-link">
          Ir a la Pagina de Inicio
        </Link>
      </div>
    </div>
  );
}

export default Pagina404;
