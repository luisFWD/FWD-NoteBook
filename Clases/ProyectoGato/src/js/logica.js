


// 1. Importaciones de módulos (si es necesario)
// No se requieren importaciones en este ejemplo

// 2. Declaración de variables
var jugadorActual = "X";

var matrizJuego = [
    [{ celda: "celda-00", jugador: "" }, { celda: "celda-01", jugador: "" }, { celda: "celda-02", jugador: "" }],
    [{ celda: "celda-10", jugador: "" }, { celda: "celda-11", jugador: "" }, { celda: "celda-12", jugador: "" }],
    [{ celda: "celda-20", jugador: "" }, { celda: "celda-21", jugador: "" }, { celda: "celda-22", jugador: "" }],
];



// F  C
// 2 0
// 1 1 
// 0 2



// 3. Definición de funciones
function validarDiagonalA(jugador) {

    let ganador = false;

    for (let contador = 0; contador < matrizJuego.length; contador++) {

        if (matrizJuego[contador][contador].jugador === jugador) {
            ganador = true;
        } else {
            ganador = false;
            break;
        }
    }
    return ganador;
}

function validarDiagonalB(jugador) {

    let contadorFila = 2;

    let ganador = false;

    for (let contadorColumna = 0; contadorColumna < matrizJuego.length; contadorColumna++) {

        if (matrizJuego[contadorFila][contadorColumna].jugador === jugador) {
            ganador = true;
        } else {
            ganador = false;
            break;
        }

        contadorFila -= 1;
    }
    return ganador;
}

//Funcion para validar columna
function validarColumna(columna, jugador) {

    let ganador = false;

    for (let indiceFila = 0; indiceFila < matrizJuego.length; indiceFila++) {

        let casilla = matrizJuego[indiceFila][columna] //10

        if (casilla.jugador === jugador) {
            ganador = true;
        } else {
            ganador = false;
            break;
        }
    }
    return ganador;
}

//Funcion para validar fila
function validarFila(fila, jugador) {

    let ganador = false;

    let listaFila = matrizJuego[fila]

    for (let indiceColumna = 0; indiceColumna < listaFila.length; indiceColumna++) {

        let casilla = listaFila[indiceColumna] //10

        if (casilla.jugador === jugador) {
            ganador = true;
        } else {
            ganador = false;
            break;
        }

    }
    return ganador;

}


function actualizarTablero(idBoton) {

    for (let indiceFila = 0; indiceFila < matrizJuego.length; indiceFila++) {
        let fila = matrizJuego[indiceFila];

        for (let indiceColumna = 0; indiceColumna < fila.length; indiceColumna++) {
            if (matrizJuego[indiceFila][indiceColumna].celda === idBoton) {

                matrizJuego[indiceFila][indiceColumna].jugador = jugadorActual;

                let ganador =
                    validarColumna(indiceColumna, jugadorActual) ||
                    validarFila(indiceFila, jugadorActual) ||
                    validarDiagonalA(jugadorActual) ||
                    validarDiagonalB(jugadorActual);


                if (ganador === true) {

                    alert("EL JUGADOR " + jugadorActual + " HA GANADO");
                }

                break;
            }

        }
    }
}



function turnoComputadora() {
    var listaCasillasLibres = [];
    for (let indiceFila = 0; indiceFila < matrizJuego.length; indiceFila++) {
        const fila = matrizJuego[indiceFila];
        for (let indiceColumna = 0; indiceColumna < fila.length; indiceColumna++) {
            if (matrizJuego[indiceFila][indiceColumna].jugador == "") {
                listaCasillasLibres.push(matrizJuego[indiceFila][indiceColumna].celda)
            }

        }
    }

    let numeroAleatorio = Math.floor(Math.random() * listaCasillasLibres.length);  // 6 - 3

    let idCasillaComputadora = listaCasillasLibres[numeroAleatorio];

    actualizarTablero(idCasillaComputadora);

    var botonCompu = document.getElementById(idCasillaComputadora)
    botonCompu.textContent = jugadorActual;

    jugadorActual = jugadorActual == "X" ? "O" : "X";


}

// actualizarTablero("celda-00");
// jugadorActual = "O";
// actualizarTablero("celda-11");
// jugadorActual = "X";
// actualizarTablero("celda-22");
// jugadorActual = "O";
// actualizarTablero("celda-20");
// jugadorActual = "X";
// actualizarTablero("celda-02");
// jugadorActual = "O";
// actualizarTablero("celda-01");
// jugadorActual = "X";
// actualizarTablero("celda-12");
// // jugadorActual = "O";
// // actualizarTablero("celda-21");

// 4. Lógica principal

// 5. Eventos y manejo de interacciones
// No se requieren eventos en este ejemplo


var listaEtiquetasBoton = document.querySelectorAll(".btn")

for (let indiceListaBoton = 0; indiceListaBoton < listaEtiquetasBoton.length; indiceListaBoton++) {
    let boton = listaEtiquetasBoton[indiceListaBoton];
    boton.addEventListener("click", () => {
        actualizarTablero(boton.id);
        boton.textContent = jugadorActual;

        jugadorActual = jugadorActual == "X" ? "O" : "X";

        turnoComputadora();
    })

}


// 6. Ejecución inicial (si es necesario)
// No se requiere ejecución inicial



// function (celda){
// for( indicefila ){

//     for( indiceColuma ){

//         if (   matris[indicefila][indiceColuma].celda ==== celda ){
//             matris[indicefila][indiceColuma].jugador = jugadorActual;
//             break
//         }


//     }
// }



var caja1 = document.createElement("img");
caja1.setAttribute("src", "Clases/ProyectoGato/src/js/crash.png");
var caja2 = document.createElement("img");
caja2.setAttribute("src", "Clases/ProyectoGato/src/js/crash.png");

console.log("Son iguales ", caja1.innerHTML == caja2.innerHTML)
