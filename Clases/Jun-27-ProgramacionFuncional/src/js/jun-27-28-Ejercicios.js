/**
 * El señor de la tienda compro 5 chocolates de cada tipo,
 * aumentar la cantidad de chocolates en 5
 * 
 */

console.log("=============================================")
console.log("======Aumentar cantidad de chocolates========")
console.log("=============================================")


var listaChocolates = [
    { sabor: "chocolate amargo", cantidad: 4 },
    { sabor: "chocolate de leche", cantidad: 1 },
    { sabor: "chocolate blanco", cantidad: 2 },
    { sabor: "chocolate en polvo", cantidad: 3 }
];


var listaPersonas = [{ nombre: "luis" },
{ nombre: "paco" },
{ nombre: "hugo" }];


function miFuncion(parametro) {// parametro =  va a ser un numero
    var nuevaCantidad = parametro.cantidad + 5;
    var chocolateNuevo = { sabor: parametro.sabor, cantidad: nuevaCantidad }
    return chocolateNuevo;// nuevo objeto de la lista
}

var nuevaLista = listaChocolates.map(miFuncion);

console.log(nuevaLista);


var listaCantidadesDolares = [500, 100, 1, 900, 150]; //Dolares
const tipoCombio = 547;

//nuevalista //listaColones

console.log("")
console.log("=============================================")
console.log("=================FILTER======================")
console.log("=============================================")
console.log("")

var listaNombres = [{ nombre: "Luis", emocion: "POSITIVA" },
{ nombre: "Diego", emocion: "POSITIVA" },
{ nombre: "Hugo Chavez", emocion: "NEGATIVA" }];


function quitarPersona(personaParametro) {

    if (personaParametro.emocion === "POSITIVA") {
        return true;
    } else {
        return false;
    }

}
var nuevasPersonas = listaNombres.filter(quitarPersona);

console.log(nuevasPersonas);


console.log("=============================================")
console.log("=========Checar tamannio de numeros==========")
console.log("=============================================")
var listaNumeros = [5, 63, 7, 1, 19, 1];

function checarTamannioNumero(numero) {
    // return (numero > 10)
    if (numero > 10) {
        return true;
    } else {
        return false;
    }

}

var listaNumeroGrandes = listaNumeros.filter(checarTamannioNumero)
console.log(listaNumeroGrandes);



console.log("=============================================")
console.log("======Filter productos mayores a 30==========")
console.log("=============================================")
//Filter productos mayores a 30

var productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalón', precio: 35 },
    { nombre: 'Zapatos', precio: 50 },
    { nombre: 'Bolso', precio: 15 },
];

function quitarPreciosAltos(producto) {
    return (producto.precio < 30);
}

var nuevosProductos = productos.filter(quitarPreciosAltos);

console.log(nuevosProductos);

console.log("=============================================")
console.log("========Quitar los celulares dañados=========")
console.log("=============================================")

//  Quitar los celulares dañados
const celulares = [
    { marca: "Samsung", modelo: "Galaxy S21", estado: "dañado" },
    { marca: "Apple", modelo: "iPhone 12", estado: "bueno" },
    { marca: "Xiaomi", modelo: "Redmi Note 9", estado: "bueno" },
    { marca: "Motorola", modelo: "Moto G Power", estado: "dañado" },
];
function quitarDanniados(celu) {
    if (celu.estado == "bueno") {
        return true;
    } else {
        return false;
    }
};

var soloCelularesBuenos = celulares.filter(quitarDanniados);
console.log(soloCelularesBuenos);


console.log("")
console.log("=============================================")
console.log("==================  REDUCE ==================")
console.log("=============================================")
console.log("")



let verduras = [
    { nombre: "Zanahorias", cantidad: 7 },
    { nombre: "Tomates", cantidad: 4 },
    { nombre: "Lechugas", cantidad: 9 },
    { nombre: "Pimientos", cantidad: 1 },
    { nombre: "Espinacas", cantidad: 8 },
];

function contarVerduras(contador, objetoActual) {
    return contador + objetoActual.cantidad;
}
//funcion    valor inicial = 0
var listaContarVeduras = verduras.reduce(contarVerduras, 0)

console.log(listaContarVeduras);

console.log("=============================================")
console.log("")

function agregarVerduras(contador, objetoActual) { //CONTADOR = ""
    let listaNueva = contador.concat([objetoActual.nombre]);

    console.log("contador", contador);
    console.log("contador", objetoActual.cantidad);

    return listaNueva;
}
//funcion    valor inicial = []
var listaNuevaVeduras = verduras.reduce(agregarVerduras, [])

console.log(listaNuevaVeduras);







var numeros = [19, 51, 81, 25, 45, 86];
//map - cambia cosas de la lista ]] map retorna una nueva lista

function sumar10(numeroParametro) {
    return "mi numero" + (numeroParametro + 10)
}

var nuevosNumeros = numeros.map(sumar10); //  []

console.log(nuevosNumeros);



var listaChocolates2 = [
    { sabor: "chocolate amargo", cantidad: 4 },
    { sabor: "chocolate de leche", cantidad: 1 },
    { sabor: "chocolate blanco", cantidad: 2 },
    { sabor: "chocolate en polvo", cantidad: 3 }
];

function aumentarInventario(chocolate) {// chocolate = { sabor: "chocolate amargo", cantidad: 4 },
    return { sabor: chocolate.sabor, cantidad: chocolate.cantidad + 10 }
}
var nuevaLIstaChocolates = listaChocolates2.map(aumentarInventario);

console.log(nuevaLIstaChocolates)


function chocolatesConCantidad(chocolate) {
    return chocolate.cantidad > 2;
}

var nuevaListaChocolatesCantidad = listaChocolates2.filter(chocolatesConCantidad)

console.log(nuevaListaChocolatesCantidad)


function reduceChocolate(contador, objetoActual) {
    return contador + objetoActual.cantidad
}

var listaCantidadChocolates = listaChocolates2.reduce(reduceChocolate, 0);


console.log(listaCantidadChocolates);


console.log("")
console.log("=============================================")
console.log("")


var listaPeces = ["nemo", "dory", "bob", "gary"];

function contarLetras(contador, objetoActual) {

    console.log("Mi objeto actual:", objetoActual);
    console.log("Mi contador:", contador);

    return contador + objetoActual.length;
}

var listaPecesNueva = listaPeces.reduce(contarLetras, 0);

console.log(listaPecesNueva)


