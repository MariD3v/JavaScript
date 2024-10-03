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
document.write("Texto sin repeticiones: ")
let textSet = new Set(texto);
for (const chracter of textSet){ 
    document.write(chracter);
}
document.write("<br>");
texto = texto.toUpperCase();
let chracterMap = new Map();

for (let i=0; i< texto.length; i++){
    chracterMap.set(texto.charAt(i),0);
}

for (let i=0; i< texto.length; i++){
    chracterMap.set(texto.charAt(i), (chracterMap.get(texto.charAt(i))+1));
}

for (let[clave,valor] of chracterMap){ 
    document.write(clave + ": " + valor + "<br>");
}




