/*Giphy es una base de datos en línea y un motor de búsqueda que permite a los usuarios buscar y compartir archivos GIF animados.
Entre otras cosas incluye una API para poder trabajar con ella desde nuestras webs y proyectos
Para poder trabajar con esta API necesitamos estar registrados y tener una key válida: fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB
Esta api_key debe introducirse como un objeto json en el campo data cuando se haga la petición Ajax al servicio.
1- En la URL de esta API se encuentran los Gifs animados que son tendencia en la actualidad
(trending), la dirección de esta API es (se accede por GET):https://api.giphy.com/v1/gifs/trending
Muestra cada uno de estos Gifs en una casilla <div>, hay que tener en cuenta que el valor que hay que representar como imagen (<img>)
debe ser este: images.fixed_height.url

2- Modifica para usar la url https://api.giphy.com/v1/gifs/search
En este caso: necesita recibir por GET dos parámetros obligatoriamente, que irán dentro del campo data de la petición Ajax:
• api_key -> fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB
• q -> Valor de tipo texto que incluirá el tema a buscar.
Introduce en un campo un texto sobre un tema a buscar y un boton y obtén los gif sobre ese tema*/

function obtenerTrending(){
    let div = document.getElementById("divTrending");
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB")
    .then(res => res.json())
    .then(json => {
        for(let element of json.data){
            div.innerHTML+= ("<div><img src=\""+element.images.fixed_height.url+"\"/></div>");
        }
    })
}

obtenerTrending();

function obtenerBuscado(){
    let div = document.getElementById("divBuscado");
    div.innerHTML = "";
    let input = document.getElementById("valor").value;
    fetch("https://api.giphy.com/v1/gifs/search?api_key=fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB&q="+input)
    .then(res => res.json())
    .then(json => {
        for(let element of json.data){
            div.innerHTML+= ("<div><img src=\""+element.images.fixed_height.url+"\"/></div>");
        }
    })
}
