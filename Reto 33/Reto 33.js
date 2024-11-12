/*
Crear un fichero llamado articulo.js, que contendrá la clase Articulo, esta clase tiene los siguientes atributos:
código: Es un código del artículo, es de tipo String
descripción: Es la descripción del artículo, es de tipo String
PVP: Precio de venta, es de tipo Number
A estos atributos le acompañan los siguientes métodos:
insertaArticulo() → no recibe parámetros, pedirá por teclado cada uno de los atributos
muestraArticulo() → no recibe parámetros, mostrará por pantalla los datos del artículo 

Crear un fichero llamado cliente.js, que contendrá la clase Cliente, esta clase tiene los
siguientes atributos:
DNI: Guarda el DNI del cliente, es de tipo String
Nombre: Guarda nombre y apellidos del cliente, es de tipo String
Dirección: Guarda la dirección completa del cliente, es de tipo String
Teléfono: Guarda el teléfono del cliente, es de tipo String
A estos atributos le acompañan los siguientes métodos:
insertaCliente() → no recibe parámetros, pedirá por teclado cada uno de los atributos y los almacenará en cada campo correspondiente.
muestraCliente() → no recibe parámetros, mostrará por pantalla los datos del cliente

Crear un fichero llamado factura.js, que contendrá la clase Factura, esta clase tiene los
siguientes atributos:
cliente: es un objeto de la clase Cliente, → este atributo será de tipo Cliente
articulo: es un array de objetos de la clase Articulo → este atributo será de tipo Array
A estos atributos le acompañan los siguientes métodos:
crearFactura → que recibe dos parámetros, el primero será un objeto de tipo Cliente y el segundo de tipo array de objetos Artículos.
mostrarFactura → no recibe parámetros. Este método llamará al método muestraCliente para mostrar los datos del cliente, y por otro lado, 
llamará al método muestraArticulo, tantas veces como sea necesario (según el tamaño del array)

Crear un fichero llamado principal.js, que hará las siguientes operaciones:
crear un objeto nuevo de tipo Cliente
llamar a insertaCliente para que pida los valores del cliente por teclado
crear un array para guardar los artículos
crear 2 objetos nuevos de tipo Articulo
llamar a insertaArticulo para el primer objeto Articulo
llamar a insertaArticulo para el segundo objeto Articulo
insertar los dos objetos en el array de artículos
crear un objeto nuevo de tipo Factura
llamar a crearFactura con los datos del cliente y de los artículos
llamar a mostrarFactura para que sea presentada la factura por pantalla
Crear un fichero index.html, que entre <head> y </head>, cargar los ficheros que contienen
las clases y del index, en este orden:
cliente.js
articulo.js
factura,js
principal.js
*/