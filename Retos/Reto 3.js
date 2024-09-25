/*
Realiza un programa que pida al usuario un número entero positivo.
• Si lo que el usuario escribe no es un número o no es positivo no mostrará nada.
• La aplicación escribirá un triángulo con tantos asteriscos como indique el número del usuario o usuaria.
Ejemplo: si el usuario pide 5

*
**
***
****
*****

*/

let numero = prompt("Introduce un número entero positivo");

for(let i=1;i<=numero;i++){
    for(let x=1; x<=i;x++){
        document.write("*");
    }
    document.write("<br>");
}