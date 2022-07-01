let matrizDeNumeros = [
    [1, 2, 3],
    [6, 5, 4],
    [7, 8, 9]
];
//acceder al 1 - 1:
console.log(matrizDeNumeros[1] [1]);

//Cambiar el valor ubicado en 1-0:
matrizDeNumeros[i][0]= 9;
console.log(matrizDeNumeros[1][0]);
console.log(matrizDeNumeros);

//Recorrer la matriz
 for (let i = 0; i < matrizDeNumeros.length; i++) { //Con el primer for accedo a las filas
    for (let j = 0; j < matrizDeNumeros.length; j++) {
        console.log(matrizDeNumeros[i][j]); 
    };
};

//Conocer solo los pares:
for (let i = 0; i < matrizDeNumeros.length; i++) { //Con el primer for accedo a las filas
    for (let j = 0; j < matrizDeNumeros.length; j++) {
        if (matrizDeNumeros[i][j] % 2 === 0) {
            console.log(matrizDeNumeros[i][j]); 
        };
    };
};

