function sumar(a,b) {
    console.log(a + b);
}

//sumar(1,2);
// console.log(sumar(1,2));

let usuario = {
    nombre: 'Ana',
    apellido: 'Perez'
};

function cambiarApellido(objecto) {
    let copia = JSON.parse(JSON.stringify(objecto));
    copia.apellido = 'Ochoa';
    return copia;
}

console.log(cambiarApellido(usuario));
console.log(usuario);

// PRO TIP 👉 Un error común que cometen los nuevos programadores con la función de 
// retorno en JavaScript es no entender que una vez que se ejecuta una declaración 
// de retorno, la función se detiene y sale. Esto significa que cualquier código 
// que se encuentre después de la declaración de retorno no se ejecutará. 
// Entonces, mi pro tip sería: Asegúrate de que tu declaración de retorno sea 
// siempre la última cosa que hagas en tu función. Nunca coloques código que 
// quieras que se ejecute después de una declaración de retorno.

// Si deseas entender más sobre el objeto global JSON (que también es un formato de texto muy similar a objetos de JavaScript), puedes leerlo aquí:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON
// Adicionalmente puedes ver otras maneras de crear copias de objetos:
let persona = { nombre: 'Toshiro' };

// usando el operador spread ...
let a = {
    ...persona
};

// usando el método  Object.assign()
let b = Object.assign({}, persona);

// usando JSON
let c = JSON.parse(JSON.stringify(persona));