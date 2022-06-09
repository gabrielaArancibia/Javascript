// CICLO FOR:
//for ( inicio; condicion; modificador ){
//    codigo a ejecutar
//};

// ej playground:
for ( let vuelta=1 ; vuelta<=5 ; vuelta++) {
    console.log( 'Dando la vuelta numero' + vuelta);
}
//a la variable en for se le toma el vamor de i, que indica index.

// WHILE: Evalua la consicion repetidas veces y jejcuta el bloque de codigo hasta que la condicion dej de ser V.
//ej:
let vuelta = 1;
while ( vuelta <=5 ){
    console.log ( 'Dando la vuelta numero' + vuelta);
    vuelta++
};

// DO WHILE : Se verifica al finalizar el bloque de codigo. sin importar lo que se resuelva, las acciones se ejecutaran por lo menos una vez.
//ej:
let vuelta = 5;
do {
    console.log ( ' Dando la vuelta numero' + vuelta);
    vuelta++
} while ( vuelta <= 5 );


