
mongo
Ejecutable de la shell

mongod
Ejecutable del motor de mongodb

mongo --nodb
Para validar la instalacion de mongodb

mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/test?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username m001-student --password m001-mongodb-basicsgo
Conexion a mongodb cluster atlas mon university

En un cluster, solo se puede escribir en un servidor primario
En un cluster, solo existe un servidor primario

use video
Para cambiar de bd

show collections
Para ver las colecciones de una bd

db.collection.find().pretty()
Para ver todos los documentos de la coleccion movies de la bd video

mongo "mongodb+srv://cluster0-lpbtc.mongodb.net/test" --username m001-student --password m001-mongodb-basics
Conexion a mongodb cluster atlas sandbox

show dbs
Para listar las bd

quit()
Para salir de la instancia

Cargar Archivo de bd
------------------------------
Nos ubicamos en el directorio donde se encuentra nuestro archivo a Cargar

Si lanzo aqui la cadena de conexion, ese sera mi nuevo directorio de trabajo

Nos conectamos a nuestra instancia de sandbox

load('loadMovieDetailsDataset.js')
Para cargar el archivo js

Operaciones CRUD
-----------------

Filtrado de documentos (Y)
Compass
{rated: "PG-13"}
{rated: "PG-13", year: 2009}
{wind.type: "C"}
{"wind.direction.angle": 290}

Mongoshell
use video
db.movieDetails.find({"rated": "PG-13"}).pretty()
-- Se requieren comillas cuando se usa la motacion del punto
use 100YWeatherSmall
db.collection.find({"wind.direction.angle": 290}).pretty()


Insert
-----------------
use video
show collections
db.moviesScratch.insertOne({title: 'Star Trek 2: The Wrath of Khan', year: 1982, imdb: 'tt0084726'})
db.moviesScratch.insertMany(
    [
        {
  	    "_id" : "tt0084726",
  	    "title" : "Star Trek II: The Wrath of Khan",
  	    "year" : 1982,
  	    "type" : "movie"
          },
          {
  	    "_id" : "tt0796366",
  	    "title" : "Star Trek",
  	    "year" : 2009,
  	    "type" : "movie"
          },
          {
  	    "_id" : "tt0084726",
  	    "title" : "Star Trek II: The Wrath of Khan",
  	    "year" : 1982,
  	    "type" : "movie"
          },
          {
  	    "_id" : "tt1408101",
  	    "title" : "Star Trek Into Darkness",
  	    "year" : 2013,
  	    "type" : "movie"
          },
          {
  	    "_id" : "tt0117731",
  	    "title" : "Star Trek: First Contact",
  	    "year" : 1996,
  	    "type" : "movie"
        }
    ]
);

ordered: true indica que apenas encuentra un error en la insercion de los documentos, dejara de insertar
Su valor por defecto es true
ordered: false nos permite cambiar el comportamiento por defecto

db.moviesScratch.insertMany(
    [
        {
	    "_id" : "tt0084726",
	    "title" : "Star Trek II: The Wrath of Khan",
	    "year" : 1982,
	    "type" : "movie"
        },
        {
	    "_id" : "tt0796366",
	    "title" : "Star Trek",
	    "year" : 2009,
	    "type" : "movie"
        },
        {
	    "_id" : "tt0084726",
	    "title" : "Star Trek II: The Wrath of Khan",
	    "year" : 1982,
	    "type" : "movie"
        },
        {
	    "_id" : "tt1408101",
	    "title" : "Star Trek Into Darkness",
	    "year" : 2013,
	    "type" : "movie"
        },
        {
	    "_id" : "tt0117731",
	    "title" : "Star Trek: First Contact",
	    "year" : 1996,
	    "type" : "movie"
        }
    ],
    {
        "ordered": false 
    }
);
