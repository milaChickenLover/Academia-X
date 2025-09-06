function llamar(enExito, enError) {
    let exito = true;
    // .....
    if (exito) {
        enExito();
    } else {
        enError();
    }
}

llamar(
    function() { console.log('Exito'); },
    function() { console.log('Error'); }
);

// PRO TIP 👉 El error más común que cometen los nuevos programadores al usar Callbacks en JavaScript es el tan temido "Callback Hell", producido por el anidamiento excesivo de funciones. Para evitar esto, implementa la técnica de "descomposición de funciones". Significa, en lugar de anidar todas las funciones de callback, divídelas en funciones más pequeñas y nombradas, y luego llámalas cuando las necesites. De esta manera, tu código es mucho más limpio y legible.
