//Esta no es la manera mas recomendable ya que se agrega un listener a cada boton, por lo que puede afectar el performance de la web.

// const listItems = document.querySelectorAll("li");

// listItems.forEach((item) => {//para cada item de la lista se añade un evento que va a cambiar el estilo del fondo al dar click.
//     item.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");//Invocamos el event y al target de ese event (elemento al dar click) le aplica un toggle(cambio)de clase (estilo)de css al fondo.
//   });
// });

//En cambio podemos hacer uso del Delegation Patern para crear un solo evento listener y delegarle la responsabilidad al padre de escuchar este evento y realizar la acción:

const list = document.querySelector("ul");

list.addEventListener("click", (event) => {

    event.target.closest("li").classList.toggle("highlight");
    //closest es el elemento con la etiqueta li mas cercano al padre y al target de ese event (elemento al dar click) le aplica un toggle(cambio)de clase (estilo)de css al fondo.
});
