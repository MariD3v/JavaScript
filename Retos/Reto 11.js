/*Cifrado  estilo  César:  consiste  en  tomar  cada  letra  de  un  mensaje  y  desplazarla  en  el  alfabeto el número que diga una clave. 
Por ejemplo, la letra A desplazada con clave 2, se convertirá en C. Crea una página que pida al usuario un texto y una clave y escriba 
el  mismo  texto  pero  desplazando  los  caracteres  en  la  tabla  Unicode  el  número  que indique la clave.  */

let mensaje = prompt("Escribe un mensaje");
mensaje = mensaje.toUpperCase();
let clave = Number(prompt("Escribe una clave"));

let diccionario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

let mensajeTraducido = "";
for (let i=0; i<mensaje.length;i++){
    let letra = mensaje.charAt(i);
    if (diccionario.indexOf(letra)+clave > 26){
        mensajeTraducido += diccionario.charAt(((diccionario.indexOf(letra)+clave)%26)-1);
    } else {
        mensajeTraducido += diccionario.charAt(diccionario.indexOf(letra)+clave);
    }
}

document.write(mensajeTraducido);