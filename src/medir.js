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




const muestrasRecurrentes = [1000, 2000, 4000, 8000, 16000, 100000, 1000000];

for (const n of muestrasRecurrentes) {
  const lote = generarVentas(n);

  console.time(`clientesRecurrentes n=${n}`);
  clientesRecurrentes(lote);
  console.timeEnd(`clientesRecurrentes n=${n}`);
}