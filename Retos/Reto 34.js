/*
Implementa un programa que se introduzca un texto por pantalla y a la salida nos indique las palabras  
que contiene y para cada palabra nos cuente la cantidad de vocales y la cantidad de consonantes. Si el 
número de vocales es igual al de consonantes aparecerá PAR. A  la salida aparecerán las palabras 
ordenadas por la longitud de la palabra  de menor a mayor.  Las palabras irán siempre con un espacio 
en blanco entre cada palabra. 

Ejemplo: 
Texto: IES Francisco de Goya Molina de Segura 
Salida: El texto introducido contiene  7 palabras  
de: 1 v, 1c   PAR  
de: 1 v, 1c   PAR  
IES: 2v, 1c   
Goya: 2v, 2c  PAR  
Molina: 3v, 3c  PAR  
Segura: 3v, 3c  PAR   
Francisco: 3v, 6c  
*/

let texto = prompt("Introduce un texto");
texto = texto.toLowerCase();
let textoArray = texto.split(" ");
textoArray = textoArray.sort((a,b) => (a.length-b.length));

document.write("El texto introducido contiene " + textoArray.length + " palabras.<br>")
let vocalArray = ["a","e","i","o","u"];
let consoArray = ["b","c","d","f","g","h","j","k","l","m","n","ñ","p","q","r","s","t","v","w","x","y","z"];
for (let i=0; i<textoArray.length;i++){ 
    document.write(textoArray[i] + ": ");
    let contadorVocales = 0;
    let contadorConso = 0;
    for (let j=0; j<textoArray[i].length;j++){
        if (vocalArray.includes(textoArray[i][j])){
            contadorVocales +=1;
        } else if (consoArray.includes(textoArray[i][j])){
            contadorConso +=1;
        }
    }
    document.write(contadorVocales + " vocales, "+contadorConso+" consonantes ");
    if (contadorConso == contadorVocales){
        document.write("PAR");
    }
    document.write("<br>")
}