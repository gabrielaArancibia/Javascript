// MATRIZ: variable cuyo valor es un array, mientras que ese array guarda otros arrays, uno en cada index.
const matrizDeEdades = [
    [20,22,25,27,29],
    [14,45,12,12,13],
    [5,4,22,5,13,5],
    [15,89,86,56,4]
];

console.log(matrizDeEdades [3] [3]); // el primer numero corresponde a la fila y el segundo a la columna.


/////////////////////////// RECORRER UNA MATRIZ

// Matriz de ejemplo:
let butacasCine = [
    ['ocupado', 'libre', 'libre', 'libre'],
    ['libre', 'libre', 'libre', 'libre'],
    ['libre', 'libre', 'ocupado', 'ocupado'],
    ['ocupado','ocupado','ocupado','ocupado'],
    ['libre','libre','libre','libre']
];
console.table(butacasCine);

//CON UN CICLO FOR: para ejecutar un ciclo for debemos saber cuantas veces debe iterar.

let cantidadFilas = butacasCine.length; // medimos la cantidad de filas.

let cantidadColumnas = butacasCine[0].length; // medimos la cantidad de columnas de la fila 0. Va a ser igual la cantidad de columnas en todos los indices.


// EJ: queremos saber si en la fila 1 hay butacas libres:
// Usamos un solo for para fijar la fila y recorrerla.
// COMO RECORRER UNA FILA?:
let libres = false;
for (let i = 0; i < butacasCine[1].length; i++) {
        if (butacas[1][i]== 'libre') {
            libres = true;
        };
};

// COMO RECORRER UNA COLUMNA:
let ocupadas = true;
for (let i = 0; i < butacasCine.length; i++) {
    if (butacas[i][1]== 'libre') { //utilizamos el [1] porque queremso saber si en una columna del medio hay alfun lugar libre.
        ocupadas= false;
    };
};




// CON DOS CICLOS FOR: con dos for podemos recorrer la matriz de posicion a posicion, completamente.
// 1) RECORRIENDO POR FILA: el pirmer for recorre cada fila y el segundo cada elemento de la fila.
let libresDos = false;

for (let fila = 0; fila < butacasCine.length; fila++) {
    libresDos = false; // EL primer for itera por cada fila y mide cuantas filas hay.
    for (let colum = 0; colum < butacasCine[fila].length; colum++) { // el segundo for comprueba cada elemento de la fila, osea cada columna.
        if (butacas[fila][colum]== 'libre') {
            libresDos = 'true';
        };
        
    };
        if (libresDos == true) {
            console.log( 'En la fila' + fila + 'hay butacas libres');
        }; // muestra el resultado
};

// 2) RECORRIENDO POR COLUM:
let ocupadoDos = true;

for (let colum = 0; colum < butacasCine.length; colum++) {
    ocupadoDos = true;
    for (let fila = 0; fila < butacasCine.length; fila++) {
        if (butacas [fila][colum] == 'ocupado') {
            ocupado = false;
        };
    };
    if (ocupadoDos == false) {
        console.log( 'En la' + colum + 'hay butacas libres');
    };
};



//////////////////////OTRO EJEMPLO
let matrizNumeros = [
    [1, 3, 5, 7],
    [0, 2, 4, 6],
    [8, 9 , 10, 11]
];

// queremos recorrer en este caso la fila 1 : [0, 2, 4, 6]:
for (let i = 0; i < matrizNumeros.length; i++) {
    console.log( matrizNumeros [1][i]);
};

//ahora quremos recoorer la columna dos:
for (let i = 0; i < matrizNumeros.length; i++) {
    console.log(matrizNumeros [i][2]);
};

//recorremos TODAS las filas:
for (let fila = 0; fila < matrizNumeros.length; fila++) {
    for (let columna = 0; columna < matrizNumeros[fila].length; columna++) {
        console.log(matrizNumeros [fila] [columna]);
    };
};

//rcorriendo TODAS las columnas:
for (let columna = 0; columna < matrizNumeros[0].length; columna++) {
    for (let fila = 0; fila < matrizNumeros[fila].length; fila++) {
        console.log(matrizNumeros [fila] [columna]);
    };
};