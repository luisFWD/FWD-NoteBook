import "./Comida.css";

function Comida(props) {
  return (
    <div className="platillo row d-flex">
      <div className="col-6 d-flex justify-content-center align-items-center ">
        <img className="imagen-comida" src={props.image} alt="comida" />
      </div>
      <div className="col-6">
        <h2 className="food-name">{props.name}</h2>
        <p className="food-description">
          Calorias: <b>{props.calorias}</b>{" "}
        </p>
        <p className="food-description">
          Precio: <b> {props.precio} </b>{" "}
        </p>
      </div>
    </div>
  );
}

export default Comida;
