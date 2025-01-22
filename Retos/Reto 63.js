/*La agencia meteorológica española AEMET dispone de una API para datos abiertos en la que proporciona numerosas posibilidades de 
obtener información meteorológica.
• Para poder obtener los datos de esta agencia, necesitamos darnos de alta como desarrolladores en la dirección:
https://opendata.aemet.es/centrodedescargas/altaUsuario key: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb3l1bmNvcnJlb2NhY2FAZ21haWwuY29tIiwianRpIjoiMDk0ZmJlODUtZjNmMC00OTUxLWE4YjctNDU2YTkxNDFlMzRiIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE3Mzc0NTE0OTYsInVzZXJJZCI6IjA5NGZiZTg1LWYzZjAtNDk1MS1hOGI3LTQ1NmE5MTQxZTM0YiIsInJvbGUiOiIifQ.rnO1IzdHUglWwwgXAAx3O6rIShnt8sMQPDTGqawrpFI
• Las instrucciones de funcionamiento de la API de AEMET están en: https://opendata.aemet.es/dist/index.html?
• Nuestra aplicación, inicialmente, muestra un cuadro de texto en el que introducir nuestra API y un botón de cargar mapa
• Tras pegar nuestra API y pulsar el botón Cargar mapa, solicitaremos el mapa meteorológico del día en la dirección:
https://opendata.aemet.es/opendata/api/mapasygraficos/analisis
• Se quitarán los controles de formulario y se mostrará (en horizontal) el mapa.
• Hay que recordar que debemos enviar vía GET un parámetro llamado apikey, con nuestra clave (la cual se obtiene del formulario).
• Los datos que llegan, nos ofrecen un objeto JSON donde la propiedad llamada datos, es una URL a la imagen del mapa. 
La petición http nos proporciona ese enlace, pero no el mapa en sí.
• Por ello, hay una segunda petición (a esa URL devuelta por la propiedad datos) que es la que nos proporciona el mapa.
NOTA: En este caso hay que hacer uso de fetch en una función async ya que es un buen ejemplo para usar la API Fetch de este modo 
porque hay dos peticiones http encadenadas: una para el enlace al mapa (en formato JSON) y otra para obtener el mapa en sí 
(formato binario). La primera petición obtiene los datos en JSON, se convierten usando el método json(). 
La segunda petición usa el método blob().
Con URL.createObjectURL(param), podemos crear una URL de un objeto Blob o Fichero que podemos asignar al atributo src de un elemento <img>. 
Finalmente, es importante revocar la URL creada con URL.revokeObjectURL cuando ya no la necesites para liberar recursos.*/

async function cargarMapa(){
    let key = document.getElementsByTagName("textarea")[0].value;
    let body = document.getElementById("body");

    let respuesta = await fetch('https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?api_key='+key,{api_key: key})
    let objeto = await respuesta.json();
    let respuesta2 = await fetch(objeto.datos);
    let mapa = await respuesta2.blob();
    body.innerHTML=("<img src=\""+URL.createObjectURL(mapa)+"\"/>");
    URL.revokeObjectURL;
}