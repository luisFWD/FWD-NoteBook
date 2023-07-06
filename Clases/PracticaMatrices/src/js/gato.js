console.log("Hola mundo");

// 1. Importaciones de módulos (si es necesario)
// No se requieren importaciones en este ejemplo

// 2. Declaración de variables
let nombre = "John";
let edad = 25;


let matris = [
    ["fresa", "pera", "manzana"],
    ["pug", "zaguate", "pastor"],
    ["toyota", "honda", "nissan"]
];


let matrisCeldas = [
    ["c-00", "c-01", "c-02"],
    ["c-10", "c-11", "c-12"],
    ["c-20", "c-21", "c-22"]
];

var listaPokemons = ["pikachu", "digglet", "charmander"];
// 3. Definición de funciones

// 4. Lógica principal


console.log(matris[0][6])


console.log(matrisCeldas[1])

for (let index = 0; index < matrisCeldas.length; index++) {
    const element = matrisCeldas[index];
    var miElementoColumna = element[1];
    console.log(miElementoColumna);
}




for (let indiceListaGrande = 0; indiceListaGrande < matris.length - 1; indiceListaGrande++) {
    const elementoListaGrande = matris[indiceListaGrande];

    console.log("Lista", elementoListaGrande);
    for (let indicePequennio = 0; indicePequennio < elementoListaGrande.length; indicePequennio++) {
        const elementoPequennio = elementoListaGrande[indicePequennio];
        console.log("Elemento", elementoPequennio);

    }
}

var tamannioListaPokemon = listaPokemons.length;
console.log(listaPokemons[10099 % tamannioListaPokemon]);

// %  division entera / residuo de la divicion
// 4 % 4 = 0
// 5 % 4 = 1

// 6 % 3 = 0
// 7 % 3 =1






// 5. Eventos y manejo de interacciones
// No se requieren eventos en este ejemplo

// 6. Ejecución inicial (si es necesario)
// No se requiere ejecución inicial





var matrisFrutas = [
    ["pera", "manzana"],
    ["banana", "piña"],
    ["cas", "cereza"]
];

console.log(matrisFrutas[2]) //    ["cas","cereza"]

console.log(matrisFrutas[2][1])// cereza


console.log(matrisFrutas[0][0])// pera
console.log(matrisFrutas[1][0])// banana
console.log(matrisFrutas[2][0])// cas

for (let indice = 0; indice < matrisFrutas.length; indice++) {
    console.log(matrisFrutas[indice][0]);
}

//matrisFrutas[0][0] // pera
//matrisFrutas[0][1] // manzana





//["pera", "manzana"]
for (let indice = 0; indice < matrisFrutas[0].length; indice++) {
    console.log(matrisFrutas[0][indice]);
}

console.log("====================");

for (let indiceFilas = 0; indiceFilas < matrisFrutas.length; indiceFilas++) {
    //                                             ["pera", "manzana"],

    console.log(matrisFrutas[indiceFilas]);
    for (let indiceColumna = 0; indiceColumna < matrisFrutas[indiceFilas].length; indiceColumna++) {
        console.log(matrisFrutas[indiceFilas][indiceColumna])
    }


}


console.log("======== FindIndex =======");

var listaFrutas = ["pera", "manzana", "banana", "banana", "cas", "cereza"]


var indiceFruta = listaFrutas.findIndex((fruta) => { return fruta == "melocoton" })

console.log("El indice de mi fruta es: ", indiceFruta)

