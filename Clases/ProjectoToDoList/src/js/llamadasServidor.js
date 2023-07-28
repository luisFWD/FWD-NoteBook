

export const mensaje = "Hola Mundo soy un modulo";

export function decirHola(nombre) {
    console.log("Bienvenido " + nombre);
}

export class Persona {
    nombre = "Pepe";
}

//============================ GET
//Get con el pokedex;
// Fetch

const laURLdePokemon = "https://pokeapi.co/api/v2/";

export async function obtenerPokemonForma2(pokemon) {

    var llamadoAlServer = fetch(laURLdePokemon + "pokemon/" + pokemon); // devuelve una promesa
    var miResultado = await llamadoAlServer;
    var datosPokemon = await miResultado.json();

    return datosPokemon;

}

const URLServidorPokemon = "https://pokeapi.co/api/v2/";

export async function obtenerPokemon(pokemonParam) {
    let promesaServidor = fetch(URLServidorPokemon + "pokemon/" + pokemonParam)
    let respuestaServidor = await promesaServidor;
    let datosPokemon = await respuestaServidor.json();
    return datosPokemon;
}

export async function obtenerBayas(bayaParam) {
    let promesaBayas = fetch(URLServidorPokemon + "berry/" + bayaParam)

    let respuesta = await promesaBayas;
    let datosBaya = await respuesta.json();

    return datosBaya;
}







/////////////////////////////////////////////////////////////

const urlServidorTareas = "http://localhost:3000/api/task/";

/////// GET TAREAS
export async function obternerTareas() {
    let promesaTareas = fetch(urlServidorTareas);//GET
    let resultadoPromesa = await promesaTareas;
    let datosTarea = await resultadoPromesa.json();
    return datosTarea;
}

//////// POST TAREAS (Guardar tare)

export async function postTareas(tareaParametro) {
    let promesaTarea = fetch(urlServidorTareas, {
        method: "POST",
        body: JSON.stringify(
            {
                "task": tareaParametro,
                "check": false
            }
        ),
        headers: {
            "Content-Type": "application/json"
        }
    });

    let resultado = await promesaTarea;

    if (resultado.status === 200 && resultado.ok === true) {

        let datosInsertados = await resultado.json();
        return datosInsertados;

    } else {
        console.log("No se logro insertar");
    }
}

/////// CHECAR TAREA (PUT)

export async function marcarTarea(checkParametro, idTareaParametro) {
    let promesaTarea = fetch(urlServidorTareas + idTareaParametro, {
        method: "PUT",
        body: JSON.stringify(
            {

                "check": checkParametro
            }
        ),
        headers: {
            "Content-Type": "application/json"
        }
    });

    let resultado = await promesaTarea;

    if (resultado.status === 200 && resultado.ok === true) {

        let datosActualizados = await resultado.json();
        return datosActualizados;

    } else {
        console.log("No se logro actualizar");
    }
}


////// Delete tarea

export async function borrarTarea(idTareaAEliminar) {
    let promesaBorrar = fetch(urlServidorTareas + idTareaAEliminar, {
        method: "DELETE"
    });
    let resultado = await promesaBorrar;

    if (resultado.status === 200 && resultado.ok === true) {
        let datos = await resultado.json();
        return datos;
    } else {
        console.log("Algo paso mal")
    }

}

/////// BUSCAR TAREAS
export async function buscarTareas(textoBuscar) {
    let promesaTareas = fetch(urlServidorTareas);//GET
    let resultadoPromesa = await promesaTareas;
    let datosTarea = await resultadoPromesa.json();

    let tareasFiltradas = datosTarea.filter((tarea) => {
        return tarea.task.includes(textoBuscar)
    })

    return tareasFiltradas;
}






