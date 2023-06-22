




//<input id="inputTarea" type="text" placeholder="Ejemplo de tarea" />
var inputTarea = document.getElementById("inputTarea");



//presionar agregar
//<button id="botonAgregar">Agregar</button>
var botonAgregar = document.getElementById("botonAgregar");


var tareasDiv = document.getElementById("tareas");


function agregar() {

    console.log(inputTarea.value);

    var valorTarea = inputTarea.value;

    if (valorTarea.length == 0) {
        alert("no hay texto")
    }
    //<li></li>
    var nuevoTitulo = document.createElement("li");//<li></li>
    nuevoTitulo.textContent = valorTarea;

    var nuevoBuutton = document.createElement("button");
    nuevoBuutton.textContent = "mi boton";

    nuevoTitulo.appendChild(nuevoBuutton);


    tareasDiv.appendChild(nuevoTitulo);

    //<li>luis</li>



    console.log(nuevoTitulo);


}


botonAgregar.addEventListener("click", agregar);

