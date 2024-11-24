/* Crea un objeto Furgoneta y un objeto Todoterreno, ambas tienen que heredar del objeto Vehiculo. 
El objeto Furgoneta tiene que añadir una propiedad para indicar el número de pasajeros y el objeto Todoterreno debe de añadir 
una propiedad que indique si tiene tracción o no. Crea una instancia de cada uno de ellos y muestra los datos.
INSTRUCCIONES PARA → Crear PseudoClase Vehiculo
-Crear propiedades: marca, modelo, color y año fabricación
-Crear el método mostrarDatos
-Crear un método que tenga argumentos acelerar(velocidad). Mostrará por pantalla que el coche ha acelerado a la velocidad pasada 
como parámetro.
-Crear un método arrancar. Mostrará por pantalla que el coche de marca _, modelo_, de color_ ha arrancado.
-Asignar una nueva propiedad cilindrada y que se muestre también en el método mostrarDatos
-Asignar un nuevo método frenar que mostrará por pantalla que el coche de marca_, modelo_, color_ ha parado)
HERENCIA VERSIÖN CLASICA
// Creando PseudoClase Hija de Vehiculo
function Furgoneta(marca, modelo, color, fabricacion, cilindrada, pasajeros) { this.pasajeros = pasajeros;
// Invocar al constructor de Vehiculo
Vehiculo.call(this, marca, modelo, color, fabricacion, cilindrada);}
// Declara que hereda de la PseudoClase Vehiculo
Furgoneta.prototype = new Vehiculo();
// Declara que se usará el constructor de la PseudoClase Furgoneta
Furgoneta.prototype.constructor = Furgoneta;*/