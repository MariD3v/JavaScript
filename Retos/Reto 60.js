/*
a) Mostrar un usuario aleatorio
• La página https://randomuser.me/ permite obtener datos aleatorios de personas pensando en que los desarrolladores y  otros 
profesionales puedan utilizarlos en sus pruebas y test.
• Las instrucciones de la API de este servicio gratuito están en la URL: https://randomuser.me/documentation
• En todo caso la idea es hacer peticiones vía GET a la URL: https://randomuser.me/api/
• Se pueden pasar parámetros para indicar cuántos usuarios aleatorios deseamos, el sexo, política de contraseñas, páginas, formato de respuesta, etc.
• En la página de documentación viene un ejemplo de la estructura ]SON de las respuestas. Como resumen indicamos que es un objeto 
formado por dos propiedades: results e info. La primera es un array donde cada elemento lo forma un objeto con los datos del usuario aleatorio.
• La aplicación mostrará la foto, nombre, apellido, email, dirección y estado al que pertenece el usuario. Cada vez que actualicemos la página, se pedirá otro usuario.
Ejemplo de resultado: 
FOTO
nombre
email
direccion
b) Implementa para obtener 10 usuarios y cuando demos al botón cambiar se obtendrá un nuevo usuario sustituyendolo
*/

let main = document.getElementsByTagName("main")[0];

function obtenerUsuarios(){
    fetch("https://randomuser.me/api/?results=10") 
    .then(res => res.json())
    .then(json => {
            let users = json.results;
            for(let i=0; i<10;i++){
                let user = users[i];
                let div = document.createElement("div");
                obtenerUsuario(user,div);
                eventoCambiarUsuario(div);
                main.appendChild(div);
            }
        }
    )
    .catch(error => console.log(error));
}

obtenerUsuarios();

function eventoCambiarUsuario(div){
    let button = div.lastChild;
    button.addEventListener("click", function(){
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(json => { 
            let user = json.results[0];
            obtenerUsuario(user,div);
            eventoCambiarUsuario(div);
        })
    })
}

function obtenerUsuario(user,div){
    div.innerHTML=("<img src='" + user.picture.large + "'><br>");
    div.innerHTML+=("<h1>" + user.name.first+" "+user.name.last+"</h1>");
    div.innerHTML+=("<label>Email:</label><p>" + user.email+"</p>");
    div.innerHTML+=("<label>Direccion:</label><p>" + user.location.street.name+" "+user.location.street.number+" "+user.location.state+" "+user.location.country+"</p>");
    div.innerHTML+=(`<input type="button" value="Cambiar"/>`)
}
