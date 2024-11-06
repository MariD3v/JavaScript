/*
Muestra una página que diga Nos vamos y que tras cinco segundos nos redirija a la página del buscador Google. Nota: asignar a location la página de google
 */

function irnos(){
    window.open("https://www.google.es", "_self");
}

setTimeout(()=>irnos(),5000);