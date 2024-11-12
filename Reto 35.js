/*
Haz un programa que implemente un juego de encontrar un número aleatorio bajo las premisas que se explican a continuación: 
• La página calculará un número del 1 al 100. 
• Luego preguntará al usuario por el número. 
• Si el usuario escribe algo que no es un número, se indica el error y se vuelve a pedir el número. 
• Si el número escrito por el usuario es correcto, se indica que se acertó y finalizaremos el juego. 
Si no es correcto, le pregunta si el número es menor o mayor y vuelve a preguntar cuál es. 
• Si se cancela cualquier cuadro, el juego termina indicando que se canceló el juego. 
• Al final, si se ha finalizado correctamente el juego se indica el número de intentos. 
• Se permite volver a jugar al usuario mediante un cuadro de confirmación. 
*/

jugarOtraVez = true;
input = -1;
while (jugarOtraVez && input != null){
    let numeroRamdon = Math.floor(Math.random() * 100) + 1;
    input = prompt("Introduce un número entre el 1 y el 100");
    contador = 1;

    while (input != numeroRamdon && input != null){
        while (isNaN(input) && input != null){
            input = prompt("Debes introducir un numero");
            contador +=1;
        }
        if (input != null){
            if (input > numeroRamdon){
                input = prompt("El numero es menor");
            } else if (input < numeroRamdon){
                input = prompt("El numero es mayor");
            }   
        }
        contador +=1;
    }
    if (input == null){
        document.write ("Juego cancelado");
    } else {
        jugarOtraVez = confirm("HAS ACERTADO! Nº de intentos: " + contador + " ¿Quieres volver a jugar?");
    }
}

if (input != null){
    document.write ("Juego terminado");
}