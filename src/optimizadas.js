


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

