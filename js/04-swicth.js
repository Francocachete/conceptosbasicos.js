//1- consulte saldo, 2- ingrese dinero, 3- extraiga dinero


//if(opcion === "1"){
    //document.write(`<p>su saldo actual es ${saldo}</p>`);
//}else if(opcion === "2"){
   // document.write(`<p>quiere ingresar dinero</p>`);
//}else if(opcion === "3"){
    //document.write(`<p>quiere extraer dinero</p>`);
//}else{
  //  alert("selecciono una opcion erronea");
//}

let saldo = 0;

do{



let opcion = prompt("seleccione una opcion: 1- consulte saldo, 2- ingrese dinero, 3- extraiga dinero");
//let saldo = 0;

switch(opcion){
    //case "consultar saldo": (es otra opcion que tambien funciona)
    case "1":
        document.write(`<p>su saldo actual es $${saldo}</p>`);
        console.log(`su saldo actual es $${saldo}`)
        break; 
        
    case "2":
        document.write(`<p>quiere ingresar dinero</p>`);
        console.log(`ingrese dinero`)
        break; 
    case "3":
        document.write(`<p>quiere extraer dinero</p>`);
        console.log(`extraer dinero`)
        break; 
    default:
        alert("selecciono una opcion erronea")
}

}while(confirm("¿desea realizar otra operación?"));  

