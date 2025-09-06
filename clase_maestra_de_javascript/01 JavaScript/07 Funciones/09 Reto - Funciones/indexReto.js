// Refuerza tus conocimientos en funciones creando un sistema de envió de un 
// formulario. Utiliza una función flecha que permita validar si un formulario 
// cuenta con los valores de "nombre", "email" y "mensaje" y otra función para 
// enviarlo, debes imprimir en la consola "¡Formulario enviado con éxito!", 
// de lo contrario imprime "Por favor completa todos los campos.". 🧠

let nombre = "Milagros";
let email = "mila@gmail.com"
let mensaje= "Recomiendo lo siguiente... "

const validar = (nombre, email, mensaje) => {
    return (nombre, email, mensaje);
}

function enviar(nombre, email, mensaje) {
    if (validar(nombre, email, mensaje)) {
        console.log("¡Formulario enviado con éxito!");
    } else {
        console.log("Por favor completa todos los campos.");
    }
}

enviar(nombre, email, mensaje);