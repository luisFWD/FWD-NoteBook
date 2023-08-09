


const urlPokeAPi = "https://pokeapi.co/api/v2/";

//Optiene un pokemon basado en su id o nombre
export async function getPokemon(id) {
    //try catch
    try { //intentar
        const requestPokemon = await fetch(urlPokeAPi + "pokemon/" + id);
        const pokemonData = await requestPokemon.json(); //convierte mi request en un objeto que puedo leer
        return pokemonData;
    } catch (error) { //Se ejecuta si hubo algun error
        return { error: "Hubo un error al llamar al api" }
    }
}


export async function getListPokemon() {
    //try catch
    try { //intentar

        const requestPokemon = await fetch(urlPokeAPi + "pokemon/");
        const pokemonData = await requestPokemon.json(); //convierte mi request en un objeto que puedo leer


        //for para obtener

        return pokemonData;

    } catch (error) { //Se ejecuta si hubo algun error
        return { error: "Hubo un error al llamar al api" }
    }
}


//then usa una funcion de callback // funcion a llamar cuando termine o llegue
export function getPokemonThenCatch() {
    return fetch(urlPokeAPi + "pokemon/pikachu/").then(
        (response) => { return response.json() }
    )
}




