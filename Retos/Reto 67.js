/* Uso de Api Web Storage
Crea una pequeña aplicación web que cumpla con los siguientes requisitos:
1. Muestra el texto de un párrafo en el color preferido del usuario
2. Si no sabe cuál es, le ofrece un formulario para que se lo diga
3. Los colores serán rojo, verde o azul
4. Además tendrá un contador de visitas para ese usuario (navegador), que indique el número de veces que el usuario ha pasado por la página
5. El usuario podrá borrar su preferencia y la próxima vez que visite la página se le mostrará el formulario de selección
*/

var parrafo = document.getElementById("parrafo");
var botonQuitar = document.getElementById("quitar");
var form = document.getElementsByTagName("form")[0];
var span = document.getElementById("visitas");

var visita = localStorage.getItem("visita")
if(visita==null){
    localStorage.setItem("visita",1)
}else{
    localStorage.setItem("visita",Number(visita)+1)
}

span.innerHTML = visita;

function ponerPreferencia(){
    var color = document.getElementById("color").value;
    localStorage.setItem("color",color)

    botonQuitar.style.display = "block";
    parrafo.style.display = "block";
    form.style.display = "none";
    parrafo.style.backgroundColor = localStorage.getItem("color");
}

function quitarPreferencia(){
    localStorage.removeItem("color")
    parrafo.style.display = "none";
    botonQuitar.style.display = "none";
    form.style.display = "block";
}