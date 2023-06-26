
var miLista = [];

var animal = {
    nombre: "Elefante",
    peso: 2000
}

console.log("Propiedad 1 es :", animal.nombre);

class MiAnimal {
    nombre = "";
    peso = 0;

    constructor(nombre, peso) {
        this.nombre = nombre;
        this.peso = peso;
    }
}
var objAnimal = new MiAnimal("Jirafa", 234);
var elefante = new MiAnimal("Elefante", 500);

console.log("Mi Animalito :", objAnimal.nombre, objAnimal.peso);
console.log("Mi Animalito :", elefante.nombre, elefante.peso);


class Auto {
    marca = "volkswagen";
    modelo = "ID4";
    color = "red";

    constructor(colorCliente) {
        if (colorCliente) {
            this.color = colorCliente;
        }
        else { //color por defecto
            this.color = "red";
        }
    }
    //metodos // funciones
    imprimir() {
        console.log("Hola soy un auto:", this.color);
    }

}
//objeto o instancia
var newCar = new Auto();
var newCar2 = new Auto();
var autoReserva = new Auto("Blue");

console.log("Primer auto", newCar);
console.log("Segundo auto", newCar2);
console.log("Tercer auto", autoReserva);
console.log(autoReserva.imprimir());




class Libro {
    titulo = "";
    numeroDePaginas = 0;

    constructor(tituloParam, paginasParam) {
        this.titulo = tituloParam;
        this.numeroDePaginas = paginasParam;
    }

    describirLibro() {
        console.log(`Este libro es el ${this.titulo} 
                     con paginas ${this.numeroDePaginas}`);
    }

    getTitulo() {
        return this.titulo;
    }

}

let libro1 = new Libro("Quijote", 1500);
let libro2 = new Libro("Libro selva", 20);

libro1.describirLibro();
libro2.describirLibro();
console.log(" titulo", libro1.getTitulo())
