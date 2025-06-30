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
// ¿Es posible almacenar funciones en objetos?

const rocket = {
  name: 'Falcon 9',
  launchMessage: function launchMessage () { //Esto es conocido como método y no como función y se puede almacenar en un objeto
    console.log('despegue del Falcon 9')
  }
}

rocket.launchMessage() // Llamada al método en el objeto rocket