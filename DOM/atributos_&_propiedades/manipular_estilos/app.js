const title = document.getElementById("app-title");
title.style.color = "purple"; //Esto añade estilos en linea o inline, por lo que va a tener la mayor prioridad  de estilos

const menu = document.querySelector ("menu");
menu.style.backgroundColor = "gray";
menu.style.fontSize = "25px";

const menu_child = menu.firstElementChild;
console.log(menu_child);
menu_child.style.color = "red";


menu.className ="main-menu" //Sustituye o cambia el nombre de una clase del HTML (no es muy recomendado modificar los nombres de las clases, en cambio se puede utilizar la propiedad classList con sus diferentes atributos).


//Ejercicio de classList
const button = document.querySelector("button");

button.addEventListener("click", () => { //Se añade un evento de click al boton
    menu.classList.toggle("invisible"); //classList permite jugar con las clases de un elemento sin reescribir su clase inicial
})

//Atributos de classList

// • .add : Agrega clases.

// • .remove: Elimina clases.

// • .toggle: Alterna la presecia de una clase (hace un switch, si existe la clase mencionada la quita y si no existe la agrega).

// • .contains: Verifica si una clase esta presente.

// • .replace: Remplaza una clase por otra.

// • .lenght: Devuelve el numero de clases en el elemento.