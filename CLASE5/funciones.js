// FUNCTION: funciones en js. hya 2 tipos
//1) DECLARADAS: 

function saludar (nombre, apellido){
    return 'Hola' + nombre + ' ' + apellido;
};
saludar ('Gabriela', 'Arancibia') // invocacion de la funcion

//2) EXPRESADAS:
let triplicar = function (numero){
    return numero * 3;
};

//FUNCTION: funciones en js. hya 2 tipos


//////1) DECLARADAS: NO se declara como valor en una variable.
function saludar (nombre, apellido){
    return 'Hola' + nombre + ' ' + apellido;
};
saludar ('Gabriela', 'Arancibia') // invocacion de la funcion

//EJ DELCARADA PG
function restar ( numC, numD ){
    return numC - numD;
}
console.log (restar( 8, 5 ));



///////2) EXPRESADAS: se asigna como valor a una variable.
let triplicar = function (numero){
    return numero * 3;
};

//podemos definir valores por defecto
function saludarDos (nombreA = 'visitante', apellidoA = 'anonimo') {
    return 'Hola' + nombreA + ' ' + apellidoA;
}
saludar ();

//EJ EXPRESADAS PG
let sumar = function ( numA, numB ){
    return numA + numB;
}
console.log (sumar( 10, 8 ));





/////// SCOPE: alcance que tiene una variable. Desde donde podems acceder a ella.

//1) LOCAL: posee scope local cuando declaramos la variable dentro de una funcion. no podemos acceder a ella por fuera de la funcion.
function saludar () {
    //scope local
    let saludo = 'Hola, que tal?';
    return saludo;
}; 
    //no podemos acceder desde afuera de ese scope.
    console.log (saludo); //undefined.

// GLOBAL: cuando declaramos una variable fuera de cualquier funcion. posee alcance global.
    //scope global
    let saludo = 'Hola que tal?';
    function hola (){
        return saludo;
    }
   console.log (saludo); // ejecuta el saludo por que al ser de scope global js sabe a que variable nos referimos.



////// ARROW FUNCTIONS: la flecha gorda => reemplaza la palabra function.
let sumar = (a , b) => a + b;
console.log( sumar( 2, 4 ));

//Si recibe un unico parametro ni hace falta ponerle parentesis.
let doble = a => a * 2; // cuando es una sola linea de codigo no hace falta retonar

//Cuando hay mas de una linea de codigo si hace falta retornar.
let esMultiplo = ( a, b) => {
    let resto = a % b; //obtenemos resto de la division.
    return resto == 0; // si el resto es cero, es multiplo.
}

//EJ FUNCTIONES ARROW PG:
let laMitad = num => num / 2 ;
console.log( laMitad( 10 ) );

let dividir = ( numF,numG ) => numF / numG;
console.log ( dividir ( 20,2 ));
