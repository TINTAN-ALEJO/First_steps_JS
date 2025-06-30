// Métodos push and pop para arrays
// El método push() agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
// El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la


// push()
const biblioteca_juegos = ['Super Mario', 'Zelda', 'Metroid'];
const biblioteca_juego_nuevo = biblioteca_juegos.push('Pokemon'); //Agrega un nuevo elemento al final del array y devuelve la nueva longitud del array.
const biblioteca_juegos_nuevos = biblioteca_juegos.push (['Mario Kart', 'Donkey Kong', 'Kirby']); //Se modifica el array anterior y se agrega un nuevo array al final. (este array se convierte en un elemento del array original, por lo tanto solo ocupa una posición dentro del array).

console.log(biblioteca_juegos); // Imprime el array modificado.
console.log(biblioteca_juegos_nuevos); // Imprime la nueva longitud del array, que es 6.

// pop()
const biblioteca_juegos_eliminados = biblioteca_juegos.pop(); //Elimina el último elemento del array y lo devuelve. (para este caso , elimina el array que se agregó en la línea 10, es decir, ['Mario Kart', 'Donkey Kong', 'Kirby']).

console.log(biblioteca_juegos); // Imprime el array modificado.
console.log(biblioteca_juegos_eliminados); // Imprime la nueva longitud del array, que es 6.
