import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [loginEmailValor, setLoginEmailValor] = useState("");
  const [loginPasswordValor, setLoginPasswordValor] = useState("");

  const navigate = useNavigate();

  function iniciarSesion(evento) {
    evento.preventDefault();
    // optener la lista de users

    const usuarios = localStorage.getItem("users");
    let usuarioData = JSON.parse(usuarios) ?? []; //los converti a objeto

    //comparar contrasennia
    const indiceUsuario = usuarioData.findIndex((usuario) => {
      return (
        (usuario.email === loginEmailValor ||
          usuario.name === loginEmailValor) &&
        usuario.password === loginPasswordValor
      );
    });
    //si son iguales iniciar sesion
    if (indiceUsuario >= 0) {
      const user = usuarioData[indiceUsuario];
      //SESSION Storage

      sessionStorage.setItem("sesion", JSON.stringify(user));

      navigate("/tareas/" + user.name);
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={iniciarSesion}>
        <input
          value={loginEmailValor}
          onChange={(evento) => {
            setLoginEmailValor(evento.target.value);

            console.log("valit,", evento.target.checkValidity());
          }}
          type="text"
          placeholder="Correo"
        />
        <input
          value={loginPasswordValor}
          onChange={(evento) => {
            setLoginPasswordValor(evento.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <button type="summit">Iniciar Sesion</button>
      </form>
    </div>
  );
}

export default Login;
