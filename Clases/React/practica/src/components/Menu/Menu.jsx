import "./Menu.css";
import { useState } from "react";
function Menu(props) {
  const [session, setSession] = useState(false);
  const [textoSesion, setTextoSesion] = useState("Iniciar");

  function iniciarSesion() {
    setSession(!session);

    if (!session === true) {
      setTextoSesion("Cerrar");
    } else {
      setTextoSesion("Iniciar");
    }
  }

  const [inputValue, setInputValue] = useState("");

  function inputChange(event) {
    setInputValue(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    props.searchFood(inputValue);
  }

  function detectarTecla(event) {
    // event.preventDefault();
    if (event.key === "Enter" || event.keyCode === 13) {
      search(event);
    }
  }

  return (
    <nav className="navbar bg-body-tertiary menu ">
      <div className="container-fluid d-flex justify-content-end">
        <form className="d-flex " role="search">
          {props.searchFood ? (
            <>
              <input
                id="inputSearchFood"
                className="form-control me-2"
                type="search"
                placeholder="Search Food"
                aria-label="Search"
                value={inputValue}
                maxLength={1}
                onChange={inputChange}
                onKeyDown={detectarTecla}
              />
            </>
          ) : (
            <></>
          )}

          <button
            className="btn btn-outline-success"
            type="button"
            onClick={iniciarSesion}
          >
            {textoSesion}
          </button>
          {props.children}
        </form>
      </div>
    </nav>
  );
}

export default Menu;
