/*Genera  un  array  con  20  números  aleatorios  del  1  al  50.  Recorre  el  array  mostrando tantos asteriscos como se indique en el número de cada elemento. 
Ejemplo de resultado (con 9 elementos) con el array:
(2,3,1,4,5,2,3,9,10)
**
***
*
****
*****
**
***
*********
**********
*/

let myNumberRamdonList = [];

for (let i=0; i<20; i++){
    myNumberRamdonList[i] = Math.floor(Math.random() * 50) + 1;
}

document.write("My ramdon list: "+ myNumberRamdonList + "<br>");

for (const value of myNumberRamdonList){
    for(let x=1; x<=value;x++){
        document.write("*");
    }
    document.write("<br>");
}