//Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
//La fórmula del perímetro  es p = 2*(a +b)

function calcularPerimetroRectangulo(lado1, lado2) {
    return 2 * (lado1 + lado2);
}
const lado1 = parseFloat(prompt("Introduce el valor del lado A del rectángulo:"));
const lado2 = parseFloat(prompt("Introduce el valor del lado B del rectángulo:"));
if (!isNaN(lado1) && !isNaN(lado2)) {
    const perimetro = calcularPerimetroRectangulo(lado1, lado2);
    document.writeln("<h2>El perímetro del rectángulo es: " + perimetro + "</h2>");
}
else {
    document.writeln("<h2>Por favor, introduce valores válidos para los lados del rectángulo.</h2>");
}
