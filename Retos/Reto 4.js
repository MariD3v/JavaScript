/*
Realiza un programa que pida un número entero positivo al usuario y calcule su factorial. 
Por ejemplo el factorial de 5 (se suele denotar como 5!) es el resultado de multiplicar: 1-2-3-4-5, es decir: 120
*/

let numero = prompt("Introduce un número entero positivo");

let contador = 1;
for (numero;numero>0;numero--){
    contador *= numero;
}

document.write(contador)