const numeroSecreto = Math.floor(Math.random() * 10 + 1); // Genera un número secreto entre 1 y 10

const numeroUsuario = parseInt(
    prompt("Adivina el número secreto entre 1 y 10:")
);

console.log(`Número usuario: ${numeroUsuario}`); // Muestra el número ingresado por el usuario

if (numeroUsuario === numeroSecreto) { //Valida si el numero del usuario es igual al número secreto 
    alert("¡Felicidades! Has adivinado el número secreto.");    // Informa al usuario que adivinó el número secreto2
}else{
    alert(`sigue intentando, el número secreto era ${numeroSecreto}.`); // Informa al usuario que no adivinó el número secreto
}

console.log(`Número secreto: ${numeroSecreto}`); // Muestra el número secreto al final del juego