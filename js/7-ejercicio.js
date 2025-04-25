//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function mostrarTablaMultiplicar(numero) {
    document.writeln("<h2>Tabla de multiplicar del " + numero + "</h2>");
    for (let i = 1; i <= 10; i++) {
        document.writeln("<p>" + numero + " x " + i + " = " + (numero * i) + "</p>");
    }
}
const numero = parseInt(prompt("Introduce un número para mostrar su tabla de multiplicar:"));
if (!isNaN(numero)) {
    mostrarTablaMultiplicar(numero);
}
else {
    document.writeln("<h2>Por favor, introduce un número válido.</h2>");
}
