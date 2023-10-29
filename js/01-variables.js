// esto es un comentario de una unica linea

/* esto es un comentario
de multiples 
lineas */

// declarar una variable (var - let - const)

let anioActual = 2023;
const universe = "https://universe.rollingcodeschool.com/";

//mostrar mensajes
console.log(anioActual);
console.log("anioActual");
console.log("año Actual: " + anioActual);
console.log(universe)

//modificar el contenido de una variable
anioActual = 2024;
console.log(anioActual);

//como mostrar en la web, en el html un mensaje
document.write("<p class='parrafoDestacado'>esto es una prueba de document.write</p>")

//ventanas emergentes
alert("Hola mundo");

//solicitar un nombre a un usuario y mostrar un saludo
const nombreUsuario = prompt("ingrese su nombre");

console.log(nombreUsuario);

document.write("<p>Bienvenido " + nombreUsuario + "</p>");

//solicitar a un usuario un precio de un producto en dolares
const precioSolicitado = prompt("Ingrese un valor en dolares");
alert ("El importe indicado corresponde a $" +(precioSolicitado * 1100) + "pesos argentinos");

//parseInt ("50" numero entero)
//parseFloat ("50.4" numero con decimales)
alert ("El importe indicado corresponde a USD$" +( parseFloat(precioSolicitado) + 2) );


