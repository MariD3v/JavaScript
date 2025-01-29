/* Función para hacer un POST para conectar a la la url https://jsonplaceholder.typicode.com/ con XMLHttpRequest y con $.ajax() */

//XMLHttpRequest

function introducirDatosXML(){
    let div = document.getElementById("publicaciones");
    let titulo = document.getElementById("titulo").value;
    let mensaje = document.getElementById("mensaje").value;
    let body = JSON.stringify({
        title:titulo,
        body:mensaje,
        userId:"5"
    })
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts/', true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(body); 
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 201) {
            let responseText = xhr.responseText;
            let jsonObjeto = JSON.parse(responseText);
            div.innerHTML+= "Titulo:"+jsonObjeto.title+" Mensaje:"+jsonObjeto.body;
        }
    }   
}

//AJAX

function introducirDatosAJAX(){
    let div = document.getElementById("publicaciones");
    let titulo = document.getElementById("titulo").value;
    let mensaje = document.getElementById("mensaje").value;

    let body = JSON.stringify({
        title:titulo,
        body:mensaje,
        userId:"5"
    });
    $.ajax({
        type:"POST",
        url: "https://jsonplaceholder.typicode.com/posts/",
        data: body,
        contentType: "application/json",
        dataType: "JSON",
        success: datosjson => {
            console.log(datosjson)
            div.innerHTML+= "Titulo:"+datosjson.title+" Mensaje:"+datosjson.body;

        }
    })
}