// Reto 2- Dia 1 - parte 2

// Funcion ValorVenta

const ventas = require('./datos');

// variables para hacer las pruebas con todas las funciones

const unaVenta = [ventas[0]];
const ventasVacias = [];


// Pruebas con Total Vendido
console.log("Total vendido con una sola venta: ", totalVendido(unaVenta));
console.log("Total vendido con ventas vacias: ",totalVendido(ventasVacias));
console.log("Total vendido con todas las ventas: ",totalVendido(ventas));

// Pruebas con unidades vendidas

console.log("Total de unidades vendidas con una sola venta: ", unidadesVendidas(unaVenta));
console.log("Total de unidades con ventas vacias: ",unidadesVendidas(ventasVacias));
console.log("Total de unidades vendidas con todas las ventas: ",unidadesVendidas(ventas));

// Pruebas con Venta Mayor

console.log("Venta Mayor con una sola venta: ", ventaMayor(unaVenta));
console.log("Venta Mayor con ventas vacias: ",ventaMayor(ventasVacias));
console.log ("Venta Mayor con todas las ventas: ",ventaMayor(ventas));

// Pruebas con Promedio de ventas

console.log("Promedio de ventas con una sola venta: ", ticketPromedioVentas(unaVenta));
console.log("Promedio de ventas con ventas vacias: ",ticketPromedioVentas(ventasVacias));
console.log("Promedio de ventas con todas las ventas: ",ticketPromedioVentas(ventas));

// Pruebas con ventas por ciudad

console.log("Ventas x ciudad con una sola venta: ", VentasCiudad(unaVenta));
console.log("Ventas x ciudad con ventas vacias: ",VentasCiudad(ventasVacias));
console.log("Ventas x ciudad con todas las ventas: ",VentasCiudad(ventas));



function valorVenta(venta) {
    return venta.cantidad * venta.precio;
}

console.log(valorVenta(ventas[9]));


function totalVendido(ventas) {
    let total = 0;

    for (const v of ventas) {
        total += valorVenta(v);
    }

    return total;
}



// Funcion unidades Vendidas


function unidadesVendidas(ventas){

    let unidades = 0;

    for (const v of ventas){
        unidades += v.cantidad
    }

    return unidades;

}





// Funcion venta mayor

function ventaMayor(ventas) {
    if (ventas.length === 0) return null;

    let mayor = ventas[0];

    for (const v of ventas) {
        if (valorVenta(v) > valorVenta(mayor)) mayor = v;
    }

    return mayor;
}




// Funcion promedio de ventas

function ticketPromedioVentas(ventas) {

    let TotalCompras = totalVendido(ventas);
    let cantidadCompras = unidadesVendidas(ventas);

    if (cantidadCompras === 0) return 0;

    let PromedioCompras = TotalCompras / cantidadCompras;

    return PromedioCompras;
}




// Funcion ventas por ciudad

function VentasCiudad (ventas){

    let ciudadNormalizada = "";
    let acum = {};

    for(const v of ventas){

     ciudadNormalizada = v.ciudad.trim().toLowerCase()   

        if (acum[ciudadNormalizada] === undefined) {
        acum[ciudadNormalizada] = 0;
         }

     acum[ciudadNormalizada] = acum[ciudadNormalizada] + valorVenta(v)

    }

    return acum;

}





