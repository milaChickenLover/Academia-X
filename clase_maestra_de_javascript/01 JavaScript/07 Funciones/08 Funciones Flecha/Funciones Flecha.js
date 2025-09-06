// function llamar(enExito, enError) {
//     let exito = true;
//     // .....
//     if (exito) {
//         enExito();
//     } else {
//         enError();
//     }
// }

// llamar(
//     () => console.log('Exito'),
//     () => console.log('Error')
// );

[1,2,3,40].forEach(console.log);

// Funciones Flecha
// Más detalles sobre funciones flecha:

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Si deseas entender el concepto más avanzado de la relación entre funciones flechas y el contexto puedes ver este ejemplo en donde:

// this es el objeto global para el primer ejemplo, y
// this es el objeto2 para el segundo ejemplo
// La recomendación es usar funciones flechas solo para operaciones que no dependan de un contexto para evitar confusiones.

const objeto1 = {
  flecha: () => {
    console.log(this);
  }
};

objeto1.flecha(); // this es objeto global

const objeto2 = {
  flecha: null,
  metodo: function() {
    this.flecha = () => {
      console.log(this)
    };
  }
};

objeto2.metodo(); // crea a funcion flecha
objeto2.flecha(); // this es objeto2 porque flecha se creó allí

// PRO TIP 👉 Evita confundir el uso del operador 'this' en las funciones flecha. Recuerda que las funciones flecha no crean su propio contexto de 'this', en su lugar, 'this' se refiere al contexto en el que están encerradas. Por lo tanto, si necesitas referenciar el objeto que contiene la función, utiliza una función normal en lugar de una función flecha.
