//=================================== Imports
import { PI } from "./variables.js";

//=================================== Variables Globales

var fechaNai = new Date().toLocaleDateString();
var miHora = new Date();
var misMinutos = miHora.getMinutes()
var misHoras = miHora.getHours()
var misSegundos = miHora.getSeconds()
var segundos = misSegundos;
var minutos = misMinutos;
var horas = misHoras;
var idReloj; //estoy definido afuera

//=================================== Etiquetas Fijas

var etiquetaMinutos = document.getElementById("minutosH2");
var etiquetaSegundos = document.getElementById("segundosH2");
var etiquetaHoras = document.getElementById("horasH2");

var fecha = document.getElementById("fecha");
fecha.textContent = fechaNai;


//=================================== Funciones

function iniciar() {
    clearInterval(idReloj);
    idReloj = setInterval(() => {
        segundos++;


        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }



        etiquetaSegundos.textContent = segundos;
        etiquetaMinutos.textContent = minutos;
        etiquetaHoras.textContent = horas;
    }, 1000);
}

function pausa() {
    clearInterval(idReloj);
}

function reset() {
    clearInterval(idReloj);
    segundos = 0;
    minutos = 0;

    etiquetaSegundos.textContent = segundos;
}

//=================================== Listener

var etiquetaBtnInicio = document.getElementById("btnIncio");
etiquetaBtnInicio.addEventListener("click", iniciar);

var etiquetaBtnPausa = document.getElementById("btnPausa");
etiquetaBtnPausa.addEventListener("click", pausa);

var etiquetaBtnReset = document.getElementById("btnReset");
etiquetaBtnReset.addEventListener("click", reset);








console.log("============================================");
console.log("===================VOTAR======================");
console.log("============================================");

//=================================== Imports

//=================================== Variables Globales
var listVotes = [
    { votes: 0, name: "Brayan" },



    { votes: 0, name: "Raul" }
]; // { votes:0,name:""}


//=================================== Etiquetas Fijas

var contenedor = document.getElementById("containerr");



//=================================== Funciones

for (let indice = 0; indice < listVotes.length; indice++) {
    const element = listVotes[indice];

    let btnVote = document.createElement("button");
    btnVote.textContent = element.name;
    btnVote.className = "btn btn-primary";

    btnVote.addEventListener("click", () => {
        let name = element.name;
        listVotes[indice].votes = listVotes[indice].votes + 1;
        btnVote.textContent = listVotes[indice].votes + "-" + name;
    })

    contenedor.appendChild(btnVote);

}



//=================================== Codigo
//=================================== Listener



console.log("============================================");
console.log("===============FETCH====================");
console.log("============================================");


//=================================== Imports


//=================================== Variables Globales


// FETCH es una funcion de JS para hacer peticiones a web

var promesaVariable = fetch("https://restcountries.com/v3.1/all");

//=================================== Codigo
promesaVariable.then(
    (response) => {

        if (response.ok) {
            console.log("todo ok");
            return response.json();//la data se pueda ver
        } else {
            console.log(
                "hubo un error"
            );
        }
    }
).then(

    (data) => {

        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            console.log(element);
        }
    }
)




//=================================== Variables Globales
var pokemonNumber = 0;
var rapEtiqueta = document.getElementById("rap"); //<p id="rap"></p>


//=================================== Funciones
function pokerap(entriesArray) {

    setInterval(
        () => {
            const element = entriesArray[pokemonNumber];
            let pokemon = element.pokemon_species.name;
            rapEtiqueta.textContent = pokemon;
            pokemonNumber = (pokemonNumber + 1) % entriesArray.length;
            // modulo (151 + 1 ) % 151 = 1

        }, 1000
    )
}

//=================================== Codigo
var miPromesaPokemon = fetch("https://pokeapi.co/api/v2/pokedex/kanto/")
miPromesaPokemon.then(
    (response) => {
        if (response.ok) { return response.json(); }
        else { console.log("Hay un error"); }
    }
).then(
    (data) => {
        console.log(data);
        pokerap(data.pokemon_entries)

    }
)


console.log(PI);



iniciar();