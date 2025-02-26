/* Haz una conexión a la api https://reqres.in/api/users con método post, pasandoles los datos de los usuarios necesarios.
Hazlo tanto con fetch como con xmlhttprequest con dos botones en el html */

import * as funciones from "./Reto 75 2.js"

funciones.guardarDueño()

let buttonFetch = document.getElementById("botonfetch")
let buttonhttp = document.getElementById("botonhttprequest")
let buttonImprimir = document.getElementById("botonimprimir")

buttonFetch.addEventListener("click", function(){
    let datosJSON = obtenerDatos();

    fetch("https://reqres.in/api/users", {
        method:'POST',
        body: datosJSON,
        headers:{'Content-Type': 'application/json'}
    }) 
    .then(res => res.json()) 
    .then(json => {
        imprimir(json, "fetch")
        funciones.guardarUsuario(json)
    })
    .catch(error => console.log(error));
})

buttonhttp.addEventListener("click", function(){
   
    let datosJSON = obtenerDatos();

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/users", true);
    xhr.onload = function(){
        console.log(xhr.responseText);
    };
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(datosJSON);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 201) {
            let responseText = xhr.response;
            let jsonObjeto = JSON.parse(responseText);
            imprimir(jsonObjeto, "XMLRequest")
            funciones.guardarUsuario(jsonObjeto)
        }
    }      
})

function obtenerDatos(){
    let nombre = document.getElementById("name").value
    let trabajo= document.getElementById("job").value
       
    let datos = {
        name: nombre,
        job: trabajo
    }
    return JSON.stringify(datos);
}

function imprimir(objeto, boton){
    let contenedor = document.getElementById("container");
    contenedor.innerHTML = ""
    if(boton == "fetch"){
        contenedor.innerHTML += "<h2>Uso de Fetch</h2>"
        
    } else if(boton == "XMLRequest"){
        contenedor.innerHTML += "<h2>Uso de XMLRequest</h2>"
    }
    contenedor.innerHTML += "name: "+objeto.name+", <br>job: "+ objeto.job+", <br>id: "+ objeto.id+", <br>created: "+ objeto.createdAt
}

buttonImprimir.addEventListener("click", function(){
    funciones.imprimirUsuarios();
})
