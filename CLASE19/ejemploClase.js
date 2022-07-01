let gastos = [
    [1135, 2500, 900, 1600, 2400, 3650, 1100], // semana 1 = posicion 0.
    [1750, 1850, 1980, 898, 1750, 2500, 1300], //semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
    [600, 1250, 1430, 2300, 1900, 1279, 950], // semana 4
];
console.table(gastos);


//1) mostar el total de gastos de la semana 2.
const totalSemana = (semana)=> {
    let indice = semana - 1; // se resta el indice para ingresar al correcto.
    
    let arraySemana = gastos[indice];
    
    let total = 0;

    for (let i = 0; i < arraySemana.length; i++) {
        total += arraySemana[i];
    };

    return total
};
console.log(totalSemana(1)); // valor total de la semana 1
console.log(totalSemana(2)); // valor total de la semana 2
console.log(totalSemana(3)); // valor total de la semana 3
console.log(totalSemana(4)); // valor total de la semana 4



//2) Mostrar el total de un dia en particular. ejemplo de todos los dia 3:
const totalDia = (dia) => {

    let indiceDia = dia - 1;

    let totalDia = 0;

    for (let i = 0; i < gastos.length; i++) {
        totalDia += gastos[i][indiceDia];
    };
    return totalDia
};
console.log( totalDia(1)); //valor totalizado de los LUNES ( SE PONE EL MENOS 1 PARA QUE NO BUSQUE EN EL INDICE 1, SINO QUE EN EL CERO, YA QUE CERO = LUNES)
// console.log( totalDia(2)); // valor total de los dias MARTES
// console.log( totalDia(3));
// console.log( totalDia(4));


//3) TOTAL DE GASTOS X MES: total de la matriz.
// hay que sumar todos los dias de todas las semanas
const totalMes = (mes) => {
    let totalMes = 0 ;
    for (let i = 0; i < mes.length; i++) {

        for (let j = 0; j < mes[i].length; j++) {

            totalMes = totalMes + mes[i][j];
        };
    };
    return totalMes
};

console.log(totalMes(gastos));