// Estructuras condicionales (IF, ELSE IF, ELSE)

// Para ejecutar las estructuras condicionales requerimos de los operatores de comparación & comparadores lógicos.

// Ejemplo de estructura condicional IF simple
console.log("Ejemplo de estructura condicional IF simple");
const edad = 18;   
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Ejemplo de estructura condicional IF con ELSE IF
console.log("____________________________________________");
console.log("Ejemplo de estructura condicional IF con ELSE IF");
const calificacion = 82;

if (calificacion >= 90) {
    console.log("Excelente");
}else if (calificacion >= 80) {
    console.log("Muy bien");
}else if (calificacion >= 70) {
    console.log("Bien");    
}
else if (calificacion >= 60) {
    console.log("Suficiente");
}
else {
    console.log("Insuficiente");
}

// Ejemplo de comparacion con comparadores lógicos
console.log("____________________________________________");
console.log("Ejemplo de comparacion con comparadores lógicos");
const a = 5;
const b = 10;

if (a < b && a > 0) {
    console.log("True: (a) es menor que (b) y (a) es mayor que 0"); // Se ejecutará porque ambas condiciones son verdaderas
}

if (a > b || a < 0) {
    console.log("True: (a) es mayor que (b) o (a) es menor que 0"); // No se ejecutará porque ambas condiciones son falsas
}

