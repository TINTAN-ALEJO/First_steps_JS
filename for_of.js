// La iteración for...of permite recorrer objetos iterables como arrays, strings, maps, sets, etc.
// Se utiliza para iterar sobre los elementos de un objeto iterable, como un array o una cadena de texto.

let array_hardware = ["mouse", "teclado", "monitor", "disco duro", "tarjeta madre"];

for (let hardware of array_hardware) { //importante: Este metodo solo funciona con objetos iterables
    console.log(hardware); // Imprime cada elemento del array en la consola
}