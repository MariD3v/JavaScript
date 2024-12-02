/*Crea una página web con bastantes párrafos. Haz que en cada movimiento de ratón sobre la página, 
un pequeño cartel con fondo amarillo y el texto Hola, siga al cursor del usuario o usuaria. */

window.onload = function(){ 
    let cuadrado = document.getElementById("cuadro");
    document.addEventListener("mousemove", function(event){ 
        cuadrado.style.top= event.clientY + "px";
        cuadrado.style.left= event.clientX + "px";
    }) 
}