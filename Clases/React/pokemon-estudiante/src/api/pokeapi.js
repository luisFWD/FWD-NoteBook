


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

function getEvolution(list, chain) {
    if (chain.evolves_to.length > 0) {
        for (let index = 0; index < chain.evolves_to.length; index++) {
            const evolution = chain.evolves_to[index];
            list.push(evolution.species.name);
            getEvolution(list, evolution)
        }
    }
    return list;
}

export async function getEvolutionChain(pokemonId) {

    try {

        //Get the species
        const pokemonSpecies = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + pokemonId);
        const pokemonSpeciesData = await pokemonSpecies.json();
        if (!pokemonSpeciesData?.evolution_chain) {
            return [];
        }
        console.log("Especie", pokemonSpeciesData)

        //Get the evolution
        const requestPokemon = await fetch(pokemonSpeciesData.evolution_chain.url);
        const pokemonData = await requestPokemon.json();

        var evolutionList = [pokemonData.chain.species.name];

        getEvolution(evolutionList, pokemonData.chain)

        console.log("Nombres Evoluciones", evolutionList)


        //Get the images
        var evolutionListData = [];
        evolutionList.forEach(async (evolution) => {
            const requestPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + evolution);
            const evolutionData = await requestPokemon.json();
            evolutionListData.push(evolutionData);
        });
        console.log("Data Evoluciones", evolutionListData)

        return pokemonData;

    } catch (error) { //Se ejecuta si hubo algun error
        console.error("Hubo un error al llamar al api")
        return []
    }

}

