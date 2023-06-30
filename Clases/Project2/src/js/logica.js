
// crear las matrices

//hacer la funcion de chekeo

class Cell {
    row = 0;
    col = 0;
    check = ""
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    isLeftDiagonal() {
        return this.col === this.row;
    }
    isRightDiagonal(maxNumber) {
        return this.col + this.row === maxNumber;
    }

}

//
var matrixNumber = 3;
var maxNumber = matrixNumber - 1;

var rows = [];


function checkWinForRow(matrix, row, playerSimbol) {
    const rowToCheck = matrix[row];
    const reduceFun = (counter, object) => { return counter && (object.check === playerSimbol) };
    let win = rowToCheck.reduce(reduceFun, true);
    return win;
}

function checkWinForCol(matrix, col, playerSimbol) {
    let win = true;
    matrix.forEach(element => {
        win = win && (element[col].check === playerSimbol);
    });
    return win;
}

function createBoard() {
    for (let row = 0; row < matrixNumber; row++) {
        var newRow = [];

        for (let col = 0; col < matrixNumber; col++) {

            var cell = new Cell(row, col);
            newRow.push(cell);
        }

        rows.push(newRow);

    }
}


createBoard();
console.log(rows);







console.log(checkWinForRow(rows, 0, "manu"));
console.log(checkWinForRow(rows, 1, "manu"));
console.log(checkWinForRow(rows, 2, "manu"));

console.log(checkWinForCol(rows, 1, "manu"));


var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var boardEtiqueta = document.getElementById("board");
var printString = "";

function printAGame() {
    printString = "";
    for (let row = 0; row < rows.length; row++) {
        for (let col = 0; col < rows.length; col++) {

            if (rows[row][col].check.length > 0) {
                printString = printString + " " + rows[1][1].check;
            } else {
                printString = printString + " " + row + col;
            }


        }
        printString = printString + "<br/>";
    }
    boardEtiqueta.innerHTML = printString;
}


var jugador = "X";

function makeAGame() {

    let value1 = input1.value;
    let value2 = input2.value;



    if (jugador == "X") {
        jugador = "#";
    } else {
        jugador = "X";
    }
    console.log("1", jugador);

    rows[value1][value2].check = jugador;


    printAGame();

}

var etiquetaButton = document.getElementById("buttonGame");
etiquetaButton.addEventListener("click", makeAGame)

printAGame();