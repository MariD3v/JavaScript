/*
 El  documento  nacional  de  identidad  DNI  en  España  consta  de  un  numero  de  8  cifras  y  de 
una  letra.  La  letra  del  DNI  se  obtiene  a  partir  de  los  números  como  describen  los  pasos 
siguientes: 
- Calcular el resto de dividir el número de DNI entre 23 -  El  numero  obtenido  esta  entre  0  y  22.  
Seleccionar  una  letra  asociada  a  dicho  numero  en  la siguiente tabla: 
0T, 1R, 2W, 3A, 4G, 5M, 6Y, 7F, 8P, 9D, 10X, 11B,  12N, 13J, 14Z, 15S, 16Q, 
17V, 18H, 19L, 20C, 21K, 22E  
Dado  un  DNI  guardado  en  una  variable  dni,  obtener  la  letra  y  mostrar  por  pantalla  el  DNI completo DNI-LETRA.
 */

let DNI = Number(prompt("Introduce tu DNI sin letra"));

let letras = "TRWAGMYFPDXBNJZSQVHLCKE";

let resto= DNI%23;

document.write(DNI+(letras.charAt(resto)));