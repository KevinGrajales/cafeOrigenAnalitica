
// Creacion de funcion para generar ventas en las versiones instrumentadas.

const analitica = require("./analitica");
const {generarVentas} = require ("./generador");
const { clientesRecurrentes } = require("./analitica");

const muestra = [100, 1000, 10000, 100000];
const resultados = [];

for (const n of muestra){
    const lote = generarVentas(n);
    const contador1 = {ops:0};
    const contador2 = {ops:0};
    const contador3 = {ops:0};
    const contador4 = { ops: 0 };

    analitica.totalVendidoInstrumentada(lote, contador1);
    analitica.ventaMayorInstrumentada(lote, contador2);
    analitica.VentasCiudadInstrumentada(lote, contador3);
    analitica.primeraVenta(lote, contador4);

 resultados.push({
    n: n,
    totalVendidoInstrumentada: contador1.ops,
    ventaMayorInstrumentada: contador2.ops,
    VentasCiudadInstrumentada: contador3.ops,
    primeraVenta: contador4.ops
  });
}

console.table(resultados);


// Funcion Muestras Recurrentes con diferentes valores agregados

const muestrasRecurrentes = [1000, 2000, 4000, 8000, 16000];
//const muestrasRecurrentes = [1000, 2000, 4000, 8000, 16000, 100000, 1000000];


for (const n of muestrasRecurrentes) {
  const lote = generarVentas(n);

  console.time(`clientesRecurrentes n=${n}`);
  clientesRecurrentes(lote);
  console.timeEnd(`clientesRecurrentes n=${n}`);
}



// impresion con 10.000 ventas para todas las funciones paar evaluar tiempo que tarda en ejecutarse.

// Total vendido

const lote = generarVentas(10000);

console.time("totalVendido con 10.000 ventas ");
const resultado = analitica.totalVendido(lote);
console.timeEnd("totalVendido con 10.000 ventas ");

console.log("Resultado de totalVendido:", resultado);



// Unidades vendidas

const lote1 = generarVentas(10000);

console.time("Unidades vendidas con 10.000 ventas ");
const resultado1 = analitica.unidadesVendidas(lote1);
console.timeEnd("Unidades vendidas con 10.000 ventas ");

console.log("Resultado de unidades vendidas:", resultado1);


// Venta mayor
const lote2 = generarVentas(10000);

console.time("ventaMayor con 10.000 ventas ");
const resultado2 = analitica.ventaMayor(lote2);
console.timeEnd("ventaMayor con 10.000 ventas ");

console.log("Resultado de ventaMayor:", resultado2);


// Ticket promedio de ventas
const lote3 = generarVentas(10000);

console.time("ticketPromedioVentas con 10.000 ventas ");
const resultado3 = analitica.ticketPromedioVentas(lote3);
console.timeEnd("ticketPromedioVentas con 10.000 ventas ");

console.log("Resultado de ticketPromedioVentas:", resultado3);


// Ventas por ciudad
const lote4 = generarVentas(10000);

console.time("VentasCiudad con 10.000 ventas ");
const resultado4 = analitica.VentasCiudad(lote4);
console.timeEnd("VentasCiudad con 10.000 ventas ");

console.log("Resultado de VentasCiudad:", resultado4);


// Unidades por producto
const lote5 = generarVentas(10000);

console.time("unidadesPorProducto con 10.000 ventas ");
const resultado5 = analitica.unidadesPorProducto(lote5);
console.timeEnd("unidadesPorProducto con 10.000 ventas ");

console.log("Resultado de unidadesPorProducto:", resultado5);


// Top productos por valor
const lote6 = generarVentas(10000);

console.time("topProductosPorValor con 10.000 ventas ");
const resultado6 = analitica.topProductosPorValor(lote6, 5);
console.timeEnd("topProductosPorValor con 10.000 ventas ");

console.log("Resultado de topProductosPorValor:", resultado6);


// Ventas de un día
const lote7 = generarVentas(10000);
const fecha = "2026-09-01";

console.time("ventasDelDia con 10.000 ventas ");
const resultado7 = analitica.ventasDelDia(lote7, fecha);
console.timeEnd("ventasDelDia con 10.000 ventas ");

console.log("Unidades vendidas:", resultado7.cantidad);
console.log(
    "Valor total:",
    resultado7.valor.toLocaleString("es-CO")
);


// Clientes recurrentes
const lote8 = generarVentas(10000);

console.time("clientesRecurrentes con 10.000 ventas ");
const resultado8 = analitica.clientesRecurrentes(lote8);
console.timeEnd("clientesRecurrentes con 10.000 ventas ");

console.log("Resultado de clientesRecurrentes:", resultado8);


// Total de una ciudad usando cadena de métodos
const lote9 = generarVentas(10000);

console.time("totalCiudadCadena con 10.000 ventas ");
const resultado9 = analitica.totalCiudadCadena(lote9, "Medellín");
console.timeEnd("totalCiudadCadena con 10.000 ventas ");

console.log("Resultado de totalCiudadCadena:", resultado9);


// Total de una ciudad en una pasada
const lote10 = generarVentas(10000);

console.time("totalCiudadUnaPasada con 10.000 ventas ");
const resultado10 = analitica.totalCiudadUnaPasada(lote10, "Medellín");
console.timeEnd("totalCiudadUnaPasada con 10.000 ventas ");

console.log("Resultado de totalCiudadUnaPasada:", resultado10);