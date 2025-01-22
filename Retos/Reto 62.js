/*Hay servicios que aceptan los datos en formato JSON. Para estos servicios, lo que tenemos que
hacer es preparar los datos a enviar en un objeto y después convertirlo a formato de texto JSON mediante el método JSON.stringify.
Para probar este tipo de envío podemos usar un servicio disponible en la URL: https://jsonplaceholder.typicode.com/
Esta dirección permite, precisamente hacer pruebas de peticiones simulando un sistema de mensajes (posts) creados por usuarios. 
Podemos hacer peticiones para obtener datos, añadir datos, modificar, etc. En la URL anterior vienen las instrucciones de uso.
Por ejemplo, mediante una petición de tipo GET podemos obtener la lista de todos los usuarios, 
utilizando https://jsonplaceholder.typicode.com/posts
Si añadimos el número de post: https://jsonplaceholder.typicode.eom/posts/5 nos devuelve el post número 5 (hay 100 para probar).
Mediante peticiones de tipo POST podemos añadir nuevos datos. En realidad no se añaden (es un servicio para practicar, no es real), 
pero parece como si sí lo hicieran.
Realizar:
1. Implementa una función que use fetch para añadir al usuario 5 un post con el título “Mi mensaje" y el texto 
"Este es un mensaje de prueba”. Tendremos que enviar los datos json:
data={title:"Mi mensaje", body:"Mensaje de prueba", userld:5}
2. Realiza la función del apartado 1 pero como función asíncrona */

async function introducirDatos(){
    let div = document.getElementById("publicaciones");
    let titulo = document.getElementById("titulo").value;
    let mensaje = document.getElementById("mensaje").value;

    let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/',{
        method:'POST',
        body: JSON.stringify({
            title:titulo,
            body:mensaje,
            userId:"5"
        }),
        headers: {
            'Content-type':'application/json'
        }
    })
    let datosObjeto = await respuesta.json();
    div.innerHTML+= "Titulo:"+datosObjeto.title+" Mensaje:"+datosObjeto.body;
}

