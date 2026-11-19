// Reto 2- Dia 1 - parte 2

// Funcion ValorVenta

const ventas = require('./datos');

function valorVenta(venta) {
    return venta.cantidad * venta.precio;
}

function totalVendido(ventas) {
    let total = 0;

    for (const v of ventas) {
        total += valorVenta(v);
    }

    return total;
}

console.log(valorVenta(ventas[9]));
console.log(totalVendido(ventas))


function unidadesVendidas(ventas){

    let unidades = 0;

    for (const v of ventas){
        unidades += v.cantidad
    }

    return unidades;

}

console.log(unidadesVendidas(ventas));



function ventaMayor(ventas) {
    if (ventas.length === 0) return null;

    let mayor = ventas[0];

    for (const v of ventas) {
        if (valorVenta(v) > valorVenta(mayor)) mayor = v;
    }

    return mayor;
}

console.log (ventaMayor(ventas));





