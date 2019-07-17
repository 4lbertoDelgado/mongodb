En NoSQL una Coleccion es una tabla de SQL
En NoSQL un Documento es un registro/fila de SQL
En NoSQL una propiedad del docuemnto es una Columna SQL

Cada combinacion del [Nombre de BD].[Nombre coleccion] define un Namespace

MongoDB Compass
====================
VISTA SCHEMA:
---------------------
Proporciona una vista resumen de como se compone el modelo de datos para esta coleccion
Muestra una lista de campos (propiedades) con su tipo de datos
Y un resumen de valores para cada campo

Tipos de datos
----------------------
Cadenas = String
Fechas = date
Fechas Años = Int32
Punto Flotante = Double
Nulo
Entero
Indefinido
Array
Object

Los Datos geosespaciales si son un tipo de dato de MongoDB
Pero mongo proporciona de gran alcance para este tipo de datos
Permitiendonos una gran variedad de formas
Calcular la distancia entre los puntos
Filtro para documentos que esten dentro de un determinado radio de otro punto, y realizar una serie de otras operaciones

Esta funcionabilidad soporta aplicaciones que requieran la habilidad de calcular distancias entre lugares, o para identificar todas las ubicaciones dentro de una distancia especificada desde un punto de partida

Filtros
----------------------
Filtro de Igualdad
{'end station name': 'E 17 St & Broadway'}

Filtro de Rango
{'birth year': {$gte: 1960,$lt: 1965}}
birth year >= 1960 y < 1965
$gte operadosr de MongoDB >=
$lt operadosr de MongoDB <

Filtro geosespaciales
{coordinates: {$geoWithin: { $centerSphere: [ [ -65.85148807659301, 18.399219116474796 ], 0.05006203304147395 ]}}}
$geoWithin es un operador para filtros de coordenadas. Filtra todos los docuemnta¿os que caen dentro de una geometria
$centerSphere En este caso la geometria es una esfera, para la cual especificamos su punto central y su radio
Los datos estan dados en radianes
Es sencillo convertir Millas/Kilometros a Radianes

https://docs.mongodb.com/manual/reference/operator/query-geospatial/

Objeto JSON
----------------------
Puede admitir los siguientes tipos de datos
String
Array
Object
Boolean values (true and false)
Floating point number
Null
Decimal number









