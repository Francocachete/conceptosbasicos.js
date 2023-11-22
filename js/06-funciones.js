//funciones declarativas (puede o no tener parametros) funciones deben ser especificas hacer una sola cosa
function saludar(){
  //todo el codigo que sabe hacer esa funcion
document.write("<p>hola mundo</p>");
}

//funcion con parametros, cuando hay que enviarle un dato a la funcion, no hay limites de parametros
function saludoNuevo(nombreSolicitado, apellidoSolicitado){
    document.write(`<p>hola ${nombreSolicitado}, ${apellidoSolicitado}</p>`);
}


//function multiplicar(numero1, numero2){
//    const resultado = numero1 * numero2;
//    console.log(resultado);
//    return resultado;
//}



//arrow functions(esta es otra funcion, hay forma larga como la primera y la segunda es la corta) 
//const multiplicar = (numero1, numero2) =>{
//  const resultado = numero1 * numero2;
//  console.log(resultado);
//      return resultado;
//}


const multiplicar = (numero1, numero2) => numero1 * numero2; //el return esta implicitamente



//llamar o invocar a una funcion
saludar();

const nombre = prompt("ingrese un nombre");
const apellido = prompt("ingrese un apellido");

saludoNuevo(nombre, apellido);
saludoNuevo("harry", "potter");


const resultadoNuevo = multiplicar(30,3);
document.write(`<p>el resultado de la multiplicacion fue: ${resultadoNuevo}</p>`);
document.write(`<p>el resultado de la multiplicacion fue: ${multiplicar(40,3)}</p>`);