/*
while(mientas se cumpla una condicion logica){
    todo el codigo que quiero ejecutar varias veces
    luego agregar algo para que la condicion logica no se cumpla
}

*/
let renglon = 1;

//document.write("<p>Este es el renglón número" + renglon + "<p>"); son dos opciones esta y la de abajo de comillas invertidas

while( renglon <= 20){
document.write(`<p>Este es el renglón número ${renglon} <p>`);
renglon = renglon + 1;
//renglon ++ esta es otra opcion mas corta que siempre suma uno;  
}

/*
do{
todo el codigo que quiero ejecutar varias veces(se ejecuta al menos una vez)
luego agregar algo para que la condicion logica no se cumpla
}while(condicion logica)
*/

let contador = 1;

do{
    document.write(`<p>Este es el renglón número ${contador} (do while) <p>`);
    contador = contador + 1;
}while( contador <= 10);

/*
for(inicializar una variable; condicion logica; decrementar o incrementar) en el for siempre va el ; dentro{
    todo el codigo que quiero ejecutar varias veces
} el for es como el while si no se ejecuta nunca no anda
*/

for(let cuentaregresiva = 10; cuentaregresiva > 0; cuentaregresiva--){
    document.write(`<p>cuenta regresiva N: ${cuentaregresiva} <p>`);
}