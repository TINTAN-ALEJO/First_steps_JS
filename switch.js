//Estructura y funcionalidad del condicional switch

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

let consulta = prompt("¿Hay algo más que desees comprar?").toLowerCase(); // Pregunta al usuario si desea comprar algo más

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
} else {
    alert("Gracias por su compra, vuelva pronto."); // Si el usuario no desea comprar más, se muestra un mensaje de agradecimiento
}
