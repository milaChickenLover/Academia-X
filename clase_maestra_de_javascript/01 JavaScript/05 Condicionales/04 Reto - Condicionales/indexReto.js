// Imprimiendo si un usuario es mayor o menor de edad
let edad = 35;
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// De acuerdo a la acción ingresada "crear, colocar, actualizar y borrar" se imprima que acción se realizará
let accion = "crear";
switch (accion) {
    case "crear":
        console.log("La acción es crear.");
        break;
    case "colocar":
        console.log("La acción es colocar.");
        break;
    case "actualizar":
        console.log("La acción es actualizar.");
        break;
    case "borrar":
        console.log("La acción es borrar.");
        break;
    default:
        console.log("La acción es cualquier otra.");
}

// Si un número es par o impar
let numero = 7;
let parOImpar = (numero % 2 === 0) ? "es par" : "es impar";
console.log(`El número ingresado ${parOImpar}.`);