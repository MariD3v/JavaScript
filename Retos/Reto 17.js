/*
Realizar un programa que nos pide un número que corresponde a la altura de una persona. 
Pedirá alturas hasta que la altura introducida sea 0. Una vez leídas todas las alturas y almacenadas, 
debe mostrar por pantalla los siguientes resultados:
a. Altura media de las alturas leídas.
b. Las personas junto con su altura de aquellas que tienen una altura superior a la media y número de personas obtenidas.
c. Lo mismo que el apartado anterior pero con las personas cuya altura es inferior a la media
*/

let altura;
let cantidadAlturas = 0;
let sumaAlturas = 0;

let personasMap = new Map();
let alturasMap = new Map();

for(let i=1; altura != 0; i++){
    altura = Number(prompt("Introduce tu altura en metros"));
    if (altura !=0){
        cantidadAlturas +=1;
        sumaAlturas += altura;
        personasMap.set(i,altura);
        alturasMap.set(altura,0);
        alturasMap.set(altura,(alturasMap.get(altura)+1));
    }
}

document.write("A) La media de alturas es: "+sumaAlturas/cantidadAlturas+"<br><br>");

document.write("B) Personas superiores a la media y su altura:<br>");
var numeroPersonasMayor = 0;
for (let[persona,valor] of personasMap){ 
    if(valor > (sumaAlturas/cantidadAlturas)){
        numeroPersonasMayor+=1;
        document.write("Persona " + persona + ": " + valor +" m<br>");
    }
}
document.write("Hay " +  numeroPersonasMayor + " personas por encima de la media.<br><br>");

document.write("C) Personas por debajo de la media y su altura:<br>");
var numeroPersonasMenor = 0;
for (let[persona,valor] of personasMap){ 
    if(valor < (sumaAlturas/cantidadAlturas)){
        numeroPersonasMenor+=1;
        document.write("Persona " + persona + ": " + valor +" m<br>");
    }
}
document.write("Hay " +  numeroPersonasMenor + " personas por debajo de la media.<br>");
