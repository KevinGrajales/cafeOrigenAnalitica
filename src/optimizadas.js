
const catalogo = require("./catalogo")
const ventas = require("./datos") 

module.exports = {
  clientesRecurrentesSet,
  comprasPorCliente
};

function clientesRecurrentesSet(ventas) {
  const vistos = new Set();
  const recurrentes = new Set();

  for (const v of ventas) {
    if (vistos.has(v.cliente)) {
      recurrentes.add(v.cliente);
    } else {
      vistos.add(v.cliente);
    }
  }

  return [...recurrentes];
}

function comprasPorCliente(ventas) {
  const compras = new Map();

  for (const v of ventas) {
    compras.set(
      v.cliente,
      (compras.get(v.cliente) || 0) + 1
    );
  }

  return compras;
}



function ComboRegaloMap(catalogo, valor) {
  const preciosVistos = new Map();

  for (const producto of catalogo) {
    const complemento = valor - producto.precio;

    if (preciosVistos.has(complemento)) {
      return {
        producto1: preciosVistos.get(complemento),
        producto2: producto,
        suma: valor
      };
    }

    preciosVistos.set(producto.precio, producto);
  }

  return null;
}

console.log("Combo de 87.000:", ComboRegaloMap(catalogo, 87000));
console.log("Combo de 61.000:", ComboRegaloMap(catalogo, 61000));
console.log("Combo sin solución:", ComboRegaloMap(catalogo, 50000));

function productoEstrellaPorCiudad(ventas) {
  const frecuenciasPorCiudad = new Map();

  for (const venta of ventas) {
    // Ignorar registros sin unidades vendidas
    if (venta.cantidad <= 0) {
      continue;
    }

    // Normalizar la ciudad para agrupar "Medellín" y "medellín"
    const ciudad = venta.ciudad.trim().toLowerCase();
    const producto = venta.producto;

    if (!frecuenciasPorCiudad.has(ciudad)) {
      frecuenciasPorCiudad.set(ciudad, new Map());
    }

    const frecuenciasProductos = frecuenciasPorCiudad.get(ciudad);
    const frecuenciaActual = frecuenciasProductos.get(producto) || 0;

    frecuenciasProductos.set(producto, frecuenciaActual + 1);
  }

  const resultado = new Map();

  for (const [ciudad, frecuenciasProductos] of frecuenciasPorCiudad) {
    let productoEstrella = null;
    let mayorFrecuencia = 0;

    for (const [producto, frecuencia] of frecuenciasProductos) {
      // Con ">" el empate lo conserva el producto que apareció primero
      if (frecuencia > mayorFrecuencia) {
        productoEstrella = producto;
        mayorFrecuencia = frecuencia;
      }
    }

    resultado.set(ciudad, {
      producto: productoEstrella,
      frecuencia: mayorFrecuencia
    });
  }

  return resultado;
}

function primerClienteUnico(ventas) {
  const frecuenciasClientes = new Map();

  // Primer recorrido: contar registros por cliente
  for (const venta of ventas) {
    const cliente = venta.cliente;
    const frecuenciaActual = frecuenciasClientes.get(cliente) || 0;

    frecuenciasClientes.set(cliente, frecuenciaActual + 1);
  }

  // Segundo recorrido: encontrar el primero que aparece una sola vez
  for (const venta of ventas) {
    if (frecuenciasClientes.get(venta.cliente) === 1) {
      return venta.cliente;
    }
  }

  return null;
}


console.log("Productos estrella:");
console.log(productoEstrellaPorCiudad(ventas));

console.log("Primer cliente único:");
console.log(primerClienteUnico(ventas));