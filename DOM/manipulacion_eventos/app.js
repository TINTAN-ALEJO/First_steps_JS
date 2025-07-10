const container = document.querySelector(".container");

const button_remove = document.getElementById("btn_remove");
const button_add = document.getElementById("btn_add");


container.addEventListener("mouseover", () => { //Se añade un evento al contenedor (mouse encima)

    container.style.backgroundColor = "gray"; //Cambia el color del container

});

container.addEventListener("mouseout", () => { //Se añade un evento al contenedor (mouse sale)
    
    container.style.backgroundColor = "antiquewhite"; //Cambia el color del container

}
);


const buttonClickRemove = () => { //realizamos una función que retira el primer elemento del container
    console.log("remueve")
    container.removeChild(container.firstElementChild); //Se remueve el primer elemento del container (en este caso <p>)
    button_remove.removeEventListener("click", buttonClickRemove); //Eliminamos el evento para que el botón no siga realizando la misma acción indefinidamente
}

const buttonClickAdd = () => { //realizamos una función que agrega un elemento al inicio del container
    console.log("agrega")
    container.insertAdjacentHTML("afterbegin","<p>Este es un texto que se oculta y aparece gracias a un evento de JS</p>"); //Se agrega nuevo elemento <p>
    button_add.removeEventListener("click", buttonClickAdd); //Eliminamos el evento para que el botón no siga realizando la misma acción indefinidamente
}

button_remove.addEventListener("click", buttonClickRemove); //Llamamos la función previamente creada como parametro del evento
button_add.addEventListener("click", buttonClickAdd); //Llamamos la función previamente creada como parametro del evento

