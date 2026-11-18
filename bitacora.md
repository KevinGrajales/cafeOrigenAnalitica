

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





