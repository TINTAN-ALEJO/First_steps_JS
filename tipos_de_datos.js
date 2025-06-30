// Datos primitivos

//string
let nombre = "Alejo";

//number
let edad = 30;

//boolean
let esta_soltero = true;

//null
let tiene_amorcito = null; 

//undefined
let merece_amor = undefined; //Este valor no es muy comun utilizarlo, ya que normalmente una variable se inicializa 
// con un valor, pero si no se inicializa, el valor por defecto es undefined.

//symbol
let simbolo_unico = Symbol("unico"); //Un valor unico, no se puede repetir como por ejemplo un ID de usuario.

//bigint
let numero_grande = BigInt(123456789012345678901234567890); //Un numero entero muy grande, mayor a 2^53-1 (2n en javascript),
//  que es el maximo valor de un number.

// Datos compuestos o complejos

//object
let persona = { //este elemento puede tener cualquier tipo de dato primitivo o complejo para añadir mas propiedades.
    nombre: "Alejo",
    edad: 30,
    esta_soltero: true,
    tiene_amorcito: null,
    merece_amor: undefined,
    cedula_de_ciudadania: Symbol("1144183444"),
    proyectos_realizados: BigInt(123456789012345678901234567890)
};

//array
let hardware_pc_alejo = ["case","board","procesador","tarjeta gráfica","RAM","Fuente"]; //Un array es un objeto que 
// contiene una lista de elementos, pueden ser de cualquier tipo de dato, primitivo o complejo.

//function
function armar_pc_alejo () { //Una funcion requiere de unos datos de entrada (parámetros) y devuelve un resultado (return).
    console.log("Armando la PC de Alejo");
}


// Ejemplo de una función que arma una PC con los datos de entrada como parámetros
// Esta función recibe los datos de la PC como parámetros y devuelve un string con la información de la PC armada.
function armando_pc (board, procesador, tarjeta_grafica) {

    return "Para armar la PC de Alejo se necesita una placa base " + board + ", un procesador " + procesador + 
    " y una tarjeta gráfica " + tarjeta_grafica + ".";

}

let resultado = armando_pc("ASUS ROG Strix B650-E Gaming WiFi", "AMD Ryzen 7 7700X", "NVIDIA RTX 4060");
console.log(resultado);