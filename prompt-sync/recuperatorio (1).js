//1)  Deberás crear un array con 3 objetos dentro. Cada uno será un programador que tendrá las siguientes propiedades: 
// nombre : string 
// lenguajeFavorito : string 
// aniosDeExperiencia : number

let programador = [
    {
        nombre : 'Tobias',
        lenguajeFavorito : 'Javascript',
        aniosDeExperiencia : 10
    },
    {
        nombre : 'Michelle',
        lenguajeFavorito : 'Java',
        aniosDeExperiencia : 3

    },
    {
        nombre : 'Mauricio',
        lenguajeFavorito : 'Python',
        aniosDeExperiencia : 5
    },
];
console.log(programador);

// A)Crear una función que reciba por parámetro el array y agregue una propiedad nueva para cada objeto que se llamará ( seniority ) y obtendrá su valor según los siguientes criterios:
// Si aniosDeExperiencia es mayor o igual a 4 su seniority será: Senior
// Si aniosDeExperiencia es mayor a 3 y menor a 4 su seniority será: Semi Senior
// Si aniosDeExperiencia es menor o igual a 3 su seniority será: Junior
function experiencia (programador) {
    for (let i = 0; i < programador.length; i++) {
        const aniosTrabajando= programador[i];
        aniosTrabajando.seniority = '';
        if (programador[i].aniosDeExperiencia >= 4) {
            aniosTrabajando.seniority = 'Senior';
            }
        else if (programador[i].aniosDeExperiencia > 3 && programador[i].aniosDeExperiencia < 4) {
            aniosTrabajando.seniority = 'Semi-Senior'
        }
        else if (programador[i].aniosDeExperiencia <= 3){
            aniosTrabajando.seniority = 'Junior'
        }
    }
    return programador;
};

// B)Ejecutar el correspondiente  llamado de la función para demostrar su correcto funcionamiento.
console.log(experiencia(programador));

//-----------------------------------------------------------------------------------------------------------------------------------------
//2) Teniendo en cuenta el array de programadores del ejercicio 1, 
// realizar una función llamada bubbleSort que reciba por parámetro el array  y un string (podrá ser: “DESC” o “ASC”) y 
// ordene los objetos del array según sus aniosDeExperiencia de forma descendente  o ascendente según lo indique el parámetro recibido.
// Ejecutar el correspondiente llamado de la función para demostrar su correcto funcionamiento. 
let orden = 'ASC';
function bubbleSort ( programador, orden ) {
    for (let i = 0; i < programador.length; i++) {
        for (let j = 0; j < programador.length -1 ; j++) {
            if (programador [j].aniosDeExperiencia > programador [j + 1].aniosDeExperiencia) {
                let temp = programador [j];
                programador [j] = programador [j + 1];
                programador [j + 1] = temp;
                
            }
            
        }
        
    }
        return programador;
};
console.log(bubbleSort(programador));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//3) Dada la siguiente matriz: 

let matriz = [
    [7, 3, 20],
    [1, 9, 17],
    [50, 9, 60],
];

// A)Realizar una función que reciba la matriz por parámetro, recorra la diagonal principal y retorne el promedio de la misma. 
//(La diagonal principal es la que está compuesta por los elementos 7, 9 y 60)
    function sumaDiagonal(arreglo) {
        let diagonalPrincipal = 0;
        for (let i = 0; i < arreglo.length; i++) {
            for (let j = 0; j < arreglo [i].length; j++) {
                if ( i == j) {
                    diagonalPrincipal += arreglo [i][j];
                    
                }
                
            }
            
        }
        
        return diagonalPrincipal;
    };

let resultado = sumaDiagonal (matriz);
console.log(resultado);

//B)Realizar una función que reciba la matriz y un número de fila por parámetro,
//  acceda a esa fila y modifique sus elementos por sus negativos. 
const modificarFila = (array) => {
    let indice = array - 1;
    let filaDos = matriz[indice];
    for (let i = 0; i < filaDos.length; i++) {
        filaDos.splice (0, 3, - 1, -9, -17);
        
    }
    return filaDos;
};
console.log(modificarFila(2));
console.log(matriz);


//C)Realizar una función que reciba por parámetro una matriz, recorra sus elementos y cuente cuántos números pares e impares hay.
// Luego, deberá retornar un objeto con las siguientes propiedades: 

function paresOImpares(matriz) {

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length ; j++) {
            if ( matriz [i][j] % 2 === 0 ){

                console.log('los numeros pares son' + ' ' + matriz[i][j]);
            }
            else if ( matriz [i][j] % 2 !== 0){
                console.log( 'los numeros impares son' + ' ' + matriz[i][j]);
            }
        } 
    }
   
    return;
};
console.log(paresOImpares(matriz));
