/*
Crear una función obtenerClima:
- Esta función debe aceptar un parámetro ciudad.
- La función debe devolver una promesa que se resuelve después de 2 segundos con un objeto que contiene la temperatura y 
la condición meteorológica de la ciudad.

Crear una función mostrarClima:
- Esta función debe aceptar un parámetro ciudad.
- Debe llamar a la función obtenerClima y, cuando la promesa se resuelva, mostrar la información del clima en la consola.

Manejar errores:
-  Modifica la función obtenerClima para que tenga un 50% de probabilidad de rechazar la promesa con un mensaje de error.
- Asegúrate de manejar el error en la función mostrarClima y mostrar un mensaje de error en la consola. 
*/
function obtenerClima(ciudad) {
    const random = Math.random();
    console.log(random);

    return new Promise((resolver, rechazar) => {
        setTimeout(() => {
            if (random >= 0.5) {
                fetch("https://wttr.in/"+ciudad+"?format=j1").then((res) => res.json())
                    .then((respuesta) => {
                        const objeto = {
                            condicion: respuesta.current_condition[0].lang_es[0].value,
                            temp: respuesta.current_condition[0].FeelsLikeC,
                        };
                        resolver(objeto);
                    })
                    .catch(() => {
                        rechazar("Error al obtener los datos de la API");
                    });
            } else {
                rechazar("Error al obtener los datos de la API");
            }
        }, 2000);
    });
}

function mostrarClima(ciudad) {
    obtenerClima(ciudad)
        .then((clima) => {
            console.log("Clima en "+ciudad+":");
            console.log("Temperatura: "+clima.temp+"°C");
            console.log("Condición: "+clima.condicion);
        })
        .catch((error) => {
            console.error("Error: "+error);
        });
}

mostrarClima("Murcia");
mostrarClima("Madrid");
