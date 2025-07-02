//Conversión de tipos explícita

const string = "123"; // String

const convert_entero = parseInt(string); // Conversión a número entero
console.log(convert_entero); // 123
console.log(typeof convert_entero); // Conocer el tipo de dato


const string_decimal = "123.45"; // String con decimal
const convert_decimal = parseFloat(string_decimal); // Conversión a número decimal
console.log(convert_decimal); // 123.45
console.log(typeof convert_decimal); // Conocer el tipo de dato

const stringBinario = "1010"; // String binario
const convert_binario = parseInt(stringBinario, 2); // Conversión de binario (el segundo parámetro indica la base de conversión)
console.log(convert_binario); // 10
console.log(typeof convert_binario); // Conocer el tipo de dato


//Conversión de tipos implícita (TRUCO: si se hace una operación y hay un string presente, toda la operación se convierte a string y concatena los valores)
const suma = "10" + 5;
console.log(suma); // Suma de un string y un número, el número se convierte a string

const sumBoolean = "10" + true;
console.log(sumBoolean); // Suma de un string y un booleano, el booleano se convierte a string

const sumNumberBoolean = 10 + true; // true se convierte a 1   
console.log(sumNumberBoolean); // Suma de un número y un booleano, el booleano se convierte a número

// Ejemplos de concatenación y suma con diferentes tipos de datos
const string1 = "5";
const number1 = 10;
const boolean1 = true; // el valor de true es 1 y false es 0
const boolean2 = false; // el valor de true es 1 y false es 0

console.log("----------------------------------------");
console.log(string1 + number1); // Concatenación de string y número, el número se convierte a string
console.log(string1 + boolean1); // Concatenación de string y booleano, el booleano se convierte a string
console.log(number1 + string1); // Concatenación de número y string, el número se convierte a string
console.log(number1 + boolean1); // Suma de número y booleano, el booleano se convierte a número
console.log(boolean1 + string1); // Concatenación de booleano y string, el booleano se convierte a string
console.log(boolean1 + number1); // Suma de booleano y número, el booleano se convierte a número
console.log(number1 + boolean2); // Suma de número y booleano, el booleano se convierte a número
console.log(boolean2 + number1); // Suma de booleano y número, el booleano se convierte a número

