//import  { lo que quiero importar  }   from "de donde" "archivo"
import { obternerTareas, postTareas, marcarTarea, borrarTarea, buscarTareas } from './locarServer.js';


var listaTareasGlobal = [];

async function crearTareasIniciales() {

    listaTareasGlobal = await obternerTareas();
    console.log("Mi lista al iniciar la aplicacion: ", listaTareasGlobal);

    for (let indiceTarea = 0; indiceTarea < listaTareasGlobal.length; indiceTarea++) {
        const tarea = listaTareasGlobal[indiceTarea];
        const textoTarea = tarea.task;
        //crear tarea es la funcioa\n de cada uno
        addTodo(textoTarea, tarea.id, tarea.check);
    }
}



// var postTareasResultado = await postTareas("Sacar al gato");
// console.log(" POST RESULTADO =", postTareasResultado);

//var misTareas = await obternerTareas();
//console.log("Mis tareas", misTareas)





// var resultadoEliminar = await borrarTarea("e905aa0d-a90d-43a0-b7aa-d327d09f3936");
// console.log("Elimino", resultadoEliminar)



var listaTareasGlobal = [];

var todoList = [
    // {
    //     id: 
    //     todoText: "todo"
    //     isComplete: 
    // }
];



//  document.cookie










function name() {
    console.log("Hola")
}
document.getElementById("onclick").addEventListener("click", name)



var counter = 0;
var etiquetaNoTareas = document.getElementById("notaNoTareas");
var todoContainer = document.getElementById("todo-container");
var addTodoInput = document.getElementById("add-todo-input");
var addTodoButton = document.getElementById("add-todo-button");
var todoCounterLabel = document.getElementById("todo-counter-label");


function generateRandomPastelColor() {
    //var hue = Math.floor(Math.random() * 360);
    var max = 360;
    var min = 1;
    var hue = Math.floor(Math.random() * (max - min + 1)) + min;
    var pastelColor = 'hsl(' + hue + ', 100%, 80%)';
    return pastelColor;
}


function countTareas() {
    var listaTareas = document.querySelectorAll(".todo-item");
    console.log("Tareas = ", listaTareas.length);

    if (listaTareas.length > 0) {
        etiquetaNoTareas.classList.add("oculto");
    } else {
        etiquetaNoTareas.classList.remove("oculto");
    }
}

function verificarTareas() {
    var tareasCompletadas = 0;
    //Contar las tareas completadas
    for (let indiceTarea = 0; todo < todoList.length; indiceTarea++) {
        const tarea = todoList[indiceTarea];
        if (tarea.isComplete) {
            tareasCompletadas = tareasCompletadas + 1;
        }
    }

    //Ocultar mensaje de Tareas
    if (tareasCompletadas > 0) {
        etiquetaNoTareas.classList.add("oculto");
    } else {
        etiquetaNoTareas.classList.remove("oculto");
    }

}



function checkTodo(event) {
    const isChecked = event.target.checked;
    if (isChecked) {
        counter = counter + 1;

    } else {
        counter = counter - 1;
    }


    marcarTarea(isChecked, event.target.id)

    // <div id="#"> <div> <input> </div> </div>
    const parent = event.target.parentElement.parentElement;
    const parentId = parent.id;


    todoList.find(tarea => tarea.id == parentId).isChecked = isChecked;

    console.log("tareas", todoList);

    //Setear el contador
    todoCounterLabel.textContent = counter;

    //Animar el contador
    todoCounterLabel.classList.toggle("shake");



}

function deleteTodo(id) {
    let indexToDelete = todoList.findIndex(todo => todo.id == id);
    if (indexToDelete >= 0) {
        todoList.splice(indexToDelete, 1);
        let todoTag = document.getElementById(id);

        todoTag.classList.add("hide");
        setTimeout(function () {
            todoContainer.removeChild(todoTag);
            countTareas();
        }, 500);

    }

    var lista = document.querySelectorAll('input[type="checkbox"]');
    var contador = 0;
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].checked) {
            contador++;
        }
    }

    todoCounterLabel.textContent = contador;
    counter = contador;
}




