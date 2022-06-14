//OBJETOS LITERALES: entidad independiente con propiedades, cuyas propiedades poseen valores.

// ESTRUCTURA BASIC:

let auto = {
    patente: 'AC 134 DD',
};

// Un objeto puede tener la cantidad de propiedades que queramos.//Con la notacion objeto.propiedad accedemos a su valor.

let tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38,
    activo: true
};
console.log(tenista.nombre); //Roger
console.log(tenista.apellido); //Federer.

// si una propiedad del objeto aparece en una funcion se va a llamar METODO DEL OBJETO.

let tenistaDos = {
    nombre : 'Manu',
    edad : 45,
    saludar : function() {
        return 'Hola, me llamo manu';
    }
};
// para ejecutar un metodo de un objeto usamos la notacion objeto.metodo().
// Los parentesis son para que el metodo se ejecute.

console.log (tenistaDos.saludar()); // Hola me llamo manu.

// la palabra reservada THIS hace referencia al objeto donde estamos parados.
// Con la notacion THIS.PROPIEDAD accedemos al valor de la propiedad interna de ese objeto.

let tenistaTres = {
    nombre : 'Roger',
    apellido : 'Federer',
    saludar : function () {
        return 'Hola me llamo' + this.nombre;
    }
};
console.log(tenistaTres.saludar()); // Hola me llamo Roger.

/////////////////////////////////////////////////////////
// ej video.
let curso = {
    cantAlumnos : 32,
    docentes : ['Nacho', 'Javier'],
    horario : ' de 21 a 23 hs',
    notificacionesAlumnos : function () {
        return 'El horario de la cursada es' + this.horario;
        },
};
// console.log(curso);  muestra el objeto entero
// console.log( 'La cantidad de alumnos de este curso es de' + curso.cantAlumnos );   muestra la cantidad de alumnos
console.log(curso.notificacionesAlumnos());