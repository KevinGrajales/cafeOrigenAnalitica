
// Reto 1 - Dia ! - Parte 4
//Importacion de los datos

const ventas = require('./datos');

console.log("Cantidad de registros: ",ventas.length);
console.log("El primer registro es: ",ventas[0]);
console.log("El ultimo registro es: ",ventas[ventas.length-1]);
console.log("Producto en la posicion 4: ",ventas[4].producto);
console.table(ventas);



const n = [10, 20, 30, 40];
n.push(40);
n.pop();
n.unshift(5);
n.shift();

console.log("..... ",n)



const precios = [10, 20, 30, 40,50]

const precio = precios.filter(
    
    precio => precio < 25 

)

console.log("******* ",precio)



//const precios2 = [30, 10, 25, 60, 80, 40]

//const precio2 = precios2.filter(

    
 //   precio2 => precio2 < precios2[precio2.length-1]-5

//)

//console.log("******____ ",precio2)




const precios2 = [30, 10, 25, 60, 80, 40];

const precio2 = precios2.filter(
  elemento => elemento < precios2[precios2.length - 1] - 5
);

console.log("_______ ",precio2);


const precios3 = [30, 10, 25, 60, 80, 40];

const precio3= precios3.filter(
  valor => valor > precios3[0] + 5
);

console.log("////// ",precio3);