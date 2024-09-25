/*
Hacer  un  programa  que  muestre  por  pantalla  los  20  primeros  términos  de  la  sucesión  de 
Fibonacci  NOTA:  La  sucesión  de  Fibonacci  se  caracteriza  por:  Primer  elemento:  0,  Segundo 
elemento: 1 Resto: se obtienen sumando los dos términos anteriores. 
 */

let anterior=0;
let siguiente = 1;
let resultado=0;

for (let i=0; i <20; i++){
    document.write(anterior + "<br>");
    resultado = siguiente+anterior;
    anterior = siguiente;
    siguiente = resultado;
}