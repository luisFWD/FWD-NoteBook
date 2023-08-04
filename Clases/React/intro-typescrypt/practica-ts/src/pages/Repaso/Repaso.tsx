import React, { useContext, useEffect, useState } from "react";
import "./Repaso.css";
import { useNavigate } from "react-router-dom";

import { getBayas } from "../../api/pokeapi";

function Repaso() {
  // Hook son funciones de react para hacer diversas
  // "use"

  // useEffect   =  detecta cambios
  // useState    =  guarda un estado
  // useNavigate =  me sirve para navegar por la pagina
  // useContext  =  pasa informacion atravez de componentes

  //=============================
  const [loQuieroGuardar, setLoQuieroGuardar] = useState("valor por defecto");

  //setLoQuieroGuardar("guardo este texto");

  //   console.log(loQuieroGuardar); //"guardo este texto"

  //=============================

  //const navigate = useNavigate();

  function irLogin() {
    //  navigate("/login");
  }

  //parametros : 1 una funcion , 2 es un array de dependencias (lo que veo y escucho por cambios)
  useEffect(() => {
    console.log("el estado cambio");
  }, []);

  const listaEmociones = "😠 🙂";

  //guardo informacion
  const varibleConstante = 3.141576;

  var varibleVar = false; //Tiene ambito global  {}
  let varibleLet = "holamundo"; //Tiene ambito de bloques {}

  //Estructuras de control    if else for while

  if (varibleVar) {
    //si varibleVar es true ejecuta esto
  } else if (varibleVar) {
  } else {
    //si varibleVar es falso ejecuta esto otro
  }

  //while repide codigo

  var contar = 3;

  while (contar < 5) {
    //do something
    console.log(contar);
    contar++;
  }

  //3 4

  //continue
  var contar2 = 0;

  //continue
  while (contar2 < 10) {
    //do something

    if (contar2 === 5) {
      console.log("vas por la mitad");
      contar2++;
      continue;
    }

    console.log(contar2);
    contar2++;
  }

  //3 4

  //break
  var contar3 = 0;

  while (contar3 < 10) {
    //do something

    if (contar3 === 5) {
      console.log("vas por la mitad");
      contar3++;
      break; //se sale
    }

    console.log(contar3);
    contar3++;
  }

  //break

  var contar4 = 0;
  while (contar4 < 5) {
    console.log(contar4);
    contar4++;
  }
  //0 1 2 3 4

  console.log("=============1=============");
  for (let index = 5; index < 5; index++) {
    if (index === 3) {
      continue;
    }
    console.log(index);
  }
  //0 1 2 4
  console.log("=============2=============");
  for (let index = 0; index < 5; index++) {
    if (index === 2) {
      break;
    }
    console.log(index);
  }
  console.log("==========================");

  var contar5 = 0;
  while (contar5 < 5) {
    contar5++;
    console.log(contar5);
  }
  //1 2 3 4 5

  useEffect(() => {
    async function esperarBayas() {
      const datosBayas = await getBayas();
      console.log(datosBayas);
      return datosBayas;
    }

    esperarBayas();
  }, []);

  return (
    <div>
      <div> Div Contenerdor generico</div>

      <nav>
        <ul>
          <li>menu</li>
          <li>menu1</li>
          <li>enu2</li>
          <li>asd</li>
          <li>asd</li>
          <li>ad</li>
        </ul>
      </nav>

      <h1>Heading / Titulo de nivel 1</h1>
      <h2>nivel 2</h2>
      <h3>nivel 3</h3>
      <h4>nivel 4</h4>
      <h5>nivel 5</h5>
      <h6>nivel 6</h6>

      <div>SEO</div>
      <div>Search Engine Optimization</div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
        quidem animi tenetur, ipsam minima sint nesciunt? Dignissimos minima
        assumenda qui asperiores molestiae eum, quibusdam sunt, dolore nemo,
        libero cupiditate sit.
      </p>

      <button>Soy un boton</button>
      <div> a o anchor</div>
      <a href="https://google.com">Ir a google</a>

      <br />
      <hr />
      <br />

      <input type="text" placeholder="Soy un texto de ayuda" />
      <input type="number" placeholder="Ingrese un number" />
      <input type="password" placeholder="Ingrese una contrasennia" />
      <input type="color" placeholder="Pick a color" />
      <input type="date" placeholder="Pick a date" />
      <input type="button" placeholder="soy u boton" />
      <input type="checkbox" placeholder="Pick a color" />
      <input type="email" placeholder="Pick a email" />
      <input type="radio" placeholder="Pick a a radio" />
      <input type="range" placeholder="Pick a range" />
      <input type="file" accept="png" placeholder="Pick a range" />

      <br />
      <hr />
      <br />

      <ol>
        <li>ol = ordered list</li>
        <li>li = list item</li>
      </ol>

      <ul>
        <li>ul = unOrdered list</li>
        <li>li = list item</li>
      </ul>

      <ul className="mi-list">
        <li>oculto los puntos con </li>
        <li>list-style: none</li>
      </ul>

      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Titulo columna</th>
            <th>TR = TABLE ROW</th>
          </tr>
          <tr>
            <td>datos de la tabla</td>
            <td>TD = TABLE DATA</td>
          </tr>
        </tbody>
      </table>

      <br />
      <hr />
      <br />

      <form onSubmit={() => {}}>
        <input type="text" placeholder="texto" />

        <button type="submit">Boton enviar</button>
      </form>

      <img src="/fire.gif" alt="Imagen animada de una hoguera" />

      <audio id="audio" controls>
        <source src={process.env.PUBLIC_URL + "/arcade.wav"} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      <div id="cajaId" className="clase1 claseCaja">
        <div className="clase2 clase3 clase4">Hola</div>
      </div>

      <br />
      <hr />
      <br />

      <div className="papa">
        Soy el padre
        <div className="hijo">Soy el hijo</div>
        <p>texto del p</p>
      </div>

      <div className="etiquetaA">Mi tietiqueta con pseudoclases</div>

      <br />
      <hr />
      <br />

      <div className="caja-container">
        <div className="caja-A">A</div>
        <div className="caja-B">B</div>
      </div>

      <br />
      <hr />
      <br />

      <div className="caja-container-grid">
        <div className="caja-g">A</div>
        <div className="caja-g">B</div>
        <div className="caja-g">C</div>
        <div className="caja-g">D</div>
        <div className="caja-g">E</div>
        <div className="caja-g">F</div>
        <div className="caja-g">G</div>
      </div>
    </div>
  );
}

export default Repaso;
