
console.log("FUNCIONA?");





var miHeladoFavorito = "fresa";

var elHeladoCompraPapa = "vanilla";


// try {

//     if (elHeladoCompraPapa == miHeladoFavorito) {
//         console.log("Soy sfeliz");
//     } else {

//         throw (new Error("No me comprastes el helado favorito"));

//     }

// } catch (error) {

//     alert("Hubo un error pero estamos a salvo", error);

// }



var edad = 20;
var examen = "Reprobado";

function A() {
    console.log("Puedo conducir")
}

function B() {
    console.log("No puedo conducir")
}

var conducir = (edad >= 18) ? (examen == "Aprobado") ? "Tienes aprovado el examen y tienes la edad" : "no tienes aprovado el examen" : "no tienes la edad";

console.log(conducir);


var primerApellido = "Aguilera";
var segundoApellido = undefined;//null


var apellidos = primerApellido + (segundoApellido ?? "");




console.log(apellidos);




var Nombre = "100";
var numero = 100;

var resultado = numero + Nombre;

console.log(resultado);



if (1 == true) {//son  iguales
    console.log(`Los dos son iguales ${Nombre} y ${numero} `);
} else {
    console.log("Los dos Diferentes");
}

