

//  Dia 2 - Semana 1 

// Creo listas Productos y ciudades para el generador

const PRODUCTOS = [
    { producto: "Origen Huila 500 g", precio: 42000 },
    { producto: "Origen Nariño 250 g", precio: 26000 },
    { producto: "Prensa francesa", precio: 95000 },
    { producto: "Origen Sierra 500 g", precio: 45000 },
    { producto: "Molino manual", precio: 120000 }
];


const CIUDADES = [
    "Medellín",
    "Bogotá",
    "Cali",
    "Pereira"
];+





// Funcion generar ventas aleatorias mediante

function azar(min, max) {
    return Math.floor(Math.random() * (max - min +1)+ min);
}


function generarVentas(n) {
    const MaxClientes = Math.max(1, Math.floor(n / 3));
    const ventas = [];


    for (let i = 1; i <= n; i++) {
        const p = PRODUCTOS[azar(0, PRODUCTOS.length - 1)];
        const c = CIUDADES[azar(0, CIUDADES.length - 1)];
        const numClientes = azar(1, MaxClientes);
        const dia =String(azar(1,10).padStart(2, "0"));
        const mes=String(azar(9, 12).padStart(2, "0"));

        ventas.push({
            id: i,
            fecha: `2026-${mes}-${dia}`,
            cliente: `C${Sting(numClientes).padStart(2, "0")}`,
            producto: p.producto,
            ciudad: c,
            cantidad: azar(1, 5),
            precio: p.precio
        });
    }
    return ventas;
}






