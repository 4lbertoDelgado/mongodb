
/* Operadores de Consultas */
/* 
https://docs.mongodb.com/manual/reference/operator/query/
Los operadores de consulta pueden usarse en los filtro de las 4 operaciones basicas CRUD

Operadores de consulta de comparacion
--------------------------------------

Estos operadores nos permiten coincidir en funcion de un valor de campo relativo o algun otro valor
*/
// $gt filtra valores que son mayores que el valor especificado
// $lt filtra valores que son menores que el valor especificado
// $gte filtra valores que son mayores iguales que el valor especificado
// $lte filtra valores que son menores iguales que el valor especificado
db.movieDetails.find({runtime: {$gt: 90, $lt: 120}}, {title: 1, runtime: 1})
db.movieDetails.find({runtime: {$gte: 90, $lte: 120}}, {title: 1, runtime: 1})

// Peliculas de larga duracion y con una calificacion alta
db.movieDetails.find({runtime: {$gte: 180}, "tomato.meter": {$gte: 95}}, {_id: 0, title: 1, runtime: 1})

// $eq filtra valores que son iguales al valor especificado
// $ne filtra valores que no son iguales al valor especificado, tener en cuenta que tambien devuelve documentos que no tienen el campo que se especifica en el filtro
// En muchas aplicaciones, particularmente cuando estamos haciendo una limpieza de datos, podriamos estar interesados en particionar nuestros datos porque sabemos que tenemos algunos campos que no son como se esperaban
// Peliculas que tienen solo una calificacion
db.movieDetails.find({rated: {$ne: "UNRATED"}}, {_id: 0, title: 1, rated: 1})

// $in filtra valores que son iguales a cualquiera de los valores especificados en la matriz 
// Peliculas donde el campo rated es G o PG, es decir devolvera los documetos que contengan cualquiera de los 2
db.movieDetails.find({rated: {$in: ["G", "PG"]}}, {_id: 0, title: 1, rated: 1})

db.movieDetails.find({writers: {$in: ["Ethan Coen", "Joel Coen"]}}, {_id: 0, title: 1, rated: 1}).count()

// $nin filtra valores que NO son iguales a cualquiera de los valores especificados en la matriz 

/* Operadores de Elementos */
/* 
    Operadores que nos permiten detectar la presencia o ausencia de un campo
    
*/