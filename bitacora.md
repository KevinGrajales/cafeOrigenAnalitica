

18 / 11 / 2026

Dia 1 Semana 1.

En el reto 3 y 4 habian aglunos terminos que no conocia y lo investigue con la IA.
Los terminos son:  module.exports y require y se usan para exportar e importar datos de un archivo a otro.

----- Dicionario de datos.

            Despues de generar la tabla ventas se tiene que:

                - La tabla tiene 8 columnas
                    * La primera es el indicador del registro (0 a 11), tipo entero numerico.
                    * La segunda es id,(1 hacia adelante), tipo entero numerico, es un identificar incrementable que le da un valor unico y diferenciable a cada  registro.
                    * La tercera es fecha, tipo date, guarda la fecha en que se realizó la venta.
                    * La cuarta es cliente, tipo cadena de texto, donde deberia guardar el nombre del cliente, en este caso los nombra con numeros entre comillas.
                    *La quinta es producto, tipo cadena de texto, indica la descripcion del producto.
                    *La sexta es ciudad, tipo cadena de texto, indica el nombre de la ciudad donde se hizo la venta.
                    *La septima es cantidad, tipo entero numerico, indica la cantidad de de veces que se compro ese producto.
                    *La octava es precio, tipo dinero, indica el valor del producto.


------- Casos borde detectados.

            Problemas en la calidad de los datos:

                - El cliente deberia tener un nombre real y con cadenas de texto.
                - La ciudad tiene varias formaa de nombrar Medellin: con mayuscula al inicio y miniscula todo, lo cual podria generar problemas al momento de acomular ventas por ciudad.
                - En cantidad muestra un registro con 0 ventas, lo cual no tiene sentido que aparezca en los registros, ya que es una tabla sobre las ventas realizadas.



19 / 11 / 2026

Mini reto 2.

Indicadores en pseudocodigo.

    - Cuanto se vendio:

        Algoritmo venta

    Definir ProductosVendidos Como Entero
    Definir Producto Como Cadena
    Definir cantidad Como Entero
    Definir precio Como Entero
    Definir TotalVendido Como Entero
    Definir i Como Entero

    TotalVendido <- 0

    Escribir "Ingrese cuantos productos diferentes vendió"
    Leer ProductosVendidos

    Para i=1 Hasta ProductosVendidos Con Paso 1 Hacer

        Escribir "Ingrese el producto que se vendió"
        Leer Producto

        Escribir "Ingrese la cantidad de ventas que tuvo el producto"
        Leer Cantidad

        Escribir "Ingrese el precio del producto que registró como vendido"
        Leer precio

        TotalVendido <- TotalVendido + (Cantidad*Precio)

    Fin Para

    Escribir "El total vendido es: ", TotalVendido

