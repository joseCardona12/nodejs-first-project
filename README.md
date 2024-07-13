## Descripción del proyecto
- Crear una API RESTful para gestionar una lista de tareas.
- Guardar las tareas en un archivo JSON

## Preguntas de Reflexión y trabajo investigativo
1. __¿Qué es el filesystem (fs) en Node.js y para qué se utiliza?__
    Es un __módulo__ que incuye Node.js. Sirve para interactuar con el sistema de archivos de la computadora.
    - Leer y escribir archivos
    - Crear y eliminar directorios


1. __¿Qué es un middleware en Express y cuál es su propósito?__
     Es una función intermediario enfocado en verificar la entrada y salida de las solicitudes.
    - Procesar las solicitudes 
    - Gestionar autenticaciones
    - Manejar errores
    - Redirigir 

1. __¿Qué es un endpoint en una API RESTful y cuál es su función?__
    Son rutas específicas que contienten recursos. 
    Su función es permitir al cliente interactuar con ella por medio de los verbos HTTP y realizar 
    las respectivas peticiones del __CRUD__ 

1. __¿Qué son los verbos HTTP y cuáles son los más comunes?__
    Son métodos utilizados para indicar una acción hacia el recurso de la Api RESTful.
    - GET
    - POST
    - PUT
    - PATCH
    - DELETE

1. __¿Qué es JSON y por qué es utilizado en las API RESTful?__
    JSON es un formato de intercambio de datos. Es utilizado para enlazar las dos entidades cliente - servidor y poder obtener una comunicación por medio de la transferencia de datos estructurados.
   
1. __En lo que respecta al envio de datos a lo largo de los verbos http responde:__
    1. __¿Qué es el body de una petición?__
        Es la parte que contiene los datos enviados al servidor.
    1. __¿Qué es el body de una respuesta?__
        Es la parte que contiene los datos devueltos del servidor.
    1. __¿Qué es el query de una petición?__
        Al anexar datos extras como formato clave - respuesta, se le considera query. Todo lo que esté después del signo de pregunta. Son parámetros extras a la petición.

    1. __¿Qué es el params de una petición?__
        Son los datos adicionales de la query. Ejemplo http://localhost:3000/tasks?id="1". Es id corresponde a un parámetro de la query.

1. __En lo que respecta al verbo POST responde:__
    1. __¿Qué es un verbo POST y cuál es su propósito?__
        Es un método para generar una petición a un recurso. Su propósito es enviar / agregar nuevos datos a ese recurso.
    1. __¿Cuándo se utiliza un verbo POST?__
        Se utiliza al necesitar enviar / agregar un nuevo dato al recurso.

    1. __¿En qué se diferencia un verbo POST de los otros verbos HTTP como GET, PUT y DELETE?__
        POST: Enviar recursos
        GET: Solicitar recursos. No se especifica el cuerpo
        PUT: Actualizar recursos. Se especifica el cuerpo
        DELETE:  Eliminar recursos. No se especifica el cuerpo
     
     El metodo post es el encargado de enviar un nuevo recurso a la API. Agregar, A diferencia de los otros que se encargan en traer los recursos, actualizar los recursos y eliminarlos.

    1. __¿Como se envian datos en un verbo POST?__
    El método post utiliza el body para enviar la solicitud, el cual contiene todos los datos del recurso a agregar. Como las propiedades y sus valores.
    __Ejemplo:__
    El usuario tiene la opción de agregar un comment. El llena los campos y cuando presiona el botón __agregar__
    ese contenido es obtenido, verificado y enviado por medio del cuerpo de la petición al servidor, el servidor lo 
    recibe, agrega ese nuevo contenido al recurso y envía una respueta al cliente. 

1. __En lo que respecta al verbo GET responde:__
    1. __¿Qué es un verbo GET y cuál es su propósito?__
    El verbo GET se encarga de solicitar al servidor los recursos y obtenerlos
    Su propósito es recuperar, trear recursos para posteriormente utilizarlos en la app. 

    1. __¿Cuándo se utiliza un verbo GET?__
    Se utiliza cuando necesitamos recuperar los recursos: URL de imágenes, archivos, páginas web, etc. 
    Al obtener estos recursos podemos procesarlos para posteriormente mostrar ifnormación al cliente.
    __Ejemplo:__
    Un usuario agrega un nuevo elemento, para mostrar ese elemento se realiza una petición GET, con el fin de recupear
    el recurso y mostrar al usuario 

    1. __¿En qué se diferencia un verbo GET de los otros verbos HTTP como POST, PUT y DELETE?__
    El verbo GET se diferencia con POST y PUT, debido a que no se le especifica el cuerpo. Se realiza la solicitud pra
    procesarla. Sin embargo, el verbo DELETE tiene esta misma característica con el verbo mencionado. No obstante, 
    este se encargará de eliminar recursos del servidor.

