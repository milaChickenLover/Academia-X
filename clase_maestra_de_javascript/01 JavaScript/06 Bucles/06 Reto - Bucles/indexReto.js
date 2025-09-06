// 1. Imprime los números del 1 al 5
for (let i = 0; i < 5; i++) {
    console.log(i + 1);
}
// 2. Recorre una lista de colores
arrayColors = ['verde', 'amarillo','rojo'];

for (let item of arrayColors) {
    console.log(item);
}
// 3. Recorre las propiedades de un objeto persona
let persona = {
    nombre: 'Maria',
    edad: 27,
    profesion: 'Diseñadora'
};

for (let obj in persona) {
    console.log(obj+ ': ' + persona[obj]);
}

// 4. Encuentra el número más cercano al cuadrado de 100
let numero = 1;
while ((numero * numero) < 100) {
    numero++;
}
console.log('El número más cercano al cuadrado de 100 es: ', numero);

// 5. Imprime los números pares hasta el 10, imprimiendo al menos uno.
let numPar = 2;
do {
    console.log(numPar);
    numPar += 2
} while (numPar <= 10);