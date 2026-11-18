
// Reto 1 - Dia ! - Parte 4
//Importacion de los datos

const ventas = require('./datos');

console.log("Cantidad de registros: ",ventas.length);
console.log("El primer registro es: ",ventas[0]);
console.log("El ultimo registro es: ",ventas[ventas.length-1]);
console.log("Producto en la posicion 4: ",ventas[4].producto);
console.table(ventas);