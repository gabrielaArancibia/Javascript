// ARRAYS: permiten generar una coleccion de datos ordenados.

let miArray = [ 'Hola', 36, true ]; 

// los corchetes determinan el inicio y final de un array, y separamos sus elementos por comas.
// los valores dentro del array pueden ser de cualquier tipo.
// cada dato dentro del array ocupa una posicion numerada conocida como indice, la primera es siempre  0.
// (en este caso hola : 0; 36: 1; true: 2)


// Para acceder a un elemento puntual dentro de un array, nombramos al array y, dentro de los corchetes, escribios el indice al cual queremos acceder.

let pelisFavoritas = [ 'Star wars', 'kill bill', 'Interestellar'];
pelisFavoritas [2]; // Accederemos al indice 2 del array : 'interestellar'.

// Una propiedad util de los arrays es su longitud o cant de elemntos. para conocer la longitus utilizamos la palabra LENGTH.

pelisFavoritas.length;


// ej video:

let nombres = [ 'Titi', 'Suri', 'Milka']; //array de strings
let edades = [ 6, 7, 10 ]; //array de numbers
let tienenHambre = [ true, false, true ]; //array de booleanos
let variados = [ 'titi', 6, true, edades]; //array con dif tipos de datos.
// como se muestra en el ultimo array variados, se puede tener un array dentro de otro (en este caso edades dontro de varios);
console.log ( nombres [0] ); // Asi los vamos a llamar, en este caso dara como resultado 'Titi'.



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// METODOS DE ARRAYS.

//1) .push(): agrega uno o mas elementos al final del array. recibe 1 o + parametros, retorna una nueva longitud del array.
// EJ .push:
let colores = [ 'Rojo', 'Naranja', 'Azul'];
colores.push ( 'Violeta');
console.log ( colores );
// [ 'Rojo', 'Naranja', 'Azul', 'Violeta']

colores.push ( 'Gris', 'Oro');
console.log( colores); // retorna el array de todos los colores.
// [ 'Rojo', 'Naranja', 'Azul', 'Violeta', 'Gris', 'Oro'];



//2) .pop(): elimina el ultimo elemento de un array. No recibe parametros, devuelve el elemento eliminado.
let series = [ 'Mad Men', 'Breaking Bad', 'GOT'];
//Creamoss una variable para guardar lo que devuelve .pop()
let ultimaSerie (series) = series.pop();

console.log( series ); //[ 'Mad Men', 'Breaking Bad']
console.log( ultimaSerie );// [ 'GOT' ]



//3) .shift(): elimina el primer parametro de un  array. No recibe parametros, devuelve el eliminado.
let nombres = [ 'Frida', 'Archie', 'Tini'];
let primerNombre = nombres.shift();

console.log( nombres ); //['Archie', 'Tini']
console.log( primernombre );//[ 'Frida']


//4) .unshift(): agrega 1 o + elementos al principio de un array. recibe 1 o + parametros, devuelve la nueva long del array.
let marcas = [ 'Audi' ];

marcas.unshift( 'Ford' );
console.log ( marcas ); //devuelve [ 'Ford', 'Audi'];

marcas.unshift( 'Ferrari' );
console.log ( marcas ); //devuelve [ 'Ferrari', 'Ford', 'Audi'];


//5) .join(): une los lementos del array utilizndo el separador que especifiquemos, si no especificamos usa comas.
let dias = [ 'Lunes', 'Martes', 'Jueves'];

let separadosPorComa = dias.join();
console.log(separadosPorComa); //'Lunes', 'Martes', 'Jueves'. Como no especificamos separa x comas.

let separadosPorGuion = dias.join(' - ');
console.log(separadosPorGuion); // 'Lunes' - 'Martes' - 'Jueves'.


//6) .indexOf(): Busca en el array el elemento que recibe como parametro. 
// recibe un parametro a buscar. Si no lo encuentra retornara un -1;
let frutasDos = [ 'Manzana', 'Pera', 'Frutilla' ];
frutasDos.indexOf( 'Frutilla' ); // Devuelve 2, el indice donde se encuentra el elemento.

frutasDos.indexOf ( 'Banana' ); // no lo encuentra en el array entonces devuelve -1.

//7) .lastIndexOf(): igual que el anterior solo que empieza a buscar por el elemento FINAL del array y luego va al comienzo.
// En caso de haber repetidos devuelve el numero de posicion del que primer encuentra.
let clubes = [ 'Racing', 'Boca', 'Lanus', 'Boca' ];
let posicion = clubes.lastIndexOf( 'Boca' ); // devuelve 3
let posicionDos = clubes.lastIndexOf ( 'River' ); //no lo encuentra, devuelve -1 
console.log(posicion);


//8) .includes(): retorna un booleano (igual que indexOf()).
//Si lo encuentra retorna true, sino retorna false.
let frutasTres = [ 'uva', 'manzana', 'frutilla'];
frutasTres.includes( 'frutilla' ); // Devuelve true.
frutasTres.includes( 'dragonFruit' ); //Devuelve false.



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PROPIEDADES DE STRINGS: un string es un array de caracteres.

// 1) .length : retrona la cantidad total de caracteres del string.
// al ser una propiedad no hace falta ponerle parentesis.

let miSerie = 'Mad men';
let  longitudString = miSerie.length; 
console.log(longitudString); // devuelve 7

// 2) .indexOf(): busca en el string el string que recibe como parametro.

let saludo = 'Hola, estamos programando';
saludo.indexOf( 'Estamos '); //retrona 7.
saludo.indexOf ( 'vamos' ); // devuelve --1;


// METODOS DE STRINGS: 

//1) .slice(): corta el string y devuelve una parte dond el string se aplica.
let frase = 'Breaking Bad Rules';
frase.slice (9,12); //Devuelve 'Bad'.
frase.slice(13);//Devuelve 'Rules';

//2) .trim(): elimina los espacios al principio y final de un string. no recibe los parametros y no quita espacios del medio.
let nombreCompleto = '     Homero simpson    ';
nombreCompleto.trim(); // devuelve 'Homero simpson';

let nombreCompletoDos = 'homero              simpson';
nombreCompletoDos.trim(); //'homero                 simpson";


//3) .replace(): reemplaza una parte del string por otra.
//recibe dos strings como parametro, el que queremos buscar y el reemplazo.
// retorna el nuevo string con el reemplazo.

let frase = 'Aguante Python';
frase.replace ( 'Phyton', 'JS'); // devuelve 'Aguante JS';
frase.replace ( 'Py', 'JS'); // devuelve ' Aguante JSthon';


// 4) .split(): divide un string en partes.
let cancion = 'Ans bingo was his name';
cancion.split( ' ' ); // devuelve [ 'And' 'bingo' 'was' 'his'.....]
