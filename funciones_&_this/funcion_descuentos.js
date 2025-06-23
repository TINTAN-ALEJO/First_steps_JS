// Forma básica de una función que calcula un descuento
// Parámetros: precio y descuento

function calculate_discount(price, discount) {
    const discounted_price = price * (discount / 100);
    const final_price = price - discounted_price;
    return final_price;    
}

const price = 300;
const discount = 20;

const final_price = calculate_discount(price, discount);
console.log("Precio original: $ " + price);
console.log("Descuento aplicado: " + discount + "%");
console.log("El precio final del artículo es : $ " + final_price);


// Forma alternativa de una función que calcula un descuento
function calcular_descuento (precio, descuento){ //se inicializa la funcion con los parámetros precio y descuento
    return precio - (precio * (descuento / 100)); //se calcula el precio final restando el descuento y dividiendo entre 100 para lograr el % aplicado al precio original
}

//Se ingresan los valores de precio y descuento
const precio = 800;
const descuento = 20;

//Se llama a la función con los parámetros ingresados y se almacena el resultado en una variable
const precio_final = calcular_descuento(precio, descuento);
console.log("Precio original: $ " + precio);
console.log("Descuento aplicado: " + descuento + "%");
console.log("El precio final del artículo es : $ " + precio_final);