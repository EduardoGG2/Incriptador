var inputUno = document.querySelector("#input-texto");
inputUno.addEventListener("input", function (event) {
    var textoEntrada = this.value;
    var textoMinusculas = "";
    
    var textoValidado = ""; 
    //Al final dejé un espacio para validar también los espacios en blanco.
    var filtroGeneral = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
    /**
    * Hice dos ciclos uno para recorrer el contenido de mi input text y otro para recorrer mi filtro
    */
    for (var i = 0; i < textoEntrada.length; i++) {
        for (var j = 0; j < filtroGeneral.length; j++) {
            //Si el contenido del índice en mi filtroGeneral coincide con el de mi input text lo irá agregando
            //Si no solo se ignora
            if (filtroGeneral[j] == textoEntrada[i]) {
                //Con el console, comprobamos que corresponda a la posición del filtroGeneral dando true
                //console.log(filtroGeneral[j] == textoEntrada[i]);
                textoValidado += textoEntrada[i];
            }
        }
    }

    textoMinusculas = textoValidado.toLowerCase(); //Función de JavaScript que permite transformar string en minúscula.
    this.value = textoMinusculas;
});

