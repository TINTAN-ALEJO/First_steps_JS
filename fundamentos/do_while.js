let consulta;
const array_respuesta_cliente = []; // Array para guardar los consultas comprados

do {
    consulta = prompt("Ingrese el nombre del consulta (o escribar salir para finalizar compra):").toLowerCase()
        switch (consulta) { // Inicia una estructura switch para evaluar el valor de la variable consulta
        case "leche": // Compara si el valor de consulta es "leche" y realiza la acción correspondiente
            alert("tenemos este consulta en stock y su precio es $1.50");
            break;
        case "pan": // Compara si el valor de consulta es "pan" y realiza la acción correspondiente
            alert("tenemos este consulta en stock y su precio es $0.80");
            break;
        case "queso": // Compara si el valor de consulta es "queso" // y realiza la acción correspondiente
            alert("tenemos este consulta en stock y su precio es $2.00");
            break;
        case "salir": // Si el usuario escribe "salir", se sale del bucle
            alert("Gracias por su compra, vuelva pronto.");
            break;
        default: // Si el valor de consulta no coincide con ninguno de los casos anteriores 
            alert(`Lo sentimos, no tenemos (${consulta}) en stock.`); // Informa al usuario que el consulta no está disponible
            break;
        }
        // Guardamos la consulta en el array
    array_respuesta_cliente.push({ consulta: consulta });
} while (consulta !== "salir"); 

console.log(array_respuesta_cliente); // Verifica en consola lo que el cliente respondió