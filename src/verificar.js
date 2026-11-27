// Imporrtando datos y funciones.

const ventas = require('./datos');
const { generarVentas } = require('./generador');

const {
    totalVendido,
    totalVendidoM,
    unidadesVendidas,
    unidadesVendidasM,
    VentasCiudad,
    ventasPorCiudadM,
    clientesRecurrentes,
    totalCiudadCadena,
    totalCiudadUnaPasada
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


// impresion de clientes recurrentes

  console.log("Clientes recurrentes:", clientesRecurrentes(ventas));



  // Impresion de las funciones de normalizacion con metodos de arreglo y con ciclo
  
  const lote = generarVentas(10000);

const cadena = totalCiudadCadena(lote, "Medellín");
const unaPasada = totalCiudadUnaPasada(lote, "Medellín");

console.log("Total con cadena:", cadena);
console.log("Total con una pasada:", unaPasada);
console.log("¿Coinciden?", cadena === unaPasada);
