# Rendimiento del motor de analítica — v0.2

## Objetivo

Este documento describe el rendimiento de las funciones del motor de analítica de Cafe Origen Analítica. Se analiza la complejidad temporal y espacial de cada función y se registran las mediciones realizadas con un conjunto de 10.000 ventas.

Las complejidades se expresan usando Big O. La complejidad temporal representa cómo crece el trabajo de una función al aumentar la cantidad de ventas. La complejidad espacial representa la memoria adicional que necesita durante su ejecución.

## Tabla de rendimiento

| Función                 | Qué hace | Complejidad temporal | Complejidad espacial | Justificación |
|---                      |---       |---                   |---                   |---            |

| `totalVendido`          | Suma el valor de todas las ventas. | O(n) | O(1)* | Recorre las ventas y acumula el total. |

| `unidadesVendidas`      | Suma las unidades vendidas. | O(n) | O(1)* | Recorre las ventas y acumula las unidades. |

| `ventaMayor`            | Encuentra la venta de mayor valor. | O(n) | O(1)* | Recorre las ventas y conserva la mayor encontrada. |

| `ticketPromedioVentas`  | Calcula el promedio de las ventas. | O(n) | O(1)* | Acumula el total y cuenta los registros. |
 
| `VentasCiudad`          | Agrupa el valor vendido por ciudad. | O(n)** | O(c) | Recorre las ventas y guarda un acumulado por ciudad. |

| `unidadesPorProducto`   | Agrupa las unidades vendidas por producto. | O(n)** | O(p) | Recorre las ventas y guarda un acumulado por producto. |
 
| `topProductosPorValor`  | Obtiene los productos con mayor valor vendido. | Por confirmar | Por confirmar | Depende del cálculo de acumulados y de cómo se ordenen los productos. |

| `ventasDelDia`          | Filtra las ventas de una fecha. | O(n) | O(k) | Revisa todas las ventas y guarda las que coinciden con la fecha. |

| `clientesRecurrentes`   | Identifica clientes que aparecen más de una vez. | Por confirmar | Por confirmar | Depende de cómo se cuenten las apariciones de cada cliente.          |

| `totalCiudadCadena`     | Calcula el total de una ciudad usando métodos de arreglo encadenados. | O(n) | O(n) | Usa `map`, `filter`, `map` y `reduce`; crea arreglos intermedios.|

| `totalCiudadUnaPasada`  | Calcula el total de una ciudad con un solo ciclo. | O(n) | O(1) | Recorre las ventas una vez y acumula el total sin crear arreglos intermedios.     |

Nota:`n` representa la cantidad total de ventas; `c` representa la cantidad de ciudades distintas; `p` representa la cantidad de productos distintos; y `k` representa la cantidad de ventas que coinciden con el filtro. Las complejidades espaciales deben confirmarse revisando el código de cada función, especialmente si se crean arreglos, objetos o estructuras auxiliares.

## Medición con 10.000 ventas

Las pruebas se realizan con un lote de 10.000 ventas generado mediante `generarVentas(10000)`.

Para comparar las dos versiones de `totalCiudad`, se utiliza la misma lista de ventas y la misma ciudad. Ambas funciones deben producir el mismo resultado.

---------------------------------------------------------------------------
  Función                  Resultado real                       Tiempo medido
  ------------------------ --------------------- ----------------------------
   TotalVendido            1951758000                              0.419 ms

  `unidadesVendidas`        30320                                  0.443 ms

  `ventaMayor`             Venta ID `23`,                          0.857 ms
                           producto              
                           `Molino manual`,      
                           cantidad `5`, precio  
                           `$120.000`            

  `ticketPromedioVentas`   `65320.11115889767`                     `0.662 ms`

  `VentasCiudad`           Cali: `489907000`;                      `1.343 ms`
                           Pereira: `489290000`; 
                           Bogotá: `495041000`;  
                           Medellín: `497488000` 

  `unidadesPorProducto`    Huila 500 g: `6231`;                    `0.967 ms`
                           Molino manual:        
                           `6075`; Nariño 250 g: 
                           `6028`; Sierra 500 g: 
                           `5709`; Prensa        
                           francesa: `6036`      

  `topProductosPorValor`   Molino manual:                          `0.772 ms`
                           `$692.040.000`;       
                           Prensa francesa:      
                           `$575.700.000`;       
                           Sierra 500 g:         
                           `$272.835.000`; Huila 
                           500 g:                
                           `$247.884.000`;       
                           Nariño 250 g:         
                           `$158.938.000`        

  `ventasDelDia`           `759` unidades; valor                   `0.652 ms`
                           total: `$51.938.000`  

  `clientesRecurrentes`    `2668` clientes                       `376.559 ms`
                           recurrentes           

  `totalCiudadCadena`      `468317000`                             `1.338 ms`

  `totalCiudadUnaPasada`   `486928000`                             `1.066 ms`
  ---------------------------------------------------------------------------


Los tiempos pueden variar entre ejecuciones debido al equipo, el entorno de ejecución y la generación aleatoria de los datos. Por eso se registra el resultado observado y se utiliza el mismo lote para comparar ambas funciones.

## Proyección

