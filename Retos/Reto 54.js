/* CRONOMETRO

Haz un programa que simule un cronómetro. Debe mostrar en pantalla un texto con valor 0. 
Tras pulsar un botón iniciar, la secuencia mostrará la evolución del cronómetro cada segundo con el texto en verde. 
Con otro botón lo paramos y el botón iniciar se transforma en continuar y el texto pasa a color rojo. 
Un tercer botón reset lo pondrá a cero en su color original y el botón de inicio de nuevo con el texto Iniciar.

Haz que al entrar en la página se pregunte al usuario si acepta la creación de cookies. 
En caso de que acepte, crea una cookie con el nombre crono y valor tu nombre. 
Mediante un botón muestra la cookie y acto seguido que se borre de tal forma que si volvemos a pulsar el botón, 
mostrar cookie ya no debe aparecer. 
*/

window.onload = function(){ 
    crearCookie();
    let contador = 0;
    let cronometro =0;
    let permitirIntervalo = true;
    let parrafo = document.getElementById("number");

    let iniciar = document.getElementById("iniciar");
    iniciar.addEventListener("click", function(){ 
        parrafo.style.color = "green";
        if (permitirIntervalo){
            cronometro = setInterval(()=>iniciarContador(), 1000);
            permitirIntervalo = false;
        }
    }) 

    let parar = document.getElementById("parar");
    parar.addEventListener("click", function(){ 
        if (parrafo.innerHTML != 0){
            parrafo.style.color = "red";
            iniciar.innerHTML = "Continuar";
            clearInterval(cronometro);
            permitirIntervalo = true;
        }
    }) 

    let reiniciar = document.getElementById("reiniciar");
    reiniciar.addEventListener("click", function(){ 
        parrafo.style.color = "black";
        clearInterval(cronometro);
        contador = 0;
        parrafo.innerHTML = contador;
        iniciar.innerHTML = "Iniciar";
        permitirIntervalo = true;
    }) 

    
    function crearCookie(){
        let resultado = confirm("¿Quieres que creemos una cookie?");
        if (resultado){
            document.cookie="crono=Mari;expires=Sat, 01 Jan 2026 00:00:01 GMT";
        }
    }    

    let cookiebutton = document.getElementById("cookiebutton");
    cookiebutton.addEventListener("click", function(){ 
        mostrarCookie();
        eliminarCookie();
    }) 

    function mostrarCookie(){
        let arrayCookie = document.cookie.split(";");
        let stringCookie = "";
        for(let cookie1 of arrayCookie){
            let [clave,valor]=cookie1.split("=");
            stringCookie += (clave+":"+valor+" ");
        }
        alert(stringCookie);
    }

    function eliminarCookie(){
        document.cookie="crono=Mari;expires=Sat, 01 Jan 2000 00:00:01 GMT";
        console.log(document.cookie);
        alert("Cookie eliminada");
    }

    function iniciarContador(){
        contador++;
        parrafo.innerHTML = contador;
    }
}



