/*Crea una aplicación web que use las los dos Apis de los ejercicios anteriores:
1. Seguimiento de tu posición
2. Almacenamiento de tu histórico de posiciones al usar la aplicación
3. Cuando te vuelvas a conectar, te muestra un listado de posiciones, el número de posiciones y la duración 
(fecha de la última posición menos la fecha de la primera posición guardada)
4. Además, te permitirá borrar una posición concreta
*/

var div = document.getElementById("div");
var historial = document.getElementById("historial");
var seguimientoID = null; 
var intervaloID = null;    
var ultimaPosicion = null; 
var primeraFecha = null

function ubicacion() {
    navigator.geolocation.getCurrentPosition(
        pos => {
            let lat = pos.coords.latitude;
            let lon = pos.coords.longitude;
            let alt = pos.coords.altitude !== null ? pos.coords.altitude : "No disponible";
            let precision = pos.coords.accuracy;

            let info = `
                Coordenadas: ${lat}, ${lon} <br>
                Altitud: ${alt} <br>
                Precisión: ${precision} metros <br>
                <a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}" target="_blank">Ver en mapa</a>
            `;

            div.innerHTML = info;
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
    }, 1000);
}

function deletee(elemento){
    let posicion = elemento.getAttribute("data-posicion");
    let elementoEliminar = document.getElementById(posicion);
    historial.removeChild(elementoEliminar);
    localStorage.removeItem(posicion);
}

var contID= 0;
function actualizarInfo(pos) {

    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    let alt = pos.coords.altitude !== null ? pos.coords.altitude : "No disponible";
    let precision = pos.coords.accuracy;
    let fechaHora = new Date().toLocaleString();

    contID++;
    let info = `
        <b>${fechaHora}</b><br>
        Coordenadas: ${lat}, ${lon} <br>
        Altitud: ${alt} <br>
        Precisión: ${precision} metros <br>
        <a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}" target="_blank">Ver en mapa</a>
        <input type="button" value="Borrar" data-posicion="${contID}" onclick="deletee(this)"/>
    `;

    let li = document.createElement("li");
    li.setAttribute("id",contID); 
    li.innerHTML = info;
    historial.appendChild(li);

    if(primeraFecha == null){
        primeraFecha = new Date();
    }
    let lastFecha = new Date();
    localStorage.setItem(contID, `${fechaHora} Coordenadas: ${lat}, ${lon} Altitud: ${alt} Precisión: ${precision}m POSICIONES: ${contID} DURACION:${lastFecha-primeraFecha}ms`)
}

function deleteAll(){
    localStorage.clear();
}