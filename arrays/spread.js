//spread (...) se utiliza para expandir(insertar más) elementos en un array, objeto o iterable.

//1. Copy arrays

const array = [1, 2, 3, 4];
const array_copy = [...array]; //usa el operador array para copiar el arreglo original sin mutarlo

console.log(array);
console.log(array_copy);


//2. Combinar arrays

const array1 = ["perro", "gato", "zorro"];
const array2 = ["jirafa", "elefante"];

const array_combinado = [...array1,...array2]; //combina los arrays 

console.log(array_combinado);

//3. Crear arreglos con elementos adicionales

const array_original = ["Fútbol", "baloncesto", "voleibol"];
const array_insertar = [...array_original, "natación", "tenis"]; //copia el array original y le inserta los nuevos elementos

console.log(array_insertar);

//4. Pasar elementos o parámetros a las funciones

function sum (a, b, c){
    return a * b * c;
}

//sum (1,2,3) Forma normal de pasar datos a una función
const datos = [2, 9, 14];
const resultado = sum(...datos); //Entregar los parámetros solicitados a la función por medio de un array y el operador spread

console.log(resultado);