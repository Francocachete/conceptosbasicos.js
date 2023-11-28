//nombre del pokemon, tipo, peso, altura, evolucion, ataques, pokedex, fuerza
class Pokemon{
    //el primer metodo que se ejecuta automaticamente (constructor) al crear un objeto

    #tipo;//propiedad privada arriba del constructor, solo se puede acceder dentro de la clase a esta prop.
    constructor(nombre, tipo, peso, altura, evolucion, ataques, numpokedex, fuerza){
this.nombre = nombre;
this.#tipo = tipo;
this.peso = peso;
this.altura = altura;
this.evolucion = evolucion
this.ataques = ataques;
this.numpokedex = numpokedex;
this.fuerza = fuerza;
this.estado = true; //valor por defecto si no esta como parametro
    }
    //propiedades computadas...GET Y SET( el get es para poder ingresar a una propiedad privada y el set para modificarla)
    get tipo(){
        return this.#tipo;
    }

    set tipo(nuevoTipo){
    this.#tipo = nuevoTipo;
    }

//metodos
mostrarDatos(){
    document.write(`<h2>Pokemon: ${this.nombre}</h2>
    <ul>
    <li>Tipo: ${this.tipo}</li>
    <li>Peso: ${this.peso}</li>
    <li>Altura: ${this.altura}</li>
    <li>Evolucion: ${this.evolucion}</li>
    <li>Num Pokedex: ${this.numpokedex}</li>
    </ul>`)
}
};

//metodo de herencia
class PokemonLegendario extends Pokemon{
#rareza;
#ataqueEspecial;
    constructor(nombre, tipo, peso, altura, evolucion, ataques, numpokedex, fuerza, rareza, ataqueEspecial){
    super(nombre, tipo, peso, altura, evolucion, ataques, numpokedex, fuerza);
    this.#rareza = rareza;
    this.#ataqueEspecial = ataqueEspecial;
}
get rareza(){
    return this.#rareza;
}
set rareza(nuevaRareza){
    if(nuevaRareza.length >= 3 && nuevaRareza.length <=10){
        this.#rareza = nuevaRareza;
    }else{
        alert("ingresaste un valor erroneo")
    }
    
}
get ataqueEspecial(){
    return this.#ataqueEspecial;
}
set ataqueEspecial(nuevoAtaqueEspecial){
        this.#ataqueEspecial = nuevoAtaqueEspecial;
    
}

//agregar más métodos
mostrarDatosNuevos(){

}
//polimorfismo
mostrarDatos(){
    document.write(`<h2>Pokemon: ${this.nombre}</h2>
    <ul>
    <li>Num Pokedex: ${this.numpokedex}</li>
    <li>Tipo: ${this.tipo}</li>
    <li>Peso: ${this.peso}</li>
    <li>Altura: ${this.altura}</li>
    <li>Evolucion: ${this.evolucion}</li>
    <li>Rareza: ${this.rareza}</li>
    <li>Ataques Especiales: ${this.ataqueEspecial}</li>
    
    </ul>`)
}

}



//crear o instanciar un objeto
const charmander = new Pokemon("charmander", "fuego", 15, 1.20, ["charmeleon", "charizard"], ["blaze", "ascuas", "lanzallamas"], 4, 4);
const togepi = new Pokemon("togepi", "hada", 1.5, 0.3, ["togetic", "togekiss"], ["gracia serena", "dicha y entusiasmo", "placaje"], 175, 2);

console.log(charmander)
document.write(`<h2>Pokemon: ${charmander.nombre}</h2>`);
document.write(`<h2>Tipo: ${charmander.tipo}</h2>`);

charmander.tipo = "fuego 2"
document.write(`<h2>Tipo: ${charmander.tipo}</h2>`);


charmander.mostrarDatos()

togepi.mostrarDatos()

const mewtwo = new PokemonLegendario("mewtwo", "psíquico", 122, 2, [], ["placaje", "confusión"], 150, 7, "infrecuente", ["charge beam", "electro ball"]);

mewtwo.mostrarDatos();