Se estima el comportamiento con 1.000.000 de ventas a partir de las mediciones obtenidas con 10.000 ventas.

Para funciones con complejidad temporal O(n), el tamaño del conjunto de datos aumenta 100 veces. Como aproximación inicial, se puede estimar:

**Tiempo proyectado = tiempo medido con 10.000 ventas × 100**

Esta proyección es una estimación teórica y no reemplaza una medición real. Puede diferir por factores del entorno de ejecución y por la cantidad de memoria disponible.

| Reporte o función | Complejidad temporal estimada | Tiempo medido con 10.000 ventas | Proyección para 1.000.000 de ventas |
|---|---|---:|---:|
| `totalVendido` | O(n) | 0.419 ms | 41.9 ms |
| `unidadesVendidas` | O(n) | 0.443 ms | 44.3 ms |
| `ventaMayor` | O(n) | 0.857 ms | 85.7 ms |
| `ticketPromedioVentas` | O(n) | 0.662 ms | 66.2 ms |
| `VentasCiudad` | O(n), si acumula por ciudad en una pasada | 1.343 ms | 134.3 ms |
| `unidadesPorProducto` | O(n), si acumula por producto en una pasada | 0.967 ms | 96.7 ms |
| `topProductosPorValor` | O(n + p log p), si agrupa ventas y ordena p productos | 0.772 ms | Aproximadamente 77.2 ms si p permanece pequeño y estable |
| `ventasDelDia` | O(n) | 0.652 ms | 65.2 ms |
| `clientesRecurrentes` | O(n²) como estimación de crecimiento para la implementación actual con ciclos anidados | 376.559 ms | Aproximadamente 3,765,590 ms (62.76 minutos), si escala cuadráticamente |
| `totalCiudadCadena` | O(n), suponiendo que las etapas recorren el arreglo un número constante de veces | 1.338 ms | 133.8 ms |
| `totalCiudadUnaPasada` | O(n) | 1.066 ms | 106.6 ms |

Cuando una función incluya una etapa de ordenamiento, como podría ocurrir en `topProductosPorValor`, la proyección debe considerar también esa etapa y no aplicar automáticamente el factor 100.

## Riesgos

Orden preliminar de mayor a menor riesgo al crecer el volumen de datos:

1. `topProductosPorValor`: puede requerir acumular información por producto y ordenar los resultados. El riesgo depende de la cantidad de productos distintos y de cómo se realice el ordenamiento.
2. `clientesRecurrentes`: puede volverse costosa si busca repetidamente cada cliente dentro de la lista completa. Se debe confirmar si la implementación realiza búsquedas anidadas o usa una estructura de conteo.
3. `totalCiudadCadena`: realiza varios recorridos y crea arreglos intermedios. Aunque su complejidad temporal es O(n), puede consumir más memoria y realizar más trabajo que una implementación de una pasada.
4. `VentasCiudad` y `unidadesPorProducto`: recorren las ventas y mantienen acumulados. Su memoria aumenta con la cantidad de ciudades o productos distintos.
5. `ventasDelDia`: recorre todas las ventas para encontrar las que coinciden con la fecha y crea un arreglo con los resultados.
6. `totalVendido`, `unidadesVendidas`, `ventaMayor` y `ticketPromedioVentas`**: realizan recorridos lineales y, si solo conservan acumuladores, necesitan memoria adicional constante.
7. `totalCiudadUnaPasada`: realiza un único recorrido y mantiene un acumulador, por lo que tiene menor uso de memoria adicional que `totalCiudadCadena`.

El criterio del orden es el trabajo que puede crecer con los datos, la cantidad de recorridos, la creación de estructuras intermedias y la necesidad de ordenar o buscar repetidamente. Este orden es preliminar y debe ajustarse si la revisión del código o las mediciones muestran otro comportamiento.

## Plan de optimización

La función prioritaria para revisar es `clientesRecurrentes`, una vez confirmada su complejidad real en el código.

Trabajo que podría repetirse: si la función busca cada cliente en el arreglo completo para contar cuántas veces aparece, estaría recorriendo repetidamente las mismas ventas. Esto puede aumentar considerablemente el trabajo cuando crece la cantidad de registros.

Información que se podría guardar: se podría mantener una estructura de conteo, por ejemplo un objeto o un `Map`, donde la clave sea el identificador del cliente y el valor sea la cantidad de apariciones. Así, cada venta actualizaría el contador correspondiente y no sería necesario volver a buscar al cliente en todo el arreglo.

Alcance de esta versión: esta mejora se plantea como propuesta. No se implementa en la versión v0.2; primero se revisará el código actual, se confirmará su complejidad y se compararán las mediciones.

## Revisión por un compañero

Se solicitará a un compañero que revise este informe, especialmente:

- La complejidad temporal y espacial asignada a cada función.
- La metodología utilizada para medir con 10.000 ventas.
- La validez de las proyecciones para 1.000.000 de ventas.
- El orden de los riesgos y la propuesta de optimización.

**Compañero revisor:** Emanuel Lopez

**Observación recibida:** El documento esta muy bien redactado y me gusta la explicacion de como se hace la proyeccion de el tiempo con un millon de ventas, me parece que es un contenido interesante y necesario para entender el contenido.




