/*IMPLEMENTA LAS FUNCIONES QUE FALTAN PARA:
1. Insertar un elemento delante de otro indicando su posición con un numero.Si no se marca la posición se insertará al principio

2. Poder eliminar un nodo indicado por una posición con un número.Si no se especifica posicion se elimina la primera

3. Poder reemplazar un elemento por otro. Intoducimos los datos de una tarea y el número de la tarea a reemplazar

4. Poder insertar una tarea especificando su atributo id y su atributo class.
   Por defecto se insertarán en la sección <main> pero si le indicamos otra zona o sección del HTML que la inserteen la zona dada

5. Poder visualizar los elementos del DOM de una zona dada. Ahora siempre saca el <main> obtiene los elementos hijos de un elemento pasado como parámetro*/



function obtenerDom(){
    let salida="";
    let elemento = (document.getElementById("donde").value);
    let nodo = document.getElementById(elemento);
    if (nodo.childNodes.length > 0){
        for(let n of nodo.childNodes){
            if (n.nodeType == 1){
                salida+=n.nodeName+';';
            }    
        }
        document.getElementById("salidaDom").innerHTML=salida;
    } else {
        document.getElementById("salidaDom").innerHTML ="";
        alert("Este nodo no tiene hijos");
    }
}

function nuevaTarea(){
    let nodoNuevo = document.createElement("p");
    nodoNuevo.innerHTML='<h3>'+document.getElementById("tarea").value+'</h3>'+document.getElementById("descripcion").value;

    if (document.getElementById("clase").value != ""){
        nodoNuevo.setAttribute("class",document.getElementById("clase").value);
    }
    if (document.getElementById("id").value != ""){
        nodoNuevo.setAttribute("id",document.getElementById("id").value);
    }

    let idLugarHTML = document.getElementById("htmlPlace").value;
    if (idLugarHTML != ""){
        var lugarHTML=document.getElementById(idLugarHTML);
        var nodosSiguiente = document.querySelectorAll("#"+idLugarHTML+ " p");
    } else {
        var lugarHTML=document.getElementById("principal");
        var nodosSiguiente = document.querySelectorAll("main p");
    }
    
    let posicion = document.getElementById("posicion");
    if (posicion.value == ""){
        posicion.value = 0;
    } 
    if (posicion.value <= nodosSiguiente.length){
        if (posicion.value == 0){
            lugarHTML.insertBefore(nodoNuevo,nodosSiguiente[0]);
        } else {
            lugarHTML.insertBefore(nodoNuevo,nodosSiguiente[posicion.value]);
        }
    } else {
    alert("Posicion fuera de rango");
    }
    limpia();
}


function quitaTarea(){
    let idLugarHTML = document.getElementById("htmlPlace").value;
    if (idLugarHTML != ""){
        var lugarHTML=document.getElementById(idLugarHTML);
        var nodosSiguiente = document.querySelectorAll("#"+idLugarHTML+ " p");
    } else {
        var lugarHTML=document.getElementById("principal");
        var nodosSiguiente = document.querySelectorAll("main p");
    }
    let posicion = document.getElementById("posicion");

    if (posicion.value == ""){
        posicion.value = 0;
     } 

    if (posicion.value < nodosSiguiente.length){
        lugarHTML.removeChild(nodosSiguiente[posicion.value]); 
    } else {
        alert("Posicion fuera de rango");
        posicion.value="";
    }
}

function reemplazarTarea(){
    let idLugarHTML = document.getElementById("htmlPlace").value;
    if (idLugarHTML != ""){
        var nodos = document.querySelectorAll("#"+idLugarHTML+ " p");
    } else {
        var nodos = document.querySelectorAll("main p");
    }
    let posicion = document.getElementById("posicion");

    if (posicion.value == ""){
        alert("Introduce una posición");
    } else if (posicion.value >= nodos.length){
        alert("Posicion fuera de rango");
        posicion.value="";
    } else {
        let nodoAReemplazar = nodos[posicion.value];
        nodoAReemplazar.innerHTML='<h3>'+document.getElementById("tarea").value+'</h3>'+document.getElementById("descripcion").value;
    
    }
}

function limpia(){
    document.getElementById("tarea").value="";
    document.getElementById("descripcion").value="";
    document.getElementById("clase").value="";
    document.getElementById("id").value="";
    document.getElementById("htmlPlace").value="";
    document.getElementById("posicion").value="";
}