//import  { lo que quiero importar  }   from "de donde" "archivo"
import { mensaje, decirHola, Persona, obtenerPokemon, obtenerPokemonForma2 } from './llamadasServidor.js';
console.log("Mi mensaje", mensaje);

decirHola("Profe");

var miPersona = new Persona();
console.log(miPersona.nombre);







//   promesa
var miRespuesta = obtenerPokemon("pikachu");









//          then (yo puedo esperar a la llamada)
miRespuesta.then(
    (response) => {
        console.log("Response", response);
        return response.json();
    }
).then(
    (data) => {
        console.log(data);
    }
)



// Segunda forma asyncronimo => sincronimo
var miResultado = await obtenerPokemon("gengar");
var datosGengar = await miResultado.json();
console.log("esperando a Gengar: ", datosGengar);








var miPOkemon = await obtenerPokemonForma2("pichu");
console.log("mipokemon", miPOkemon)


















































var listaTareasGlobal = [];

var todoList = [
    // {
    //     id: 
    //     todoText: "todo"
    //     isComplete: 
    // }
];


var miListaDeTareas = ["Tarea 1", "Tarea 2", "Tarea 3  que nunca hago"];

//  document.cookie

function crearCookie() {

    //JSON
    let tareasEnTexto = JSON.stringify(miListaDeTareas);
    console.log("mi lista ahora es ", tareasEnTexto);

    document.cookie = "millave=" + tareasEnTexto;
    // `${}`

}




const botonSetearCookie = document.getElementById("setbtn");

const botonGetCookie = document.getElementById("getbtn");

botonSetearCookie.addEventListener("click", crearCookie);

botonGetCookie.addEventListener("click", leerCookie);





// function agregarTareaCookie(tarea) {

//     listaTareasGlobal.push(tarea); //Agrega la tarea

//     let listaTareasGlobalCadenaTexto = JSON.stringify(listaTareasGlobal);
//     document.cookie = "listaTareas=" + listaTareasGlobalCadenaTexto;

// }

// function eliminarTareaCookie(tarea) {

//     //1 buscar la tarea en la lista
//     let indiceTarea = listaTareasGlobal.findIndex(algunaTarea =>
//         algunaTarea.toUpperCase() == tarea.toUpperCase());

//     // findIndex retorna -1 si no la encuentra y un numero con el indice si lo encuentra
//     if (indiceTarea >= 0) {

//         listaTareasGlobal.splice(indiceTarea, 1); //elimina la tarea de la lista

//         let listaTareasGlobalCadenaTexto = JSON.stringify(listaTareasGlobal);
//         document.cookie = "listaTareas=" + listaTareasGlobalCadenaTexto;
//     }
// }


// function optenerCookie() {

//     let galleta = document.cookie;

//     let galletaDividida = galleta.split("=");

//     alert();


//     if (galletaDividida.length > 0 && galletaDividida[1]) {
//         let jsLista = JSON.parse(galletaDividida[1])

//         listaTareasGlobal = jsLista;

//         //solo luis
//         todoList = listaTareasGlobal;
//         paintTodos();
//         //solo luis

//         //for( let indice = 0  ; indice < jsLista.length ; indice ++ ){
//         //    agregarTarea(jsLista[indice]);
//         //}

//         alert(jsLista[1]);

//     }
// }


//agregarTareaCookie("tarea1");

//optenerCookie();











//// FIN COOKIES 




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




function createTodoElement(todoItem) {
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

    todoDeleteButton.addEventListener("click", function () {
        deleteTodo(todoItem.id);
    });
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


function vericarCampoTexto() {
    //Optener texto usuario
    var addTodoInputValue = addTodoInput.value;

    //Validar que la tarea tiene texto
    if (!addTodoInputValue && addTodoInputValue.length < 1) {
        alert("No hay valores que ingresar");
        return;
    }


    //Validar que no hay repetidos
    var existSimilarTodo =
        todoList.findIndex(todo => todo.todoText == addTodoInputValue);


    if (existSimilarTodo >= 0) {
        alert("Todo Repetido");
        return;
    }
    //Fin de Validar que no hay repetidos
    addTodo(addTodoInputValue)


}



function addTodo(tareaPorAgregar) {


    var newTodoItem = {
        id: new Date().getTime(),
        todoText: tareaPorAgregar,
    }

    todoList.push(newTodoItem);
    todoContainer.appendChild(createTodoElement(newTodoItem));

    //Limpia el texto del input
    addTodoInput.value = "";


    countTareas();
}



addTodoButton.addEventListener("click", vericarCampoTexto);

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