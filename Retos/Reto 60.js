/*: Mostrar un usuario aleatorio
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
*/

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: datosjson => {
            const user = datosjson.results[0];
            document.write("<img src='" + user.picture.large + "'><br>");
            document.write("Nombre:" + user.name.first+" "+user.name.last+"<br>");
            document.write("Email:" + user.email+"<br>");
            document.write("Direccion:" + user.location.street.name+" "+user.location.street.number+" "+user.location.state+" "+user.location.country+"<br>");

        }
    });
});

$.ajax();
