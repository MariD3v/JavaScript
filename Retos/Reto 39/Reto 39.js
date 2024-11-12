/*
Crea un fichero libro.js que contendrá la clase Libro que guarde la información de cada uno de los libros de una biblioteca. 
La clase debe guardar los siguientes atributos:

título del libro, de tipo String
autor, de tipo String
isbn, de tipo String
páginas, de tipo Number
fecha de publicación, de tipo String
número de ejemplares del libro, de tipo Number
número de ejemplares prestados, de tipo Number

La clase contendrá los siguientes métodos:
Constructor, no recibe ningún parámetro e inicializa los String a “” y los Number a 0.
insertarLibro, no recibe parámetros y pedirá por teclado cada uno de los atributos de la clase
Método préstamo que incremente el atributo correspondiente cada vez que se realice un préstamo del libro. 
No se podrán prestar libros de los que no queden ejemplares disponibles para prestar. Devuelve true si se ha podido realizar la operación y false en caso contrario.
Método devolución que decremente el atributo correspondiente cuando se produzca la devolución de un libro. No se podrán devolver libros que no se hayan prestado. 
Devuelve true si se ha podido realizar la operación y false en caso contrario.
Método mostrarLibro para mostrar los datos de un libro.

Hacer un fichero biblioteca.js, donde vamos a implementar lo siguiente:
Crear un array biblioteca vacío, lo vamos a utilizar para insertar objetos de tipo libro
Crear 3 nuevos objetos de la clase Libro, insertaremos estos objetos en el array (de uno enuno).
Crear una función LibrosAutor que recibe un autor como parámetro y mostrará solo los libros que
pertenezcan a ese autor, para mostrar dichos libros hay que usar el método mostrarLibro. 
Hacer una llamada a esta función desde el código principal
Crear una función LibrosPrestados, que no recibe parámetros y que mostrará por pantalla solo los libros donde el atributo número de ejemplares prestados sea 
mayor que 0, de igual forma que antes para mostrar los libros debemos utilizar el método mostrarLibro
*/