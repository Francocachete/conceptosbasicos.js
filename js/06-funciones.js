//funciones declarativas
function saludar(){
  //todo el codigo que sabe hacer esa funcion
document.write("<p>hola mundo</p>");
}

function saludoNuevo(nombreSolicitado, apellidoSolicitado){
    document.write(`<p>hola ${nombreSolicitado}, ${apellidoSolicitado}</p>`);
}

function multiplicar(numero1, numero2){
    const resultado = numero1 * numero2;
    console.log(resultado);
    return resultado;
}

//llamar o invocar a una funcion
saludar();

const nombre = prompt("ingrese un nombre");
const apellido = prompt("ingrese un apellido");

saludoNuevo(nombre, apellido);



const resultadoNuevo = multiplicar(30,3);
document.write(`<p>el resultado de la multiplicacion fue: ${resultadoNuevo}</p>`);
document.write(`<p>el resultado de la multiplicacion fue: ${multiplicar(40,3)}</p>`);