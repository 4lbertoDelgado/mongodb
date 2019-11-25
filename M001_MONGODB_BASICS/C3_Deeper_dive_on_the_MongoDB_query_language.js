
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
// $exists para validar si un campo existe o no existe
db.data .find({atmosphericPressureChange: {$exists: false}}).count()

/* Operadores Logicos */

// $and Une cláusulas de consulta con un AND lógico y devuelve todos los documentos que coinciden con las condiciones de ambas cláusulas
// $or Une las cláusulas de consulta con un OR lógico y devuelve todos los documentos que coinciden con las condiciones de cualquiera de las cláusulas.
// $nor Unir las cláusulas de consulta con un NOR lógico devuelve todos los documentos que no coinciden con ambas cláusulas.
// $not Invierte el efecto de una expresión de consulta y devuelve documentos que no coinciden con la expresión de consulta.
db.shipwrecks .find({$or: [{watlev: {$eq: "always dry"}}, {depth: {$eq: 0}}]}).count()

/* Operadores con Array */

// $all Coincide con matrices que contienen todos los elementos especificados en la consulta.
db.data.find({sections: {$all : ["AG1", "MD1", "OA1"]}}).count()

// $elemMatch coincide con documentos que contienen un campo de matriz con al menos un elemento que coincide con todos los criterios de consulta especificados.
//Cuántos documentos en la colección results.surveys contienen una puntuación de 7 para el producto abc
db.surveys.find({results: {$elemMatch: {product: "abc", score: {$eq: 7}}}}).count()

// $size Selecciona documentos si el campo de matriz tiene un tamaño especificado.
db.data.find({sections: {$size : 2}}).count()

// $regex Selecciona documentos donde los valores coinciden con una expresión regular especificada.
// Filtra todos los documentos que en el campo text empicen con la palabra Won sin importar el numero de caracteres siguientes
db.movieDetails.find({"awards.text": {$regex: /^Won .*/}}).pretty()

// documentos contienen al menos una puntuación en la matriz de resultados que es mayor o igual que 70 y menor que 80
db.scores.find({results: {$elemMatch: {$gte: 70, $lt: 80}}}).count()
