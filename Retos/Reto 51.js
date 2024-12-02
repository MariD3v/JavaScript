/*Crea una aplicación web que muestre el texto: Velocidad 0.
• Si pulsamos la tecla de la flecha hacia arriba del teclado, la velocidad se incremente en uno.
• Si es la flecha hacia abajo, la velocidad baja en uno.
• La velocidad no puede sobrepasar los 120 ni descender de cero.
• Experimenta con los eventos de teclado para investigar cuál es el más apropiado en este caso. */

let span = document.getElementById("number");
window.onload = function(){ 
    document.addEventListener("keydown", function(event){ 
        if (event.key == "ArrowUp" && Number(span.innerHTML) < 120){
            span.innerHTML = Number(span.innerHTML) + 1;
        } else if (event.key == "ArrowDown" && Number(span.innerHTML) > 0){
            span.innerHTML = Number(span.innerHTML) - 1;
        }
    })
}