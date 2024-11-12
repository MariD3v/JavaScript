/*
• Crea un tipo de objeto que sirva para representar figuras. Sus propiedades son:
    - Marca, un texto
    - Modelo, un texto
    - Memoria RAM, un número que indica GB de capacidad
    - Capacidad Disco Duro, un número que indica GB de capacidad
    - Pulgadas de pantalla, un número que indica Pulgadas
• Métodos de los ordenadores
    - toString, sirve para obtener en forma de texto los detalles del ordenador
• Al crear un ordenador se pueden indicar todos los valores, pero por defecto (sin ser obligado indicarlos) se toman como valores 17 pulgadas, 512 GB de disco duro 
y 4 GB de RAM. La marca y el modelo sí son necesarias
• Crear otro tipo de objeto que represente ordenadores portátiles, los cuales heredan todo lo de los ordenadores pero añaden una propiedad llamada autonomía, 
que es un número que expresa horas. Se construye este objeto igual que los ordenadores, pero pudiendo añadir la autonomía (por defecto, 4 horas). 
Por defecto, en los portátiles las pulgadas son 12 y el disco duro 256 GB.
• Añade una propiedad precio en la clase ordenador, con valor 0 por defecto.
• Crea un get que devuelva el precio con iva (PVP) teniendo en cuenta que se obtiene aplicando el 21% al precio. 
Crea un set que reciba un precio con iva (PVP) y actualice el precio de un ordenador quitando el 21%.
• Como la clase portátil hereda de la clase ordenador, comprueba si el set y get funcionan para esa clase.
• Crea un nuevo método toString para la clase portátil y comprueba que efectivamente sobrescribe el método toString de la clase ordenador. 
Comprueba también que un objeto de la clase ordenador no dispone de la propiedad autonomía.
• Crea un método estático en la clase ordenador de tal manera que reciba 2 objetos y nos devuelva la suma de los precios sin iva, la suma de los precios con iva y 
el importe del iva. Pruébalo pasándole dos objetos ordenador, dos objetos portátil y un objeto ordenador y otro portátil.
*/