
// =======================================
// ==Funciones - First class citizens ====
// == Funciones Pasadas por Parametro ====
// =======================================

var numero = 5;

var funcionSaludoBuenosDias = function () {
    console.log("Buenos dias");
}

var funcionSaludoBuenosNoches = function () {
    console.log("Buenas Noches descansen");
}

function saludar(funcionSaludoParam) {
    funcionSaludoParam();
}

saludar(funcionSaludoBuenosDias); //imprime "Buenos dias"
saludar(funcionSaludoBuenosNoches); // imprime "Buenas Noches descansen"




function crearBoton(funcionBoton) {
    var btn = document.createElement("button");// <button></button>
    btn.addEventListener("click", funcionBoton);
}

//crearBoton(funcionParaAlerta)
//crearBoton(funcionParaAgregarTarea)



// =======================================
// == Funciones Ejecutadas Inmediatamente ====
// ==  IIFE ====
// =======================================
(function () {
    console.log("Crear una funcion que se ejecuta de una sola vez");
})();


//esto es:
(
    function () {
        console.log("Bienvenido a la aplicacion");
    }
)();

//es lo mismo que:
function hola() {
    console.log("Bienvenido a la aplicacion");
}
hola();




// =======================================
// == Programacion Funcion ====
// ==  IIFE ====
// =======================================


var contador = 0;//mutantando a la variable

function funA() {//impura
    console.log(contador);
    contador = contador + 1;
}

funA();
funA();

function funB() {//pura
    console.log(contador);
}

funB()
funB()
funB()
funB()
funB()
funB()
funB()



function saludar(nombre) {//IMpura
    console.log("Hola " + nombre + contador);
    contador++;
}

saludar("CARLOS")
saludar("CARLOS")
saludar("CARLOS")
saludar("CARLOS")
saludar("CARLOS")

console.log("======================================");
console.log("======================================");
console.log("");
console.log("");




console.log("======================================");
console.log("=========== MAP FILTER REDUCE ========");
console.log("======================================");



var listaPeces = [
    { name: "Nemo", yaComio: false, habitad: "colares" },
    { name: "Dory", yaComio: false, habitad: "colares" },
    { name: "Patrick", yaComio: true, habitad: "roca" },
    { name: "Calamardo Guapo", yaComio: false, habitad: "moai" },

];

console.log(listaPeces)

console.log("======================================");
console.log("==============MAP============");
console.log("======================================");

function alimentarPez(pez) {
    return { ...pez, yaComio: true, }
}
function filetiarPeces(objeto) {
    return `Hi ${objeto.name} Im an sushi now`
}
function party(pez) {
    return { name: pez.name, frase: " Im a shark tututu" }
}

listaPeces = listaPeces.map(party);

console.log(listaPeces);

console.log("")

console.log("======================================");
console.log("======================================");
console.log("======================================");


var listaChocolates = [
    { sabor: "chocolate amargo", estado: "malo", cantidad: 4 },
    { sabor: "chocolate de leche", estado: "bueno", cantidad: 1 },
    { sabor: "chocolate blanco", estado: "malo", cantidad: 2 },
    { sabor: "chocolate en polvo", estado: "bueno", cantidad: 3 }
];
console.log("======================================");
console.log("===============for normal=================");
for (let index = 0; index < listaChocolates.length; index++) {
    const element = listaChocolates[index];
    console.log(element.sabor);
}
console.log("======================================");
console.log("===============for each=================");

listaChocolates.forEach(element => {
    console.log(element.sabor);
});

console.log("======================================");
console.log("=============filter===================");
console.log("======================================");

function filtrarMalos(chocolate) {
    if (chocolate.estado === "bueno") {
        return true;
    } else {
        return false;
    }
}

console.log("console: ", listaChocolates.filter(filtrarMalos));

console.log(listaChocolates);

console.log("======================================");
console.log("======== Map/Filter Practica =========");
console.log("======================================");


/**
 *  Crear función map que tome una lista de nombres completos y
 *  devuelva una nueva lista que contenga solo los nombres (quitar el apellido).
 */
