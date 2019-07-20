
mongo
Ejecutable de la shell

mongod
Ejecutable del motor de mongodb

mongo --nodb
Para validar la instalacion de mongodb

mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/test?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username m001-student --password m001-mongodb-basics
Conexion a mongodb cluster atlas 

En un cluster, solo se puede escribir en un servidor primario
En un cluster, solo existe un servidor primario

use video
Para cambiar de bd

show collections
Para ver las colecciones de una bd


Operaciones CRUD
-----------------

