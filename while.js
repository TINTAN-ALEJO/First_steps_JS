//Vuelvo a usar el ejemplo de la tienda usado anteriormente.

let producto = prompt("Ingrese el nombre del producto (leche, pan, queso):").toLowerCase(); // Solicita al usuario 
// el nombre de un producto y lo convierte a minúsculas para evitar errores de mayúsculas/minúsculas
// y lo almacena en la variable producto

switch (producto) { // Inicia una estructura switch para evaluar el valor de la variable producto
    case "leche": // Compara si el valor de producto es "leche" y realiza la acción correspondiente
        alert("tenemos este producto en stock y su precio es $1.50");
        break;
    case "pan": // Compara si el valor de producto es "pan" y realiza la acción correspondiente
        alert("tenemos este producto en stock y su precio es $0.80");
        break;
    case "queso": // Compara si el valor de producto es "queso" // y realiza la acción correspondiente
        alert("tenemos este producto en stock y su precio es $2.00");
        break;
    default: // Si el valor de producto no coincide con ninguno de los casos anteriores 
        alert(`Lo sentimos, no tenemos (${producto}) en stock.`); // Informa al usuario que el producto no está disponible
        break;
}

const array_respuesta_cliente = []; // Array para guardar los productos comprados

let continuar = true; // Bandera de control para el bucle

while (continuar) { // Inicia un bucle while que continuará hasta que la variable continuar sea false
  // Preguntamos al cliente si desea comprar algo más
  let consulta = prompt("¿Hay algo más que desees comprar? (si/no)").toLowerCase();

  if (consulta === "si") {
    let producto = prompt("Ingrese el nombre del producto (leche, pan, queso):").toLowerCase();

    switch (producto) { // Inicia una estructura switch para evaluar el valor de la variable producto
    case "leche": // Compara si el valor de producto es "leche" y realiza la acción correspondiente
        alert("tenemos este producto en stock y su precio es $1.50");
        break;
    case "pan": // Compara si el valor de producto es "pan" y realiza la acción correspondiente
        alert("tenemos este producto en stock y su precio es $0.80");
        break;
    case "queso": // Compara si el valor de producto es "queso" // y realiza la acción correspondiente
        alert("tenemos este producto en stock y su precio es $2.00");
        break;
    default: // Si el valor de producto no coincide con ninguno de los casos anteriores 
        alert(`Lo sentimos, no tenemos (${producto}) en stock.`); // Informa al usuario que el producto no está disponible
        break;
}
    // Guardamos la consulta en el array
    array_respuesta_cliente.push({ consulta: "si", producto: producto });

  } else if (consulta === "no") {
    continuar = false; // Se cambia el valor de la bandera para salir del bucle
    alert("Gracias por su compra, vuelva pronto.");
    array_respuesta_cliente.push({ consulta: "no" }); // Guardamos la última respuesta
  } else {
    alert("Por favor, responde con 'si' o 'no'.");
  }
}

console.log(array_respuesta_cliente); // Verifica en consola lo que el cliente respondió