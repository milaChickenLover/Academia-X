// console.log(3);
// let texto = 'hola';
// console.log(texto.toUpperCase());

let perro = {
    nombre: 'Firulais',
    ladra: function() {
        console.log('Woof!');
    }
};

perro.ladra();

// PRO TIP 👉 No declares funciones dentro de métodos en JavaScript. 
// Puede parecer útil, pero en realidad, cada vez que el método se llama, 
// la función interna también debe ser redefinida. 
// En su lugar, declara tu función fuera y simplemente llama a esa función dentro 
// de tu método. Esto puede mejorar significativamente el rendimiento de tu código.

// Agrega el elemento 'Moulboul' al inicio del arreglo 'ciudades' usando un método.
let ciudades = ['Busan', 'Hakone', 'Yogjakarta'];
ciudades.unshift('Moulboul');