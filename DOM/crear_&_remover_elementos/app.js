//Create or remove elements DOM

const contentArea = document.getElementById("contentArea");

contentArea.innerHTML = "<p>Nuevo texto insertado</p>";//Se reemplaza el contenido P en el HTML de esta section

contentArea.insertAdjacentHTML("beforeend", "<p>Añadimos nuevo texto</p>");//Se añade nuevo elemento de texto sin modificar el elemento P original, se añade a la posición final por la posición que solicita la función (beforeend)

const listArea = document.getElementById("listArea");

listArea.innerHTML += "<li>item 5</li>";// Con (+=)  indicamos que queremos agregar un nuevo elemento y no reemplazar un existente (Esta es una manera poco recomendada de usar, porque se ve involucrado el performance de la web, ya que tiene que renderizar nuevamente el contenedor padre y todos los elementos para poder añadir un nuevo elemento)

listArea.insertAdjacentHTML("beforeend", "<li>item 6(beforeend)</li>");//Se añade elemento al final de la lista, de esta manera podemos añadir un nuevo elemento sin tener que involucrar el performance de la web, ni tener que volver a renderizar todos los elementos para añadir uno nuevo.

listArea.insertAdjacentHTML("afterbegin", "<li>item 0(afterbegin)</li>");//Se añade elemento al inicio de la lista

listArea.insertAdjacentHTML("beforebegin", "<li>item 00(beforebegin)</li>");//Se añade elemento antes del contenedor padre

listArea.insertAdjacentHTML("afterend", "<li>item 66(afterend)</li>");//Se añade elemento despues del contenedor padre


//------------------------------------------------
//Crear elementos con createElement

//De esta manera igualmente no se tiene alguna repercusión sobre el performance de la web

//append
const newElement = document.createElement("p");//Se crea elemento nuevo
newElement.textContent = "Fui creado con createElement (append)"; //Se le asigna su valor
contentArea.append(newElement);//Se inyecta o se agrega el nuevo elemento

//prepend
const newElement1 = document.createElement("p");//Se crea elemento nuevo
newElement1.textContent = "Fui creado con createElement (prepend)"; //Se le asigna su valor
contentArea.prepend(newElement1);//Se inyecta o se agrega el nuevo elemento

//before
const newElement2 = document.createElement("p");//Se crea elemento nuevo
newElement2.textContent = "Fui creado con createElement (before)"; //Se le asigna su valor
contentArea.before(newElement2);//Se inyecta o se agrega el nuevo elemento

//after
const newElement3 = document.createElement("p");//Se crea elemento nuevo
newElement3.textContent = "Fui creado con createElement (after)"; //Se le asigna su valor
contentArea.after(newElement3);//Se inyecta o se agrega el nuevo elemento

// Before: Convierte el elemento en el hermano del elemento referenciado (Pero ANTES).
// After: Convierte al elemento en el hermano del elemento referenciado (Pero DESPUÉS).
// Prepend: Lo agrega como hijo (Pero al inicio).
// Append: Lo agrega como hijo al final.

//--------------------------------------------------
//Eliminar elementos

listArea.removeChild(listArea.lastChild);//Elimina el último elemento de la lista

listArea.removeChild(listArea.firstChild);//Elimina el primer elemento de la lista

listArea.removeChild(listArea.children[2]);//Elimina el elemento que se especifica entre corchetes


//--------------------------------------------------
//Clonar elementos

const contentArea1 = document.getElementById("contentArea1");

const listArea1 = document.getElementById("listArea1");
listArea1.insertAdjacentHTML("beforeend", "<li>item 5</li>");
listArea1.removeChild(listArea1.children[2]);

const originalElement = contentArea1.querySelector("p"); //Selecciona el elemento con etiqueta P dentro del contenedor padre (contentArea1) y se almacena en una constante

const clonedElement = originalElement.cloneNode(true);//Se clona el elemento P anteriormente seleccionado y se almacena en una constante (cloneNode debe ir con true para poder que se cumpla la clonación)

clonedElement.textContent = "Elemento clonado";//Se cambia el valor del elemento clonado

contentArea1.append(clonedElement);//Se inserta el elemento clonado al DOM


//Reemplazar elementos

const clonedElement2 = originalElement.cloneNode(true)//Se clona un segundo elemento y se almacena

clonedElement2.textContent = "Elemento clonado 2";//Se cambia el valor del elemento clonado

const itemToReplace = listArea1.children[1];//Selecciona el elemento 2 de la lista de items y se almacena en una constante

itemToReplace.replaceWith(clonedElement2);//Se reemplaza el elemento 2 de la lista por el elemento anteriormente clonado