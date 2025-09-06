// console.log = function() {}
var numero = 4;

function ejemplo() {
    var numero = 10;
    // console.log(numero);
    function dentro() {}
    dentro();


    // if (true) { }
    // while (false) { }
    // for (let i in []) { }
    {
        var numero = 100;
        var numero2 = 200;
    }

    console.log(numero);
    console.log(numero2);

}

ejemplo();
// console.log(numero);

// PRO TIP 👉 Evita usar 'var' para declarar variables en JavaScript, ya que su alcance es global o de función entera, lo cual puede llevar a problemas de sobrescritura o acceso no intencionado. En cambio, utiliza 'let' que tiene un alcance de bloque, proporcionando un mayor control sobre dónde se puede acceder o modificar una variable.
