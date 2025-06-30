const array = []; //Se inicializa un array vacío para almacenar los números ingresados por el usuario
let continuar = true; // Bandera para controlar el bucle

while (continuar) {
    let consulta = prompt("Ingrese un nombre (o 'salir' para terminar):").toLowerCase(); // Solicita al usuario un número o la palabra 'salir'

    if (consulta !== "salir") {
        let nombre = consulta; 
        array.push (nombre); // Agrega el número al array
        alert(`Número ${nombre} agregado a la base.`);

            let consulta2 = prompt("¿Desea agregar otro nombre? (si/no) (o 'consultar' para validar nombre')").toLowerCase(); // Pregunta si desea continuar o validar un nombre en la base

            if (consulta2 === "si") {
                continuar = true; // Continúa el bucle para agregar más números
            } else if (consulta2 === "no") {
                continuar = false; // Cambia la bandera para salir del bucle
                alert("Gracias por su consulta, vuelva pronto.");
            } else if (consulta2 === "consultar") {
                let nombreConsulta = prompt("Ingrese el nombre a consultar:").toLowerCase();
                if (array.includes(nombreConsulta)) {
                    alert(`El nombre ${nombreConsulta} ya está en la base.`);
                    continuar = true; // Permite continuar para agregar más nombres
                } else {
                    alert(`El nombre ${nombreConsulta} no está en la base.`);
                    continuar = true; // Permite continuar para agregar más nombres
                }
            } else {
                alert("Por favor, ingrese una opción válida.");
            }
        } else if (consulta === "salir") {
        continuar = false; // Cambia la bandera para salir del bucle
        alert("Gracias por su consulta, vuelva pronto.");
        }
        else {
            alert("Por favor, ingrese un número válido.");
        }
}
console.log(array); // Muestra el array con los números ingresados



/////////////////////////////////////////////////////////////////////////////
//versión mejorada del ejercicio de arrays por copilot
 /*
const array = [];

function agregarNombre(nombre) {
    array.push(nombre);
    alert(`Nombre ${nombre} agregado a la base.`);
}

function consultarNombre(nombreConsulta) {
    if (array.includes(nombreConsulta)) {
        alert(`El nombre ${nombreConsulta} ya está en la base.`);
    } else {
        alert(`El nombre ${nombreConsulta} no está en la base.`);
    }
}

function menu() {
    let continuar = true;
    while (continuar) {
        let consulta = prompt("Ingrese un nombre (o 'salir' para terminar):").toLowerCase();

        if (consulta === "salir") {
            continuar = false;
            alert("Gracias por su consulta, vuelva pronto.");
        } else if (consulta) {
            agregarNombre(consulta);

            let consulta2 = prompt("¿Desea agregar otro nombre? (si/no) (o 'consultar' para validar nombre)").toLowerCase();

            if (consulta2 === "si") {
                continuar = true;
            } else if (consulta2 === "no") {
                continuar = false;
                alert("Gracias por su consulta, vuelva pronto.");
            } else if (consulta2 === "consultar") {
                let nombreConsulta = prompt("Ingrese el nombre a consultar:").toLowerCase();
                consultarNombre(nombreConsulta);
                continuar = true;
            } else {
                alert("Por favor, ingrese una opción válida.");
            }
        } else {
            alert("Por favor, ingrese un nombre válido.");
        }
    }
}

menu();
console.log(array);

*/