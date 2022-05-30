// VARIABLES
// LET: solo puede estar conformada x letras, numeros, $, _, no pueden empezar con numeros, no deben tener ñ ni acentos. (bp: camelCase)
// las variables LET a diferencia de CONST  pueden ser re-declaradas.

let miNombre = 'Gabriela';
console.log (miNombre);


let nombreGato = 'tini';
console.log (nombreGato);
                                // la varianles solo puede ser re-declarada estando dentro de bloques distintos. pero SI le podemos cambiar el valor sin inconvenientes
if(true){
    let nombreGato = 'milka';  
    console.log (nombreGato);
}


// CONST: igual que let a diferencia de que va a ser una CONSTANTE.  NO se puede cambiar su valor una vez este asignado.

const apellido = 'Arancibia'; // es una constante a lo largo de todo el archivo js, no se puede redefinir en ningun ambito.
console.log (apellido);


// TIPOS DE DATOS:
//1)NUMBER:
let edad = 25;

//2)STRING:
let nombreDos = 'bubu'; //tambien se puede usar "".

//3)BOOLEAN:
let haceFrio = true;
let haceCalor = false;

//4)UNDEFINED:
let saludo; //no posee valor.

//5)NULL:
let temperatura = null; //indica valor desconocido o vacio.

//6)NOT A NUMBER NaN: indica que el valor no es un numero.
let tipo = 'samsung';
console.log (tipo - 1)




//OPERADORES:
//1) RESTA:
console.log (8 - 5);

//2) SUMA:
console.log ( 10 + 55);

//3) MULTIPLICACION:
console.log ( 10 * 10);

//4) DIVISION:
console.log (10 / 2);

//5) MODULO: devuelve el resto de una division:
console.log (15 % 2);

//6) INCREMENTO:
let valor = 6;
console.log (++valor);

//7) DECREMENTO:
let valorDos = 10;
console.log ( --valorDos);

//8) COMPARACION SIMPLE:
console.log( 5 == '5'); //TRUE> corrobora que el valor sea igual sin importar el tipo de dato.

//9) COMPARACION ESTRICTA:
console.log( 5 === '5'); //FALSE> corrobora que sea igual el valor y el tipo de dato.

//10) DESIGUALDAD SIMPLE:
console.log( 5 != '5'); //FALSE> igual valor a pesar de diferente tipo de dato.

//11) DESIGUALDAD ESTRICTA:
console.log( 5 !== '5'); // TRUE> desigualdad.

//12) MAYOR QUE:
console.log( 10 > 6 ); // IDEM CON <

//12) MAYOR O IGUAL:
console.log( 6 >= 6 ); // IDEM CON <=

//13) AND:
console.log( true && true ); // si se cumplen ambas condiciones va a ser true, si una de las condiciones no se cumple sera false.

//14) OR:
console.log( true || false); // si una de las condiciones es verdadera, entonces sera todo verdadero. solo debe cumplirse 1 sola condicion. si ambas son verdaderas tambien sera verdadero.

//15) CONCATENACION: 
let nombrePrincipal = 'Gabriela';
let apellidoPrincipal = 'Arancibia';
console.log( nombrePrincipal + '  ' + apellidoPrincipal);
