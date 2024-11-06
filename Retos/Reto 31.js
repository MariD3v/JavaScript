/*IMPLEMENTA LAS FUNCIONES QUE FALTAN PARA:
1. Insertar un elemento delante de otro indicando su posición con un numero.Si no se marca la posición se insertará al principio

2. Poder eliminar un nodo indicado por una posición con un número.Si no se especifica posicion se elimina la primera

3. Poder reemplazar un elemento por otro. Intoducimos los datos de una tarea y el número de la tarea a reemplazar

4. Poder insertar una tarea especificando su atributo id y su atributo class.
   Por defecto se insertarán en la sección <main> pero si le indicamos otra zona o sección del HTML que la inserteen la zona dada

5. Poder visualizar los elementos del DOM de una zona dada. Ahora siempre saca el <main> obtiene los elementos hijos de un elemento pasado como parámetro

6.Modifica para que al pulsar un botón cambie el fondo de pantalla de forma aleatoria. 

7.Haz que al cargar la página trascurridos 5 segundos ponga un background. 

8.Cuando se pulse el botón cambiar color pone un color aleatorio y después cada 5 segundos se va cambiando solo.

9.Haz un botón que cambie el color de las tareas o elementos introducidos en la sección main, de tal forma que el primero aparezca en rojo el último en verde y 
el resto se mantengan.

10.Crea un botón que se llame inicio sesión. A pulsar el botón creará una cookie con tu nombre y con fecha de expiración dentro de una hora y como path=”/”. 
Después muestra en una venta (alert) los valores de la cookie, fecha caducidad y path. 
Al salir de la ventana pondrá la fecha de la cookie para que se cancele al cerrar la aplicación

11.Pon dos botones en el formulario: uno abrirá desde la ventana principal utilizando el método open , un segundo HTML que se encuentre en la misma carpeta. 
El otro botón cerrará el HTML abierto de tal forma que tras pulsar el botón de cierre saldrá un mensaje pidiendo confirmación para cerrar: si cancelamos no se cerrará y
si confirmamos el cierre transcurridos 3s se cerrará.
*/

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

var cont = 0;
function changeColorBg(){
    let body = document.querySelector("body");
    let colorsArray = ["grey", "lightblue", "pink", "purple","blue","yellow"];
    if (cont <=5){
        body.style.backgroundColor=colorsArray[cont];
        cont+=1;
    } else {
        cont = 0;
        body.style.backgroundColor=colorsArray[cont];
        cont+=1;
    }
}

var cambiarBG5s = setTimeout(()=>changeColorBg(), 5000);

var bool = true;
function bgcambiarColor(){
    clearTimeout(cambiarBG5s);
    changeColor();
    if (bool){
        setInterval(()=>changeColorBg(), 5000);
        bool= false;
    }
}

function changeColorT(){
    let main = document.querySelector("main");
    main.lastChild.style.color="green";
    main.firstChild.style.color="red";
}

function logIn(){
    let usuario = document.getElementById("usuario").value;
    let hoy = new Date();
    let caducidad = new Date(hoy.getTime() + 1000 *60 * 60);
    let cookie1 = document.cookie=`usuario=${usuario};expires=${caducidad.toUTCString()};path=/`;
    let arrayCookie = cookie1.split(";");
    let stringCookie = "";
    for(let cookie of arrayCookie){
        let [clave,valor]=cookie.split("=");
        stringCookie += (clave+":"+valor+" ");
    }
    alert(stringCookie);

    cookie1 =Document.cookie=`usuario=${usuario};expires=Sat, 01 Jan 2000 00:00:01 GMT;path=/`;
}

var pagina = "";
function openHtml(){
    pagina = window.open("Reto 31 2.html")
}

function closeHtml(){
    let cerrar = confirm("¿Estas seguro que quieres cerrar?");
    if (cerrar){
        setTimeout(()=>pagina.close(),3000);
    }
}