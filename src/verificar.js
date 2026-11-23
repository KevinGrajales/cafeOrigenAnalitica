// Imporrtando datos y funciones.

const ventas = require('./datos');

const {
    totalVendido,
    totalVendidoM,
    unidadesVendidas,
    unidadesVendidasM,
    VentasCiudad,
    ventasPorCiudadM
} = require('./analitica');


//  Verificar total vendido
const totalCiclo = totalVendido(ventas);
const totalMetodo = totalVendidoM(ventas);

if (totalCiclo === totalMetodo) {
    console.log("Total vendido: OK");
} else {
    console.log("Total vendido: DIFERENTE");
}

// Verificar unidades vendidas
const unidadesCiclo = unidadesVendidas(ventas);
const unidadesMetodo = unidadesVendidasM(ventas);    


if (unidadesCiclo === unidadesMetodo) {
    console.log("Unidades vendidas: OK");
} else {
    console.log("Unidades vendidas: DIFERENTE");
}

// Verificar ventas por ciudad

const ventasCiudadCiclo = VentasCiudad(ventas);
const ventasCiudadMetodo = ventasPorCiudadM(ventas);


if (ventasCiudadCiclo === ventasCiudadMetodo) {
    console.log("Ventas por ciudad: OK");
} else {
    console.log("Ventas por ciudad: DIFERENTE");
}