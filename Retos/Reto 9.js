/*
Un  numero  triangular  es  aquel  que  se  obtiene  mediante  la  suma  de  una  sucesión  de 
números empezando desde el 1.  Por ejemplo 6 es triangular ya que 6=1+2+3 Otro ejemplo 21 es triangular ya que 21=1+2+3+4+5+6  
Dado un número almacenado en una variable, indicar por pantalla si es triangular o no, en caso 
de no ser triangular mostrar el número triangular menor que este almacenado en la variable y 
el  numero  triangular  mayor  que  el  almacenado  en  la  variable.  Ejemplo:  Si  en  la  variable  está 
almacenado el número 20 -> mostrará NO ES TRIANGULAR, menor: 15, mayor: 21
 */

let numero = prompt("Introduce un número entero positivo");

let contador=0;
let menor=0;
for(let i=1; contador<numero;i++){
    menor=contador;
    contador+=i;
}

if(contador==numero){
    document.write("Es triangular");
} else {
    document.write("NO ES TRIANGULAR, menor: " + menor + ", mayor: " + contador);
}
