// let inicial = 3;
// function sumar() {
//     inicial += 4;
//     return inicial;
// }
// console.log(sumar());
// console.log(sumar());
// console.log(sumar());

// function sumar(a = 0,b = 0) {
//     return a + b;
// }

// console.log(sumar(0,3));
// console.log(sumar(4,5));
// console.log(sumar(100,2));
// console.log(sumar());

function sumar() {
    let suma = 0;
    for (let numero of arguments) {
        suma += numero;
    }
    return suma;
}

console.log(sumar(1,2,3,4,5,6,7,8));

// Declarar funciones
// Cuando declaramos una función, hay una pequeña diferencia entre los términos argumentos y parámetros:
// Parámetros: los nombres que vamos a pasar a la función cuando creamos la función. Ejemplo: a, b
// Argumentos: son los valores reales de los parámetros cuando llamamos a la función. Ejemplo: 2, 3

// PRO TIP 👉 Al declarar funciones en JavaScript, asegúrate de no usar el mismo 
// nombre para diferentes funciones. Este es un error común que puede causar 
// comportamientos inesperados en tu código. Recuerda que el alcance de las funciones 
// puede ayudarte a evitar este problema, así que considera este detalle al 
// estructurar tu código.