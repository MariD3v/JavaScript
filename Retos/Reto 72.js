/* Jugar a los dados, de 3 maneras distintas */

const MAX_DICE_VALUE = 6;

function lanzarDado(jugador) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = Math.floor(Math.random() * MAX_DICE_VALUE) + 1;
      resolve({ jugador, resultado });
    }, 1000);
  });
}

// Jugar con Promesas Anidadas
function jugarConPromesasAnidadas() {
  console.log("Los Jugadores pueden lanzar los dados...");

  lanzarDado("Jugador 1")
    .then(resultado1 => {
      console.log(`${resultado1.jugador} sale ${resultado1.resultado}`);
      return lanzarDado("Jugador 2")
        .then(resultado2 => {
          console.log(`${resultado2.jugador} sale ${resultado2.resultado}`);
          determinarVencedor(resultado1, resultado2);
        });
    })
    .catch(error => console.error("Error en el lanzamiento del dado:", error));
}

// Jugar con Promise.all()
function jugarConPromiseAll() {
  console.log("Los Jugadores pueden lanzar los dados...");

  Promise.all([lanzarDado("Jugador 1"), lanzarDado("Jugador 2")])
    .then(([resultado1, resultado2]) => {
      console.log(`${resultado1.jugador} sale ${resultado1.resultado}`);
      console.log(`${resultado2.jugador} sale ${resultado2.resultado}`);
      determinarVencedor(resultado1, resultado2);
    })
    .catch(error => console.error("Error en el lanzamiento de los dados:", error));
}

// Jugar con async/await
async function jugarConAsyncAwait() {
  try {
    console.log("Los Jugadores pueden lanzar los dados...");
    const resultado1 = await lanzarDado("Jugador 1");
    console.log(`${resultado1.jugador} sale ${resultado1.resultado}`);
    const resultado2 = await lanzarDado("Jugador 2");
    console.log(`${resultado2.jugador} sale ${resultado2.resultado}`);
    determinarVencedor(resultado1, resultado2);
  } catch (error) {
    console.error("Error en el lanzamiento del dado:", error);
  }
}

// Determinar el vencedor
function determinarVencedor(resultado1, resultado2) {
  if (resultado1.resultado < resultado2.resultado) {
    console.log(`${resultado2.jugador} vencedor!`);
  } else if (resultado1.resultado > resultado2.resultado) {
    console.log(`${resultado1.jugador} vencedor!`);
  } else {
    console.log("¡Han empatado!");
  }
}

// Ejecutar el juego con una de las versiones
jugarConAsyncAwait();
