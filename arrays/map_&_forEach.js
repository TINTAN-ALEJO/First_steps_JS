// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// map()

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)

// forEach()

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors) //Este valor es undefined porque forEach no devuelve nada, solo itera sobre el array original

//PRÁCTICA map()
//Crear un programa para convertir de grados fahrenheit a grados celsius.
//Usando la formula C= 5/9 * (F - 32)

console.log("________________________________________");

const fahrenheitTemperatures = [32, 50, 68, 86, 104]
const celsiusTemperatures = fahrenheitTemperatures.map(f => 5 / 9 * (f - 32)); //Se usa el método map para crear un nuevo array con las temperaturas convertidas a Celsius


console.log("Temperaturas en grados Fahrenheit: ", fahrenheitTemperatures)
console.log("Temperaturas en grados Fahrenheit: ", celsiusTemperatures)

//PRÁCTICA forEach()
//Crear un programa que tome los numeros de un array como input y calcule la suma de todos los elementos.

console.log("________________________________________");

const numbersToSum = [1, 2, 3, 4, 5]
let sum = 0

