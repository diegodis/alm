Requisitos
tener instalado node js 8.10.0
tener instalado mongo 4.0.6

Manual de la aplicación

Para la base de datos

1- Se debe iniciar el servicio de la base de datos de mongodb (para ubuntu se usa sudo para tener permisos de administrador)
   sudo service mongod start

2- importando el json file
   Para el archivo suministrado en el requerimiento (data.json) es importrado directamente en el mongo con el siguiente comando:
   mongoimport --jsonArray --db hotelesal --collection hoteles --file "directorio del file json"/data.json

   donde "directorio del file json" se debe cambiar por la ubicación del json file

Para el middleware
ubicado en el directorio de backend se debe ejecutar los comandos:

1- npm install
2. node app.js

Para el front end
ubicado en la carpeta frontend/almundo-app ejecutamos los comandos:

1- npm install
2. ng serve
