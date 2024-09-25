/*
Hacer  un  programa  que  vaya  pidiendo  números  por  teclado  hasta  recibir  un  número 
negativo.  Una  vez  recibido  este  número  negativo,  mostrar  por  pantalla  la  media  de  los 
números anteriores (sin incluir el negativo) Ejemplo: 3, 5 , -2  La media es: 4
 */

let contadorsumado = 0;
let contador = 0;

let numero = 0;
while(numero>=0){
    numero = prompt("Introduce un número"); 
    if(numero>=0){
        contador++;
        contadorsumado += Number(numero);
    }
}

document.write("Media: " + contadorsumado/contador);