import "./ToDoApp.css";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskItem from "../../components/TaskItem/TaskItem";
import { useNavigate } from "react-router-dom";

export default function ToDoApp() {
  function getLocalStorage() {
    // localStorage.getItem
    const listaDelStorage = localStorage.getItem("listaTareas");
    const listaConvertida = JSON.parse(listaDelStorage);
    return listaConvertida;
  }

  const [listaTareas, setListaTareas] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  function saveLocalStorage() {
    // localStorage.setItem
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
  }

  //Es un hook para detectar cuando algo cambia
  // useEffect(() => {
  //   saveLocalStorage();
  // }, [listaTareas]);

  //Escuchar por primera vez la pagina cargar
  // useEffect(() => {
  //   getLocalStorage();
  // }, []);
 function actualizarTareasConUsuario(listaNueva) {
  const usuario = sessionStorage.getItem("sesion");
    const usuarioData = JSON.parse(usuario);
    if (usuarioData) {
      localStorage.setItem(
        "listaTareas" + usuarioData.name.trim(),
        JSON.stringify(listaNueva)
      );
    }
 }
  //agregar
  function agregarTareas() {
    let listaNueva = [...listaTareas]; //copiar lista tareas
    listaNueva.push({
      id: uuidv4(), 
      texto: inputValue,
      check: false,
    });
    setListaTareas(listaNueva);
    console.log(listaNueva);

    actualizarTareasConUsuario(listaNueva);
  }

  useEffect(() => {
    const usuario = sessionStorage.getItem("sesion");
    const usuarioData = JSON.parse(usuario);

    if (usuarioData) {
      const tareasUsuario = localStorage.getItem(
        "listaTareas" + usuarioData.name.trim()
      );
      const tareasUsuarioObj = JSON.parse(tareasUsuario) ?? [];
      setListaTareas(tareasUsuarioObj);
    } else {
      navigate("/login");
    }
  }, []);

  function inputChange(event) {
    setInputValue(event.target.value);
  }

  function eliminar(id) {
    let listaNueva = [...listaTareas]; //copiar lista tareas
    //// eliminar la tarea de la lista nueva for if
    setListaTareas(listaNueva);

    actualizarTareasConUsuario(listaNueva);
    console.log(listaNueva);
  }

  function checarTarea() {
    let listaNueva = [...listaTareas]; //copiar lista tareas
    actualizarTareasConUsuario(listaNueva);
  }

  return (
    <div>
      <h2>PaginaToDoApp 2</h2>
      <div className="control-panel">
        <input
          type="text"
          value={inputValue}
          onChange={inputChange}
          className="add-input"
        />
        <button onClick={agregarTareas} className="add-btn">
          Click me
        </button>
      </div>
      <ul className="contenedorTareas">
        {listaTareas.map((tarea, index) => (
          <TaskItem
            nombreFuncionEliminar={eliminar}
            nombrePropiedad={tarea.texto}
            key={index}
          ></TaskItem>
        ))}
      </ul>

      <audio controls>
        <source src={process.env.PUBLIC_URL + "/arcade.wav"} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
