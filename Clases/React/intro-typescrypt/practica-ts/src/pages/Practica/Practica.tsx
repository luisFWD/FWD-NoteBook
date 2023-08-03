import React from "react";
import "./Practica.css";
import Movie from "../../components/Movie/Movie";

function Practica() {
  const numero: number = 5;
  const texto: string = "Hola mundo";
  const booleano: boolean = true;

  //forma 1 de typo de lista
  const listaEstudiantes: Array<string> = ["Hugo", "Paco", "Luis"];
  //forma 2 de typo de lista
  const listaNotas: number[] = [90, 99, 100];

  //Tipo
  interface Estudiante {
    name: string;
    grade: number | string; // El palito | me ayuda a que una propiedad pueda tener mas de un tipo
    graduated?: boolean; // El signo de pregunta vuelve a la propiedad como opcional
  }
  //Objecto del tipo estudiante
  const luis: Estudiante = {
    name: "luis",
    grade: 65,
    graduated: true,
  };
  // un array de estudiantes
  const arrayEstudiante: Estudiante[] = [{ name: "hugo", grade: "101" }];
  arrayEstudiante[0].name = "Maria de los Santos";

  // un array de Chocolate =================================
  interface Chocolate {
    nombre: string;
    tipo: string;
  }
  const chocolates: Array<Chocolate> = [
    { nombre: "Chocolate con leche", tipo: "Con leche" },
    { nombre: "Chocolate negro", tipo: "Amargo" },
    { nombre: "Chocolate blanco", tipo: "Blanco" },
    { nombre: "Chocolate con avellanas", tipo: "Relleno" },
    { nombre: "Chocolate de menta", tipo: "Saborizado" },
  ];

  // un array de Frutas =================================
  interface Frutas {
    nombre: string;
    precio: number;
  }

  const frutas: Frutas[] = [
    { nombre: "Manzana", precio: 5 },
    { nombre: "Plátano", precio: 3 },
    { nombre: "Naranja", precio: 6 },
    { nombre: "Uva", precio: 8 },
    { nombre: "Pera", precio: 4 },
  ];

  // un array de Peliculas =================================
  interface Pelicula {
    movie: string;
    year: number;
    oscar: boolean;
  }
  const peliculas: Pelicula[] = [
    { movie: "El Padrino", year: 1972, oscar: true },
    { movie: "Titanic", year: 1997, oscar: true },
    { movie: "El Rey León", year: 1994, oscar: false },
    { movie: "La La Land", year: 2016, oscar: false },
    { movie: "Inception", year: 2010, oscar: true },
  ];

  // un array de Carros =================================

  const modelosDeAutos = [
    { nombre: "Ford Mustang", fabricacion: 1964, deportivo: true },
    { nombre: "Toyota Corolla", fabricacion: 1966, deportivo: false },
    { nombre: "Chevrolet Camaro", fabricacion: 1966, deportivo: true },
    { nombre: "Volkswagen Beetle", fabricacion: 1938, deportivo: false },
    { nombre: "Porsche 911", fabricacion: 1964, deportivo: true },
  ];

  return (
    <div className="topic_container">
      <ul className="topic-list">
        <li>{numero} es de tipo number</li>
        <li>{texto} es de tipo string</li>
        <li>{booleano} es de tipo booleano</li>
      </ul>

      <ul className="topic-list">
        {listaEstudiantes.map((estudiante, indice) => (
          <li key={indice}>{estudiante}</li>
        ))}
      </ul>

      <ul className="topic-list">
        {listaNotas.map((nota, indice) => (
          <li key={indice}>{nota}</li>
        ))}
      </ul>

      <ul className="topic-list">
        {listaNotas.map((note, indice) => (
          <li key={indice}>{note}</li>
        ))}
      </ul>

      <ul className="topic-list">
        {arrayEstudiante.map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>

      <ul className="topic-list">
        {frutas.map((fruta, indice) => (
          <li key={indice}>
            {fruta.nombre} Precio: {fruta.precio}
          </li>
        ))}
      </ul>

      <ul className="topic-list">
        {peliculas.map((pelicula, indice) => (
          <li key={indice}>
            {pelicula.movie} {pelicula.year} {pelicula.oscar ? "🏆" : ""}
          </li>
        ))}
      </ul>

      <ul>
        {peliculas.map((pelicula, indice) => (
          <Movie
            key={indice}
            movie={pelicula.movie}
            year={pelicula.year}
            oscar={pelicula.oscar}
          ></Movie>
        ))}
      </ul>
    </div>
  );
}

export default Practica;
