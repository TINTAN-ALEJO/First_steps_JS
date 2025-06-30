//Se crea la primer clase (Clase padre), con 2 parametros y un método.
class Animal {
    constructor(nombre, tipo){ //Propiedades
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitir_sonido(){ //Método
        console.log("El animal emite un sonido");
    }
}

//Se crea una segunda clase que va a heredar propiedades de la clase padre.
//Para poder heredar propiedades o métodos de la clase padre se deben usar 2 palabras reservadas "Extends" y "Super()"
class Perro extends Animal{ //Extends permite vincular las propiedades y métodos de la clase padre con una nueva clase.
    constructor(nombre, tipo, raza){
        super(nombre, tipo); //Super lo que hace es permitir heredar y acceder a las propiedades de la clase padre y traerlos a otra clase.
        this.raza = raza; //Creamos la nueva propiedad que aplica solo para esta nueva clase.
    }
    emitir_sonido(){ //Reescribe el método de la clase padre, pero que se va a usar en esta nueva clase
        alert(`${this.nombre} ladra`);//Se puede hacer uso del this para esta propiedad, ya que heredamos o llamamos esta propiedad de la clase padre gracias al super(). 
    }
    accion(){
        alert(`${this.nombre} mueve la cola`); //Se puede hacer uso del this para esta propiedad, ya que heredamos o llamamos esta propiedad de la clase padre gracias al super(). 
    }
}

//Se deben añadir las propiedades o métodos a las clases o funciones constructoras ANTES de ser usadas, sino esto nos arrojará un error de "undefined" o "is not a function" porque aun no se han creado al momento de usarse.
Perro.prototype.vacuna = "Si"; //Añadimos una nueva propiedad a la clase Perro por medio del método prototype (Protoype solo se puede usar sobre clases o funciones constructoras, no sobre sus instancias).
Perro.prototype.accion2 = function () { //Añadimos un nuevo método a la clase Perro por medio del método prototype
    alert(`${this.nombre} salta`);
};

//Crea la primera instancia

const nuevo_animal1 = new Perro("Luna", "Perro", "Yorkshire");
console.log(nuevo_animal1);
nuevo_animal1.emitir_sonido();
nuevo_animal1.accion();
nuevo_animal1.accion2();


//Crea otra instancia, se consulta y se realiza un condicional.
const consulta_animal = new Animal(prompt("nombre").toLowerCase(), prompt("Tipo").toLowerCase());
console.log(consulta_animal);

if (consulta_animal.tipo === "perro" || consulta_animal.tipo === "perra"){
    let consulta_perro1 = new Perro(prompt("Por favor ingresa nuevamente el nombre: ").toLowerCase(), prompt("Tipo: ").toLowerCase(), prompt("Raza: ").toLowerCase());
    consulta_perro1.emitir_sonido();
    consulta_perro1.accion();
    consulta_perro1.accion2();
    alert(`${consulta_perro1.nombre} es ${consulta_perro1.tipo} de raza: ${consulta_perro1.raza}  y ¿Tiene todas sus vacunas? ${consulta_perro1.vacuna}`);
}else{
    alert("Se registró otro tipo de animal");
}

