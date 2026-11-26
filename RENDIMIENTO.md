# Rendimiento del motor de analítica — v0.2

## Objetivo

Este documento describe el rendimiento de las funciones del motor de analítica de Cafe Origen Analítica. Se analiza la complejidad temporal y espacial de cada función y se registran las mediciones realizadas con un conjunto de 10.000 ventas.

Las complejidades se expresan usando Big O. La complejidad temporal representa cómo crece el trabajo de una función al aumentar la cantidad de ventas. La complejidad espacial representa la memoria adicional que necesita durante su ejecución.

## Tabla de rendimiento

| Función | Qué hace | Complejidad temporal | Complejidad espacial | Justificación |
|---|---|---|---|---|
| `totalVendido` | Suma el valor de todas las ventas. | O(n) | O(1)* | Recorre las ventas y acumula el total. |
| `unidadesVendidas` | Suma las unidades vendidas. | O(n) | O(1)* | Recorre las ventas y acumula las unidades. |
| `ventaMayor` | Encuentra la venta de mayor valor. | O(n) | O(1)* | Recorre las ventas y conserva la mayor encontrada. |
| `ticketPromedioVentas` | Calcula el promedio de las ventas. | O(n) | O(1)* | Acumula el total y cuenta los registros. |
| `VentasCiudad` | Agrupa el valor vendido por ciudad. | O(n)** | O(c) | Recorre las ventas y guarda un acumulado por ciudad. |
| `unidadesPorProducto` | Agrupa las unidades vendidas por producto. | O(n)** | O(p) | Recorre las ventas y guarda un acumulado por producto. |
| `topProductosPorValor` | Obtiene los productos con mayor valor vendido. | Por confirmar | Por confirmar | Depende del cálculo de acumulados y de cómo se ordenen los productos. |
| `ventasDelDia` | Filtra las ventas de una fecha. | O(n) | O(k) | Revisa todas las ventas y guarda las que coinciden con la fecha. |
| `clientesRecurrentes` | Identifica clientes que aparecen más de una vez. | Por confirmar | Por confirmar | Depende de cómo se cuenten las apariciones de cada cliente. |
| `totalCiudadCadena` | Calcula el total de una ciudad usando métodos de arreglo encadenados. | O(n) | O(n) | Usa `map`, `filter`, `map` y `reduce`; crea arreglos intermedios. |
| `totalCiudadUnaPasada` | Calcula el total de una ciudad con un solo ciclo. | O(n) | O(1) | Recorre las ventas una vez y acumula el total sin crear arreglos intermedios. |
**Nota:** `n` representa la cantidad total de ventas; `c` representa la cantidad de ciudades distintas; `p` representa la cantidad de productos distintos; y `k` representa la cantidad de ventas que coinciden con el filtro. Las complejidades espaciales deben confirmarse revisando el código de cada función, especialmente si se crean arreglos, objetos o estructuras auxiliares.

## Medición con 10.000 ventas

Las pruebas se realizan con un lote de 10.000 ventas generado mediante `generarVentas(10000)`.

Para comparar las dos versiones de `totalCiudad`, se utiliza la misma lista de ventas y la misma ciudad. Ambas funciones deben producir el mismo resultado.

| Función o prueba | Resultado con 10.000 ventas | Tiempo medido |
|---|---:|---:|
| `totalVendido` | [resultado real] | [tiempo y unidad] |
| `unidadesVendidas` | [resultado real] | [tiempo y unidad] |
| `ventaMayor` | [resultado real] | [tiempo y unidad] |
| `ticketPromedioVentas` | [resultado real] | [tiempo y unidad] |
| `VentasCiudad` | [resultado real] | [tiempo y unidad] |
| `unidadesPorProducto` | [resultado real] | [tiempo y unidad] |
| `topProductosPorValor` | [resultado real] | [tiempo y unidad] |
| `ventasDelDia` | [resultado real] | [tiempo y unidad] |
| `clientesRecurrentes` | [resultado real] | [tiempo y unidad] |
| `totalCiudadCadena` | 476204000* | [tiempo y unidad] |
| `totalCiudadUnaPasada` | [resultado real] | [tiempo y unidad] |
| ¿Coinciden las dos versiones de `totalCiudad`? | [true/false] | — |

Los tiempos pueden variar entre ejecuciones debido al equipo, el entorno de ejecución y la generación aleatoria de los datos. Por eso se registra el resultado observado y se utiliza el mismo lote para comparar ambas funciones.

## Proyección

Se estima el comportamiento con 1.000.000 de ventas a partir de las mediciones obtenidas con 10.000 ventas.

Para funciones con complejidad temporal O(n), el tamaño del conjunto de datos aumenta 100 veces. Como aproximación inicial, se puede estimar:

**Tiempo proyectado = tiempo medido con 10.000 ventas × 100**

Esta proyección es una estimación teórica y no reemplaza una medición real. Puede diferir por factores del entorno de ejecución y por la cantidad de memoria disponible.

