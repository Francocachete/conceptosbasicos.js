//declarar un array

const personajes = [];

const peliculas = ["interstellar", "matrix", "lotr", "2023", "true", "los juegos del hambre"];

const mostrarPeliculas = (titulo) =>{
    document.write(`<h2>${titulo}</h2>`);
document.write("<ul>")
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write("</ul>")
}

//mostrar un array
console.log(peliculas);

document.write(`<p>El primer elemento del array es ${peliculas[0]}</p>`);
console.log(peliculas.length);
document.write(`<p>El último elemento del array es ${peliculas[peliculas.length - 1]}</p>`);
document.write(`<p>un elemento del array es ${peliculas[20]}</p>`);

mostrarPeliculas("lista de peliculas");

document.write("<h2>Lista de peliculas</h2>");
document.write("<ul>")
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write("</ul>")

//agregar elementos al array

peliculas.unshift("Batman", "iron man")
mostrarPeliculas(`<h2>Lista de peliculas, con dos pelis nuevas (${peliculas.length})</h2>`);
//es menos codigo usando una funcion en el array


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


peliculas.push("rocky 1", "rocky 2");
peliculas.splice(2, 0, "rocky 3");
mostrarPeliculas("agregamos pelis de rocky")

//FILTRAR todas las pelis que sean rocky (filter)
//const pelisDeRocky = peliculas.filter((pelicula) => pelicula === "rocky")
const pelisDeRocky = peliculas.filter((pelicula) => pelicula.includes("rocky"));
console.log(pelisDeRocky)

console.log(peliculas[peliculas.length - 1].includes("rocky"));

//buscar un solo elemento en el array (find)
const peliBuscada = peliculas.find((itemPelicula) => itemPelicula === "interstellar" );
const peliBuscada2 = peliculas.find((itemPelicula) => itemPelicula === "jurassic" );
console.log(peliBuscada)

document.write(`<p>peli buscada: ${peliBuscada}</p>`);
//document.write(`<p>peli buscada: ${peliBuscada2}</p>`);

//if(peliBuscada2 !== undefined){
//    document.write(`<p>peli buscada: ${peliBuscada2}</p>`);
//}else{
//    document.write(`<p>No se encontro la peli buscada</p>`);
//}

//Operador TERNARIO,es como un if pero en una sola linea

//sin el if (condicion logica)? true : false

//const respuesta = (peliBuscada2 !== undefined)? peliBuscada2 : "No se encontro la peli buscada"
//document.write(`<p>peli buscada: ${respuesta}</p>`);

//otra forma

document.write(`<p>peli buscada: ${(peliBuscada2 !== undefined)? peliBuscada2 : "No se encontro la peli buscada"}</p>`);


