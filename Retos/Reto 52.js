/*Crea una aplicación:
La imagen de la izquierda se descargará de Internet (en páginas que permiten la descarga sin restricciones de derecho de uso). 
Realmente necesitamos tres: una relacionada con el área de distribución, otra con el área de oficina y otra para el área de producción.
• El cuadro combinado Tipo de incidencia contiene esas mismas tres entradas: distribución, oficina y producción. 
Eligiendo cada opción, se modifica automáticamente la imagen de la izquierda.
• Cuando pulsamos en el botón con el texto Mostrar descripción, aparece un área de texto en el que podemos describir la incidencia. 
Tras el botón la apariencia es esta:
• El número de serie debe de cumplir estas reglas:
- Empezar con tres números
- Seguir con 4 letras mayúsculas
- Acabar con los números 1 o 2; o bien con la letra A
• Se valida el número de serie al pulsar enviar. Si es incorrecto, se avisará con un mensaje de error (fondo rojo y letra blanca). 
Además se marcará la etiqueta y el cuadro de texto con un borde fino de color rojo. Tanto el mensaje como los bordes, 
se quitan cuando el usuario se dispone a modificar de nuevo el número de serie.
• Los datos, realmente, no se enviarán a ningún destino. */

window.onload = function(){ 

    let select = document.getElementById("menu");
    select.addEventListener("change", function(){
        let imagen = document.getElementById("img");

        if(select.value == "distribucion"){
            imagen.src = "https://aelis.es/wp-content/uploads/2023/10/distribucion-internacional-sage-x3.jpg"
        } else if (select.value == "produccion"){
            imagen.src = "https://blog.toyota-forklifts.es/hubfs/l%C3%ADnea-de-producci%C3%B3n-Toyota-Material-Handling---Mjolbi.jpg"
        } else if (select.value == "oficina"){
            imagen.src = "https://skepp.com/assets/Uploads/_resampled/ScaleWidthWyIxODAwIl0/OficinaAbierta.jpg"
        }
    })

    let button = document.getElementById("mostrar");
    button.addEventListener("click", function(){
        let cuadro = document.getElementById("textarea");

        let propiedadCuadro = window.getComputedStyle(cuadro);
        if(propiedadCuadro.display=="none"){
            cuadro.style.display="block";
        } else if (propiedadCuadro.display=="block"){
            cuadro.style.display="none";
        }
    })

    let nSerie = document.getElementById("numeroSerie");
    let boolCorrect = false;
    nSerie.addEventListener("change", function(){
        let nSerieValue = document.getElementById("numeroSerie").value;
        let exReg = /^[0-9]{3}[A-Z]{4}([1-2]|A)$/;
        let error = document.getElementById("error");

        if (!exReg.test(nSerieValue)){
            nSerie.style.border = "1px solid red";
            boolCorrect = false;
            error.innerHTML = "Inserta un número de serie con el siguiente formato: 3 números, 4 letras, 1/2/A";
        } 

        if(exReg.test(nSerieValue)){
            nSerie.style.border = "1px solid black";
            boolCorrect = true;
            error.innerHTML = "";
        }
    })

    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit",function(event){
        
        if(nSerie.value == ""){
            event.preventDefault();
            alert("Rellena los campos vacios");
        }

        if(!boolCorrect){
            event.preventDefault();
        } else {
            alert("Formulario enviado");
        }
    })
}