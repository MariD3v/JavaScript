/*Tenemos una web donde aparecen las 6 primeras películas de la saga Star Wars https://swapi.dev/api/films/
Debemos mostrar por pantalla (como mejor creáis oportuno), los siguientes campos del array con los datos de películas que devuelve esta página:
episode_id --> id del episodio
title --> titulo de la película (son en English ….)
director --> eso mismo …
release_date --> fecha de rodaje de la misma */

function obtenerDatos(){
    fetch('https://swapi.dev/api/films/')
    .then(res => res.json()) 
    .then(json => {
        for(let pelicula of json.results){
            document.write("Episodio: "+pelicula.episode_id+", Titulo: "+pelicula.title+", Director: "+pelicula.director+", Fecha: "+pelicula.release_date+"<br>");
        }
    })  
    .catch(error => console.log(error));
} 

obtenerDatos();