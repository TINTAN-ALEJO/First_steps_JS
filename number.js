// 1. Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal) //Propiedad para saber el tipo de dato

// 2. Notación cientí­fica
const cientifico = 5e3
console.log(cientifico)

// 3. Infinitos y NaN
const infinito = Infinity // Representa un valor infinito
const noEsUnNumero = NaN    // Representa un valor que no es un número (Not a Number)

// Operaciones aritméticas

// 1. Suma, Resta, Multiplicación y División
const suma = 3 + 4
const resta = 4 - 4
const mutiplicacion = 4 * 7
const division = 16 / 2

// 2. Módulo y Exponenciación
const modulo = 15 % 8 //preguntar a kevind cual es el uso o explicación de este operador
const exponenciacion = 2 ** 3

// Precisión en javascript
// En JavaScript, los números decimales pueden tener problemas de precisión debido a su representación interna en binario.
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))// método para redondear el número a un decimal
console.log(resultado === 0.3) 

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)