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

console.log(nueva_moto.linea, " " , nueva_moto.linea); //Se acceden a las propiedades del objeto
nueva_moto.venta(); //Se invoca método del objeto