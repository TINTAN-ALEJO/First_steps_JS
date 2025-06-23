// La iteración for in permite recorrer las propiedades enumerables de un OBJETO (es decir solo recorre objetos ennumerables, NO iterables).
// Recordar que un objeto consta de propiedades y valores, a diferencia de un array que consta de valores indexados.

let objeto_hardware = {
    mouse: "Logitech",
    teclado: "Corsair",
    monitor: "Samsung",
    disco_duro: "Seagate",
    tarjeta_madre: "ASUS"
};

for (let hardware in objeto_hardware) { // Este método funciona con objetos
    console.log(`${hardware}: ${objeto_hardware[hardware]}`); // Imprime cada propiedad y su valor en la consola
}

