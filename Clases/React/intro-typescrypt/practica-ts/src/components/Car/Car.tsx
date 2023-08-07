import React from "react";
import "./Car.css";

interface CarProps {
  nombre: string;
  fabricacion: number;
  deportivo: boolean;
}
//          Destructuring
function Car({ nombre, fabricacion, deportivo }: CarProps) {
  return (
    <div className="card-automovil">
      <h2>{nombre}</h2>
      <p>{fabricacion}</p>
      {deportivo && <p className="car-emoji">🏎️</p>}
    </div>
  );
}

export default Car;
