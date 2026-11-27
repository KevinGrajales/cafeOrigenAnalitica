// Reto 2- Dia 1 - parte 2

// Funcion ValorVenta

const ventas = require('./datos');



 // Exportando las funciones para usar en verificar.js.

        module.exports = {
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
            topProductosPorValor,
            ventasDelDia,
            totalVendidoInstrumentada,
            ventaMayorInstrumentada,
            VentasCiudadInstrumentada,
            primeraVenta,
            clientesRecurrentes,
            totalCiudadCadena,
            totalCiudadUnaPasada
        };


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


// Funcion que calcula el total de la venta.

function valorVenta(venta) {
    return venta.cantidad * venta.precio;
}

console.log(valorVenta(ventas[9]));

// Funcion que calcula el total vendido

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

// Metodos de arreglos

    // Metodo de arreglo reduce ---> metodo que acumula valores y retorna

        // Total vendido con reduce

function totalVendidoM(ventas) {
    return ventas.reduce((total, v) => {
        return total + valorVenta(v);
    }, 0);
}

        // Unidades vendidas con reduce

function unidadesVendidasM(ventas) {
    return ventas.reduce((unidades, v) => {
        return unidades + v.cantidad;
    }, 0);
}


        //Ventas por ciudad con reduce

function ventasPorCiudadM(ventas) {

    return ventas.reduce((acum, v) => {

        let ciudadNormalizada = v.ciudad.trim().toLowerCase();

        if (acum[ciudadNormalizada] === undefined) {
            acum[ciudadNormalizada] = 0;
        }

        acum[ciudadNormalizada] = acum[ciudadNormalizada] + valorVenta(v);

        return acum;

    }, {});
}


      

       

// Función total de unidades por producto

function unidadesPorProducto(ventas) {

    let acum = {};

    for (const v of ventas) {

        if (acum[v.producto] === undefined) {
            acum[v.producto] = 0;
        }

        acum[v.producto] += v.cantidad;
    }

    return acum;
}

console.log("Unidades por producto ",unidadesPorProducto(ventas))

// funcion los mayores registros por valor

function topProductosPorValor(ventas, k) {

    let acum = {};

    
    for (const v of ventas) {

        if (acum[v.producto] === undefined) {
            acum[v.producto] = 0;
        }

        acum[v.producto] += valorVenta(v);
    }

    
    let productos = Object.entries(acum);

    
    productos.sort((a, b) => b[1] - a[1]);


    return productos.slice(0, k);
}

console.log("TOp ventas: ",topProductosPorValor(ventas,3))


// Ventas del dia por fecha


function ventasDelDia(ventas, fecha) {

    let acum = {
        cantidad: 0,
        valor: 0
    };

    for (let v of ventas) {

        if (v.fecha === fecha) {
            acum.cantidad += v.cantidad;
            acum.valor += valorVenta(v);
        }

    }

    return acum;
}

// impresion en formato COP

const resultado = ventasDelDia(ventas, "2026-09-01");

console.log("Unidades vendidas:", resultado.cantidad);

console.log(
    "Valor total:",
    resultado.valor.toLocaleString("es-CO")
);


// Funcion Total Vendido instrumentada

function totalVendidoInstrumentada(ventas, contador) {
    let total = 0;

    for (const v of ventas) {
        contador.ops++
        total += valorVenta(v);
    }

    return total;
}

// Funcion venta mayor instrumentada

function ventaMayorInstrumentada(ventas, contador) {
    if (ventas.length === 0) return null;

    let mayor = ventas[0];

    for (const v of ventas) {
        contador.ops++
        if (valorVenta(v) > valorVenta(mayor)) mayor = v;
    }

    return mayor;
}


// Funcion ventas por ciudad Instrumentada

function VentasCiudadInstrumentada (ventas, contador){

    let ciudadNormalizada = "";
    let acum = {};

    for(const v of ventas){
        contador.ops++
     ciudadNormalizada = v.ciudad.trim().toLowerCase()   

        if (acum[ciudadNormalizada] === undefined) {
        acum[ciudadNormalizada] = 0;
         }

     acum[ciudadNormalizada] = acum[ciudadNormalizada] + valorVenta(v)

    }

    return acum;

}


// Funcion primera venta, complejidad constante.

function primeraVenta(ventas, contador) {
  contador.ops++;

  if (ventas.length === 0) return null;

  return ventas[0];
}

// Funcion que grega ventas dependieque busca los clientes

function clientesRecurrentes(ventas) {
  const recurrentes = [];

  for (let i = 0; i < ventas.length; i++) {
    for (let j = i + 1; j < ventas.length; j++) {
      if (
        ventas[i].cliente === ventas[j].cliente &&
        !recurrentes.includes(ventas[i].cliente)
      ) {
        recurrentes.push(ventas[i].cliente);
      }
    }
  }

  return recurrentes;
}

 

// Funcion que normaliza las ciudades y calculo su total con metodos de arreglo.

function totalCiudadCadena(ventas, ciudad) {
  const ciudadBuscada = ciudad.trim().toLowerCase();

  return ventas
    .map(venta => ({
      ...venta,
      ciudad: venta.ciudad.trim().toLowerCase()
    }))
    .filter(venta => venta.ciudad === ciudadBuscada)
    .map(venta => valorVenta(venta))
    .reduce((total, valor) => total + valor, 0);
}


// Funcion que normaliza las ciudades y calculo su total con un ciclo

function totalCiudadUnaPasada(ventas, ciudad) {
  const ciudadBuscada = ciudad.trim().toLowerCase();
  let total = 0;

  for (const venta of ventas) {
    const ciudadVenta = venta.ciudad.trim().toLowerCase();

    if (ciudadVenta === ciudadBuscada) {
      total += valorVenta(venta);
    }
  }

  return total;
}

