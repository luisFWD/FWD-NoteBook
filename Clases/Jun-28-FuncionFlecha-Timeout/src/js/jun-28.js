
console.log("==============Funciones con parametros por defecto ====");

function heladoFavorito(helado = "no tengo favorito") {

    console.log("Mi helado favorito es", helado);

}


heladoFavorito("fresa");


var nombreVariable = "mi variable";

function imprimirRutaBus(bus = "no bus", ruta = "no hay ruta") {
    console.log(" El Bus : " + bus + " tiene la ruta : " + ruta);
}

imprimirRutaBus();

console.log("==============Funciones con parametros por defecto ====");





function funcionSuma(numeroA, numeroB) {
    console.log("La suma es ", numeroA + numeroB);

}

funcionSuma(2, 5);

var funcionSumaVariable = (numeroA, numeroB) => {
    console.log("La suma2 es ", numeroA + numeroB);
}

funcionSumaVariable(10, 20);


///filter

function nombreFuncion(nombre) {
    console.log("Hola mr/miss " + nombre);
}
nombreFuncion("Luis");



var variableParaFuncion = (nombre) => {
    console.log("Hola mr/miss con f=> " + nombre);
}

variableParaFuncion("Diego");


//filter

var listaNumeros = [1, 15, 80, 44, 13, 65, 20, 90];

//filtrar los numeros mayores a 50

var listaNuevaNumeros = listaNumeros.filter((numero) => numero > 50)

console.log(listaNuevaNumeros);

var precioDolares = [20, 1, 500, 100, 1500]
const tipoCambio = 547;


var listaColones = precioDolares.map((precio) => precio * tipoCambio)

console.log(listaColones);


var listaObjetos = [
    { nombre: "triangulo", lados: 3 },
    { nombre: "cuadrado", lados: 4 },
    { nombre: "circulo", lados: 1000000 },
];


var resultadoReduce = listaObjetos.reduce((contador, objetoActual) => { return contador + objetoActual.lados }, 0)

console.log(resultadoReduce);




var etiquetaBoton = document.getElementById("boton");


etiquetaBoton.addEventListener("click", () => { console.log(" No se cuantos hoyos tiene un pajilla"); })






console.log("==============Spread Operator ====");


var listaA = ["cosa1", "cosa2", "cosa3"];

var listaB = [...listaA, "cosa 4"];

console.log("listaA", listaA);
console.log("listaB", listaB);



var listaPeces = [{ nombre: "nemo", amiga: "dory" }, { nombre: "dory", don: "los cachalotes" }, { nombre: "bob", forma: "cuadrado" }, { nombre: "gary" }];

let nuevoPez = { nombre: "Calamardo Guapo", instrumento: "clarinete" };
let nuevoPez2 = { ...nuevoPez }



listaPeces.push(nuevoPez);
listaPeces.push(nuevoPez2);

function agregarPrecio(pez) {
    return { ...pez, precio: 50 }
}

var listaConPrecios = listaPeces.map(agregarPrecio)


console.log(listaConPrecios);







console.log("==============REST Operator ====");

function imprime(...parametros) {

    parametros.forEach(elemento => {
        console.log(elemento)
    })


}

imprime("Hola mundo", "jose ", "lucas ");


console.log("=========================================");
console.log("============== Sincronia y Asincronia====");
console.log("=========================================");

setTimeout(() => {
    console.log("despues de esperar 3 segundos")
}, 3000);


var etiquetaCount = document.getElementById("count");
var etiquetaCountMin = document.getElementById("countMin");

var counter = 60;
var counterMin = 1;

setInterval(() => {
    counter--;

    if (counter == 0) {
        counter = 60;
        counterMin--;
    }
    etiquetaCount.textContent = counter;
    etiquetaCountMin.textContent = counterMin;

}, 1000)