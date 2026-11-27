// Imporrtando datos y funciones.

const ventas = require('./datos');
const { generarVentas } = require('./generador');
const { clientesRecurrentesSet, comprasPorCliente } =
  require("./optimizadas");

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


// impresesion de funciones CLientes recurrentes con SET

const recurrentes = clientesRecurrentesSet(ventas);
console.log("Clientes recurrentes:", recurrentes);

const compras = comprasPorCliente(ventas);
console.log("Compras por cliente:", compras);


function clientesRecurrentesMap(ventas) {
  const compras = comprasPorCliente(ventas);

  return [...compras]
    .filter(([cliente, cantidad]) => cantidad > 1)
    .map(([cliente]) => cliente);
}

function ordenarClientes(clientes) {
  return [...clientes].sort();
}

function verificarVersiones(nombre, datos) {
  const original = ordenarClientes(clientesRecurrentes(datos));
  const conSet = ordenarClientes(clientesRecurrentesSet(datos));
  const conMap = ordenarClientes(clientesRecurrentesMap(datos));

  const coinciden =
    JSON.stringify(original) === JSON.stringify(conSet) &&
    JSON.stringify(original) === JSON.stringify(conMap);

  console.log(`\n${nombre}`);
  console.log("¿Coinciden las tres versiones?", coinciden);

  if (!coinciden) {
    console.log("Original:", original);
    console.log("Set:", conSet);
    console.log("Map:", conMap);
  }
}


function verificarResultados(lote, nombre) {
  const original = clientesRecurrentes(lote).sort();
  const conSet = clientesRecurrentesSet(lote).sort();
  const conMap = clientesRecurrentesMap(lote).sort();

  const iguales =
    JSON.stringify(original) === JSON.stringify(conSet) &&
    JSON.stringify(original) === JSON.stringify(conMap);

  console.log(`${nombre}: ${iguales ? "Coinciden" : "NO coinciden"}`);
}


verificarResultados(ventas, "Datos del Día 1");
verificarResultados(generarVentas(5000), "5.000 ventas generadas");


