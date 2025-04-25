//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 function analizarCadena(cadena) {
        if (cadena === cadena.toUpperCase()) {
            return "La cadena está formada solo por mayúsculas.";
        } else if (cadena === cadena.toLowerCase()) {
            return "La cadena está formada solo por minúsculas.";
        } else {
            return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
        }
    }

    const cadena = prompt("Introduce una cadena de texto:");
    if (cadena !== null) {
        const resultado = analizarCadena(cadena);
        document.writeln("<h2>" + resultado + "</h2>");
    } else {
        document.writeln("<h2>No se introdujo ninguna cadena.</h2>");
    }