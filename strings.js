let nombre = "Alejo"; 
let apellido = "Narváez";  
let bienvenida = `Hola ${nombre} ${apellido}, bienvenido`; //Forma de concatenar strings usando template literals 
// (backticks `) en lugar de comillas simples o dobles.
let bienvenida2 = bienvenida + " " + " a tu curso de JavaScript!";

console.log(bienvenida2);

// Propiedades o métodos de cadenas de texto
let saludo = "Hola, esta es una prueba de frase";
console.log(saludo.length); // Devuelve la longitud de la cadena de texto (número de caracteres)
console.log(saludo.toUpperCase()); // Convierte la cadena de texto a mayúsculas     
console.log(saludo.toLowerCase()); // Convierte la cadena de texto a minúsculas
console.log(saludo.substring(0, 4)); // Devuelve una subcadena o una parte de la cadena de texto en un intervalo determinado
// para este caso desde el índice 0 hasta el índice 4 (sin incluirlo)