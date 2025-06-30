// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0); //Se usa el método filter para crear un nuevo array con los números pares

console.log("Números originales: ", numbers);
console.log("Números pares: ", evenNumbers);

// reduce() caso 1 - numeros
console.log("________________________________________");

const numbersToReduce = [1, 2, 3, 4, 9];
const sumOfNumbers = numbersToReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //Se usa el método reduce para sumar todos los números del array, comenzando desde 0

console.log("Números originales: ", numbersToReduce);
console.log("Suma de los números: ", sumOfNumbers);

// reduce() caso 2 - strings
console.log("________________________________________");

const words = ['Hello', 'world', 'this', 'is', 'JavaScript', 'world' , 'world' , 'is', 'Hello'];

const wordCount = words.reduce((accumulator, currentValue) => {

    if (accumulator[currentValue]) {
        accumulator[currentValue]++; //Si la palabra ya existe en el acumulador, se incrementa su contador
    } else {       
        accumulator[currentValue] = 1; //Si la palabra no existe en el acumulador, se inicializa su contador en 1
    }    
    return accumulator;
}, {});

/* Forma alternativa de hacer el mismo ejercicio, pero con una sintaxis diferente:

const wordCount = words.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1; //Se usa el método reduce para contar la cantidad de veces que aparece cada palabra en el array
    return accumulator;
}, {});

*/

console.log("Palabras originales: ", words);
console.log("Conteo de palabras: ", wordCount);