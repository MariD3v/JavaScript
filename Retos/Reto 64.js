/* Función para conectar a la la url https://api.giphy.com/v1/gifs/search con XMLHttpRequest y con $.ajax() */

//XMLHttpRequest

function obtenerTrendingXML(){
    let div = document.getElementById("divTrending");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.giphy.com/v1/gifs/trending?api_key=fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB', true);
    xhr.send(); 
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let responseText = xhr.responseText;
            let jsonData = JSON.parse(responseText);
            for(let element of jsonData.data){
                div.innerHTML+= ("<div><img src=\""+element.images.fixed_height.url+"\"/></div>");
            }
        }
    }
}

obtenerTrendingXML();

function obtenerBuscadoXML(){
    let div = document.getElementById("divBuscado");
    div.innerHTML = "";
    let input = document.getElementById("valor").value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB&q='+input, true);
    xhr.send(); 
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let responseText = xhr.responseText;
            let jsonData = JSON.parse(responseText);
            console.log(jsonData)
            for(let element of jsonData.data){
                div.innerHTML+= ("<div><img src=\""+element.images.fixed_height.url+"\"/></div>");
            }
        }
    }
}

//AJAX

function obtenerTrendingAJAX(){
    let div = document.getElementById("divTrending");
    $.ajax({
        type:"GET",
        url: "https://api.giphy.com/v1/gifs/trending",
        data: {'api_key':'fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB'},
        dataType: "JSON",
        success: datosjson => {
            for(let element of datosjson.data){
                div.innerHTML+= ("<div><img src=\""+element.images.fixed_height.url+"\"/></div>");
            }
        }
    })
}

function obtenerBuscadoAJAX(){
    let div = document.getElementById("divBuscado");
    div.innerHTML = "";
    let input = document.getElementById("valor").value;
    $.ajax({
        type:"GET",
        url: "https://api.giphy.com/v1/gifs/search",
        data: {'api_key':'fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB','q':input},
        dataType: "JSON",
        success: datosjson => {
            for(let element of datosjson.data){
                div.innerHTML+= ("<div><img src=\""+element.images.fixed_height.url+"\"/></div>");
            }
        }
    })
}