function createTodoElement(todoItem, idTarea, checkTarea) {
    var newTodoItem = document.createElement("li");
    newTodoItem.classList.add("todo-item");
    newTodoItem.setAttribute("id", todoItem.id);
    //darle color pastel
    var randomColor = generateRandomPastelColor();
    newTodoItem.style.backgroundColor = randomColor;


    // todo text container
    let todoTextContainer = document.createElement("span");
    todoTextContainer.classList.add("todo-text-container");
    // todo label
    let todoLabel = document.createElement("label");
    todoLabel.setAttribute("id", `${todoItem.id}-aria-label`);
    todoLabel.classList.add("visually-hidden");
    todoLabel.textContent = "Marcar la tarea como completada";
    // todo checkbox
    let todoCheckbox = document.createElement("input");
    todoCheckbox.id = idTarea;
    todoCheckbox.checked = checkTarea;

    todoCheckbox.setAttribute("type", "checkbox");
    todoCheckbox.setAttribute("aria-describedby", `${todoItem.id}-aria-label`);
    todoCheckbox.classList.add("form-check-input", "todo-item-check");
    todoCheckbox.addEventListener("change", checkTodo);
    // todo text
    let todoTextParagraph = document.createElement("p");
    todoTextParagraph.classList.add("overflow-dots");
    todoTextParagraph.textContent = `${todoItem.todoText}`;

    //agregar hijos text container
    todoTextContainer.appendChild(todoLabel);
    todoTextContainer.appendChild(todoCheckbox);
    todoTextContainer.appendChild(todoTextParagraph);

    //boton eliminar
    let todoDeleteButton = document.createElement("button");
    todoDeleteButton.classList.add("delete-button");
    todoDeleteButton.setAttribute("aria-label", 'Eliminar');

    todoDeleteButton.addEventListener("click", (e) => {

        deleteTodo(todoItem.id);
        borrarTarea(idTarea);//servidor eliminar

    });

    //Swal.fire


    //icono eliminar
    let todoDeleteIcon = document.createElement("i"); //<i></i>
    todoDeleteIcon.classList.add("bi", "bi-trash-fill");

    //agregar icono al boton
    todoDeleteButton.appendChild(todoDeleteIcon);

    //agregar los hijos al todo li
    newTodoItem.appendChild(todoTextContainer);
    newTodoItem.appendChild(todoDeleteButton);


    countTareas();
    return newTodoItem;
}

function paintTodos() {
    for (let todoIndex = 0; todoIndex < todoList.length; todoIndex++) {
        const todoItem = todoList[todoIndex];
        todoContainer.appendChild(createTodoElement(todoItem));
    };
    countTareas();
}

//addTareasEvento
async function addTareasEvento() {
    //Optener texto usuario
    var textoTarea = addTodoInput.value;

    //Validar que la tarea tiene texto
    if (!textoTarea && textoTarea.length < 1) {
        alert("No hay valores que ingresar");
        return;
    }


    //Validar que no hay repetidos
    var existSimilarTodo =
        todoList.findIndex(todo => todo.todoText == textoTarea);


    if (existSimilarTodo >= 0) {
        alert("Todo Repetido");
        return;
    }
    //Fin de Validar que no hay repetidos

    //post

    var respuetaAgregar = await postTareas(textoTarea)
    listaTareasGlobal = [...respuetaAgregar]
    var ultimaTarea = respuetaAgregar.pop()

    const idTarea = ultimaTarea.id;
    const checkTarea = ultimaTarea.check;

    addTodo(textoTarea, idTarea, checkTarea)


}




function addTodo(tareaPorAgregar, idTarea, checkTarea) {


    var newTodoItem = {
        id: new Date().getTime(),
        todoText: tareaPorAgregar,
    }

    todoList.push(newTodoItem);
    todoContainer.appendChild(createTodoElement(newTodoItem, idTarea, checkTarea));

    //Limpia el texto del input
    addTodoInput.value = "";


    countTareas();
}



addTodoButton.addEventListener("click", addTareasEvento);

paintTodos();
countTareas();



function leerCookie() {

    let miCookie = document.cookie;
    let arrayCookie = miCookie.split("=");


    if (arrayCookie.length < 2) {
        alert("no hay cookie")
    } else {
        //[ 'millave', 'credenciales super secretas' ]

        var miListaNuevaDeTareas = JSON.parse(arrayCookie[1]);
        console.log("Mi cookie es : ", miListaNuevaDeTareas);

        for (let indice = 0; indice < miListaNuevaDeTareas.length; indice++) {
            addTodo(miListaNuevaDeTareas[indice]);
        }

    }



}




//optenerCookie();

//leerCookie();


var botonBuscar = document.getElementById("buscar-todo-button");
var inputBuscar = document.getElementById("buscar-todo-input");

botonBuscar.addEventListener("click", async function (eventoLuis) {
    eventoLuis.preventDefault();

    todoContainer.innerHTML = "";
    counter = 0;

    //CREAR TAREAS INICIALES

    listaTareasGlobal = await buscarTareas(inputBuscar.value);
    console.log("Mi lista al iniciar la aplicacion: ", listaTareasGlobal);

    for (let indiceTarea = 0; indiceTarea < listaTareasGlobal.length; indiceTarea++) {
        const tarea = listaTareasGlobal[indiceTarea];
        const textoTarea = tarea.task;
        //crear tarea es la funcioa\n de cada uno
        addTodo(textoTarea, tarea.id, tarea.check);

    }





})


crearTareasIniciales()