var nombresCompletos =
    ['Juan Pérez', 'María López', 'Carlos Gómez', 'Laura Martínez'];


function quitarApellido(nombre) {
    var listaDelNombre = nombre.split(" ") // ["María","López"]
    var soloNombre = listaDelNombre[0];
    return soloNombre;
}

//nombresCompletos = nombresCompletos.map(quitarApellido);

function cambiarAMayusculas(nombre) {
    return nombre.toUpperCase();
}

nombresCompletos = nombresCompletos.map(cambiarAMayusculas);


console.log(nombresCompletos);
/**
 * Usen función filter que tome una lista de palabras y devuelva una nueva lista que
 * contenga solo aquellas palabras que tienen más de cierta cantidad de caracteres.
 */

const palabras = ['casa', 'perro', 'gato', 'elefante', 'ratón'];


function soloPalabrasCortas(palabra) {
    const longitudMinima = 5;
    if (palabra.length <= longitudMinima) {
        return true;
    } else {
        return false;
    }

}



var nuevaListaPalabras = palabras.filter(soloPalabrasCortas);

console.log(nuevaListaPalabras);

/**
* Utilicen la función filter para crear una nueva lista que contenga
* solo los estudiantes que hayan aprobado (calificación mayor o igual a 60).
*/
const estudiantes = [
    { nombre: 'Juan', calificacion: 80 },
    { nombre: 'María', calificacion: 55 },
    { nombre: 'JuanLopez', calificacion: 90 },
    { nombre: 'Laura', calificacion: 70 },
];

function varificarNota(estudiante) {
    if (estudiante.calificacion >= 60) {
        //  console.log(` el estudiante ${estudiante.nombre} `)
        return true;//es este objecto true? 
    } else {
        return false;
    }
}



var estudiantesAprovados = estudiantes.filter(varificarNota)


console.log(estudiantesAprovados);

console.log("======================================");
console.log("======== Map/Filter Practica =========");
console.log("======================================");




/**
 * utilicen la función filter para crear una nueva lista que contenga
 * solo los productos con un precio menor o igual a cierto valor.
 */

var productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalón', precio: 35 },
    { nombre: 'Zapatos', precio: 50 },
    { nombre: 'Bolso', precio: 15 },
];

const precioMaximo = 30;


// MAP   - cambia objetos en mi lista 
// FILTER - filtra mi lista y retorna solo los que cumplen
// REDUCE - comprime mi lista

//arreglos o listas
var listaFrutas = ["manzana gala",
    "manzana mashintosh",
    "manzana pequena",
    "pera",
    "chayote",
    "banana"
];

console.log("======================================");
console.log("======== 28 junio =========");
console.log("======================================");




function hacerMayusculas(fruta) {
    return fruta.toUpperCase();
}

var listaFrutaEnMayuscula = listaFrutas.map(hacerMayusculas);

console.log(listaFrutaEnMayuscula);


var equiposFutball = [
    { nombre: "Estados Unidos" },
    { nombre: "Brasil" },
    { nombre: "España" },
    { nombre: "Inglaterra" },
    { nombre: "Argentina" },
    { nombre: "Sele" }
];

function clasificarEquipo(objetoDeLaLista) {// 
    let clasificado = "CLASIFICADO";
    if (objetoDeLaLista.nombre == "Sele") {
        clasificado = "NO clasificado";
    }

    return { nombre: objetoDeLaLista.nombre, clasificado: clasificado }
}

var listaMundial = equiposFutball.map(clasificarEquipo); // clasificarEquipo(objeto3)

console.log(listaMundial);





/*
const calificaciones = [90, 75, 60, 85];
retornar las calificaciones
*/

/**
 * const preciosEnDolares = [20, 50, 10, 30];
const tasaCambio = 0.85; // Conversión a colones
 * 
 */


var listaNotas = [{ nota: 96 }]

function sumar5(chocolate) {

    var nuevaCantidad = chocolate.cantidad + 5;

    var nuevaNota = { sabor: chocolate.sabor, cantidad: nuevaCantidad };
    return nuevaNota;
}

var ListaNotasCorregida = listaNotas.map(sumar5);

console.log(ListaNotasCorregida);