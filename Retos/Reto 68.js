/*Uso de Api Geolocation (de geolocalización)
Crear una pequeña aplicación web con los siguientes requisitos:
1. Tiene un botón que se llama «Estimar mi posición». Al pulsarlo …
    1. Te dice cuáles son tus coordenadas y altitud
    2. Te dice el grado de precisión de la estimación
    3. Te muestra un enlace a un mapa (https://wiki.openstreetmap.org/wiki/ES:Navegaci%C3%B3n#Otros_trucos_de_la_URL)
2. Además, diseñas otro botón «Sígueme» que:
    1. Capture tu posición cada 10 segundos
    2. Muestre las coordenadas, altitud y precisión
    3. Muestre la fecha y hora. Puedes usar el formato estándar o darle algún formato
    4. Y va añadiendo el histórico en una lista numerada
*/

var div = document.getElementById("div");
var historial = document.getElementById("historial");
var seguimientoID = null; 
var intervaloID = null;    
var ultimaPosicion = null; 

function ubicacion() {
    navigator.geolocation.getCurrentPosition(
        pos => {
            actualizarInfo(pos);
        }
    );
}

function seguir() {
    if (seguimientoID !== null) {
        alert("El seguimiento ya está en curso.");
        return;
    }
    seguimientoID = navigator.geolocation.watchPosition(
        pos => {
            ultimaPosicion = pos;
        }
    );
    intervaloID = setInterval(() => {
        if (ultimaPosicion) {
            actualizarInfo(ultimaPosicion);
        }
    }, 10000);
}

function actualizarInfo(pos) {
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    let alt = pos.coords.altitude !== null ? pos.coords.altitude : "No disponible";
    let precision = pos.coords.accuracy;
    let fechaHora = new Date().toLocaleString();

    let info = `
        <b>${fechaHora}</b><br>
        Coordenadas: ${lat}, ${lon} <br>
        Altitud: ${alt} <br>
        Precisión: ${precision} metros <br>
        <a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}" target="_blank">Ver en mapa</a>
    `;

    div.innerHTML = info;
    let li = document.createElement("li");
    li.innerHTML = info;
    historial.appendChild(li);
}



