const ventas = require('./datos')

const {
    totalVendido,
    totalVendidoM,
    unidadesVendidas,
    unidadesVendidasM,
    VentasCiudad,
    ventasPorCiudadM,
    valorVenta,
    ventaMayor,
    ticketPromedioVentas,
    unidadesPorProducto,
    topProductosPorValor
} = require('./analitica');


console.log("\n==============================================");
console.log("       RESUMEN GENERAL DE VENTAS");
console.log("              CAFE ORIGEN");
console.log("==============================================\n");

console.log("INDICADORES GENERALES");
console.log("----------------------------------------------");


console.log("\nUNIDADES VENDIDAS");
console.log("----------------------------------------------");
console.log("El Total de unidades vendidas en Cafe Origen es de : ",unidadesVendidas(ventas));


console.log("\nTOTAL VENDIDO");
console.log("----------------------------------------------");
console.log("El Total vendido contando todas las ventas es de : ",totalVendido(ventas).toLocaleString("es-CO"));


console.log("\nVENTAS POR CIUDAD");
console.log("----------------------------------------------");

const ciudades = VentasCiudad(ventas);

for (const ciudad in ciudades) {
    console.log(
        ciudad.padEnd(20),
        "$ " + ciudades[ciudad].toLocaleString("es-CO")
    );
}




console.log("\nUNIDADES POR PRODUCTO");
console.log("----------------------------------------------");
console.log("Unidades por producto :",unidadesPorProducto(ventas));


console.log("\nTOP 3 PRODUCTOS POR VALOR");
console.log("----------------------------------------------");
console.log("El top 3 de ventas es : ",topProductosPorValor(ventas,3))


console.log("\n==============================================");
console.log("             FIN DEL REPORTE");
console.log("==============================================");




const array1 = [2,4,5,8]
const array2 = array1

array1.pop()

console.log("aray 1: ",array1)
console.log("array2: ",array2)



