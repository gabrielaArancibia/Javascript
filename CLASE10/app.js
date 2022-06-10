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
