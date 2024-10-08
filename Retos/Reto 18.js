/*
Escribe un programa en JavaScript que pida un texto por teclado y cuente el número
de veces que aparecen las vocales en el texto. Al terminar mostrará por pantalla una
tabla con el número de veces que aparece cada vocal y mostrará el texto sin letras
repetidas, ya sean vocales o consonantes
Ejemplo: texto leído: “En un lugar de la Mancha”. La función mostrará por pantalla:
Vocales Nº Repeticiones
   A         4
   E         2
   I         0
   O         0
   U         2
Texto sin repeticiones: EnulgardeMch
*/

let texto = prompt("Introduce un texto");
texto = texto.toUpperCase();
texto = texto.replace(/ /g, ''); 

document.write("Texto sin repeticiones: ")
let textSet = new Set(texto);
for (const chracter of textSet){ 
    document.write(chracter);
}
document.write("<br>");

let chracterMap = new Map([["A", 0],["E", 0],["I", 0],["O", 0],["U", 0]]);

for (let i=0; i< texto.length; i++){
    if(chracterMap.has(texto[i])){
        chracterMap.set(texto[i],(chracterMap.get(texto[i])+1));
    }
}

for (let[clave,valor] of chracterMap){ 
    document.write("<tr><td>"+clave + "</td><td> " + valor + "</td></tr>");
}




