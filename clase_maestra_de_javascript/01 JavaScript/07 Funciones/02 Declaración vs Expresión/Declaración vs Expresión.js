console.log(sumar(1,2));

let sumar2 = function(a,b) {
    return a + b;
}
console.log(sumar2(1,2));

function sumar(a,b) {
    return a + b;
}

// PRO TIP 👉 Entiende bien la diferencia entre declaraciones de funciones y 
// expresiones de funciones en JavaScript. Las declaraciones de funciones se cargan 
// antes de que se ejecute cualquier código, por lo que puedes llamarlas desde 
// cualquier lugar en tu código. Pero las expresiones de funciones no se cargan 
// hasta que el intérprete llega a esa línea de código, por lo que si intentas 
// llamar a una expresión de función antes de que se defina, obtendrás un error. 
// Por lo tanto, asegúrate de definir tus expresiones de función antes de intentar 
// llamarlas para evitar errores comunes.

