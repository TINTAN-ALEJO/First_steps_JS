//Manera convencional de crear un objeto, pero esta manera no es escalable si requerimos crear muchos objetos, para esto vamos a usar una función.

/*const perrito = {
    nombre: "Tobby",
    edad: 19, //edad en meses
    raza: "Dachshund",
}*/

//Función constructora
//Usamos funciones constructoras para instanciar multiples veces diferentes objetos.

function perrito(nombre, edad, raza){
    this.nombre = nombre; //El "this" hace referencia a la propiedad del objeto de la función y el "Nombre" despues del = es el parametro que recibe la función.
    this.edad = edad;
    this.raza = raza
}

const perrito1 = new perrito ("Tobby", 1 , "Dachshund"); //Este elemento se llama instancia, ya que Creamos un nuevo objeto pasando los parametros solicitados a partir de una función padre.

const perrito2 = new perrito ("Lucas", 14 , "French poodle"); //Este elemento se llama instancia, ya que Creamos un nuevo objeto pasando los parametros solicitados a partir de una función padre.


//Agregar propiedades o métodos a la función constructora

perrito.prototype.vacunas = "Si"; //Se crea una nueva propiedad a la función constructora para compartir o heredar entre todas las instancias. Asignando las propiedades y/o métodos al prototype de la función constructora, aseguramos que las diferentes instancias puedan acceder a ellas.

const perrito3 = new perrito("Tommy", 3 , "Corgi");

 //la nueva propiedad creada no queda visible directamente desde el log, hay que ingresar a un apartado de la consola llamado prototype, en este nuevo apartado veremos las propiedades o metodos añadidos por el metodo prototype.

console.log(perrito1);
console.log(perrito2);
console.log(perrito3);

console.log("Nombre del perro: ", perrito3.nombre, ", Edad: ", perrito3.edad, "años", ", Raza: ", perrito3.raza, ", Tiene vacunas: ", perrito3.vacunas); //Accede a las propiedades del objeto

//Agregar propiedades individuales

perrito1.adoptado = "si";
perrito2.callejero = "no";
perrito3.castrado = true;


///////////////////////////////////////////////////////////////////////////////////////////////////////
// Sintaxis más moderna para crear las funciones constructoras que en este caso ya son llamadas clases y se usan las palabras reservadas "Class" y "Constructor".

//Realizamos el mismo ejemplo pero con la sintaxis moderna:

class nuevo_perrito {
    constructor(nombre,edad,raza){
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    
}

const nuevo_perrito1 = new nuevo_perrito ("Zeus", 2 , "Pitbull");
console.log(nuevo_perrito1);
console.log(nuevo_perrito1.nombre);

