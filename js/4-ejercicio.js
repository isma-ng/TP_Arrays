//Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 
function parImpar(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " es par.";
    } else {
        return "El número " + numero + " es impar.";
    }
}

const numero = parseInt(prompt("Introduce un número entero:"));
if (!isNaN(numero)) {
    const resultado = parImpar(numero);
    document.writeln("<h2>" + resultado + "</h2>");
}   
else {
    document.writeln("<h2>Por favor, introduce un número entero válido.</h2>");
}