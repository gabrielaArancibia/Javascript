//ALGORITMOS DE ORDENACION: BUBBLE SORT.
//  Algoritmo que permite ordenar de manera ascendente o descendente una cadena de valores sin importar la longitud que posea.
// ejemplo de bubblesort:

let numeros = [6, 6, 1, 2, 4, 3, 8, 7];

//Escribimos el alroritmo de ordenacion de menor a mayor. para la iteracion usamos un ciclo FOR.
for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        if (numeros[j] > numeros [j + 1]) {
            let temp = numeros[j];    /////// Para ayudar a cambiar los valores entre array[i] y array[j]. La variable temporal se usa para  poder evaluar matriz [i] y matriz [j]: guarda la matriz [i] en una ubicación temporal, la sobrescribe con matriz [j] y luego asigna el valor que reserva (temporalmente) a matriz[j].
            numeros [j] = numeros [j + 1];
            numeros [j + 1] = temp;
        };
        
    };
    
};

// Se hace un double for para ir iterando numero por numero.
// el ultimo paso del algoritmo bubble sort es hacernos una pregunta logica, estando en el for interno: el numero siguiente es mayor que el numero actual? 
// Si es asi, intercambian posiciones y lo repite hasta el final del array.



//EJEMPLO 2) BUBBLE SORT
let persona = [
{
    nombre: 'Gabriela',
    apellido: 'Arancibia',
    ocupacion: 'Empleada',
    estatura: 174,
},
{
    nombre: 'Tobias',
    apellido: 'Guglielminotti',
    ocupacion: 'Programador',
    estatura: 175,
},
{
    nombre: 'Tini',
    apellido: 'Ackuszu',
    ocupacion: 'Dormir',
    estatura: 30,
},
];
console.log( persona[0].nombre );
console.log( persona[1].apellido );
console.log( persona[2].estatura );
console.log( persona.estatura );

// Para acceder a las propiedades tambien podemos crear un loop que itere sobre todo el array y mostra por conola alguna propiedad como en este caso, la estatura.

for (let i = 0; i < persona.length; i++) {
    console.log( persona[i].estatura);
    
};
// tambien podemos sumar condicionales:
for (let i = 0; i < persona.length; i++) {
    if (personas[i].estatura > 170) {
        console.log(persona[i].nombre);
    };
};

// bubble sort para ordenar una coleccion de objetos segun su propiedad, en este caso, la estatura:
for (let i = 0; i < persona.length; i++) {
    for (let j = 0; j < persona.length - 1; j++) { // agregamos el -1 para indicar que la iteracion no llegue al final del array y nos tire valores indefinidos.
        if (persona [j].estatura > persona [j + 1].estatura) {
            let temp = persona [j];
            persona [j] = persona [j + 1];
            persona [ j + 1 ] = temp;
        };
    };
};