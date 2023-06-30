
var etiquetaMinutos = document.getElementById("minutosH2");
var etiquetaSegundos = document.getElementById("segundosH2");

var segundos = 0;
var minutos = 0;

var idReloj; //estoy definido afuera

function iniciar() {
    clearInterval(idReloj);
    idReloj = setInterval(() => {
        segundos++;


        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }

        etiquetaSegundos.textContent = segundos;
        etiquetaMinutos.textContent = minutos;
    }, 250);
}

function pausa() {
    clearInterval(idReloj);
}

function reset() {
    clearInterval(idReloj);
    segundos = 0;
    minutos = 0;

    etiquetaSegundos.textContent = segundos;
}

var etiquetaBtnInicio = document.getElementById("btnIncio");
etiquetaBtnInicio.addEventListener("click", iniciar);

var etiquetaBtnPausa = document.getElementById("btnPausa");
etiquetaBtnPausa.addEventListener("click", pausa);

var etiquetaBtnReset = document.getElementById("btnReset");
etiquetaBtnReset.addEventListener("click", reset);