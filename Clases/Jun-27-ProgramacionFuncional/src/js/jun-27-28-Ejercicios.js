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



const verduras = [
    { nombre: "Zanahorias", cantidad: 10 },
    { nombre: "Tomates", cantidad: 5 },
    { nombre: "Lechugas", cantidad: 8 },
    { nombre: "Pimientos", cantidad: 3 },
    { nombre: "Espinacas", cantidad: 6 },
];