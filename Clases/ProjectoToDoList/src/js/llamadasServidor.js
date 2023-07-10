

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


export async function obtenerPokemon(pokemon) {



    return fetch(laURLdePokemon + "pokemon/" + pokemon); //devuelve una promesa

    //return fetch(laURLdePokemon + "pokedex/" + kanto);
    //return fetch(ipServidor + "camisas" + xl);
}

export async function obtenerPokemonForma2(pokemon) {

    var llamadoAlServer = fetch(laURLdePokemon + "pokemon/" + pokemon); //devuelve una promesa
    var miResultado = await llamadoAlServer;
    var datosPokemon = await miResultado.json();

    return datosPokemon;

}


// Segunda forma asyncronimo => sincronimo



//Funciones Asyncronas
//Funiones sincronas



//============================ POST
//============================ PUT
//============================ DELETE

