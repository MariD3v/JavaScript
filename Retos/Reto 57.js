/*
Crear una función obtenerNoticias:
- Esta función debe devolver una promesa que se resuelve después de 2 segundos con un array de objetos que representan noticias.
Cada objeto debe tener un título y un contenido.

Crear una función mostrarNoticias:
- Esta función debe ser async y debe llamar a obtenerNoticias usando await.
- Cuando la promesa se resuelva, debe mostrar las noticias en la consola.

Manejar errores:
- Modifica la función obtenerNoticias para que tenga un 50% de probabilidad de rechazar la promesa con un mensaje de error.
- Asegúrate de manejar el error en la función mostrarNoticias y mostrar un mensaje de error en la consola. 
*/

class Noticia{
    constructor(titulo,contenido){
        this.titulo = titulo;
        this.contenido = contenido;
    }
}

function obtenerNoticias(array){
    var random = Math.random();
    console.log(random);
    var promesa = new Promise((resolver, rechazar)=>{
        setTimeout(()=>{
            if (random >= 0.5){
                var noticias = ""
                for(const value of array){
                    noticias += "Titulo:"+value.titulo+" Contenido:"+value.contenido;
                }
                resolver(noticias);
            } 
            rechazar("Error al obtener las noticias"); 
        },2000);

            
    });
    return promesa;
}

async function mostrarNoticias(array){
    try{
        var noticias = await obtenerNoticias(array);
        console.log(noticias);
    } catch(error){
        console.log(error);
    }
}

let noticia1 = new Noticia("Mari muere", "Mari muere de amor por los perritos");
let noticia2 = new Noticia("Mari tiene hambre", "Mari se muere de hambre por comerse un perrito");
let arrayNoticias = [noticia1,noticia2];

mostrarNoticias(arrayNoticias);
