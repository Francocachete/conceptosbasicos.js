//declarar un array

const personajes = [];

const peliculas = ["interstellar", "matrix", "lotr", "2023", "true", "los juegos del hambre"];

//mostrar un array
console.log(peliculas);

document.write(`<p>El primer elemento del array es ${peliculas[0]}</p>`);
console.log(peliculas.length);
document.write(`<p>El último elemento del array es ${peliculas[peliculas.length - 1]}</p>`);
document.write(`<p>un elemento del array es ${peliculas[20]}</p>`);

document.write("<h2>Lista de peliculas</h2>");
document.write("<ul>")
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write("</ul>")

//agregar elementos al array

peliculas.unshift("Batman", "iron man")

document.write(`<h2>Lista de peliculas, con dos pelis nuevas (${peliculas.length})</h2>`);
document.write("<ul>")
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write("</ul>")

peliculas.splice(3, 0, "scream")
document.write(`<h2>agregamos la peli scream en el medio (${peliculas.length})</h2>`);
document.write("<ul>")
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write("</ul>")

//agregar un elemento al final del array (push)
peliculas.push("gran turismo")

document.write(`<h2>agregamos la peli gran turismo al ultimo (${peliculas.length})</h2>`);
document.write("<ul>")
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write("</ul>")


//modificar elementos del array, sustituyendolo
peliculas[6] = "inception";

document.write(`<h2>modificamos el elemento 6 del array (${peliculas.length})</h2>`);
document.write("<ul>")
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write("</ul>")

//metodos para eliminar el primer elemento del array
peliculas.shift()

document.write(`<h2>eliminamos el primer elemento del array (${peliculas.length})</h2>`);
document.write("<ul>")
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write("</ul>")

//metodo para borrar elementos del medio del array
peliculas.splice(6, 1);
//peliculas.splic(6, 3) aqui te borra desde la posicion 6 te borra 3
//peliculas.plice(6) aqui te borra todo desde la posicion elegida

document.write(`<h2>eliminamos un elemento del medio del array (${peliculas.length})</h2>`);
document.write("<ul>")
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write("</ul>")

//metodo para borrar el ultimo elemento del array (pop)
peliculas.pop();

document.write(`<h2>borra el ultimo elemento del array (${peliculas.length})</h2>`);
document.write("<ul>")
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write("</ul>")

