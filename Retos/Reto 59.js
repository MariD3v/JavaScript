/*Ahora vamos a cambiar a otra parte del sitio web, ahora vamos a trabajar con https://swapi.dev/api/films/numero
Donde numero corresponde con el episode_id al que hemos hecho referencia en prácticas anteriores.
Tendremos un campo de tipo number y un botón mostrar, en el campo de tipo number pondremos el episode_id que será concatenado a 
https://swapi.dev/api/films/ para formar la web completa.
Por ejemplo: input --> 3 --> la web resultante será: https://swapi.dev/api/films/3
Mostrar (como consideréis oportuno) lo siguientes datos de la película:
- title --> titulo de la película
- characters --> es un array con todos los personajes que aparecen en la película
- epidose_id --> es el id del episodio */

async function obtenerDatos(){
    await fetch('https://swapi.dev/api/films/'+document.getElementById("numero").value)
    .then(res => res.json()) 
    .then(pelicula => {
            document.write("Episodio: "+pelicula.episode_id+", Titulo: "+pelicula.title+", Director: "+pelicula.director+", Fecha: "+pelicula.release_date+"<br>Personajes:<br>");
            for (let i = 1; i <= pelicula.characters.length; i++) {
                fetch(pelicula.characters[i])
                .then(res => res.json()) 
                .then(personaje => {
                    document.write("Personaje "+(i)+": "+personaje.name+"<br>");
                }) 
            } 
    })  
    .catch(error => console.log(error));
} 