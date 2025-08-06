// Estos bucles son buenos para objetos, los bucles for y for of son buenos para listas, porque las listas tienen un orden pero no los objetos
let traductor = {
    bucle: 'loop',
    lista: 'array',
    declaración: 'declaration',
    objecto: 'object'
};

for (let etiqueta in traductor) {
    console.log(etiqueta + ' en inglés es ' + traductor[etiqueta]);
}
// etiqueta es una key
// PRO TIP 👉 Evita modificar el contenido del arreglo dentro del bucle for-in. Esto puede causar un comportamiento impredecible y errores difíciles de depurar. En su lugar, si necesitas cambiar el arreglo, considera crear uno nuevo o haz las modificaciones después del bucle.