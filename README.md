# CTO Developer (248581)
Este API no compila, no se ha podido comprobar el funcionamiento.

Esta API esta creada con NODE js, con las dependencias del packege.json

Apuntando a una BD Mongo.

Podemos encontrar un ejemplos de las estructuración de los datos en ***travel.json***

Crear un bd en mongo Atlas

Subir el archivo Travel.json a BD creada en Atlas 

modificar url de la conexion mongo.js para apuntar alla BD y con la password

### USO

Utilizo [mongoose-paginate](https://www.npmjs.com/package/mongoose-paginate-v2) para la realización de la paginacion de los resultados de busqueda como el filtrado y paginación.

Lista todos los viajes y sus atributos.

    api/travel

Filtrar resultados según del medio transporte
    
    api/travel/?transport={""}

Filtrar según fecha salida

    api/travel/?departure={""}

Filtrar según fecha llegada

    api/travel/?arrival={""}

Filtrar según ciudad destino

    api/travel/?CityDeparture={""}

Filtrar según ciudad de llegada

    api/travel/?CityArrival={""}

