// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> callback
/*
function a () {}
function b (a) {}
b(a)

// Retornar funciones

function a () {
  function b () {}
  return b
}

// Asignar funciones a variables -> Expresión de función

const a = function () {}

// Tener propiedades y métodos

function a () {}
const obj = {}
a.call(obj)

// Anidar funciones -> Nested functions

function a () {
  function b () {
    function c () {
    
    }
    c()
  }
  b()
}
a()
*/

const rocket = {
  name: 'Falcon 9',
  launchMessage: function launchMessage () { //Esto es conocido como método y no como función y se puede almacenar en un objeto
    console.log('despegue del Falcon 9')
  }
}

rocket.launchMessage() // Llamada al método en el objeto rocket

console.log ('-----------------------------------------------------')

// Ejemplo de funciones anidadas y funciones como argumentos (callback)

function calcular_descuento (precio, descuento){ //se inicializa la funcion con los parámetros precio y descuento
    return precio - (precio * (descuento / 100)); //se calcula el precio final restando el descuento y dividiendo entre 100 para lograr el % aplicado al precio original
}

function calcularDescuentoAdministrativo (calcular_descuento) { //se inicializa la función con el parámetro calcular_descuento, que es una función que se pasará como argumento
    return calcular_descuento - (calcular_descuento * (12 / 100)); //se calcula el descuento administrativo restando el descuento del precio final y dividiendo entre 100 para lograr el % aplicado al precio final
}

const precio = 800;
const descuento = 20;

const precioDescuento = calcular_descuento(precio, descuento); //se llama a la función calcular_descuento con los parámetros precio y descuento, y se almacena el resultado en la variable precioDescuento
const precio_final = calcularDescuentoAdministrativo(calcular_descuento(precio, descuento));  //se llama a la función calcularDescuentoAdministrativo con el resultado de la función calcular_descuento como argumento, y se almacena el resultado en la variable precio_final
console.log("Precio original: $ " + precio);
console.log("Descuento aplicado: " + descuento + "%");
console.log("El precio del artículo con descuento es : $ " + precioDescuento);
console.log("El precio final del artículo con descuento administrativo es : $ " + precio_final);