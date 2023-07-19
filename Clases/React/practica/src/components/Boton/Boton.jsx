import "./Boton.css";

function Boton(props) {
  return (
    <div>
      <button onClick={props.onClick} className="btn-sombrero">
        {props.nombreBoton}

        <img alt="" src="/sombreroPerry.png"></img>
      </button>
    </div>
  );
}

export default Boton;
