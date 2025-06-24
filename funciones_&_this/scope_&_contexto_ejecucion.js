//Las variables globales son las que se encuentran dentro del ámbito global, es decir, fuera de cualquier función.
// Las variables locales son las que se encuentran dentro del ámbito de una función, es decir, dentro de una función.
// Las variables locales solo pueden ser accedidas dentro de la función en la que fueron declaradas, mientras que las variables globales pueden ser accedidas desde cualquier parte del código.


// En este ejemplo, se muestra cómo se pueden utilizar variables locales y globales dentro de una función.

//EJEMPLO 1:
//Se inicializan 3 variables globales

const lider = "Jose";
const lider2 = "Ana";
const subdito = "Alejandro";

//Dentro de la funcion se inicializan 2 variables locales con el mismo nombre que las globales
function saludar() {
    const lider = "Pepito";
    const subdito = "Andres";

    //Se acceden a variables locales y globales
    return `Hola, ${lider}(Variable local) y ${subdito}(Variable local), yo soy ${lider2}(Variable global)`; 
}

console.log(saludar()); // Llamada a la función que imprime el saludo (Con variables locales y globales)

console.log(`${lider}, ${lider2}, ${subdito}`); // Imprime las variables globales


//EJEMPLO 2:
console.log("________________________________________________");
const ganar_examen = 51; // Variable global

function calificar_alumnos(){ //Aqui inicia un contexto local
    if (ganar_examen >= 51) { // Acceso a la variable global
        const resultado = "Aprobado"; // Variable local
        return resultado; //Se accede a la variable local y se imprime su resultado

    } else { //Aqui inicia un contexto local
        const resultado = "Reprobado"; // Variable local
        return resultado; //Se accede a la variable local y se imprime su resultado
            }
}

console.log(calificar_alumnos()); // Llamada a la función que imprime el resultado de la calificación

//EJEMPLO 3:
console.log("________________________________________________");

const lista_de_compras = ["pan", "leche", "huevos"]; // Variable global

function agregar_producto() { //Se inicia un contexto local

    const producto = "queso"; // Variable local
    lista_de_compras.push(producto); // Acceso a la variable global y se agrega un producto
    
    function agregar_producto2(){//Se inicia un contexto local
        const producto2 = "jamón"; // Variable local
        lista_de_compras.push(producto2); // Acceso a la variable global y se agrega otro producto
    }
    function agregar_producto3(){//Se inicia un contexto local
        const producto3 = "mantequilla"; // Variable local
        lista_de_compras.push(producto3); // Acceso a la variable global y se agrega otro producto
    }
    agregar_producto2(); // Llamada a la función que agrega otro producto
    agregar_producto3(); // Llamada a la función que agrega otro producto    
    return `lista de compras actualizada: ${lista_de_compras}`;
}

console.log(agregar_producto()); // Llamada a la función que imprime la lista de compras actualizada