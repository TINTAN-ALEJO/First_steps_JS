document.getElementById("app-title") //selecciona elementos por su ID

document.querySelector("#app-title") //selecciona elementos por su ID

document.querySelector("p") //selecciona elementos por etiqueta (trae el primer elemento con la etiqueta P)

document.querySelectorAll("p") //selecciona elementos por etiqueta (trae todos los elementos con la etiqueta P)

document.getElementsByTagName("p") //selecciona elementos por etiqueta (trae todos los elementos con esa etiqueta)

document.getElementsByClassName("menu-items") //selecciona elementos por clase (trae todos los elementos con ese nombre de clase)

document.querySelectorAll(".menu-items") //selecciona elementos por clase (trae todos los elementos con ese nombre de clase)

//Seleccionar elementos con getElements hace que la consulta sea más rápida que si se hace con un querySelector