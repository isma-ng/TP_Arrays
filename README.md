# Ejercicios de Arrays en JavaScript 🚀

Colección de ejercicios prácticos para trabajar con arrays en JavaScript. Incluye simulaciones de lanzamientos de dados y análisis de frecuencias.

## 📋 Descripción
Este repositorio contiene:
- Simulación de lanzamientos de dados usando `Math.random()`
- Conteo de frecuencias de sumas en un array
- Generación de resultados en formato de tabla HTML
- Ejemplos prácticos de manipulación de arrays

## 📋 Lista de Ejercicios

```javascript
// Ejercicio 3: Dados 

let contador = new Array(13).fill(0);
  for (let i = 0; i < 50; i++) {
      let dado1 = Math.floor(Math.random() * 6) + 1;
      let dado2 = Math.floor(Math.random() * 6) + 1;
      contador[dado1 + dado2]++;
  }
  document.writeln('<table>');
  document.writeln('<tr><th>Suma🎲🎲</th><th>Veces</th></tr>');
  for (let suma = 2; suma <= 12; suma++) {
      document.writeln(`<tr><td>${suma}</td><td>${contador[suma]}</td></tr>`);
  }
  document.writeln('<tr style="font-weight: bold;"><td>TOTAL</td><td>50</td></tr>');
  document.writeln('</table>');

// Ejercicio 2: Ciudades y lista modificada

const ciudades = [];
while (true) {
    let ciudad = prompt("Introduce el nombre de una ciudad (o presiona Cancelar para terminar):");
    if (ciudad === null || ciudad.trim() === "") {
        break;
    }
    ciudades.push(ciudad.trim());
}
document.writeln("<h1>Ciudades ingresadas</h1>");
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

```

## ⚙️ Prerrequisitos
- JavaScript
- Git
- Navegador web moderno

## 🛠️ Clonar el repositorio
Para obtener una copia local, ejecuta:
```bash
git clone https://github.com/tu-usuario/ejercicios-arrays.git
cd ejercicios-arrays
```

## 🔄 Características clave:

- Uso de arrays para conteo de frecuencias
- Generación de números aleatorios con Math.random()
- Manipulación del DOM para mostrar resultados
- Estructura de datos eficiente para análisis estadístico

## 🤝 Contribuciones
¡Contribuciones son bienvenidas! Si quieres agregar más ejercicios o mejorar los existentes:

Haz fork del repositorio

Crea tu rama (git checkout -b nueva-funcionalidad)

Haz commit de tus cambios (git commit -m 'Agrego ejercicio')

Haz push a la rama (git push origin nueva-funcionalidad)

Abre un Pull Request


## 📜 Licencia
MIT © 2025 [ISMAEL ISA]

MI GITHUB: https://github.com/isma-ng

Hecho con ❤️ para la comunidad de programadores

