<?php
/*
Crea un formulario con su botón submit que disponga de un nombre y un dni. El nombre y apellidos se consideran válidos si al menos 
hay dos letras y el dni lo consideramos válido si hay una secuencia de 8 números seguido de una letra.
Si los campos son correctos se realizará un envio POST a un fichero .php que se encargue de verificar si el dni enviado es correcto. 
En caso de que sea correcto el fichero php retornará un JSON con el nombre y dni como respuesta. 
El cliente los mostrará indicando que son correctos.
En caso de un dni incorrecto como nombre se devolverá el texto “Error en dni” y en dni el correcto para mostrar el dni correcto.
Nota: Las comprobaciones si los datos introducidos son correctos lo hacemos con expresiones regulares.
Hay que anular el efecto submit del formulario antes de hacer la petición al fichero php.
Implementar la petición http con las tres versiones XMLHttpRequest, $.ajax(), fetch(). 
Usar en alguna de ellas el envío de datos en formato parámetro=valor ('Content-Type':'application/xwww-form-urlencoded') y 
en otra el envío mediante el objeto FormData

JavaScript proporciona un objeto llamado FormData que facilita la preparación de los datos en este formato. 
La creación de un objeto de este tipo se hace de esta forma:
var form = new FormData();
Añadir un nuevo par parámetro/clave se hace con el método append: form.append(“nif”,”28063792F”);
Si quisiéramos borrar un parámetro: form.delete("dni");
Si quiséramos modificar: form.set("nif","98765432B");
Saber si hemos grabado un valor lo hace el método has, que devuelve true o false.
consolé.log(form.has("nif")); //Escribe true
Obtener el valor ya grabado de un parámetro se hace con get (si el parámetro no existe, devuelve null)
console.log(form.get("nif"); //Escribe 98765432B
Los objetos FormData se pueden construir a partir de los controles de un formulario. De esta forma se
pueden recoger de golpe todos los controles del formulario. Basta con usar esta sintaxis:
var elementoForm = document.querySelector("form");
var form = new FormData(elementoForm);
*/
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reto 66</title>
</head>
<body>
    <main>
        <form method="POST" id="formulario">
            Nombre: <input type="text" name="nombre" id="nombre">
            <span id="errorNombre" style="color:red"></span><br>
            
            DNI: <input type="text" name="dni" id="dni">
            <span id="errorDNI" style="color:red"></span><br>
            
            <span id="error"></span><br>
            <input type="submit" id="button" value="Enviar"/>
        </form>
    </main>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        let nombre = document.getElementById("nombre");
        let dni = document.getElementById("dni");
        let errorNombre = document.getElementById("errorNombre");
        let errorDNI = document.getElementById("errorDNI");
        let error = document.getElementById("error");

        let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
        let regexDNI = /^[0-9]{8}[A-Za-z]$/;

        let validoN = false;
        let validoD = false;

        nombre.addEventListener("change", function() {
            validoN = regexNombre.test(nombre.value);
            errorNombre.innerHTML = validoN ? "" : "Nombre inválido";
        })

        dni.addEventListener("change", function() {
            validoD = regexDNI.test(dni.value);
            errorDNI.innerHTML = validoD ? "" : "DNI inválido";
        })

        let formulario = document.getElementById("formulario");
        formulario.addEventListener("submit", function(event) {
            event.preventDefault();

            if (validoN && validoD) {
                error.innerHTML ="";

                 // XMLHttpRequest
                let formData = new FormData(formulario);
                formData.append("nombre",nombre.value);
                formData.append("dni",dni.value);

                let xhr = new XMLHttpRequest();
                xhr.open("POST", "HTML/Reto 66.php", true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        let respuesta = JSON.parse(xhr.responseText);
                        error.innerHTML += `Por XML<br>Nombre: ${respuesta.nombre} <br> DNI: ${respuesta.dni}<br>`;
                    }
                };
                xhr.send(formData);

                // $.ajax()
                let datos = {
                    nombre : nombre.value,
                    dni : dni.value
                }
                $.ajax({
                    url: "HTML/Reto 66.php",
                    type: "POST",
                    data: datos,
                    success: function(response) {
                        let respuesta = JSON.parse(response);
                        error.innerHTML += `Por AJAX<br>Nombre: ${respuesta.nombre} <br> DNI: ${respuesta.dni}<br>`;
                    }
                });

                // Fetch
                datosJSON = "nombre="+nombre.value+"&dni="+dni.value;
                fetch("HTML/Reto 66.php", {
                    method: "POST",
                    body: datosJSON,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
                .then((response) => response.json())
                .then((data) => {
                    error.innerHTML += `Por Fetch<br>Nombre: ${data.nombre} <br> DNI: ${data.dni}<br>`;
                }); 
            }
        });            
    </script>
</body>
</html>