FinAlgoritmo



    - Cuantas unidades salieron:

    Algoritmo UnidadesQueSalieron

    Definir MateriaPrima Como Entero
    Definir Porcion Como Entero
    Definir Salieron Como Real

    Escribir "Cuanta materia prima tiene (Ingrese en gramos)"
    Leer MateriaPrima

    Escribir "Con cuanta cantidad de cafe se llena una bolsa (Ingrese en gramos)"
    Leer Porcion

    Salieron <- MateriaPrima/Porcion

    Escribir "Las unidades que salieron son: ",Salieron

    Fin Algoritmo



    - Cual fue la venta mas grande:

   
        Algoritmo VentaMasGrande

            Definir CantidadVentas Como Entero
            Definir venta Como Entero
            Definir Temp Como Entero

            Temp <- 0

            Escribir "Ingrese la cantidad de ventas que realizó"
            Leer CantidadVentas

            Para i=1 Hasta CantidadVentas Con Paso 1 Hacer

                Escribir "Ingrese el valor de la venta ", i
                Leer venta

                Si venta > Temp Entonces
                    Temp <- venta
                Fin Si

            Fin Para

            Escribir "La venta mas grande es: ", Temp

        FinAlgoritmo


        - Cuanto gasta un cliente por compra:

        Algoritmo PromedioCompras

        Definir CantidadCompras Como Entero
        Definir ValorCompra Como Entero
        Definir TotalCompras Como Entero
        Definir PromedioCompras Como Entero

        TotalCompras <- 0
        PromedioCompras <- 0


        Escribir "Ingrese la cantidad de compras"
        Leer CantidadCompras

        Para i=1 Hasta CantidadCompras Con Paso 1 Hacer

                Escribir "Ingrese el valor de la compra ", i
                Leer ValorCompra

                TotalCompras <- TotalCompras + ValorCompra

        Fin Para

        PromedioCompras <- TotalCompras / CantidadCompras
        Escribir "El promedio que gasta un Cliente por compra es de ",PromedioCompras



        22 / 11 / 2026

        Casos especiales con el arreglo vacio:

        - Ventas mayores con arreglo vacio genera null, ya que la funcion hace una comparacion entre 2 registros y al ingresar 0, la funcion no tien que calcular, esta linea hace que retorne null: if (ventas.length === 0) return null;

        - Ventas x ciudad retorna : {}, ya que requiere recibir un arreglo para devoler otro, si no se ingresa nada, en este caso devuelve el arreglo vacio.

        - En los demas casos retorna 0.


        --- Tabla de traza - Total Vendido.

       Iteración   ID venta   Operación (cantidad × precio)   Valor venta   Acumulado

        Inicial     -          -                                -             $0
            1       1          2 × 42.000                       $84.000       $84.000
            2       2          1 × 26.000                       $26.000       $110.000
            3       3          1 × 95.000                       $95.000       $205.000
            4       4          1 × 42.000                       $42.000       $247.000
            5       5          3 × 45.000                       $135.000      $382.000
            6       6          2 × 26.000                       $52.000       $434.000
            7       7          1 × 120.000                      $120.000      $554.000
            8       8          0 × 42.000                       $0            $554.000
            9       9          2 × 45.000                       $90.000       $644.000
            10      10         4 × 42.000                       $168.000      $812.000
            11      11         1 × 95.000                       $95.000       $907.000
            12      12         3 × 26.000                       $78.000       $985.000


        --- Tabla de traza - Unidades Vendidas.

        Iteración   ID venta   Cantidad (v.cantidad)   Unidades acumuladas
        Inicial     -          -                       0
            1       1          2                       2
            2       2          1                       3
            3       3          1                       4
            4       4          1                       5
            5       5          3                       8
            6       6          2                       10
            7       7          1                       11
            8       8          0                       11
            9       9          2                       13
            10      10         4                       17
            11      11         1                       18
            12      12         3                       21 



        23 / 11 / 2026

        Respondo: ¿qué recorro?, ¿qué filtro?, ¿qué transformo?, ¿qué acumulo?, ¿cómo agrupo? de cada funcion.

        valorVenta(venta):
        
        - ¿Qué recorro? No recorro ningún arreglo. Recibo un objeto de venta.
        - ¿Qué filtro? No uso filtros en esta función.
        - ¿Qué transformo? Multiplico la cantidad por el precio para obtener el valor total de una venta.
        - ¿Qué acumulo? No acumulo valores.
        - ¿Cómo agrupo? No agrupo en esta función


        totalVendido(ventas):

        - ¿Qué recorro? El arreglo ventas, utilizando un ciclo for...of.
        - ¿Qué filtro? No filtro ningún registro.
        - ¿Qué transformo? Calculo el valor monetario de cada venta mediante valorVenta().
        - ¿Qué acumulo? El valor monetario de todas las ventas.
        - ¿Cómo agrupo? No agrupo registros; obtengo un único total.


        totalVendidoM(ventas):

        - ¿Qué recorro? El arreglo ventas mediante el método reduce().
        - ¿Qué filtro? No filtro registros.
        - ¿Qué transformo? Calculo el valor de cada venta con valorVenta().
        - ¿Qué acumulo? El dinero generado por todas las ventas mediante un acumulador.
        - ¿Cómo agrupo? No agrupo; obtengo un único resultado.


        unidadesVendidas(ventas):

        - ¿Qué recorro? El arreglo ventas mediante for...of.
        - ¿Qué filtro? No filtro registros.
        - ¿Qué transformo? No transformo los registros; accedo a su propiedad cantidad.
        - ¿Qué acumulo? Las unidades vendidas de todos los registros.
        - ¿Cómo agrupo? No agrupo; obtengo el total de unidades.


        unidadesVendidasM(ventas):

        - ¿Qué recorro? El arreglo ventas mediante reduce().
        - ¿Qué filtro? No filtro registros.
        - ¿Qué transformo? No transformo los registros; obtengo la propiedad cantidad.
        - ¿Qué acumulo? Las cantidades de todas las ventas.
        - ¿Cómo agrupo? No agrupo; obtengo un único total.


        ventaMayor(ventas):

        - ¿Qué recorro? El arreglo ventas mediante for...of.
        - ¿Qué filtro? No filtro registros.
        - ¿Qué transformo? Calculo el valor monetario de cada venta utilizando valorVenta().
        - ¿Qué acumulo? No sumo valores; conservo el registro que tenga el valor más alto.
        - ¿Cómo agrupo? No agrupo registros.

        ticketPromedioVentas(ventas):

        Según la implementación que construimos, divides el dinero total entre las unidades vendidas.
        - ¿Qué recorro? El arreglo ventas mediante for...of.
        - ¿Qué filtro? Compruebo que la cantidad y el valor de la venta sean diferentes de cero.
        - ¿Qué transformo? Calculo el valor monetario de cada venta mediante valorVenta().
        - ¿Qué acumulo? El dinero total y las unidades vendidas.
        - ¿Cómo agrupo? No agrupo registros; utilizo los acumulados para calcular el promedio.

        ventasPorCiudad(ventas):
        
        - ¿Qué recorro? El arreglo ventas mediante for...of.
        - ¿Qué filtro? No filtro registros.
        - ¿Qué transformo? Normalizo los nombres de las ciudades utilizando trim() y toLowerCase().
        - ¿Qué acumulo? El valor monetario de las ventas de cada ciudad.
        - ¿Cómo agrupo? Utilizo la ciudad normalizada como clave del objeto acumulador.

        ventasPorCiudadM(ventas):

        - ¿Qué recorro? El arreglo ventas mediante reduce().
        - ¿Qué filtro? No filtro registros.
        - ¿Qué transformo? Normalizo los nombres de las ciudades con trim() y toLowerCase().
        - ¿Qué acumulo? El valor monetario de las ventas de cada ciudad.
        - ¿Cómo agrupo? Utilizo un objeto acumulador cuyas propiedades representan las ciudades.

        totalPorCiudad(ventas):

        Si la implementaste con la misma lógica de ventasPorCiudad():
        - ¿Qué recorro? El arreglo ventas.
        - ¿Qué filtro? No filtro registros.
        - ¿Qué transformo? Normalizo los nombres de las ciudades para evitar diferencias por espacios o mayúsculas.
        - ¿Qué acumulo? El dinero generado por las ventas de cada ciudad.
        - ¿Cómo agrupo? Por ciudad, utilizando un objeto como acumulador.

        unidadesPorProducto(ventas):
        
        - ¿Qué recorro? El arreglo ventas mediante for...of.
        - ¿Qué filtro? No filtro registros.
        - ¿Qué transformo? No transformo los registros; accedo a la propiedad producto.
        - ¿Qué acumulo? Las cantidades vendidas de cada producto.
        - ¿Cómo agrupo? Utilizo el nombre del producto como clave del objeto acumulador.

        topProductosPorValor(ventas, k):

        - ¿Qué recorro? El arreglo ventas mediante for...of para procesar cada registro.
        - ¿Qué filtro? Selecciono los primeros k productos después de ordenarlos, utilizando slice().
        - ¿Qué transformo? Convierto el objeto acumulador en un arreglo mediante Object.entries() y ordeno sus elementos con sort().
        - ¿Qué acumulo? El dinero generado por cada producto.
        - ¿Cómo agrupo? Agrupo las ventas por nombre de producto y sumo el valor monetario de cada uno.