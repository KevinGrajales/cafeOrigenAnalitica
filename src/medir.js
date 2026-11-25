const analitica = require("./analitica");
const {generarVentas} = require ("./generador");

const muestra = [100, 1000, 10000, 100000];
const resultados = [];

for (const n of muestra){
    const lote = generarVentas(n);
    const contador1 = {ops:0};
    const contador2 = {ops:0};
    const contador3 = {ops:0};
    const contador4 = {ops:0};
    analitica.totalVendidoInstrumentda(lote, contador1);

}