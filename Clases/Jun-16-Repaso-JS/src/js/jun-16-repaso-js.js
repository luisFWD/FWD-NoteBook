
var saldo = 0; //global
let saldoCuentaBanco = 0;//Bloques

saldo = 100;
saldoCuentaBanco = 500;

const PI = 3.141576;// NO LA PUEDO CAMBIAR
//PI = 5;// tira error


console.log("Hola Viernes", "Hola Clase", 5, `Yo tengo un saldo de ${saldo} colones`);


//Condicionales -- Desiciones 

var clima = "soleado";


if (clima == "soleado") {
    console.log("salgo a pasear");
}
else if (clima == "lluviendo") {
    console.log("salgo a regar las matas");
}
else {
    console.log("me quedo en casa viendo peliculas de piratas");
}



//Ciclos For While - do while
console.log("==============//Ciclos For ");

for (let index = 1; index <= 10; index++) {
    console.log(index);
};
console.log("==============//Ciclos While");
var contador = 0;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

console.log("==============//Ciclos Do While ");
var contador2 = 100;
// la diferencia de un while y un do while es que el do while se ejecuta almenos una vez siempre
do {
    console.log(contador2);
    contador2++;
}
while (contador2 <= 10);


console.log("==============//continue break ");

//Continue = brica al inicio y vuelve a iniciar otro ciclos

//Break = rompe el ciclo y no vuelve a ejecutar mas ciclos "se sale del ciclo for/while"


var contador3 = 0;
while (contador3 <= 10) {
    console.log("Contador con cotinue y break: ", contador3);

    //continue
    if (contador3 == 5) {
        console.log("vas por la mitad");
        contador3++;
        continue;
    }

    //break
    if (contador3 == 8) {
        console.log("Break");
        contador3++;
        break;
    }

    contador3++;
}
//aqui continua el break




//Funciones me permiten reciclar codigo

function nombreFuncion(/* parametros*/) {
    //codigo por hacer en la funcion
}

//invocar o llamar a una funcion sin parametros
nombreFuncion();

function funDecirHola(/* parametros*/ nombre, edad) {
    console.log("Hola ", nombre, " como estas?", edad);
}

//invocar o llamar a una funcion con parametros
funDecirHola("profe", 50);
funDecirHola("maria", 65);


// Return de funciones

function sumar(numeroA, numeroB) {
    var suma = numeroA + numeroB;
    return suma;
}

console.log("la suma de 2 + 4 = ", sumar(2, 4));


console.log("la suma de 2 + '4' = ", sumar(2, "4"));


function saludar(nombre) {
    return "Hola " + nombre;
}

console.log("Saludar es igual : ", saludar("Josito"));



function despedirme(nombre) {
    return `Adios  ${nombre}`;
}

console.log("Despedir es igual: ", despedirme("Paulina"));


console.log("================= (. ͡❛ ͜ʖ ͡❛.) ======= Eventos ========= ");


//crear funcion de callback
function alertClick() {
    alert("El usuario ha hecho Click al boton");
}

//seleccionar la etiqueta
var botonClickme = document.getElementById("boton-clickme");

//agregar el evento a la etiqueta
botonClickme.addEventListener("click", alertClick);



//Event mouse over
//creo la funcion

var tarjetaConMouseOver = document.getElementById("tarjeta-con-mouse-over");

function onOverTarjeta() {
    tarjetaConMouseOver.classList.toggle("pink-card");
}


tarjetaConMouseOver.addEventListener("mouseenter", onOverTarjeta);

tarjetaConMouseOver.addEventListener("mouseleave", onOverTarjeta);


//Event keydown

function detectarTecla(event) {

    console.log("code", event.keyCode);

    //comparar si fue la tecla enter
    if (event.keyCode == 13) {
        console.log("Enter");
    }

    //alert("alerta tecla presionada", event.keyCode);
}

var tarjetaConKeydown = document.getElementById("tarjeta-con-keydown");

tarjetaConKeydown.addEventListener("keydown", detectarTecla);






/// Lista


var listaDeEstudiante = ["luis", "pago", "hugo"];
console.log(listaDeEstudiante);


// Agregarle cosas
listaDeEstudiante.push("Maria");
console.log(listaDeEstudiante);

//Saco la cosa del final
console.log(listaDeEstudiante.pop());
console.log(listaDeEstudiante);

console.log("el eleento de la posicion uno es:", listaDeEstudiante[1]);


//Splice elimina un objeto de mi lista
//[luis, pago, hugo]
//emilinamos a pago
//splice tiene 2 parametros 1` el indice del elemnto, 2` es la cantidad a elimnar
console.log(listaDeEstudiante.splice(1, 2));
console.log(listaDeEstudiante);


///splice funciona tambien para agregar objetos en una posicion
var frutas = ["pera", "manzana", "uva"];
console.log(frutas.splice(1, 0, "tomate"));
console.log(frutas);
