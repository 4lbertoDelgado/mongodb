//Cuantos tipo de usuaio existen en citibike.trips
db.trips.distinct("usertype")

// El campo de viento tiene el tipo de valor del documento . ¿Cuál de las siguientes opciones describe mejor el esquema de este documento incrustado? en 100YWeatherSmall.data
// Rpta: Tres campos: dos con el tipo de valor "documento", uno con el tipo de valor "cadena"

// Conéctese a nuestro grupo Atlas de clase desde Compass y vea la colección 100YWeatherSmall.data .
// ¿Cuál es el tipo de valor del campo "wind.speed.rate"?
// Rpta: Double

// ¿Cuántos documentos en la colección citibike.trips tienen la duración de viaje clave establecida en nulo ? Ignore cualquier documento que no contenga la clave de duración del viaje.
// Rpta: 2
db.trips.find({$and: [{tripduration: null}, {tripduration: {$exists: true}}]}).count()

//¿Cuál de las siguientes consultas generaría documentos de salida similares a los siguientes en  video.movies? Marque todo lo que corresponda.
{"title": "PD te amo"}
{"title": "Love Actually"}
{"title": "Shakespeare in Love"}

db.movies.find ({año: 1964}, {título: 1, _id: 0})
db.movies.find ({}, {título: 1, _id: 0})

// ¿Cuántas películas cumplen con los siguientes criterios? - El elenco incluye a cualquiera de los siguientes actores: "Jack Nicholson", "John Huston". - El viewerRating es mayor que 7. - El mpaaRating es "R".
// Rpta: 8
db.movies.find({$and: [{cast: {$in: ["Jack Nicholson", "John Huston"]}}, {viewerRating: {$gt: 7}}, {mpaaRating: "R"}]}).count()

