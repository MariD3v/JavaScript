/*Crea una página web que tenga un texto que indique que al pulsar Alt+F12, podremos colocar una imagen de fondo. 
El texto tiene que salir centrado. La idea es que inicialmente aparezca una pantalla negra con el texto y hasta que el usuario
no pulse esa tecla, la imagen no se muestre. Tras pulsar las teclas debe aparecer la imagen de fondo*/

window.onload = function(){ 
    let body = document.querySelector("body");
    document.addEventListener("keydown", function(event){ 
        if (event.altKey && event.key == "F12"){
            body.style.backgroundImage = "url('../Reto 50/imagen.jpg')";
            body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundSize = "100%"
        }
    }) 
}