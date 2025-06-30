// Operadores lógicos (AND, OR, NOT)
// Los operadores lógicos se utilizan para combinar o invertir valores booleanos. 

// Los operadores lógicos son:
// 1. AND (&&): Devuelve true si ambos operandos son true.
// 2. OR (||): Devuelve true si al menos uno de los operandos es true.
// 3. NOT (!): Invierte el valor booleano del operando, es decir, devuelve true si el operando es false y viceversa.

const a = 10;
const b = 20;
const c = "10";

const comparacion1 = a == b && a === c;
console.log("(a) es igual a (b) y (a) es estrictamente igual a (c):", comparacion1); // False, porque (a) no es igual a (b) y (a) no es estrictamente igual a (c) 

const comparacion2 = a != b || a === c;
console.log("(a) es diferente a (b) o (a) es estrictamente igual a (c):", comparacion2); // True, porque (a) es diferente a (b) - Alguna de las condiciones es verdadera por lo que el resultado es true.

const comparacion3 = !(a === c); //Doble negación 
console.log("No es cierto que (a) es estrictamente igual a (c):", comparacion3); // True, porque (a) no es estrictamente igual a (c), por lo tanto, al aplicar NOT, el resultado es true.