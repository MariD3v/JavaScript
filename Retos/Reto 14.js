/*Un  palíndromo  es  una  frase  que  se  lee  igual  de  izquierda  a  derecha  que derecha a izquierda: Ejemplo :"amor a roma".
Hacer un programa que nos diga si la frase introducida es palíndromo o no.*/

let frase = String(prompt("Introduce la frase"));
let fraseAlReves = "";

for (let i= frase.length-1; i>=0; i--){
    fraseAlReves += frase.charAt(i);
};

if (frase == fraseAlReves){
    document.write("Es un palíndromo");
} else {
    document.write("No es un palíndromo");
}