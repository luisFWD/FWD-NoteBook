/**Dada la siguiente matriz realiza los ejercicios citados*/

const matrisObjetos = [
    ['Manzana', 'Plátano', 'Naranja'],
    ['Perro', 'Gato', 'Pájaro'],
    ['Mesa', 'Silla', 'Lámpara']
];

console.log(` 1.1) Imprime en consola el Objeto en la fila 1 y columna 1; `);
console.log(matrisObjetos[1][1]);
// Resultado esperado//   Gato


console.log(`1.2) Imprime en consola el Objeto en la fila 2 y columna 2; `);
// Resultado esperado//   Lámpara
console.log(matrisObjetos[2][2]);

console.log(`1.3) Imprime en consola el Objeto en la fila 0 y columna 0; `);
console.log(matrisObjetos[0][0]);

console.log(`1.4) Imprime en consola el Objeto en la fila 2 y columna 1; `);
console.log(matrisObjetos[2][1]);

console.log(` 2) Completa el siguiente llamado consola con la fila  y columna  del objeto  "Naranja" ; `);

let filaNaranja = 0; /** tu codigo aqui */
let columnaNaranja = 2;/** tu codigo aqui */

//ejemplo;
let filaGato = 1;
let columnaGato = 1;

console.log(`La naranja esta en la posicion: fila ${filaNaranja} y la columna ${columnaNaranja}`);




console.log(`3) Completa el siguiente llamado consola con la fila  y columna  del objeto  "Mesa" ;`);

let filaMesa = 2 /** tu codigo aqui */;
let columnaMesa = 0/** tu codigo aqui */;


console.log(`La mesa esta en la posicion: fila ${filaMesa} y la columna ${columnaMesa}`);




console.log(`4) Utiliza un ciclo for para imprimir los elementos de la fila numero #2  ;`);
// Resultado esperado//    'Mesa',
//                         'Silla'
//                         'Lámpara'
//['Mesa', 'Silla', 'Lámpara']

console.log(matrisObjetos[2])

for (let indice = 0; indice < matrisObjetos[2].length; indice++) {

    console.log(matrisObjetos[2][indice])

}



console.log(` 5) Utiliza un ciclo for para imprimir los elementos de la columna #1 ;`);
// Resultado esperado//    'Platano',
//                         'Gato'
//                         'Silla'


console.log(` 5) Utiliza dos ciclos for para imprimir todos los elementos de la matris ;`);
// Resultado esperado//
//                    'Manzana'
//                    'Plátano'
//                    'Naranja'
//                    'Perro'
//                    'Gato' 
//                    'Pájaro'
//                    'Mesa'
//                    'Silla' 
//                    'Lámpara'


