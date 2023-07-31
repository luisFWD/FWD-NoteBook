import React from "react";
// importar la hoja de estilos

function SignUp() {
  return (
    <div className="row">
      <div className="col d-flex justify-content-center align-items-center flex-column gap-5">
        <h1>Resgistrate en la App de Tareas</h1>

        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Correo" />
        <input type="password" placeholder="Password" />
      </div>
    </div>
  );
}

export default SignUp;
