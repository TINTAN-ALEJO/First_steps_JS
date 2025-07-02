// Operadores de comparación (Igualdad y Desigualdad)

// Los operadores de comparación se utilizan para comparar dos valores y devolver un valor booleano (true o false).
// Los operadores de comparación son:
// 1. Igualdad (==): Compara si dos valores son iguales, sin tener en cuenta el tipo de dato.
// 2. Desigualdad (!=): Compara si dos valores son diferentes, sin tener en cuenta el tipo de dato.
// 3. Igualdad estricta (===): Compara si dos valores son iguales y del mismo tipo de dato.
// 4. Desigualdad estricta (!==): Compara si dos valores son diferentes y/o de diferente tipo de dato.
// 5. Mayor que (>): Compara si el valor de la izquierda es mayor que el valor de la derecha.           
// 6. Menor que (<): Compara si el valor de la izquierda es menor que el valor de la derecha.
// 7. Mayor o igual que (>=): Compara si el valor de la izquierda es mayor o igual que el valor de la derecha.
// 8. Menor o igual que (<=): Compara si el valor de la izquierda es menor o igual que el valor de la derecha.

const a = 5;
const b = 10;
const c = "5";
const d = 5;

const comparacion1 = a == b; 
console.log("(a) es igual a (b) :", comparacion1); //False, el valor de los datos es diferente

const comparacion2 = a === c;
console.log("(a) es estrictamente igual a (c) :", comparacion2); //False, en esencia el valor es el mismo pero los tipos de datos son diferentes

const comparacion3 = a != b;
console.log("(a) es diferente a (b) :", comparacion3); //True, porque el valor de los datos es diferente

const comparacion4 = a > b;
console.log("(a) es mayor que (b) :", comparacion4); //False, porque el valor de (a) es menor que el de (b)

const comparacion5 = a < b;
console.log("(a) es menor que (b) :", comparacion5); //True, porque el valor de (a) es menor que el de (b)

const comparacion6 = a <= b;
console.log("(a) es menor o igual que (b) :", comparacion6); //True, porque el valor de (a) es menor que el de (b)

const comparacion7 = a >= d;
console.log("(a) es mayor o igual que (d) :", comparacion7); //True, porque el valor de (a) es igual al de (d) 
