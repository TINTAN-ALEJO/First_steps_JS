const input = document.querySelector("input")
console.log(input)

console.dir(input)

input.value = "Editar texto" //Forma de como manipular atributos de HTML desde JS. (objeto.propiedad)

console.log("______________________________________________________________")
//Modificación de texto en HTML con JS

//Diferencias entre atributos/propiedades de texto:
// textContent: contiene el texto plano (sin etiquetas ni formatos)
// innerText:Contiene el texto despues de haberle aplicado Css.
// innerHtml: contiene el texto y el formato y las etiquetas html.

const title = document.querySelector("#app-title")
console.log(title)
console.dir(title)

title.textContent = "Nuevo texto"

title.innerText = "Otro texto"

