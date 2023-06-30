
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






// etiquetaBoton.addEventListener("click", () => { console.log(" No se cuantos hoyos tiene un pajilla"); })






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

var count = 60;
var countMin = 1;

var idRelog;//undefinido


function pararReloj() {
    clearInterval(idRelog);
}



function resetReloj() {
    count = 60;
    countMin = 1;
    clearInterval(idRelog);//
    idRelog = setInterval(() => {
        count--;

        if (count == 0) {
            count = 60;
            countMin--;
        }
        etiquetaCount.textContent = count;
        etiquetaCountMin.textContent = countMin;

    }, 1000);

}

function iniciarReloj() {
    clearInterval(idRelog);//
    idRelog = setInterval(() => {
        count--;

        if (count == 0) {
            count = 60;
            countMin--;
        }
        etiquetaCount.textContent = count;
        etiquetaCountMin.textContent = countMin;

    }, 1000);
}


var etiquetaBoton = document.getElementById("boton");
etiquetaBoton.addEventListener("click", pararReloj);

var etiquetaBotonReset = document.getElementById("boton2");
etiquetaBotonReset.addEventListener("click", resetReloj);

var etiquetaBotonInicio = document.getElementById("botonInicio");
etiquetaBotonInicio.addEventListener("click", iniciarReloj);
















console.log("===================================================");
console.log("========== Llamados a Apis  - Promises ============");
console.log("===================================================");


// FETCH( URL servidor )

// var promesaUsuarios
//promesaUsuarios // undefined

//espero 2 minutos
//  promesaUsuarios { luis, diego}



const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';

function obtenerInformacionPokemon() {

    fetch(url)
        .then(response => {
            console.log(response);
            if (response.ok) {
                return response.json();
            } //else {
            //  throw new Error('No se pudo obtener la información del Pokémon.');
            // }
        })
        .then(data => {
            // Mostrar los datos en la consola
            console.log('Nombre:', data.name);
            console.log('ID:', data.id);
            console.log('Habilidades:');
            data.abilities.forEach(ability => {
                console.log('- ', ability.ability.name);
            });
            // Puedes mostrar más datos según tus necesidades
        })
        .catch(error => {
            console.log(error);
        });
}

// Llamada a la función con el nombre del Pokémon deseado
obtenerInformacionPokemon('pikachu');



function obtenerInformacionPokemon() {

    fetch(url)
        .then(response => {
            console.log(response);
            if (response.ok) {
                return response.json();
            } //else {
            //  throw new Error('No se pudo obtener la información del Pokémon.');
            // }
        })
        .then(data => {
            // Mostrar los datos en la consola
            console.log('Nombre:', data.name);
            console.log('ID:', data.id);
            console.log('Habilidades:');
            data.abilities.forEach(ability => {
                console.log('- ', ability.ability.name);
            });
            // Puedes mostrar más datos según tus necesidades
        })
        .catch(error => {
            console.log(error);
        });
}



function division(A, B) {


    try {
        if (B === 0) {
            throw new Error();
        }
        return A / B
    }
    catch (e) {
        console.log("No puedes dividir por cero");
    }




}

var resultado = division(4, 0)
console.log(resultado);




`
    POST - Enviar datos al servidor
    GET - Para solicitar datos
    PUT - Alterar o cambiar un dato
    DELETE - Eliminar un dato
`






