//1) CONDICIONAL SIMPLE - IF:
if (condition) {
    //codigo a ejecutar si la comdicion es verdadera.
};


//2) CONDICIONAL CON BLOQUE ELSE:
if (condition) {
    //codigo a ejecutar si la comdicion es verdadera.
} else {
    //codigo a ejecutar si la comdicion es falsa.
};


//3) CONDICIONAL CON BLOQUE ELSE IF:
if (condition) {
    //codigo a ejecutar si la condicion es V.
} else if (otraCondicion) {
    //codigo a ejecutar si la otra condicion es V.
} else {
    //codigo a ejecutar si todas las condiciones son falses.
};


// EJ.1)
let clima = 'Soleado';
let dia = 'Domingo';

if ( clima == 'Soleado' && dia == 'Domingo') {
    console.log( 'Lindo dia para pasear');
} else if ( clima == 'Soleado' && dia == 'lunes') {
    console.log('Podria salir igual' );
} else {
    console.log('Mejor me quedo en casa practicando js')
};

// EJ.2)
let edad = 19;
let acceso = '';

if ( edad < 16 ) {
    acceso = 'prohibido';
} else if ( edad >= 16 && edad <= 18 ) {
    acceso = 'Permitido el acceso solo acompañado de un mayor';
} else {
    acceso = 'permitido';
};




// IF TERNARIO: CONDICION ? PRIMERA EXPRESION : SEGUNDA EXPRESION. si es verdadera se jecuta la primer opcion, de lo contrario se ejecuta la segunda.
// en el ternario es obligatorio poner las dos condiciones. si queremos no poner la segunda deberemos poner string vacio ''.

4 > 10 ? 'El 4 es mas grande' : 'EL 10 es mayor';

let frutas = 'Manzana';
let resultado = frutas == 'Manzana' ? 'Buenisimo, me encantan las manzanas' : 'Que lastima, queria manzanas';
console.log (resultado);


//SWITCH : propone una sintaxis mas legible en casos de evaluar muchas posibilidades de un solo valor.

let fruta = ' dragonfruit';
switch (fruta){ //Definimos la variable a consultar en el switch.
    case 'manzana':
        console.log('Que rica manzana');
        break;
    case 'naranja':
        console.log('naranja, me encanta!');
        break;
    default: // se utiliza por la posibilidad de que ninguno de los case sea true. va sin break
        console.log ('Que fruta es?');
};
// en este caso como ambos case son false se va a ejecutar el console.log del default.


let semaforo = 'Verde';
switch (semaforo) {

    case 'Verde' :
        console.log ( 'puedo cruzar');
        break;

    case 'Amarillo' :
        console.log ( 'Precaucion');
        break;

    case 'Rojo' :
        console.log ( 'Mejor esperar');
        break;
    
    default :
        console.log( 'no funciona el semaforo');
    
}