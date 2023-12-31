// 1. Importaciones de módulos (si es necesario)
// No se requieren importaciones en este ejemplo

// 2. Declaración de variables
var jugadorActual = "X";

var turnosRestantes = 9;
var juegoTerminado = false;

var matrizJuego = [
    [{ celda: "celda-00", jugador: "" }, { celda: "celda-01", jugador: "" }, { celda: "celda-02", jugador: "" }],
    [{ celda: "celda-10", jugador: "" }, { celda: "celda-11", jugador: "" }, { celda: "celda-12", jugador: "" }],
    [{ celda: "celda-20", jugador: "" }, { celda: "celda-21", jugador: "" }, { celda: "celda-22", jugador: "" }],
];

var listaEtiquetasBoton = document.querySelectorAll(".btn");
var titlePlayerName = document.getElementById("titlePlayerName");


// 3. Definición de funciones
function validarDiagonalA(jugador) {
    let ganador = false;
    for (let contador = 0; contador < matrizJuego.length; contador++) {
        if (matrizJuego[contador][contador].jugador === jugador) {
            ganador = true;
        } else {
            ganador = false;
            console.log("asd");
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

                //desactivar boton
                var botonPlayer = document.getElementById(idBoton)
                botonPlayer.disabled = true;

                //restar en 1 los turnos
                if (turnosRestantes > 0) {
                    turnosRestantes -= 1;
                }

                let ganador =
                    validarColumna(indiceColumna, jugadorActual) ||
                    validarFila(indiceFila, jugadorActual) ||
                    validarDiagonalA(jugadorActual) ||
                    validarDiagonalB(jugadorActual);
                if (ganador === true) {
                    juegoTerminado = true;
                    openModal("FIN DE LA PARTIDA", "EL JUGADOR " + jugadorActual + " HA GANADO");
                    break;
                } else if (juegoTerminado === false && turnosRestantes === 0) {
                    juegoTerminado = true;
                    openModal("EMPATE", "NINGUN JUGADOR HA GANADO");
                    break;
                }



                break;
            }

        }
    }

}


function turnoComputadora() {
    if (turnosRestantes === 0 || juegoTerminado) {
        return;
    }

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
    titlePlayerName.textContent = jugadorActual;

}

function resetGame() {
    jugadorActual = "X";
    turnosRestantes = 9;
    juegoTerminado = false;

    for (let indiceFila = 0; indiceFila < matrizJuego.length; indiceFila++) {
        const fila = matrizJuego[indiceFila];
        for (let indiceCol = 0; indiceCol < fila.length; indiceCol++) {

            matrizJuego[indiceFila][indiceCol].jugador = "";

        }
    }
    listaEtiquetasBoton.forEach(element => { element.innerHTML = ""; element.disabled = false })

}

function guardar() {
    localStorage.setItem("millave", 2);
    localStorage.setItem("millave2", 5);
}

function sacar() {
    var cosa = localStorage.getItem("millave");
    console.log(cosa);
    var cosa2 = localStorage.getItem("millave2");
    console.log(cosa2);
}





// 4. Lógica principal

for (let indiceListaBoton = 0; indiceListaBoton < listaEtiquetasBoton.length; indiceListaBoton++) {
    let boton = listaEtiquetasBoton[indiceListaBoton];
    boton.addEventListener("click", () => {
        if (juegoTerminado || jugadorActual === "O") {
            return;
        }
        actualizarTablero(boton.id);
        boton.textContent = jugadorActual;

        jugadorActual = jugadorActual == "X" ? "O" : "X";
        titlePlayerName.textContent = jugadorActual;

        setTimeout(turnoComputadora, 1000);

    })

}

// 5. Eventos y manejo de interacciones




const resetBtn = document.getElementById("btnReset")
resetBtn.addEventListener("click", resetGame);
// 6. Ejecución inicial (si es necesario)


// 7. Otros
const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    }).then(() => jsConfetti.addConfetti())
})

function conffeti() {
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    }).then(() => jsConfetti.addConfetti())
}



// Modal

const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');


const modalTitleHeading = document.getElementById('modalTitle');
const modalParagraph = document.getElementById('modalMessage');


function openModal(tittle, message) {
    modal.setAttribute('data-visible', 'true');
    modal.setAttribute('aria-hidden', 'false');

    modalTitleHeading.textContent = tittle;
    modalParagraph.textContent = message;

    closeModalBtn.focus();
}

function closeModal() {
    modal.setAttribute('data-visible', 'false');
    modal.setAttribute('aria-hidden', 'true');
    resetBtn.focus();
}


// openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);


const miProesa = fetch("http://localhost:3000/api/task");


const miProesa2 = fetch("http://localhost:3000/api/task",
    {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: "mi task2", check: false })
    },

);

