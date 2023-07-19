import "./Titulo.css";

function Titulo(props) {
  function agente(tieneSombrero) {
    if (tieneSombrero === true) {
      return (
        <div>
          <h2>Perry el ornitorrico</h2>
          <h6>Musica Epica</h6>
        </div>
      );
    } else {
      return <h2>un ornitorrico</h2>;
    }
  }

  return (
    <div>
      <div> {agente(props.tieneSombrero)}</div>
      <div>{props.children}</div>
    </div>
  );
  // los props es un paquete de todas las propiedades de mi etiqueta
}

export default Titulo;
