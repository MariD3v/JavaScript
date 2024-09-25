/*
Escribir un programa que, pida un número y muestre: - su valor absoluto.  Nota: para los números positivos su valor absoluto es igual al número (el 
valor absoluto de 52 es 52), mientras que, para los negativos, su valor absoluto es el número 
multiplicado por -1 (el valor absoluto de -52 es 52). - Diga si es PAR o IMPAR. Pista: Un numero par es aquel en el que el resto de la división de 
ese número entre 2 es 0.
*/

let numero = prompt("Introduce un número entero");

if (numero<0){
    numero*=-1;
}

document.write("Factorial:" + numero + "<br>");

if (numero%2==0){
    document.write("El número es PAR")
} else {
    document.write("El número es IMPAR")
}