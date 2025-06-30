/*
 CLOSURE: función que tiene acceso a variables de un ámbito externo,
 incluso después de que esa función haya terminado de ejecutarse.

 ámbito léxico: cada vez que se declara una función,
 crea su propio ámbito léxico, y puede acceder a las variables
 dentro de ese ámbito y a las variables en ámbitos superiores.
*/

function outerFunction () {
    let outerVariable = "I am from outer function"

    function innterFunction () {
        console.log(outerVariable)
    }

    return innterFunction
}

const closureExample = outerFunction()
closureExample()

function createCounter () {
    let count = 0

    return function() {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

function outer () {
    let message = "Hello, "

    function inner (name) {
        console.log(message + name)
    }

    return inner
}

const closureA = outer()
const closureB = outer()

closureA("Alice")
closureA("Bob")

// EJEMPLO 1:
console.log("________________________________________________");

function depositar () {
    let cuenta_ahorros = 0; // Variable local que representa el saldo de la cuenta de ahorros
    return function (cantidad) {
        cuenta_ahorros += cantidad; // Se incrementa el saldo de la cuenta de ahorros con la cantidad depositada
        console.log(`Depósito: $${cantidad}. Saldo actual: $${cuenta_ahorros}`);
    }
}

const mi_cuenta = depositar(); // Se crea una instancia de la función depositar
const mi_cuenta2 = depositar(); // Se crea otra instancia de la función depositar

mi_cuenta(100); // Se realiza un depósito de $100
mi_cuenta(50); // Se realiza un depósito de $50
mi_cuenta(30); // Se realiza un depósito de $30

mi_cuenta2(200); // Se realiza un depósito de $200 en una cuenta diferente
