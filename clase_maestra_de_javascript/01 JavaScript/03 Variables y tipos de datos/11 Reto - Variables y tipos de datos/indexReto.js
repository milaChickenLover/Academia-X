const nombre = 'Milagros';
let mensaje = '¡Hola Mundo!';
console.log(mensaje + ' Soy ' + nombre);
console.log('Mi nombre en mayúsculas es: ' + nombre.toUpperCase());
console.log('Mi nombre en minúsculas es: ' + nombre.toLowerCase());
console.log(`El mensaje de '${mensaje}' tiene 12 caracteres.`);

let array = [1, 2, 3, 4, 5];
console.log(`El tercer número del array con los valores '${array}' es: ${array[2]}`);
console.log(`Se añade el número que sigue en orden al final del arreglo y es: ${array.push(6)}`);

let texto = 'La lluvia en Sevilla es una maravilla';
let textoLluvia = texto.includes('lluvia') ? texto.match('lluvia') : '';
let patron = /lluvia/;
let resultado = texto.match(patron);
console.log(`Se encontró el patrón '${textoLluvia}' en el texto '${texto}', por lo que el resultado es: ${resultado}`);
