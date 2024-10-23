/* Vamos a tener una pagina HTML con un botón Generar, una zona div donde vamos a mostrar la salida. 
Cuando pulse en ese botón voy a generar 4 cartas aleatorias (sin repetición).
Nota: en cartas.zip están las imágenes */

function cartas(){
    let contenedor = document.querySelector("div");
    let imagenes = "";
    let numerosRamdon = [];
    for(let i=0; i<4; i++){ 
        let numeroRamdon = Math.floor(Math.random() * 20) + 1;
        while (numerosRamdon.includes(numeroRamdon)){
        numeroRamdon = Math.floor(Math.random() * 20) + 1;
        } 
        numerosRamdon.push(numeroRamdon);
        imagenes +="<img src=\"../Recursos/cartas/"+numeroRamdon+".jpg\">";
    }
    contenedor.innerHTML = imagenes;
}