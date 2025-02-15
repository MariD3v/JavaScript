/*
Crea una página que permita crear una lista de la compra:
- Aparecerá un cuadro de texto en el que podremos escribir el nombre de lo que deseamos comprar y un botón de Añadir.
- Los productos añadidos se muestran en una lista que siempre las muestra en orden alfabético.
- Cada producto va acompañada de un botón con el texto Eliminar que permitirá eliminarlo.
- No se permitirá añadir un producto repetido.
- La lista solo está vigente para el navegador, pero sin límite de fecha. Es decir se almacenará en LocalStorage.
- Realizar utilizando módulos. Colocar en un módulo la implementación de las funciones necesarias y hacer una importación del 
módulo en el fichero js principal para usar las funciones.

Observaciones: Usar una estructura de tipo Set para evitar las repeticiones.
Los productos de la lista se van añadiendo a la estructura tipo Set y luego los mostraremos ordenados alfabéticamente. 
Los datos de la lista de la compra permanecerán en LocalStorage.

Dividir el código en varias funciones, como mínimo tendrá:
- prepararBorrar: Recibe el elemento li de una nueva compra y genera apropiadamente el evento sobre el botón de eliminar dentro 
de dicho elemento li.
- prepararLista: Recibe un array con nombres de los productos a comprar y genera una lista de elementos de tipo li.
- actualizarLista: Usa la estructura de tipo Set con la lista de la compra para que se almacene en LocalStorage en forma de array, 
convertido a texto JSON.
- añadirProducto: Función encargada de añadir una nuevo producto a comprar. Recibe el texto de la compra y la coloca tanto en la lista 
de compra interna (estructura Set) como en los elementos de tipo li. Usa los métodos anteriores para que se añada correctamente.
*/

import * as funciones from "./funciones.js"
    
let button = document.getElementById("añadir")
    button.addEventListener("click",function(ev){
        funciones.añadirProducto()
    }
)

funciones.prepararProducto()