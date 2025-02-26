/*Crea una conexión a la api de futbol:https://www.scorebat.com/video-api/v3/feed/ 
usando el token: NTczNjRfMTY3NTk2NTE1NV9kMGY3MjUwOTY5ZTQ2NWQxMmFmZjdlOGEwMGY1YjI1MmZmNWNlNzJh. Muestra los titulos y videos de cada futbol */

function obtenerFutbol(){
    let contenedor = document.getElementById("container");
    fetch("https://www.scorebat.com/video-api/v3/feed/?token=NTczNjRfMTY3NTk2NTE1NV9kMGY3MjUwOTY5ZTQ2NWQxMmFmZjdlOGEwMGY1YjI1MmZmNWNlNzJh") 
    .then(res => res.json())  
    .then(json => {
        for(let i=0; i<5; i++){
            contenedor.innerHTML += "<h1>"+json.response[i].title+"</h1>"+"<h2>"+json.response[i].competition+"</h2>"
            for(let video of json.response[i].videos){    
                contenedor.innerHTML += video.embed    
            }
        }
    }) 
    .catch(error => console.log(error));
}

obtenerFutbol()