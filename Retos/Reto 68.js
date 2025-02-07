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

function ubicacion(){
    navigator.geolocation.getCurrentPosition( 
        pos=>{
            var latitude = pos.coords.latitude;
            var longitude = pos.coords.longitude;
            var altitude = pos.coords.altitude;
            var accuracy =+pos.coords.accuracy;
            div.innerHTML = ("Coordenadas: "+ latitude + ", "+longitude+"<br>Altitud: "+altitude+"<br>Precisión: "+accuracy+"<br>Enlace: ");
            div.innerHTML +=("<a href=\"https://www.openstreetmap.org/?minlon="+longitude+"&minlat="+latitude+"&maxlon="+longitude+"&maxlat="+latitude+"&mlat="+latitude+"&mlon="+longitude+"\">Ver mapa</a>")
        },
        error=>{
            div.innerHTML = ("Error: "+error)
        })
}

let cont = 0;
let position = navigator.geolocation.watchPosition(    
    pos=>{
        cont++;
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        let alt = pos.coords.altitude !== null ? pos.coords.altitude : "No disponible";
        let precision = pos.coords.accuracy;
        let fechaHora = new Date().toLocaleString();
        let info = `${fechaHora}<br>Coordenadas: ${lat}, ${lon}<br>Altitud: ${alt}<br>Precisión: ${precision} metros<br><a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}" target="_blank">Ver en mapa</a>`; 
    }
)
cont ++;
if (cont>=1000){
    navigator.geolocation.clearWatch(position)
}

function seguir(){
    var cont=0;

    var cadaCiertoTiempo = setInterval(function(){        
        div.innerHTML = info;
        let li = document.createElement("li");
        let historial = document.getElementById("historial");
        li.innerHTML = info;
        historial.appendChild(li);

        cont ++;
        if (cont>=1000){
            clearInterval(cadaCiertoTiempo) 
        } 
    }, 10000)
}



