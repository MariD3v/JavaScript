/*
Haz un programa que permita el cifrado de un texto haciendo uso de una clave que deberá contener  cualquier secuencia de 5 números.
Tanto el mensaje como la clave numérica la introduce el usuario mediante un prompt. 
El mensaje cifrado se obtendrá de forma cíclica como se muestra en el ejemplo: 

Mensaje: Este es el mensaje 
Clave: 12345 
Mensaje cifrado: Fuwi%fu#iq!ohrxblh 
• El mensaje cifrado se forma de esa manera: 
- E + 1 = F 
- s + 2 = u 
- t + 3 = w 
- e + 4 = i 
- (espacio en blanco) + 5 = % 
- e + 1 = f 
- s + 2 = u 
Etc...
*/

let mensaje = prompt("Introduce un texto");
let clave = "";
while(clave.length != 5){
    clave = prompt("Introduce la clave de 5 números");
}
document.write("Mensaje: " + mensaje + " Clave:" + clave);

clave = clave.split("");
let claveArray = [];
for (let index in clave){ 
    claveArray.push(Number(clave[index])); 
}

let arrayCharCode = [];
for (let i=0;i<mensaje.length;i++){ 
    let charcode = mensaje.charCodeAt(i);
    arrayCharCode.push(charcode);
}

let calculadoArray = [];
for(let j=0;j<arrayCharCode.length;j++){
    let resto = j%5;
    calculadoArray.push(String.fromCharCode(arrayCharCode[j]+claveArray[resto]));
}

let mensajeCifrado = calculadoArray.join("");
document.write(" Mensaje cifrado: " + mensajeCifrado);
