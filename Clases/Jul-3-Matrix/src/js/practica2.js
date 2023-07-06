/**Dada la siguiente matriz realiza los ejercicios citados*/

const matrizProductos = [
    [{ nombre: 'Chocolate', precio: 2.99, existencias: '10' }, { nombre: 'Galletas', precio: 1.49, existencias: 'agotado' }, { nombre: 'Caramelos', precio: 0.99, existencias: '2' }],
    [{ nombre: 'Refresco', precio: 1.99, existencias: '20' }, { nombre: 'Agua', precio: 0.79, existencias: 'agotado' }, { nombre: 'Jugo', precio: 1.29, existencias: '6' }],
    [{ nombre: 'Pizza', precio: 5.99, existencias: 'agotado' }, { nombre: 'Hamburguesa', precio: 4.49, existencias: '15' }, { nombre: 'Papas fritas', precio: 2.99, existencias: '1' }]
];



//====

console.log(` 1.0) Coloca las existencias de el objecto de Chocolate  en  "agotado"; `);
// tu codigo aqui
//matrizProductos[0][0]

matrizProductos[0][0].existencias = "5000";
matrizProductos[0][0].precio = 550;


console.log(matrizProductos[0][0]);



console.log(`Las Existencias del chocolate ahora estan en ${matrizProductos[0][0].existencias}`);
console.log("");



//====

console.log(` 1.1) Coloca las existencias de el objecto de Agua  en  20 ; `);
// tu codigo aqui
console.log(`Las Existencias del Agua ahora estan en ${matrizProductos[1][1].existencias}`);
console.log("");

//====

console.log(` 1.2) Coloca las existencias de el objecto de Papas fritas  en  "25"; `);
// tu codigo aqui
console.log(`Las Existencias de las Papas Fritas ahora estan en ${matrizProductos[2][2].existencias}`);
console.log("");

//====



console.log(` 2.0) Utiliza un ciclo for para colocar el precio de todos los productos,
de la fila #0  en  2 dolares   ; `);
console.log(matrizProductos[0]);
console.log("");
//====



console.log(` 2.1) Utiliza un ciclo for para colocar el precio de todos los productos,
de la fila #1  en  5 dolares   ; `);
console.log(matrizProductos[1]);
console.log("");
//====




console.log(` 3.1) Crea dos ciclos for para imprimir solo el nombre de todos productos de la matriz; `);
console.log("");

for (let filasIndice = 0; filasIndice < matrizProductos.length; filasIndice++) {


    //console.log(matrizProductos[filasIndice]);
    let fila = matrizProductos[filasIndice];
    for (let columnasIndice = 0; columnasIndice < fila.length; columnasIndice++) {

        console.log(fila[columnasIndice].nombre);
    }


}
