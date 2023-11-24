//notación literal
const usuario = {
    //propiedades clave: valor
    nombre: "Juan", 
    edad: 18,
    mail: "Juan@mail.com",
    apellido: "perez",
    password: "232jf$",
    nickname: "el juancho",

    //métodos, las dos formas de hacerlo
    login: function(){
        console.log(this);
        document.write(`<p>El usuario ${this.nickname} fue logueado</p>`);
    },
    logout: () => {
        console.log(this)
        document.write(`<p>El usuario fue deslogueado</p>`);
    }

}

console.log(usuario)
document.write(`<h2>Usuario: ${usuario.nickname}</h2>`);
document.write(`<h2>Nombre completo: ${usuario.apellido}, ${usuario.nombre}</h2>`);
//otra forma de mostrarlo menos comun por document write
document.write(`<p>Edad: ${usuario["edad"]}</p>`);

//modificar una propiedad del objeto
usuario.edad = 25;
document.write(`<p>Edad: ${usuario["edad"]}</p>`);

//agregar una propiedad nueva que no existia
usuario.fotoPerfil = "http://127.0.0.1:5500/index.html";
console.log(usuario)

//borrar una propiedad de un objeto
delete usuario.apellido;
console.log(usuario)

//usa los métodos del objeto
usuario.login();
usuario.logout();