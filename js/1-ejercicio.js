//Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
document.writeln("<h1>Meses del Año</h1>");
document.writeln("<ul>");
for (let i = 0; i < meses.length; i++) {
    document.writeln("<li>" + meses[i] + "</li>");
}
document.writeln("</ul>");
