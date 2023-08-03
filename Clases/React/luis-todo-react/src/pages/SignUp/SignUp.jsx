import React, { useState } from "react";
// importar la hoja de estilos
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [inputNombreValor, setInputNombreValor] = useState("");
  const [inputCorreoValor, setInputCorreoValor] = useState("");
  const [inputPasswordValor, setInputPasswordValor] = useState("");

  // Navigate me ayuda a navegar atravez de mi pagina
  const navigate = useNavigate();

  function registrar() {
    //obtener local
    const usuarios = localStorage.getItem("users");
    let usuarioData = JSON.parse(usuarios) ?? []; //los converti a objeto
    //  { name: "", email: "", password: ""   }

    const indiceUsuario = usuarioData.findIndex((usuario) => {
      return usuario.email === inputCorreoValor;
    }); // Find Index: Busca el indice de un objeto que cumpla una condicion
    // Find index retorna el indice si lo encuentra y retorna un -1 si no lo encuentra
    if (indiceUsuario >= 0) {
      alert("Ya existe un usuario con ese correo");
      return;
    }

    if (
      inputNombreValor.trim() === "" ||
      inputCorreoValor.trim() === "" ||
      inputPasswordValor.trim() === ""
    ) {
      alert("La data tiene vacios");
      return;
    }

    //guardar en local
    const nuevoUsuario = {
      name: inputNombreValor,
      email: inputCorreoValor,
      password: inputPasswordValor,
    };
    usuarioData.push(nuevoUsuario); //El push agrega cosas a las listas / arrays

    localStorage.setItem("users", JSON.stringify(usuarioData));
    //redirigir

    //usuario registrado
    navigate("/login");
  }

  return (
    <div className="row black-background">
      <div className="col d-flex justify-content-center align-items-center signup-col">
        <div className="d-flex justify-content-center align-items-center flex-column gap-5 signup-container">
          <h1>Resgistrate en la App de Tareas</h1>

          <input
            value={inputNombreValor}
            onChange={(evento) => {
              setInputNombreValor(evento.target.value);
            }}
            type="text"
            placeholder="Nombre"
          />
          <input
            value={inputCorreoValor}
            onChange={(evento) => {
              setInputCorreoValor(evento.target.value);
            }}
            type="text"
            placeholder="Correo"
          />
          <input
            value={inputPasswordValor}
            onChange={(evento) => {
              setInputPasswordValor(evento.target.value);
            }}
            type="password"
            placeholder="Password"
          />

          <button onClick={registrar} className="btn btn-primary">
            Resgistrarme
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
