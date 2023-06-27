
console.log("//===============================");
console.log("//=========== Clases ============");
console.log("//===============================");


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

console.log("//===============================");
console.log("//=========== Autos ============");
console.log("//===============================");


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


console.log("//===============================");
console.log("//=========== Libros ============");
console.log("//===============================");


class Libro {

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
console.log(" titulo", libro1.getTitulo());

//===============================


console.log("//===============================");
console.log("//======== ABSTRACCION ==========");
console.log("//===============================");

var objecto = {
    alto: 0,
    ancho: 0,
}

class Automovil {
    modelo = "Corvete";
    color = "Red";
    motor = 1500;
    estaEncendido = false;

    constructor(motorCC) {
        this.motor = motorCC;
    }

    moverse() {
        console.log("Im Speed Im moving kuchau");
    }
    encender() {
        this.estaEncendido = true;
    }
}

let macqueen = new Automovil();
let mate = new Automovil(1200);

console.log("motor mcqueen:", macqueen.motor);
console.log("motor de mate:", mate.motor);

console.log("modelo mcqueen:", macqueen.modelo);
console.log("modelo de mate:", mate.modelo);

console.log("La marca de mcqueen es:", macqueen.modelo);
macqueen.moverse();
macqueen.encender();
console.log("Esta encendido?:", macqueen.estaEncendido);



console.log("//===============================");
console.log("//======== Ejercicio 1 ==========");
console.log("//======= Clase  Alumno =========");
console.log("//===============================");


/**
 * Ejercicio: Sistema de Registro de Alumnos

En una escuela, se necesita implementar un sistema de 
registro de alumnos. Cada alumno tiene los siguientes atributos:

Nombre
Edad
Grado

Para ello, se te pide crear una clase llamada 
"Alumno" que tenga métodos para establecer y 
obtener los atributos mencionados.

Además, se requiere un método adicional llamado 
"mostrarInformacion" que imprima en la consola 
la información del alumno en el siguiente formato:
"Nombre: [nombre] - Edad: [edad] - Grado: [grado]".

Una vez creada la clase "Alumno", crea tres 
instancias de la clase para representar a tres 
alumnos diferentes y muestra su información 
utilizando el método "mostrarInformacion".

Tu tarea consiste en:

Crear la clase "Alumno" con los atributos y métodos mencionados.
Crear tres instancias de la clase "Alumno" con información diferente para cada alumno.
Utilizar el método "mostrarInformacion" para imprimir la información de cada alumno en la consola.
 * 
 * 
 */


class Alumno {
    nombre = "";
    edad = 0;
    grado = "nivel1";
    setNombre(nombreParam) {
        this.nombre = nombreParam;
    }
    getNombre() {
        return this.nombre;
    }
    setEdad(edadParam) {
        this.edad = edadParam;
    }
    getEdad() {
        return this.edad;
    }
    setGrado(gradoParam) {
        this.grado = gradoParam;
    }
    getGrado() {
        return this.grado
    }

    mostrarInformacion() {
        console.log("Nombre: " + this.nombre + " - Edad: " +
            this.edad + " - Grado:" + this.grado);
    }

}

let joshua = new Alumno();
joshua.setNombre("Joshua");
joshua.setNombre("Kuchao");
console.log("Mi alumno es ", joshua.getNombre());
joshua.setEdad(15);
console.log("La edad de Mi alumno es ", joshua.getEdad());
//happy birthday
let edadActual = joshua.getEdad();
joshua.setEdad(edadActual + 1);

console.log("La edad de Mi alumno es ", joshua.getEdad());
joshua.mostrarInformacion();
//Nombre: Kuchao - Edad: 16 - Grado:nivel1

//segundo alumno
let alumno2 = new Alumno();
alumno2.setNombre("Luis");
alumno2.setEdad(155);
alumno2.setGrado("beginner");
alumno2.mostrarInformacion();



console.log("//===============================");
console.log("//======== Ejercicio 2 ==========");
console.log("//====== Clase  Producto ========");
console.log("//===============================");

/**
 * Ejercicio 2: Tienda de Productos Electrónicos

En una tienda de productos electrónicos,
se necesita implementar un sistema de inventario.
Cada producto tiene los siguientes atributos:

Nombre del producto
Categoría
Precio
CantidadDisponible

Para ello, se te pide crear una clase llamada "Producto" 
que tenga métodos para establecer y obtener los atributos mencionados.

Además, se requiere un método adicional llamado "verificarCantidadDisponible" 
que reciba una cantidad deseada y verifique si hay suficiente cantidad disponible
para esa cantidad. El método debe devolver true si hay suficiente cantidad y false en caso contrario.

*/
class Producto {
    nombreDelProducto = "";
    categoria = "";
    precio = 0;
    cantidadDisponible = 0;

    constructor(nombreParam, categoriaParam, precioParam, cantidadParam) {
        this.nombreDelProducto = nombreParam;
        this.categoria = categoriaParam;
        this.precio = precioParam;
        this.cantidadDisponible = cantidadParam;
    }


    setNombre(nombreParam) {
        this.nombreDelProducto = nombreParam;
    }

    setCategoria(categParam) {
        this.categoria = categParam;
    }

    setPrecio(precioParam) {
        this.precio = precioParam;
    }

    setCantidad(cantidadParam) {
        this.cantidadDisponible = cantidadParam;
    }


    //gets
    getNombre() {
        return this.nombreDelProducto;
    }

    getCategoria() {
        return this.categoria;
    }

    getPrecio() {
        return this.precio;
    }

    getCantidad() {
        return this.cantidadDisponible;
    }


    verificarCantidadDisponible(cantidadComprar) {

        if (this.cantidadDisponible >= cantidadComprar) {

            return true; //si tengo inventario
        } else {

            return false;
        }
    }

}


//instanciar == crear objetos
var telHuawei = new Producto("huawei", "celus", 115000, 50);
// telHuawei.setNombre("Celular Huawei");
// telHuawei.setCategoria("celulares");
// telHuawei.setPrecio(75000);
// telHuawei.setCantidad(10);

console.log("Hay inventario para 5? :", telHuawei.verificarCantidadDisponible(5),
    telHuawei.getNombre()

)

//inflacion

telHuawei.setPrecio(200000);




console.log("//===============================");
console.log("//========  ==========");
console.log("//===============================");



class Tarea {
    todo = "";
    estaTerminada = false;

    constructor(tareaParam) {
        this.todo = tareaParam
    }

    setTerminada(check) {
        this.estaTerminada = check;
    }

    imprimir() {
        console.log(`Mi tarea es ${this.todo}  y esta ${this.estaTerminada}`);
    }

}

var tarea1 = new Tarea("limpiar platos");
tarea1.imprimir();

tarea1.setTerminada(true);
tarea1.imprimir();