1. __En lo que respecta al verbo PUT responde:__
    1. __¿Qué es un verbo PUT y cuál es su propósito?__
    El verbo PUT es un método utilizado para actualizar recursos. Los datos se envían por medio del cuerpo de la solicitud, el servidor la procesa y actualiza esos recursos. 
    1. __¿Cuándo se utiliza un verbo PUT?__
    Este verbo se utiliza para actualizar completamente recursos o recurso en el servidor. Es necesario especificar el id del recurso existente para solo un recurso y no los demás.

    1. __¿En qué se diferencia un verbo PUT de los otros verbos HTTP como POST, GET y DELETE?__
    Este método actualiza recursos. En la solicitud se envía el cuerpo del recurso a actualizar.
    Normalmente este verbo y/o método comparte la característica de ocupar el id con el verbo Delete para evitar cambios generales a los recursos en el servidor.

1. __En lo que respecta al verbo DELETE responde:__
    1. __¿Qué es un verbo DELETE y cuál es su propósito?__
    Es un método enfocado en eliminar recursos en el servidor. Es necesario que se anexe el id para evitar cambios generales.
    El propósito es eliminar.

    1. __¿Cuándo se utiliza un verbo DELETE?__
    Se utiliza cuando para eliminar un recurso en especifico en el servidor. La solicitud no tiene cuerpo
    1. __¿En qué se diferencia un verbo DELETE de los otros verbos HTTP como POST, GET y PUT?__
    DELETE:  Eliminar recursos. No se especifica el cuerpo
    POST: Enviar recursos
    GET: Solicitar recursos. No se especifica el cuerpo
    PUT: Actualizar recursos. Se especifica el cuerpo

1. __¿Qué es un status code y cuáles son los más comunes?__
Es un estado que se devuelve en respueta a una solicitud. El estado se conforma de tres digitos
    1. __200 OK:__ Indica que la solicitud ha tenido éxito y que el servidor ha devuelto los datos correctamente
    2. __201 CREATED:__ Anuncia que un recurso se ha creado correctamente como resultado de una solicitud
    3. __400 BAD REQUEST:__ Indica que la solicitud del cliente no puede ser entendida por el servidor, debido a un error de sintaxis
    4. __401 Unauthorized:__ Status enfocado en determinar que se requiere para acceder al recursos autenticación
    5. __403 Forbidden:__ El servidor entiende la solicitud del cliente. Sin embargo, se niega a autorizarla
    6. __404 NOT FOUND:__ El servidor no pudo encontrar el recurso solicitado.
    7. __500 INTERNAL SERVER ERROR:__ Error interno del servidor. 

1. __¿Cuales son los status code mas comunes para el verbo POST?__
    1. __200 OK__
    2. __201 CREATED__
    3. __400 BAD REQUEST__
    4. __401 Unauthorized__
    5. __403 FORBIDDEN__
    6. __404 NOT FOUND__

1. __¿Cuales son los status code mas comunes para el verbo GET?__ 
    1. __200 OK__
    2. __400 BAD REQUEST__
    3. __401 Unauthorized__
    4. __403 FORBIDDEN__
    5. __404 NOT FOUND__

1. __¿Cuales son los status code mas comunes para el verbo PUT?__
    1. __200 OK__
    2. __204 NO CONTENT__: Cuando la solicitud se ha procesado correctamente, pero no hay contenido adicional para devolver en la respuesta.
    3. __400 BAD REQUEST__
    4. __401 Unauthorized__
    5. __403 FORBIDDEN__
    6. __404 NOT FOUND__

1. __¿Cuales son los status code mas comunes para el verbo DELETE?__
    1. __200 OK__
    2. __204 NO CONTENT__: Cuando la solicitud se ha procesado correctamente, pero no hay contenido adicional para devolver en la respuesta.
    3. __400 BAD REQUEST__
    4. __401 Unauthorized__
    5. __403 FORBIDDEN__
    6. __404 NOT FOUND__