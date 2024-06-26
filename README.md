# tarea
 
 COMO INSTALAR
Para instalar el programa se necesita instalar las dependencias con 
npm init -y
Despues se debe instalar el swagger con
npm install express swagger-jsdoc swagger-ui-express

 COMO CORRE EL PROGRAMA
Se inicializa en el localhost:3000 con el puerto 3000 y se puede visualizar el index.html

 COMO FUNCIONA
Se trata de una REST API la cual nos permite crear un item con "Create Item" con el nombre del item y el precio y pulsar en el boton Create para poder crear

Despues en el apartado de "Get Item" Se ingresa el item y en Get, se muestra en formato json

Despues en el apartado "Update Item" Permite actualizar el item y el precio, pulsando en el boton Update se actualiza

Despues en el "Delete Item" se ingresa el item y En Delete, elimina el item

Despues en All Items se presiona Get All Items para mostrar todos los items


Este archivo app.js configura una API RESTful con las operaciones CRUD y documenta la API utilizando Swagger. Las rutas son:

GET /items: Devuelve todos los ítems.
POST /items: Crea un nuevo ítem.
GET /items/:name: Obtiene un ítem por nombre.
PUT /items/:name: Actualiza un ítem por nombre.
DELETE /items/:name: Elimina un ítem por nombre.