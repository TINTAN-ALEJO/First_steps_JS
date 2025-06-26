// slice() es un método que se utiliza para crear una copia superficial de una porción de un array, sin modificar el array original. Este método devuelve un nuevo array que contiene los elementos seleccionados del array original, especificando un índice de inicio y un índice de fin (opcional). el indice del final no se incluye en el nuevo array.

// slice() - creamos un array con animales y luego usamos slice para obtener una copia de una porción del array original.

const animals = ['Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra', 'Monkey', 'Bear', 'Wolf', 'Fox', 'Deer', 'Rabbit', 'Squirrel', 'Hedgehog', 'Otter', 'Panda'];

console.log(animals.slice(2 , 8)); // Se usa el método slice para obtener una copia de los elementos desde el índice 2 hasta el índice 8 (sin incluir el elemento en el índice 8).

console.log(animals.slice(0 , 3));
console.log(animals.slice(-2)); //Toma el ultimo elemento como el inicio del array e imprime los ultimos 2 elementos del array.
console.log(animals.slice(3 , -1)); // Inicia desde el indice 3 y finaliza en el penúltimo elemento sin tomarlo en cuenta.