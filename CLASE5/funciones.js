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
