//Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

//Mostrar la longitud del arreglo.
//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
//Añade en última posición la ciudad de París.
//Escribe por pantalla el elemento que ocupa la segunda posición.
//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

const ciudades = [];
while (true) {
    let ciudad = prompt("Introduce el nombre de una ciudad (o presiona Cancelar para terminar):");
    if (ciudad === null || ciudad.trim() === "") {
        break;
    }
    ciudades.push(ciudad.trim());
}
document.writeln("<h2>Array generado: " + ciudades.join(", ") + "</h2>");
document.writeln("<ul>ciudades ingresadas: " + ciudades.length + "</ul>");

if (ciudades.length > 0) { 
    document.writeln("<li>Primera ciudad: " + ciudades[0] + "</li>");
} else {
    document.writeln("<li>No hay ciudades en el array.</li>");
}
if (ciudades.length >= 3) {
    document.writeln("<li>Tercera ciudad: " + ciudades[2] + "</li>");
} else {
    document.writeln("<li>No hay tercera ciudad.</li>");
}
if (ciudades.length > 0) {
    document.writeln("<li>Última ciudad: " + ciudades[ciudades.length - 1] + "</li>");
} else {
    document.writeln("<li>No hay última ciudad.</li>");
}
ciudades.push("París");
document.writeln("<ul>Array después de añadir París: " + ciudades.join(", ") + "</ul>");
if (ciudades.length >= 2) {
    document.writeln("<li>Elemento en la segunda posición por Barcelona: " + ciudades[1] + "</li>");
} else {
    document.writeln("<li>No hay elemento en la segunda posición.</li>");
}   
if (ciudades.length >= 2) {
    ciudades[1] = "Barcelona";
    document.writeln("<li>Array después de sustituir segunda posición: " + ciudades.join(", ") + "</li>");
} else {
    document.writeln("<p>No hay elemento en la segunda posición para sustituir.</p>");
}