| Reporte o función | Complejidad temporal | Tiempo medido con 10.000 ventas | Proyección para 1.000.000 de ventas |
|---|---|---|---|
| `totalVendido` | O(n) | [tiempo medido] | [tiempo medido × 100] |
| `unidadesVendidas` | O(n) | [tiempo medido] | [tiempo medido × 100] |
| `ventaMayor` | O(n) | [tiempo medido] | [tiempo medido × 100] |
| `ticketPromedioVentas` | O(n) | [tiempo medido] | [tiempo medido × 100] |
| `VentasCiudad` | O(n), si usa acumulación por ciudad | [tiempo medido] | [tiempo medido × 100] |
| `unidadesPorProducto` | O(n) | [tiempo medido] | [tiempo medido × 100] |
| `topProductosPorValor` | [complejidad confirmada] | [tiempo medido] | [estimación según complejidad] |
| `ventasDelDia` | O(n) | [tiempo medido] | [tiempo medido × 100] |
| `clientesRecurrentes` | [complejidad confirmada] | [tiempo medido] | [estimación según complejidad] |
| `totalCiudadCadena` | O(n) | [tiempo medido] | [tiempo medido × 100] |
| `totalCiudadUnaPasada` | O(n) | [tiempo medido] | [tiempo medido × 100] |

Cuando una función incluya una etapa de ordenamiento, como podría ocurrir en `topProductosPorValor`, la proyección debe considerar también esa etapa y no aplicar automáticamente el factor 100.

## Riesgos

Orden preliminar de mayor a menor riesgo al crecer el volumen de datos:

1. **`topProductosPorValor`**: puede requerir acumular información por producto y ordenar los resultados. El riesgo depende de la cantidad de productos distintos y de cómo se realice el ordenamiento.
2. **`clientesRecurrentes`**: puede volverse costosa si busca repetidamente cada cliente dentro de la lista completa. Se debe confirmar si la implementación realiza búsquedas anidadas o usa una estructura de conteo.
3. **`totalCiudadCadena`**: realiza varios recorridos y crea arreglos intermedios. Aunque su complejidad temporal es O(n), puede consumir más memoria y realizar más trabajo que una implementación de una pasada.
4. **`VentasCiudad` y `unidadesPorProducto`**: recorren las ventas y mantienen acumulados. Su memoria aumenta con la cantidad de ciudades o productos distintos.
5. **`ventasDelDia`**: recorre todas las ventas para encontrar las que coinciden con la fecha y crea un arreglo con los resultados.
6. **`totalVendido`, `unidadesVendidas`, `ventaMayor` y `ticketPromedioVentas`**: realizan recorridos lineales y, si solo conservan acumuladores, necesitan memoria adicional constante.
7. **`totalCiudadUnaPasada`**: realiza un único recorrido y mantiene un acumulador, por lo que tiene menor uso de memoria adicional que `totalCiudadCadena`.

El criterio del orden es el trabajo que puede crecer con los datos, la cantidad de recorridos, la creación de estructuras intermedias y la necesidad de ordenar o buscar repetidamente. Este orden es preliminar y debe ajustarse si la revisión del código o las mediciones muestran otro comportamiento.

## Plan de optimización

La función prioritaria para revisar es `clientesRecurrentes`, una vez confirmada su complejidad real en el código.

**Trabajo que podría repetirse:** si la función busca cada cliente en el arreglo completo para contar cuántas veces aparece, estaría recorriendo repetidamente las mismas ventas. Esto puede aumentar considerablemente el trabajo cuando crece la cantidad de registros.

**Información que se podría guardar:** se podría mantener una estructura de conteo, por ejemplo un objeto o un `Map`, donde la clave sea el identificador del cliente y el valor sea la cantidad de apariciones. Así, cada venta actualizaría el contador correspondiente y no sería necesario volver a buscar al cliente en todo el arreglo.

**Alcance de esta versión:** esta mejora se plantea como propuesta. No se implementa en la versión v0.2; primero se revisará el código actual, se confirmará su complejidad y se compararán las mediciones.

## Revisión por un compañero

Se solicitará a un compañero que revise este informe, especialmente:

- La complejidad temporal y espacial asignada a cada función.
- La metodología utilizada para medir con 10.000 ventas.
- La validez de las proyecciones para 1.000.000 de ventas.
- El orden de los riesgos y la propuesta de optimización.

**Compañero revisor:** [nombre]

**Observación recibida:** [escribir aquí la observación real del compañero]

**Respuesta y ajuste realizado en la bitácora:


## Control de versión

Versión: **v0.2**

Cambios incluidos:
- Se documenta el rendimiento del motor de analítica.
- Se incluyen las funciones del Día 1, `clientesRecurrentes` y las dos versiones de `totalCiudad`.
- Se agregan las secciones de proyección, riesgos y plan de optimización.
- Se deja pendiente completar las mediciones reales y registrar la revisión de un compañero.