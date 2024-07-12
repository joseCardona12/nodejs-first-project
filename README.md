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
¿Qué es un verbo POST y cuál es su propósito?
¿Cuándo se utiliza un verbo POST?
¿En qué se diferencia un verbo POST de los otros verbos HTTP como GET, PUT y DELETE?
¿Como se envian datos en un verbo POST?
En lo que respecta al verbo GET responde:
¿Qué es un verbo GET y cuál es su propósito?
¿Cuándo se utiliza un verbo GET?
¿En qué se diferencia un verbo GET de los otros verbos HTTP como POST, PUT y DELETE?
En lo que respecta al verbo PUT responde:
¿Qué es un verbo PUT y cuál es su propósito?
¿Cuándo se utiliza un verbo PUT?
¿En qué se diferencia un verbo PUT de los otros verbos HTTP como POST, GET y DELETE?
En lo que respecta al verbo DELETE responde:
¿Qué es un verbo DELETE y cuál es su propósito?
¿Cuándo se utiliza un verbo DELETE?
¿En qué se diferencia un verbo DELETE de los otros verbos HTTP como POST, GET y PUT?
¿Qué es un status code y cuáles son los más comunes?
¿Cuales son los status code mas comunes para el verbo POST?
¿Cuales son los status code mas comunes para el verbo GET?
¿Cuales son los status code mas comunes para el verbo PUT?
¿Cuales son los status code mas comunes para el verbo DELETE?