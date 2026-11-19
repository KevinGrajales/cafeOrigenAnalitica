

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

        FinAlgoritmo