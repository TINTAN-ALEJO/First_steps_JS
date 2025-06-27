//Programación orientada a objetos

/*
Un objeto es una estructura de datos que se compone de:
propiedades y métodos

propiedades: se pueden interpretar como las "Características" de un objeto.
key / value

métodos: son funciones que nos dicta las interacciones o acciones que va a realizar un objeto.


objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
    metodo (){

    }
}

*/

const nueva_moto ={
    marca: "Honda",
    modelo: "2025",
    linea: {
        linea_moto: "CB-X",
        cilindraje: "500"
    },
    valor: 20000000,
    venta: function(){
        console.log(`Se han vendido 785: ${this.marca}, modelo ${this.modelo}`)
    }
}

console.log(nueva_moto);
console.log(nueva_moto.linea, nueva_moto.linea); //Se acceden a las propiedades del objeto
nueva_moto.venta(); //Se invoca método del objeto


nueva_moto.version = "DLX"; //Forma de añadir una nueva propiedad a un objeto

nueva_moto.ingresos_taller = () => { //Forma de añadir un nuevo método a un objeto
    console.log("Han ingresado 70 motos a taller");
}

console.log(nueva_moto);
console.log(nueva_moto.version); //Imprime la nueva propiedad del objeto
nueva_moto.ingresos_taller(); //Llama o invoca el nuevo método del objeto

// delete nueva_moto.version; //Forma de eliminar una propiedad o un método de un objeto