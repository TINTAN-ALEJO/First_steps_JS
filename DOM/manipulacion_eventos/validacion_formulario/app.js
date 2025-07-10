const form = document.getElementById("myForm");


form.addEventListener("submit", (event) => {
    event.preventDefault();//Se usa este método que previene el comportamiento por default del botón de submit que al enviar se refresca el formulario y borra la info
    const name = form.elements["name"];//Se recorre el formulario y busca el primer elemento con atributo "name"
    console.log(name); //Se imprime el elemento
    console.log(name.value); //Se imprime el valor del elemento 
});


