import "./ImagenOrnitorinco.css";

function ImagenOrnitorinco(props) {
  // Esta funcion era la que esta en el APP.js
  function imagen(tieneSombrero) {
    let imagen = "";
    if (tieneSombrero === true) {
      imagen = "/agentep.png";
    } else {
      imagen = "/perry.png";
    }

    return <img className="img-perry" src={imagen} alt="Platipus" />;
  }

  return <div> {imagen(props.tieneSombrero)}</div>;
}

export default ImagenOrnitorinco;
