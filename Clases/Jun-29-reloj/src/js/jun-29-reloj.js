
var etiquetaMinutos = document.getElementById("minutosH2");
var etiquetaSegundos = document.getElementById("segundosH2");
var etiquetaHoras = document.getElementById("horasH2");


var fecha = document.getElementById("fecha");


var fechaNai = new Date().toLocaleDateString();
fecha.textContent = fechaNai;
var miHora = new Date();

var misMinutos = miHora.getMinutes()

var misHoras = miHora.getHours()

var misSegundos = miHora.getSeconds()

var miFecha = miHora.getDate() + "/" + (miHora.getMonth() + 1) + "/" + miHora.getFullYear()

console.log(misHoras, ":", misMinutos, "fecha ", miFecha);

var segundos = misSegundos;
var minutos = misMinutos;
var horas = misHoras;

iniciar();

var idReloj; //estoy definido afuera

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

var etiquetaBtnInicio = document.getElementById("btnIncio");
etiquetaBtnInicio.addEventListener("click", iniciar);

var etiquetaBtnPausa = document.getElementById("btnPausa");
etiquetaBtnPausa.addEventListener("click", pausa);

var etiquetaBtnReset = document.getElementById("btnReset");
etiquetaBtnReset.addEventListener("click", reset);






console.log("============================================");
console.log("===================VOTAR======================");
console.log("============================================");





var listVotes = [
    { votes: 0, name: "Brayan" },



    { votes: 0, name: "Raul" }
];
// { votes:0,name:""}




var contenedor = document.getElementById("containerr");

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




console.log("============================================");
console.log("===============FETCH====================");
console.log("============================================");




// FETCH es una funcion de JS para hacer peticiones a web

var promesaVariable = fetch("https://restcountries.com/v3.1/all");


promesaVariable.then(
    (response) => {

        if (response.ok) {
            console.log("todo ok");
            return response.json();
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
            // console.log(element.name);
        }
    }
)


function pokerap(entriesArray) {
    for (let indice = 0; indice < entriesArray.length; indice++) {
        const element = entriesArray[indice];
        let pokemon = element.pokemon_species.name;
        console.log(pokemon)

    }
}

var miPromesaPokemon = fetch("https://pokeapi.co/api/v2/pokedex/kanto/")
miPromesaPokemon.then(
    (response) => {
        if (response.ok) {
            return response.json();
        }
        else {
            console.log("Hay un error");
        }
    }

).then(
    (data) => {
        console.log(data);
        pokerap(data.pokemon_entries)

    }
)

console.log("hOLA MUNDO")
