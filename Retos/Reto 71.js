/*Jugar a los dados, de 3 maneras distintas */

function lanzarDado(jugador) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = Math.floor(Math.random() * 6) + 1;
      resolve({ jugador, resultado });
    }, 1000);
  });
}

// VERSION CON PROMESAS ANIDADAS
function jugar() {
  console.log("Los Jugadores pueden lanzar los dados...");

  lanzarDado("Jugador 1")
    .then(resultado1 => {
      console.log(`${resultado1.jugador} sale ${resultado1.resultado}`);

      lanzarDado("Jugador 2")
        .then(resultado2 => {
          console.log(`${resultado2.jugador} sale ${resultado2.resultado}`);

          if (resultado1.resultado < resultado2.resultado) {
            console.log(`${resultado1.jugador} vencedor!`);
          } else if (resultado1.resultado > resultado2.resultado) {
            console.log(`${resultado2.jugador} vencedor!`);
          } else {
            console.log("¡Han empatado!");
          }
        })
        .catch(error => {
          console.error("Error en el lanzamiento del dado del Jugador 2:", error);
        });
    })
    .catch(error => {
      console.error("Error en el lanzamiento del dado del Jugador 1:", error);
    });
}


// VERSION CON Promise.all()
function jugar() {
  console.log("Los Jugadores pueden lanzar los dados...");

  const jugador1 = lanzarDado("Jugador 1");
  const jugador2 = lanzarDado("Jugador 2");

  Promise.all([jugador1, jugador2])

    .then(resultados => {
      const [resultado1, resultado2] = resultados;
      console.log(`${resultado1.jugador} sale ${resultado1.resultado}`);
      console.log(`${resultado2.jugador} sale ${resultado2.resultado}`);

      if (resultado1.resultado < resultado2.resultado) {
        console.log(`${resultado1.jugador} vencedor!`);
      } else if (resultado1.resultado > resultado2.resultado) {
        console.log(`${resultado2.jugador} vencedor!`);
      } else {
        console.log("¡Han empatado!");
      }
    })
    .catch(error => {
      console.error("Error en el lanzamiento de los dados:", error);
    });
}
// VERSION CON FUNCION ASYNC   
  async function jugar() {
    try{
    console.log("Los Jugadores pueden lanzar los dados...");
    let resultado1 = await lanzarDado("Jugador 1");
    console.log(`${resultado1.jugador} sale ${resultado1.resultado}`);
    let resultado2 = await lanzarDado("Jugador 2");
    console.log(`${resultado2.jugador} sale ${resultado2.resultado}`);
    
    if (resultado1.resultado < resultado2.resultado) {
        console.log(`${resultado1.jugador} vencedor!`);
      } else if (resultado1.resultado > resultado2.resultado) {
        console.log(`${resultado2.jugador} vencedor!`);
      } else {
        console.log("¡Han empatado!");
      }
    }catch(error){
        console.error("Error en el lanzamiento del dado", error);

    }
}

// Ejecutar el juego
jugar();
